import getRouteForAsset from "./getRouteForAsset";

describe("getRouteForAsset", () => {
  it("Should return the route for Funds", () => {
    expect(getRouteForAsset("Funds")).toBe("/investments/positions/funds");
  });

  it("Should return the route for Equity", () => {
    expect(getRouteForAsset("Equity")).toBe("/investments/positions/equities");
  });

  it("Should return the route for FixedIncome", () => {
    expect(getRouteForAsset("FixedIncome")).toBe(
      "/investments/positions/fixed-income"
    );
  });

  it("Should return the route for CashAccount", () => {
    expect(getRouteForAsset("CashAccount")).toBe("/position/account");
  });

  it("Should return the route for a default case", () => {
    expect(getRouteForAsset("lalala")).toBe("/");
  });
});
