import connectionCheck from "./index";

import store from "../store";

jest.mock("../store");

describe("Test connectionCheck", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("should return true", async () => {
    const mockState = {
      modalSettings: { isOpen: false }
    };
    // in this point store.getState is going to be mocked
    store.getState = () => mockState;
    Object.defineProperty(global.navigator, "onLine", {
      get: function() {
        return true;
      },
      configurable: true
    });
    return await connectionCheck().then(result => expect(result).toEqual(true));
  });

  test("Connected is false and modal is openned", async () => {
    const mockState = {
      modalSettings: { isOpen: true }
    };
    // in this point store.getState is going to be mocked
    store.getState = () => mockState;

    Object.defineProperty(global.navigator, "onLine", {
      get: function() {
        return false;
      },
      configurable: true
    });
    return await connectionCheck().then(result =>
      expect(result).toEqual(false)
    );
  });

  test("Connected is false and modal is closed", async () => {
    const mockState = {
      modalSettings: { isOpen: false }
    };
    // in this point store.getState is going to be mocked
    store.getState = () => mockState;

    Object.defineProperty(global.navigator, "onLine", {
      get: function() {
        return false;
      },
      configurable: true
    });
    return await connectionCheck().then(result =>
      expect(result).toEqual(false)
    );
  });
});
