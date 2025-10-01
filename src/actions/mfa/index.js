import * as MFA_API from "../../services/MFA";
import { MSG_AUTH_CODE } from "../../utils/constants";
import { getDigitsFromValue } from "../../utils/currency";

export default () => ({
  handleMFAInputToken: (state, e) => {
    const inputValue = getDigitsFromValue(e.target.value);
    return {
      mfaToken: inputValue,
      mfaTokenValidated:
        state != null && inputValue.length > 0 ? state.mfaTokenValidated : null
    };
  },

  handleMFAInputClean: () => {
    return {
      mfaToken: ""
    };
  },

  changeFactorTogle: (_, state) => {
    return {
      methodChanging: state
    };
  },

  getAuthFactors: async ({ userInfo }) => {
    try {
      const rawAuthFactors = await MFA_API.getAuthFactors(userInfo.email);
      const responseAuthFactors = await rawAuthFactors.json();
      return {
        authFactors: responseAuthFactors
      };
    } catch (error) {
      return { error };
    }
  },

  createAuthCode: async (
    state,
    payload,
    actionType,
    authFactorId,
    saveAccount = false
  ) => {
    try {
      const body = {
        authFactorId,
        actionType,
        saveAccount: saveAccount,
        payload
      };

      const rawAuthFactors = await MFA_API.createAuthCode(body);
      const responseAuthCode = await rawAuthFactors.json();

      return {
        authCodeResponse: responseAuthCode
      };
    } catch (error) {
      return { error };
    }
  },

  createAuthFactor: async ({ userInfo }, payload) => {
    // for test porposes
    if (payload) {
      payload.user = userInfo ? userInfo.email : null;
    }

    try {
      const rawAuthFactor = await MFA_API.createAuthFactor(payload);
      const responseAuthFactor = await rawAuthFactor.json();
      return {
        authFactorResponse: responseAuthFactor
      };
    } catch (error) {
      return { error };
    }
  },

  clearAuthFactorResponse: () => {
    return {
      authFactorResponse: ""
    };
  },

  aproveAuthFactor: async (state, authCodeId, authFactorID) => {
    try {
      // body com authCodeId
      const body = { authCodeId };
      await MFA_API.aproveAuthFactor(authFactorID, body);
      return {
        AprovedAuthFactor: true
      };
    } catch (error) {
      return { error };
    }
  },

  activateAuthFactor: async (_state, token, authFactorID) => {
    try {
      // body com token
      const body = { otp: token };
      await MFA_API.activateAuthFactor(authFactorID, body);
      return {
        activatedAuthFactor: true
      };
    } catch (error) {
      return { error };
    }
  },

  clearMFATokenValidated: () => {
    return {
      mfaTokenValidated: null
    };
  },

  clearMFAToken: () => {
    return {
      mfaToken: ""
    };
  },

  checkMFA: async ({ authCodeResponse, mfaToken }) => {
    const body = {
      otp: mfaToken
    };
    try {
      const response = await MFA_API.checkMFA(authCodeResponse.id, body);
      const key = response.headers.get(MSG_AUTH_CODE);
      const responseAuthCode = await response.json();

      return {
        mfaTokenValidated: response.status === 200,
        mfaTokenParams: {
          payload: responseAuthCode,
          key
        }
      };
    } catch (e) {
      throw {
        mfaTokenValidated: false
      };
    }
  }
});
