import store from "../store";

jest.mock("../store", () => ({
  getState: jest.fn()
}));

import {
  isCorporationUser,
  isIndividualUser,
  hasVisualization,
  hasSigning
} from "./index";

import { CORPORATION, INDIVIDUAL, VISUALIZATION, SIGNING } from "../constants";

describe("roles", () => {
  describe("isCorporationUser", () => {
    it("should return true if user is corporation", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          tenants: [CORPORATION]
        }
      }));
      expect(isCorporationUser()).toBe(true);
    });

    it("should return false if user is not corporation", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          tenants: []
        }
      }));
      expect(isCorporationUser()).toBe(false);
    });
  });

  describe("isIndividualUser", () => {
    it("should return true if user is individual", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          tenants: [INDIVIDUAL]
        }
      }));
      expect(isIndividualUser()).toBe(true);
    });

    it("should return false if user is not individual", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          tenants: []
        }
      }));
      expect(isIndividualUser()).toBe(false);
    });
  });

  describe("hasVisualization", () => {
    it("should return true if user has visualization", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          roles: [VISUALIZATION]
        }
      }));
      expect(hasVisualization()).toBe(true);
    });

    it("should return false if user doesnt have visualization", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          roles: []
        }
      }));
      expect(hasVisualization()).toBe(false);
    });
  });

  describe("hasSigning", () => {
    it("should return true if user has signing", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          roles: [SIGNING]
        }
      }));
      expect(hasSigning()).toBe(true);
    });

    it("should return false if user doesnt have signing", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          roles: []
        }
      }));
      expect(hasSigning()).toBe(false);
    });
  });
});
