import settings from "./index";

describe("settings action", () => {
  it("Should return an action object", () => {
    expect(typeof settings() === "object").toBeTruthy();
    expect(Object.keys(settings())).toEqual([
      "setLanguage",
      "clearLanguageWithoutClearSessionStorage"
    ]);
  });

  describe("setLanguage", () => {
    it("Should change userInfo state language as pt-BR", () => {
      const { setLanguage } = settings();
      expect(setLanguage({ userInfo: {} }, "pt-BR")).toEqual({
        userInfo: { preferredLanguage: "pt-BR" }
      });
    });
  });

  describe("clearLanguageWithoutClearSessionStorage", () => {
    it("Should change userInfo state language as null", () => {
      const { clearLanguageWithoutClearSessionStorage } = settings();
      expect(clearLanguageWithoutClearSessionStorage({ userInfo: {} })).toEqual(
        {
          userInfo: { preferredLanguage: null }
        }
      );
    });
  });
});
