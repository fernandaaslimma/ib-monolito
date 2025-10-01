import {
  signIn,
  getInfo,
  getUserData,
  logout,
  refreshToken,
  preflightForInternetExplorer
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("contracts", () => {
  describe("signIn", () => {
    it("Should call fetchHandler with right API url", done => {
      global.fetch = jest.fn(URI => Promise.resolve(URI));

      signIn("email@email.com", "123123").then(resp => {
        expect(resp).toBe(`${__API__}/spa/token`);
        done();
      });
    });

    it("Should resolve promise if resp status is lower than 400", done => {
      global.fetch = () =>
        Promise.resolve({
          status: 200
        });

      signIn("email@email.com", "123123").then(resp => {
        expect(resp).toEqual({
          status: 200
        });
        done();
      });
    });

    it("Should reject promise if resp status is greater than or equal 400", done => {
      global.fetch = () =>
        Promise.resolve({
          status: 500
        });

      signIn("email@email.com", "123123").catch(resp => {
        expect(resp).toEqual({
          status: 500
        });
        done();
      });
    });
  });

  describe("logout", () => {
    it("Should call fetchHandler with right API url", done => {
      logout().then(resp => {
        expect(resp).toBe(`${__API__}/spa/logout`);
        done();
      });
    });
  });

  describe("preflightForInternetExplorer", () => {
    it("Should call fetchHandler with right API url", done => {
      global.fetch = jest.fn(URI => Promise.resolve(URI));

      preflightForInternetExplorer().then(resp => {
        expect(resp).toBe(`${__API__}/spa/token`);
        done();
      });
    });
  });

  describe("getInfo", () => {
    it("Should call fetchHandler with right API url", done => {
      getInfo().then(resp => {
        expect(resp).toBe(`${__API__}/esign/v1/api/info`);
        done();
      });
    });
  });

  describe("getUserData", () => {
    it("Should call fetchHandler with right API url", done => {
      getUserData().then(resp => {
        expect(resp).toBe(`${__API__}/ibusermanagement/v1/people/userinfo`);
        done();
      });
    });
  });

  describe("refreshToken", () => {
    it("Should call fetchHandler with right API url", done => {
      refreshToken().then(resp => {
        expect(resp).toBe(`${__API__}/spa/token`);
        done();
      });
    });
  });
});
