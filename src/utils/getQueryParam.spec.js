import getQueryParam from "./getQueryParam";

describe("getQueryParam", () => {
  it("Should return false when param is not found", () => {
    expect(
      getQueryParam(
        { search: "?contractId=3c46e318&event=signing_complete" },
        "foo"
      )
    ).toBe(false);
  });

  it("Should return the value when param key is found", () => {
    expect(
      getQueryParam(
        { search: "?contractId=3c46e318&event=signing_complete" },
        "event"
      )
    ).toBe("signing_complete");
  });
});
