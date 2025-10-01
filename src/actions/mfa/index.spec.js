import actions from "./index";

jest.mock("../../services/MFA");

const {
  getAuthFactors: getAuthFactorsAPI,
  createAuthCode: createAuthCodeAPI,
  checkMFA: checkMFAAPI,
  createAuthFactor: createAuthFactorAPI,
  aproveAuthFactor: aproveAuthFactorAPI,
  activateAuthFactor: activateAuthFactorAPI
} = require("../../services/MFA");

const getAuthFactorsAPIResponse = [
  {
    id: "ididididididididid",
    defaultAuth: true,
    authUri: "pj_teste@bancobbm.com.br",
    type: "mail",
    actions: ["authregistration", "passwordreset"],
    activated: true,
    plataformIdentifier: null
  }
];

const validTokenResponse = {
  status: 200,
  json: jest.fn(() => Promise.resolve({ resp: "response json mock" })),
  headers: {
    get: jest.fn(() => "555")
  }
};

const invalidTokenResponse = {
  status: 422,
  json: jest.fn(() => Promise.resolve({ resp: "Invalid TOTP" })),
  headers: {
    get: jest.fn(() => "555")
  }
};

const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("mfa actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "handleMFAInputToken",
      "handleMFAInputClean",
      "changeFactorTogle",
      "getAuthFactors",
      "createAuthCode",
      "createAuthFactor",
      "clearAuthFactorResponse",
      "aproveAuthFactor",
      "activateAuthFactor",
      "clearMFATokenValidated",
      "clearMFAToken",
      "checkMFA"
    ]);
  });

  describe("clearMFAToken", () => {
    it("should set mfaToken to an empty string", async () => {
      const { clearMFAToken } = actions();
      const state = clearMFAToken();
      expect(state).toEqual({ mfaToken: "" });
    });
  });

  describe("clearMFATokenValidated", () => {
    it("should set mfaToken to an empty string", async () => {
      const { clearMFATokenValidated } = actions();
      const state = clearMFATokenValidated();
      expect(state).toEqual({ mfaTokenValidated: null });
    });
  });

  describe("handleMFAInputToken", () => {
    it("should set mfaToken to an empty string", async () => {
      const { handleMFAInputToken } = actions();
      const state = handleMFAInputToken(null, { target: { value: "123" } });

      expect(state).toEqual({ mfaToken: "123", mfaTokenValidated: null });
    });

    it("should set mfaToken to valid", async () => {
      const { handleMFAInputToken } = actions();
      const state = handleMFAInputToken(
        { mfaTokenValidated: true },
        { target: { value: "123" } }
      );

      expect(state).toEqual({ mfaToken: "123", mfaTokenValidated: true });
    });
  });

  describe("getAuthFactors", () => {
    const state = {
      userInfo: {
        email: "teste@bocombbm.com.br"
      }
    };

    it("Should getAuthFactors with success", async () => {
      getAuthFactorsAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getAuthFactorsAPIResponse)
        })
      );

      const { getAuthFactors } = actions();
      const response = await getAuthFactors(state);
      expect(response).toEqual({
        authFactors: getAuthFactorsAPIResponse
      });
    });

    it("Should getAuthFactors with error", async () => {
      getAuthFactorsAPI.mockImplementation(() => Promise.reject(errorMock));

      const { getAuthFactors } = actions();
      const response = await getAuthFactors(state);

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("createAuthCode", () => {
    const state = {
      userInfo: {
        email: "teste@bocombbm.com.br"
      }
    };

    it("Should createAuthCode with success", async () => {
      createAuthCodeAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ valid: true })
        })
      );

      const { createAuthCode } = actions();
      const response = await createAuthCode();
      expect(response).toEqual({
        authCodeResponse: { valid: true }
      });
    });

    it("Should createAuthCode with error", async () => {
      createAuthCodeAPI.mockImplementation(() => Promise.reject(errorMock));

      const { createAuthCode } = actions();
      const response = await createAuthCode(state);

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("checkMFA", () => {
    it("should checkMFA and return a valid response", async () => {
      checkMFAAPI.mockImplementation(() => Promise.resolve(validTokenResponse));

      const { checkMFA } = actions();
      const body = {
        otp: "mock"
      };
      const response = await checkMFA(
        { authCodeResponse: { id: "123" } },
        body
      );

      expect(response).toEqual({
        mfaTokenValidated: true,
        mfaTokenParams: { payload: { resp: "response json mock" }, key: "555" }
      });
    });

    it("should checkMFA and return a invalid response", async () => {
      checkMFAAPI.mockImplementation(() =>
        Promise.resolve(invalidTokenResponse)
      );

      const { checkMFA } = actions();
      const body = {
        otp: "mock"
      };
      const response = await checkMFA(
        { authCodeResponse: { id: "123" } },
        body
      );

      expect(response).toEqual({
        mfaTokenValidated: false,
        mfaTokenParams: { payload: { resp: "Invalid TOTP" }, key: "555" }
      });
    });
  });

  describe("createAuthFactor", () => {
    const state = {
      userInfo: {
        email: "pj_yuriramos@bancobbm.com.br"
      }
    };
    const payload = {
      authFactorType: "totp",
      default: false,
      identityProvider: "ib",
      uri: "totp"
    };

    it("should createAuthFactor with payload", async () => {
      createAuthFactorAPI.mockImplementation(() =>
        Promise.resolve(validTokenResponse)
      );

      const { createAuthFactor } = actions();
      const response = await createAuthFactor(state, payload);

      expect(response).toEqual({
        authFactorResponse: { resp: "response json mock" }
      });
    });

    it("should createAuthFactor without payload", async () => {
      createAuthFactorAPI.mockImplementation(() =>
        Promise.resolve(validTokenResponse)
      );

      const { createAuthFactor } = actions();
      const response = await createAuthFactor(state);

      expect(response).toEqual({
        authFactorResponse: { resp: "response json mock" }
      });
    });

    it("should try to createAuthFactor and return a invalid response", async () => {
      createAuthFactorAPI.mockImplementation(() => Promise.reject(errorMock));

      const { createAuthFactor } = actions();
      const response = await createAuthFactor(state, payload);

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("aproveAuthFactor", () => {
    const authCodeId = "6815d193-a55b-42c2-a0ef-9f24732ed584";
    const authFactorID = "29c6368f-cc9b-4458-8db9-b56e62b2f4d4";

    it("should aproveAuthFactor", async () => {
      aproveAuthFactorAPI.mockImplementation(() =>
        Promise.resolve(validTokenResponse)
      );

      const { aproveAuthFactor } = actions();
      const response = await aproveAuthFactor(authCodeId, authFactorID);

      expect(response).toEqual({ AprovedAuthFactor: true });
    });

    it("should try to aproveAuthFactor and return a invalid response", async () => {
      aproveAuthFactorAPI.mockImplementation(() => Promise.reject(errorMock));

      const { aproveAuthFactor } = actions();
      const response = await aproveAuthFactor(authCodeId, authFactorID);

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("activateAuthFactor", () => {
    const token = "mock";
    const authFactorID = "29c6368f-cc9b-4458-8db9-b56e62b2f4d4";
    const body = { otp: token };
    it("should activateAuthFactor", async () => {
      activateAuthFactorAPI.mockImplementation(() =>
        Promise.resolve(validTokenResponse)
      );

      const { activateAuthFactor } = actions();
      const response = await activateAuthFactor(authFactorID, body);

      expect(response).toEqual({ activatedAuthFactor: true });
    });

    it("should try to aproveAuthFactor and return a invalid response", async () => {
      activateAuthFactorAPI.mockImplementation(() => Promise.reject(errorMock));

      const { activateAuthFactor } = actions();
      const response = await activateAuthFactor(authFactorID, body);

      expect(response).toEqual(expectedErrorResponse);
    });
  });
  describe("clearAuthFactorResponse", () => {
    it("Should clearAuthFactorResponse", async () => {
      const { clearAuthFactorResponse } = actions();

      expect(clearAuthFactorResponse()).toEqual({ authFactorResponse: "" });
    });
  });
});
