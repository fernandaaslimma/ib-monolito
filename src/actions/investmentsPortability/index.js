import * as investmentsAPI from "../../services/investmentsPortability";

export default () => ({
  getPortabilities: async () => {
    try {
      const rawResponsePortabilities = await investmentsAPI.getPortabilities();
      const portabilitiesResponse = await rawResponsePortabilities.json();

      return { portabilitiesResponse };
    } catch (error) {
      return { error };
    }
  },

  getInstitutions: async () => {
    try {
      const rawInstitutions = await investmentsAPI.getInstitutions();
      const institutions = await rawInstitutions.json();

      return { institutions };
    } catch (error) {
      return { error };
    }
  },

  getPositions: async (_, investorId) => {
    try {
      const rawPositions = await investmentsAPI.getPositions(investorId);
      const positions = await rawPositions.json();

      return { positions };
    } catch (error) {
      return { error };
    }
  },

  setAssetCategory: (_, value) => {
    return {
      assetCategory: value
    }
  },

  setIsOriginBocom: (_, value) => {
    return {
      isOriginBocom: value
    }
  },

  setSelectedInstitutions: (_, value) => {
    return {
      selectedInstitutions: value
    }
  },

  setCustodianAccounts: (_, value) => {
    return {
      custodianAccounts: value
    }
  },

  cleanCustodianAccounts: () => {
    return {
      custodianAccounts: null
    }
  },

  setCompany: (_, value) => {
    return {
      company: value
    }
  },

  requestPortability: async (_, body) => {
    try {
      const rawRequestPortabilityResponse = await investmentsAPI.requestPortability(body);
      const requestPortabilityResponse = await rawRequestPortabilityResponse.json();

      return { requestPortabilityResponse };
    } catch (error) {
      return { error };
    }
  },
});



