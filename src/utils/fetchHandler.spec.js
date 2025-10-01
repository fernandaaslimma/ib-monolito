import fetchHandler, {
  formatUrl,
  updateQueryStringParameter,
  getHeaders
} from "./fetchHandler";
import { URLS } from "../../config/constants";

const { LOCALHOST } = URLS;

jest.mock("isomorphic-fetch");
jest.mock("../services/login");
jest.mock("./redirect");
jest.mock("./token");
jest.mock("./connectionCheck");

import connectionCheck from "./connectionCheck";

const connectionCheckMock = connectionCheck;
const fetchImplementationMock = require("isomorphic-fetch");
const refreshTokenMock = require("../services/login").refreshToken;
const hardRedirectMock = require("./redirect").hardRedirect;
const redirectMock = require("./redirect").redirect;
const getAccessTokenMock = require("./token").getAccessToken;
const getRefreshTokenMock = require("./token").getRefreshToken;

const successMock = () => Promise.resolve({ status: 200 });
const notFoundMock = () => Promise.resolve({ status: 404 });

let refreshSpy;
let hardRedirectSpy;
let redirectSpy;
let connectionCheckSpy;

const headers = new Headers({
  key: "value"
});

beforeEach(() => {
  refreshSpy = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ access_token: "access", refresh_token: "refresh" })
    })
  );

  getAccessTokenMock.mockImplementation(() => "access");
  getRefreshTokenMock.mockImplementation(() => "refresh");

  redirectSpy = jest.fn();
  redirectMock.mockImplementation(redirectSpy);

  hardRedirectSpy = jest.fn();
  hardRedirectMock.mockImplementation(hardRedirectSpy);

  refreshTokenMock.mockImplementation(refreshSpy);

  connectionCheckSpy = jest.fn();
  connectionCheckMock.mockImplementation(connectionCheckSpy);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("formatUrl", () => {
  it("Should return the same string if it's not on server", () => {
    global.__SERVER__ = false;

    expect(formatUrl("/fake-url")).toBe("/fake-url");
  });

  it("Should return the same string if it's on server but it inludes http", () => {
    global.__SERVER__ = true;

    expect(formatUrl("http://fake-url")).toBe("http://fake-url");
  });

  it("Should append domain and host to the string if it's on server but it not inludes http", () => {
    global.__SERVER__ = true;

    expect(formatUrl("/fake-url")).toBe(`${LOCALHOST}/fake-url`);
  });
});

describe("updateQueryStringParameter", () => {
  it("Should update the query string when none is present", () => {
    expect(updateQueryStringParameter("www.google.com", "key", "value")).toBe(
      "www.google.com?key=value"
    );
  });

  it("Should update the query string when there is a key", () => {
    expect(
      updateQueryStringParameter("www.google.com?key1=value1", "key2", "value2")
    ).toBe("www.google.com?key1=value1&key2=value2");
  });
});

describe("getHeaders", () => {
  it("Should return headers when is null and refresh is false", () => {
    expect(getHeaders(null, false)).toEqual({
      _headers: { authorization: ["Bearer refresh"] }
    });
  });

  it("Should return headers when is null and refresh is true", () => {
    expect(getHeaders(null, true)).toEqual({
      _headers: { authorization: ["Bearer access"] }
    });
  });

  it("Should return headers when is present and refresh is false", () => {
    expect(getHeaders(headers, false)).toEqual({
      _headers: { key: ["value"], authorization: ["Bearer refresh"] }
    });
  });

  it("Should return headers when is present and refresh is true", () => {
    expect(getHeaders(headers, true)).toEqual({
      _headers: { key: ["value"], authorization: ["Bearer access"] }
    });
  });
});

