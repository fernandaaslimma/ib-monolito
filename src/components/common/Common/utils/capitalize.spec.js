import capitalize from "./capitalize";

describe("capitalize", () => {
  it("Should format a str", () => {
    expect(capitalize("abc")).toBe("Abc");
  });

  it("Should not format a blank str", () => {
    expect(capitalize("")).toBe("");
  });
});
