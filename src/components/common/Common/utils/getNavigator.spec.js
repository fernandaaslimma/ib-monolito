import { isMsBrowser, isMsEdge, isInternetExplorer } from "./getNavigator";

describe("getNavigator", () => {
  describe("isMsBrowser", () => {
    it("Should return true for msSaveOrOpenBlob when exist", () => {
      const mockMsSaveOrOpenBlob = {
        msSaveOrOpenBlob: jest.fn()
      };

      global.navigator.msSaveOrOpenBlob = mockMsSaveOrOpenBlob;
      expect(isMsBrowser()).toBe(true);
    });
    it("Should return false for msSaveOrOpenBlob doesn't exist", () => {
      global.navigator.msSaveOrOpenBlob = null;
      expect(isMsBrowser()).toBe(false);
    });
  });
  describe("isMsEdge", () => {
    it("Should return true for msSaveOrOpenBlob when exist and doesn't contains string 'Edge'", () => {
      const mockMsSaveOrOpenBlob = {
        msSaveOrOpenBlob: jest.fn()
      };

      global.navigator.msSaveOrOpenBlob = mockMsSaveOrOpenBlob;

      expect(isMsEdge()).toBe(false);
    });
    it("Should return False for msSaveOrOpenBlob when exist and contains string 'Edge'", () => {
      global.navigator.msSaveOrOpenBlob = null;
      expect(isMsEdge()).toBe(false);
    });
    it("Should return true for msSaveOrOpenBlob when exist and contains string 'Edge'", () => {
      const mockMsSaveOrOpenBlob = {
        msSaveOrOpenBlob: jest.fn()
      };

      global.navigator.msSaveOrOpenBlob = mockMsSaveOrOpenBlob;
      Object.defineProperty(window.navigator, "appVersion", {
        value: "abcdefgh test Edge",
        writable: true
      });
      expect(isMsEdge()).toBe(true);
    });
  });
  describe("isInternetExplorer", () => {
    it("Should return True for MsBrowser and contains string 'Edge'", () => {
      const mockMsSaveOrOpenBlob = {
        msSaveOrOpenBlob: jest.fn()
      };

      global.navigator.msSaveOrOpenBlob = mockMsSaveOrOpenBlob;

      expect(isInternetExplorer()).toBe(false);
    });
    it("Should return True for MsBrowser and doesn't contains string 'Edge'", () => {
      const mockMsSaveOrOpenBlob = {
        msSaveOrOpenBlob: jest.fn()
      };

      Object.defineProperty(window.navigator, "appVersion", {
        value: "abcdefgh test Ed4ge",
        writable: true
      });

      global.navigator.msSaveOrOpenBlob = mockMsSaveOrOpenBlob;
      expect(isInternetExplorer()).toBe(true);
    });
  });
});
