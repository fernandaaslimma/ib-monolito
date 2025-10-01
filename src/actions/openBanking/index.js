import * as openBankingAPI from "../../services/openBanking";

export default () => ({
  setOpenBankingInfo: (_, openBankingReceivedInfo, url) => {
    const { intent_id, redirect_uri, scope } = openBankingReceivedInfo;
    const hasSufficientParamsOpenBank = Object.values({
      intent_id,
      redirect_uri,
      scope
    }).every(item => item !== false);

    localStorage.setItem(
      "openBankingReceivedInfo",
      JSON.stringify(openBankingReceivedInfo)
    );

    localStorage.setItem("isConsentFlow", hasSufficientParamsOpenBank);
    localStorage.setItem("urlOpenBank", url);

    return {
      isConsentFlow: hasSufficientParamsOpenBank,
      openBankingReceivedInfo: openBankingReceivedInfo,
      intent_id: openBankingReceivedInfo.intent_id,
      url
    };
  },

  setOpenBankingInfoConfirmation: (
    _,
    openBankingReceivedInfoConfirmation,
    urlConfirmation
  ) => {
    const { code, state, error } = openBankingReceivedInfoConfirmation;
    const hasSufficientParamsOpenBank = Object.values({
      code,
      state
    }).every(item => item !== false);

    const hasSufficientParamsOpenBankCancel = Object.values({
      state,
      error
    }).every(item => item !== false);

    localStorage.setItem(
      "openBankingReceivedInfoConfirmation",
      JSON.stringify(openBankingReceivedInfoConfirmation)
    );

    localStorage.setItem(
      "isConsentFlowConfirmation",
      hasSufficientParamsOpenBank
    );
    localStorage.setItem(
      "isConsentFlowCancel",
      hasSufficientParamsOpenBankCancel
    );
    localStorage.setItem("urlOpenBankConfirmation", urlConfirmation.hash);

    return {
      isConsentFlowConfirmation: hasSufficientParamsOpenBank,
      isConsentFlowCancel: hasSufficientParamsOpenBankCancel,
      openBankingReceivedInfoConfirmation: openBankingReceivedInfoConfirmation,
      urlConfirmation: urlConfirmation.hash
    };
  },

  shareResourcesPatch: async (_, shareIdAspsp, body) => {
    try {
      await openBankingAPI.shareResourcesPatch(shareIdAspsp, body);
    } catch (error) {
      return { error };
    }
  },

  shareResourcesPatchTpp: async (_, shareIdTpp, body) => {
    try {
      const rawResponse = await openBankingAPI.shareResourcesPatchTpp(
        shareIdTpp,
        body
      );
      const shareResponseJsonPatch = await rawResponse.json();
      return { shareResponseJsonPatch };
    } catch (error) {
      return { error };
    }
  },

  rejectConsentTransmitted: async (_, shareIdAspsp) => {
    try {
      await openBankingAPI.rejectConsentTransmitted(shareIdAspsp);
    } catch (error) {
      return { error };
    }
  },

  rejectConsentReceived: async (_, shareIdTpp) => {
    try {
      await openBankingAPI.rejectConsentReceived(shareIdTpp);
    } catch (error) {
      return { error };
    }
  },

  aproveConsent: async (_, shareIdAspsp) => {
    try {
      const approveConsent = await openBankingAPI.shareConfirm(shareIdAspsp);
      const approveConsentResponse = await approveConsent.json();
      return { approveConsentResponse };
    } catch (error) {
      return { error };
    }
  },

  confirmConsent: async (_, body) => {
    try {
      const confirmConsent = await openBankingAPI.consentConfirm(body);
      const confirmConsentResponse = await confirmConsent.json();
      return { confirmConsentResponse };
    } catch (error) {
      return { error };
    }
  },

  cancelConsent: async (_, shareIdAspsp) => {
    try {
      const cancelConsent = await openBankingAPI.shareDecline(shareIdAspsp);
      const cancelConsentResponse = await cancelConsent.json();
      return { cancelConsentResponse };
    } catch (error) {
      return { error };
    }
  },

  getOpenBankingInfo: () => {
    return {
      isConsentFlow: localStorage.getItem("isConsentFlow"),
      openBankingReceivedInfo: JSON.parse(
        localStorage.getItem("openBankingReceivedInfo")
      ),
      url: localStorage.getItem("urlOpenBank")
    };
  },

  setIsApproveConsent: (_, boolean, booleanTo) => {
    localStorage.setItem("isConsentFlow", boolean);
    return {
      isConsentFlow: boolean,
      sharesList: booleanTo ? booleanTo : false
    };
  },

  getConsentInfo: async (_, intentId) => {
    try {
      const consentInfoResponse = await openBankingAPI.getConsentInfo(intentId);
      if (
        consentInfoResponse.error &&
        consentInfoResponse.error.status === 403
      ) {
        return { consentInfoError: 403 };
      } else {
        const consentInfo = await consentInfoResponse.json();
        return { consentInfo };
      }
    } catch (error) {
      return { error };
    }
  },

  getSpecificOrganization: async (_, organizationId) => {
    try {
      const specificOrganizationResponse = await openBankingAPI.getSpecificOrganization(
        organizationId
      );
      const specificOrganization = await specificOrganizationResponse.json();
      return { specificOrganization };
    } catch (error) {
      return { error };
    }
  },

  getTransmittedCurrentShares: async () => {
    try {
      const rawTrnasmittedShares = await openBankingAPI.getTransmittedCurrentShares();
      const transmittedCurrentShares = await rawTrnasmittedShares.json();
      return { transmittedCurrentShares };
    } catch (error) {
      return { error };
    }
  },

  getReceivedCurrentShares: async () => {
    try {
      const rawCurrentShares = await openBankingAPI.getReceivedCurrentShares();
      const receivedCurrentShares = await rawCurrentShares.json();
      return { receivedCurrentShares };
    } catch (error) {
      return { error };
    }
  },

  getReceivedCurrentSharesSpecific: async (_, consentId) => {
    try {
      const rawCurrentShares = await openBankingAPI.getReceivedCurrentSharesSpecific(
        consentId
      );
      const receivedCurrentSharesSpecific = await rawCurrentShares.json();
      return { receivedCurrentSharesSpecific };
    } catch (error) {
      return { error };
    }
  },

  setConsentId: (state, intent_id) => {
    return {
      openBankingReceivedInfo: {
        ...state.openBankingReceivedInfo,
        intent_id
      },
      intent_id
    };
  },

  emptyRedirectUri: state => {
    return {
      openBankingReceivedInfo: {
        ...state.openBankingReceivedInfo,
        redirect_uri: ""
      }
    };
  },

  createShare: async (_, body) => {
    try {
      const shareResponse = await openBankingAPI.createShare(body);
      const consentCreated = await shareResponse.json();
      return { consentCreated };
    } catch (error) {
      return { error };
    }
  },

  getInstitutions: async () => {
    try {
      const institutionsResponse = await openBankingAPI.getInstitutions();
      const institutions = await institutionsResponse.json();
      return { institutions };
    } catch (error) {
      return { error };
    }
  },

  getDataPermissions: async () => {
    try {
      const dataPermissionsResponse = await openBankingAPI.getDataPermissions();
      const dataPermissions = await dataPermissionsResponse.json();
      return { dataPermissions };
    } catch (error) {
      return { error };
    }
  },

  updateShareScope: async (_, shareIdAspsp, body) => {
    try {
      const rawResponse = await openBankingAPI.updateShareScope(
        shareIdAspsp,
        body
      );
      if (rawResponse.error) {
        return { updateScopeError: true };
      } else {
        const shareResponseJson = await rawResponse.json();
        return { shareResponseJson };
      }
    } catch (error) {
      return { error };
    }
  }
});
