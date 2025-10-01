import { checkCollectionEquality, checkObjectEquality } from "./checkEquality";

describe("checkCollectionEquality", () => {
  it("Should return falsy equality", () => {
    expect(
      checkCollectionEquality(
        [{ value: "xpto" }, { value: "xpto" }],
        [{ value: "xpto" }]
      )
    ).toBeFalsy();
  });

  it("Should return truthy equality", () => {
    expect(
      checkCollectionEquality(
        [{ value: "xpto" }, { value: "xpto" }],
        [{ value: "xpto" }, { value: "xpto" }]
      )
    ).toBeTruthy();
  });
});

describe("checkObjectEquality", () => {
  it("Should return truthy equality", () => {
    expect(
      checkObjectEquality({ value: "xpto" }, { value: "xpto" })
    ).toBeTruthy();
  });

  it("Should return falsy equality receive null object", () => {
    expect(checkObjectEquality(undefined, { value: "xpto" })).toBeFalsy();
  });
});
