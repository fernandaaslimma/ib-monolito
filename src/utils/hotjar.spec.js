import getHotjarScript from "./hotjar";

describe("getHotjarScript", () => {
  it("should return hotjar string for dev env", () => {
    expect(getHotjarScript()).toBe("");
  });

  it("should return hotjar string for prod env", () => {
    process.env.HOTJAR_ID = "822769";
    expect(getHotjarScript()).toContain("hjid:822769");
  });
});
