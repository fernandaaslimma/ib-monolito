import * as SUITABILITY_API from "../../services/suitability";

export default () => ({
  getSuitabilityFormId: async () => {
    try {
      const raw = await SUITABILITY_API.getSuitabilityFormId();
      const suitabilityForm = await raw.json();

      return {
        suitabilityForm
      };
    } catch (error) {
      return { error };
    }
  },

  getSuitabilityFormData: async (_, formId) => {
    try {
      const raw = await SUITABILITY_API.getSuitabilityFormData(formId);
      const suitabilityFormData = await raw.json();

      return {
        suitabilityFormData
      };
    } catch (error) {
      return { error };
    }
  },

  getSuitabilityResult: async (_, formParams) => {
    try {
      const raw = await SUITABILITY_API.getSuitabilityResult(formParams);
      const suitabilityResult = await raw.json();

      return {
        suitabilityFormParams: formParams,
        suitabilityResult
      };
    } catch (error) {
      return { error };
    }
  },

  getSuitabilityInfo: async () => {
    try {
      const raw = await SUITABILITY_API.getSuitabilityInfo();
      const suitabilityInfo = await raw.json();

      return {
        suitabilityInfo
      };
    } catch (error) {
      return { error };
    }
  },

  submitSuitabilityAnswers: async (_, formParams) => {
    try {
      return await SUITABILITY_API.submitSuitabilityAnswers(formParams);
    } catch (error) {
      return { error };
    }
  },

  approveSuitability: async (state, formParams) => {
    try {
      const body = {
        message: {
          payload: state.mfaTokenParams.payload,
          messageAuthenticationCode: state.mfaTokenParams.key
        }
      };
      return await SUITABILITY_API.submitSuitabilityAnswers(
        body,
        formParams.formVersionId
      );
    } catch (error) {
      throw error;
    }
  },

  getInvestorProfile: async () => {
    try {
      const investorProfileRaw = await SUITABILITY_API.getInvestorProfile();
      const investorProfile = await investorProfileRaw.json();

      return { investorProfile: investorProfile.suitabilityProfile };
    } catch (error) {
      return { suitabilityError: error };
    }
  },

  cleanSuitabilityError: () => {
    return { suitabilityError: null };
  }
});
