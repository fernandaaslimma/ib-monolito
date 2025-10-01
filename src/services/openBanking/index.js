import fetchHandler from "../../utils/fetchHandler";

export const getConsentInfo = async intentId => {
  try {
    return await fetchHandler(
      `${__API__}/open-banking/journey-aspsp/v1/shares/consents/${intentId}`
    );
  } catch (error) {
    return {
      error
    };
  }
};

export const getSpecificOrganization = async organisationId => {
  try {
    return await fetchHandler(
      `${__API__}/open-banking/ob-clients-api/v1/organisations/${organisationId}/authorisationservers`
    );
  } catch (error) {
    return {
      error
    };
  }
};

export const shareResourcesPatchTpp = (shareIdTpp, body) => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-tpp/v1/shares/${shareIdTpp}`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const shareResourcesPatch = (shareIdAspsp, body) => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-aspsp/v1/shares/${shareIdAspsp}/resources`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const rejectConsentTransmitted = shareIdAspsp => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-aspsp/v1/shares/${shareIdAspsp}`,
      {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const rejectConsentReceived = shareIdTpp => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-tpp/v1/shares/${shareIdTpp}`,
      {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const getTransmittedCurrentShares = () => {
  try {
    return fetchHandler(`${__API__}/open-banking/journey-aspsp/v1/shares`);
  } catch (error) {
    return { error };
  }
};

export const getReceivedCurrentShares = () => {
  try {
    return fetchHandler(`${__API__}/open-banking/journey-tpp/v1/shares`);
  } catch (error) {
    return { error };
  }
};

export const getReceivedCurrentSharesSpecific = consentId => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-tpp/v1/shares/consents/${consentId}`
    );
  } catch (error) {
    return { error };
  }
};

export const shareApprove = (shareIdAspsp, body) => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-aspsp/v1/shares/${shareIdAspsp}/approve`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const shareDecline = shareIdAspsp => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-aspsp/v1/shares/${shareIdAspsp}/declines`,
      {
        method: "PUT"
      }
    );
  } catch (error) {
    return { error };
  }
};

export const shareConfirm = async shareIdAspsp => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-aspsp/v1/shares/${shareIdAspsp}/confirmations`,
      {
        method: "PUT"
      }
    );
  } catch (error) {
    return { error };
  }
};

export const createShare = body => {
  try {
    return fetchHandler(`${__API__}/open-banking/journey-tpp/v1/shares`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  } catch (error) {
    return { error };
  }
};

export const getInstitutions = () => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/ob-clients-api/v1/authorisationservers`
    );
  } catch (error) {
    return {
      error
    };
  }
};

export const updateShareScope = (shareIdTpp, body) => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-tpp/v1/shares/${shareIdTpp}`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const consentConfirm = async body => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-tpp/v1/shares/consents/confirmations`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const getDataPermissions = async () => {
  try {
    return fetchHandler(
      `${__API__}/open-banking/journey-config/v1/data-permissions`
    );
  } catch (error) {
    return { error };
  }
};
