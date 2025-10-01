import actions from "./index";

jest.mock("../../services/login");
jest.mock("../../utils/token");

const { logout } = require("../../services/login");
const setAccessTokenMock = require("../../utils/token").setAccessToken;
const setRefreshTokenMock = require("../../utils/token").setRefreshToken;
let logoutResponse;
let setStateMock;
let resetMock;

describe("Login actions", () => {
  beforeEach(() => {
    setStateMock = jest.fn();
    resetMock = jest.fn();
    logoutResponse = jest.fn(() => Promise.resolve({ status: 200 }));
    logout.mockImplementation(logoutResponse);
    setAccessTokenMock.mockImplementation(() => {});
    setRefreshTokenMock.mockImplementation(() => {});
  });

  it("Should return an action object", () => {
    expect(
      typeof actions({ setState: setStateMock, reset: resetMock }) === "object"
    ).toBeTruthy();
    expect(
      Object.keys(actions({ setState: setStateMock, reset: resetMock }))
    ).toEqual(["doLogout"]);
  });

  describe("doLogout", () => {
    it("Should invoke setState", done => {
      const { doLogout } = actions({
        setState: setStateMock,
        reset: resetMock
      });
      const state = {
        isLogged: true,
        loginSuccess: true
      };

      doLogout(state).then(() => {
        expect(setStateMock).toHaveBeenCalledTimes(2);
        done();
      });
    });

    it("Should invoke setState", done => {
      const { doLogout } = actions({
        setState: setStateMock,
        reset: resetMock
      });
      const state = {
        isLogged: true,
        loginSuccess: true
      };

      doLogout(state).then(() => {
        expect(resetMock).toHaveBeenCalledTimes(1);
        done();
      });
    });

    it("Should return the updated state", done => {
      const { doLogout } = actions({
        setState: setStateMock,
        reset: resetMock
      });
      const state = {
        isLogged: true,
        loginSuccess: true
      };

      doLogout(state).then(() => {
        expect(setStateMock).toHaveBeenLastCalledWith({
          isLogged: false,
          loginSuccess: false,
          skipLoading: false
        });
        done();
      });
    });

    it("Should invoke setAccessToken and setRefreshToken", done => {
      const { doLogout } = actions({
        setState: setStateMock,
        reset: resetMock
      });
      const state = {
        isLogged: true,
        loginSuccess: true
      };

      doLogout(state).then(() => {
        expect(setAccessTokenMock).toHaveBeenCalledWith("");
        expect(setRefreshTokenMock).toHaveBeenCalledWith("");
        done();
      });
    });

    it("Should not change isLogged state if logout is not successful", done => {
      logoutResponse = jest.fn(() => Promise.reject({ status: 500 }));
      logout.mockImplementation(logoutResponse);

      const { doLogout } = actions({
        setState: setStateMock,
        reset: resetMock
      });

      const state = {
        isLogged: true,
        loginSuccess: true
      };

      doLogout(state).then(() => {
        expect(setStateMock).toHaveBeenLastCalledWith({
          isLogged: true,
          loginSuccess: true,
          skipLoading: false
        });
        done();
      });
    });
  });
});
