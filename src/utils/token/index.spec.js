jest.mock("universal-cookie", () => {
  return function() {
    return { get: () => "token", set: token => token };
  };
});

import {
  getAccessToken,
  getRefreshToken,
  getSessionExpirationTime,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  SESSION_EXPIRATION
} from ".";

describe("token", () => {
  describe("getAccessToken", () => {
    it("should return the token", () => {
      expect(getAccessToken()).toBe("token");
    });
  });

  describe("getRefreshToken", () => {
    it("should return the token", () => {
      expect(getRefreshToken()).toBe("token");
    });
  });

  describe("getSessionExpirationTime", () => {
    it("should return the token", () => {
      expect(getSessionExpirationTime()).toBe("token");
    });
  });

  describe("ACCESS_TOKEN", () => {
    it("should return acccess token constant", () => {
      expect(ACCESS_TOKEN).toBe("IB-ACCESS-TOKEN");
    });
  });

  describe("REFRESH_TOKEN", () => {
    it("should return refresh token constant", () => {
      expect(REFRESH_TOKEN).toBe("IB-REFRESH-TOKEN");
    });
  });

  describe("SESSION_EXPIRATION", () => {
    it("should session expiration constant", () => {
      expect(SESSION_EXPIRATION).toBe("SESSION_EXPIRES_IN");
    });
  });
});
