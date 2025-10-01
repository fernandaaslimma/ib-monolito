import actions from "./index";

jest.mock("../../services/login");
jest.mock("../../utils/token");
jest.mock("../../utils/fetchHandler");

const refreshTokenMock = require("../../services/login").refreshToken;
const setAccessTokenMock = require("../../utils/token").setAccessToken;
const setRefreshTokenMock = require("../../utils/token").setRefreshToken;
const checkViewContextAndRedirectMock = require("../../utils/fetchHandler")
  .checkViewContextAndRedirect;

const response = {
  access_token: "123456",
  refresh_token: "123123",
  session_expires_in: 90
};

describe("Session Expiration actions", () => {
  beforeEach(() => {
    setAccessTokenMock.mockImplementation(() => {});
    setRefreshTokenMock.mockImplementation(() => {});
    checkViewContextAndRedirectMock.mockImplementation(() => {});
  });

  it("Should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual(["updateAccessAndRefreshToken"]);
  });

  describe("updateAccessAndRefreshToken", () => {
    it("Should update token and return expiration session time", async () => {
      const { updateAccessAndRefreshToken } = actions();

      refreshTokenMock.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(response)
        })
      );

      const result = await updateAccessAndRefreshToken();
      expect(result).toEqual({
        left: 90
      });

      expect(setAccessTokenMock).toHaveBeenCalledWith("123456");
      expect(setRefreshTokenMock).toHaveBeenCalledWith("123123");
    });

    it("Should update token and return expiration session time", () => {
      const { updateAccessAndRefreshToken } = actions();

      refreshTokenMock.mockImplementation(() => Promise.reject());

      updateAccessAndRefreshToken().then(() => {
        expect(checkViewContextAndRedirectMock).toHaveBeenCalled();
      });
    });
  });
});
