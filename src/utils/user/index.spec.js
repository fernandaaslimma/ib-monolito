import store from "../store";

jest.mock("../store", () => ({
  getState: jest.fn()
}));

import { userIsLoaded } from "./index";

describe("user", () => {
  describe("userIsLoaded", () => {
    it("should return true if user has an email", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          email: "email@email"
        }
      }));
      expect(userIsLoaded()).toBe(true);
    });

    it("should return false otherwise", () => {
      store.getState.mockImplementation(() => ({
        userInfo: {
          email: null
        }
      }));
      expect(userIsLoaded()).toBe(false);
    });
  });
});