describe("fetchHandler", () => {
  beforeEach(() => {
    global.__SERVER__ = false;
    fetchImplementationMock.mockImplementation(successMock);
  });

  it("Should make a request and return a success status", async () => {
    fetchHandler("http://fake-url").then(resp => {
      expect(resp).toEqual({ status: 200 });
    });
  });

  it("Should invoke getAccessToken with refresh as true", async () => {
    fetchHandler("http://fake-url").then(() => {
      expect(getAccessTokenMock).toHaveBeenCalledWith();
    });
  });

  it("Should invoke getRefreshToken with refresh as false", async () => {
    fetchHandler("http://fake-url", {}, { refresh: false }).then(() => {
      expect(getRefreshTokenMock).toHaveBeenCalledWith();
    });
  });

  it("Should reject the request if status is greather than or equals 400", done => {
    fetchImplementationMock.mockImplementation(notFoundMock);

    fetchHandler("http://fake-url", { fetchRetry: 0 }).catch(resp => {
      expect(resp).toEqual({
        status: 404
      });

      done();
    });
  });

  it("Should thow an error if endpoint is not reachable", done => {
    fetchImplementationMock.mockImplementation(() => Promise.reject("error"));

    fetchHandler("http://fake-url", { fetchRetry: 0 }).catch(resp => {
      expect(resp).toBe("error");

      done();
    });
  });

  it("Should thow an error if endpoint is not reachable and retry one time", async () => {
    fetchImplementationMock.mockImplementation(() => Promise.reject("error"));
    jest.setTimeout(7000);

    await fetchHandler("http://fake-url").catch(resp => {
      expect(resp).toBe("error");
    });
  }, 7000);

  it.skip("Should thow success after endpoint is in trouble and retry one time", async () => {
    fetchImplementationMock
      .mockImplementationOnce(() =>
        Promise.resolve({
          status: 500
        })
      )
      .mockImplementationOnce(() => Promise.resolve("success"));

    await fetchHandler("http://fake-url").catch(resp => {
      expect(resp).toBe("success");
    });
  });

  it.skip("Should invoke hardRedirect if refresh token is unreacheable", done => {
    refreshSpy = jest.fn(() => Promise.reject());

    refreshTokenMock.mockImplementation(refreshSpy);

    fetchImplementationMock.mockImplementation(() =>
      Promise.resolve({
        status: 401
      })
    );

    fetchHandler("http://fake-url", { fetchRetry: 0 }).catch(() => {
      expect(refreshSpy).toHaveBeenCalledTimes(1);
      done();
    });
  });

  //aqui
  it("Should reject Promise if request status is 500 and not retry with POST method", done => {
    refreshSpy = jest.fn(() => Promise.reject());

    refreshTokenMock.mockImplementation(refreshSpy);

    fetchImplementationMock.mockImplementation(() => Promise.reject("Error"));

    fetchHandler("http://fake-url", { method: "POST" }).catch(() => {
      expect(connectionCheckSpy).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it.skip("Should reject Promise if request status is 500", done => {
    refreshSpy = jest.fn(() => Promise.reject());

    fetchImplementationMock.mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );

    fetchHandler("http://fake-url").catch(() => {
      expect(refreshSpy).not.toHaveBeenCalled();
      expect(hardRedirectSpy).not.toHaveBeenCalled();
      expect(connectionCheckSpy).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it("Should not invoke hardRedirect if refresh token is successful and fetch url throws an error", done => {
    fetchImplementationMock
      .mockImplementationOnce(() =>
        Promise.resolve({
          status: 401
        })
      )
      .mockImplementationOnce(() => Promise.reject());

    fetchHandler("http://fake-url", { fetchRetry: 0 }).catch(() => {
      expect(refreshSpy).toHaveBeenCalledTimes(1);
      expect(hardRedirectSpy).not.toHaveBeenCalled();

      done();
    });
  });

  it("Should invoke hardRedirect if refresh token is successful and fetch url throws an error", done => {
    fetchImplementationMock.mockImplementationOnce(() =>
      Promise.resolve({
        status: 401
      })
    );

    fetchHandler("http://fake-url", {}, { refresh: false }).then(resp => {
      expect(refreshSpy).not.toHaveBeenCalledTimes(1);
      expect(resp).toEqual({ status: 401 });

      done();
    });
  });

  it("Should not invoke refreshToken if fetchHandler has falsy refresh parameter", done => {
    fetchImplementationMock
      .mockImplementationOnce(() =>
        Promise.resolve({
          status: 401
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          status: 200
        })
      );

    fetchHandler("http://fake-url", {}, { refresh: false }).then(resp => {
      expect(refreshSpy).toHaveBeenCalledTimes(0);
      expect(resp).toEqual({ status: 401 });
      done();
    });
  });
});
