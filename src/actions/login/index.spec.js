import actions from "./index";

jest.mock("../../services/login");
jest.mock("../../utils/token");
jest.mock("../../utils/fetchHandler");

const {
  signIn,
  getUserData,
  autoSignInFromMobileHash,
  autoSignInFromImpersonateHash
} = require("../../services/login");
const setAccessTokenMock = require("../../utils/token").setAccessToken;
const setRefreshTokenMock = require("../../utils/token").setRefreshToken;
const checkViewContextAndRedirect = require("../../utils/fetchHandler")
  .checkViewContextAndRedirect;

const store = {
  setState: jest.fn()
};

const defaultsState = {
  login: {
    email: "email@email.com",
    password: "123123"
  }
};

describe("Login actions", () => {
  beforeEach(() => {
    setAccessTokenMock.mockImplementation(() => {});
    setRefreshTokenMock.mockImplementation(() => {});
  });

  it("Should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "handleUserInput",
      "handleLoginPassword",
      "handleMobileHash",
      "handleImpersonateHash",
      "handleUserSubmit",
      "getUserInfo",
      "updateEmail",
      "clearLoginError",
      "setJustLoggedIn"
    ]);
  });

  describe("handleUserInput", () => {
    it("Should return the updated state for email and clean errors", () => {
      const { handleUserInput } = actions();

      const emailInputEvent = {
        target: {
          name: "email",
          value: "email@email.com",
          error: null
        }
      };

      expect(handleUserInput({}, emailInputEvent)).toEqual({
        login: {
          email: "email@email.com",
          error: null
        }
      });
    });

    it("Should return the updated state for password and clean errors", () => {
      const { handleUserInput } = actions();
      const passwordInputEvent = {
        target: {
          name: "password",
          value: "123456",
          error: null
        }
      };

      expect(handleUserInput({}, passwordInputEvent)).toEqual({
        login: {
          password: "123456",
          error: null
        }
      });
    });
  });

  describe("handleUserSubmit", () => {
    it("Should return the updated state for success", async () => {
      signIn.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: { userId: 1 } })
        })
      );

      const { handleUserSubmit } = actions(store);
      const response = await handleUserSubmit(defaultsState, {
        preventDefault: () => {}
      });

      expect(response).toEqual({
        loginSuccess: true,
        login: {},
        skipLoading: false
      });
    });

    it("Should invoke accessToken and refreshToken functions", async () => {
      signIn.mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({ access_token: "123", refresh_token: "456" })
        })
      );

      const { handleUserSubmit } = actions(store);
      await handleUserSubmit(defaultsState, {
        preventDefault: () => {}
      });

      expect(setAccessTokenMock).toHaveBeenCalledWith("123");
      expect(setRefreshTokenMock).toHaveBeenCalledWith("456");
    });

    it("Should return the updated state for failure", async () => {
      const error = { status: 401 };

      signIn.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.reject(error)
        })
      );

      const { handleUserSubmit } = actions(store);
      const response = await handleUserSubmit(defaultsState, {
        preventDefault: () => {}
      });

      expect(response).toEqual({
        loginSuccess: false,
        skipLoading: false,
        login: { error, email: "email@email.com", password: "123123" }
      });
    });

    it("Should invoke setState", async () => {
      const error = { status: 401 };

      signIn.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.reject(error)
        })
      );

      const { handleUserSubmit } = actions(store);
      await handleUserSubmit(defaultsState, {
        preventDefault: () => {}
      });

      expect(store.setState).toHaveBeenCalledWith({
        pBase64: "123123",
        skipLoading: true
      });
    });
  });

  describe("handleMobileHash", () => {
    it("Should return the updated state for success", async () => {
      autoSignInFromMobileHash.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: { userId: 1 } })
        })
      );

      const { handleMobileHash } = actions(store);
      const response = await handleMobileHash(defaultsState, {
        preventDefault: () => {}
      });

      expect(response).toEqual({
        loginSuccess: true,
        login: {},
        skipLoading: false
      });
    });

    it("Should return the updated state for failure", async () => {
      const error = { status: 401 };

      autoSignInFromMobileHash.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.reject(error)
        })
      );

      checkViewContextAndRedirect.mockImplementation(jest.fn());

      const { handleMobileHash } = actions(store);
      const state = {
        login: {
          email: "email@email.com",
          password: "123123"
        }
      };

      await handleMobileHash(state);
      expect(checkViewContextAndRedirect).toBeCalled();
    });
  });

  describe("handleImpersonateHash", () => {
    it("Should return the updated state for success", async () => {
      autoSignInFromImpersonateHash.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: { userId: 1 } })
        })
      );

      const { handleImpersonateHash } = actions(store);
      const response = await handleImpersonateHash(defaultsState, {
        preventDefault: () => {}
      });

      expect(response).toEqual({
        loginSuccess: true,
        login: {},
        skipLoading: false
      });
    });

    it("Should return the updated state for failure", async () => {
      const error = { status: 401 };

      autoSignInFromImpersonateHash.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.reject(error)
        })
      );

      checkViewContextAndRedirect.mockImplementation(jest.fn());

      const { handleImpersonateHash } = actions(store);
      const state = {
        login: {
          email: "email@email.com",
          password: "123123"
        }
      };

      await handleImpersonateHash(state);
      expect(checkViewContextAndRedirect).toBeCalled();
      expect(store.setState).toHaveBeenCalledWith({
        skipLoading: true,
        pBase64: "123123"
      });
    });
  });

  describe("getUserInfo", () => {
    it("Should return the updated state for success", async () => {
      getUserData.mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              givenName: "givenName",
              surname: "surname",
              act: {
                user: "testenome@mail.com",
                idp: "microsoft",
                name: "Teste Nome"
              },
              users: [
                {
                  mail: "mail@mail.com",
                  preferredLanguage: "en-US",
                  tenants: [
                    {
                      type: "Individual",
                      portfolios: [
                        {
                          roles: ["SignContract", "GetStatus"],
                          portfolioMembers: [
                            {
                              document: "1233456789078"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            })
        })
      );

      const { getUserInfo } = actions();

      const response = await getUserInfo();

      expect(response).toEqual({
        userInfo: {
          givenName: "givenName",
          surname: "surname",
          tenantsMembers: [
            {
              document: "1233456789078"
            }
          ],
          tenants: ["Individual"],
          email: "mail@mail.com",
          impersonate: {
            name: "Teste Nome",
            idp: "microsoft",
            user: "testenome@mail.com"
          },
          roles: ["SignContract", "GetStatus"],
          preferredLanguage: "en-US"
        }
      });
    });

    it("Should return the updated state for exception", async () => {
      getUserData.mockImplementation(() => Promise.reject());

      const { getUserInfo } = actions();

      const response = await getUserInfo();

      expect(response).toEqual({
        userInfo: null
      });
    });
  });

  describe("clearLoginError", () => {
    it("Should clean errors from global state", async () => {
      const { clearLoginError } = actions();

      expect(
        clearLoginError({ login: { email: "xx@xx.xx", error: true } })
      ).toEqual({
        login: {
          email: "xx@xx.xx",
          error: null
        }
      });
    });
  });

  describe("updateEmail", () => {
    it("Should update the email from the state", async () => {
      const { updateEmail } = actions();

      expect(updateEmail({ login: { email: "" } }, "asd@asd.com")).toEqual({
        login: {
          email: "asd@asd.com"
        }
      });
    });
  });

  describe("handleLoginPassword", () => {
    it("Should return the updated state for login password", () => {
      const { handleLoginPassword } = actions();

      const passwordInputEvent = {
        password: "123456"
      };

      expect(handleLoginPassword({}, passwordInputEvent)).toEqual({
        login: {
          password: {
            password: "123456"
          }
        }
      });
    });
  });
});
