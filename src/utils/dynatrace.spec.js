import getDynatrace from "./dynatrace";

describe("getDynatrace", () => {
  it("should return dynatrace string for dev env", () => {
    expect(getDynatrace()).toBe("");
  });
  it("should return dynatrace string for prod env", () => {
    process.env.DYNATRACE_ID = "xxxxxx";
    process.env.DYNATRACE_URL = "zzzzzz";
    process.env.DYNATRACE_KEY = "yyyyyy";
    expect(getDynatrace()).toContain("zzzzzz/yyyyyy/xxxxxx_complete.js");
  });
});
