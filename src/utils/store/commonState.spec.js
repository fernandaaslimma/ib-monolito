import commonState from "./commonState";

describe("commonState", () => {
  it("Should return the state", () => {
    expect(commonState).toEqual({
      isConsentFlow: false,
      isNavigationMenuShown: false,
      notificated: {},
      openBankingReceivedInfo: {},
      toBeFetched: [],
      userInfo: { preferredLanguage: null },
      virtualKeyboardConfig: {}
    });
  });
});
