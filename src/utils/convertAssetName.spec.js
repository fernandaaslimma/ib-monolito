import convertAssetName from "./convertAssetName";

jest.mock("../utils/i18n", () => ({
  translate: id => id
}));

describe("convertAssetName", () => {
  it("Should convert Funds", () => {
    expect(convertAssetName("Funds")).toBe("FUNDS");
  });

  it("Should convert Equity", () => {
    expect(convertAssetName("Equity")).toBe("EQUITIES");
  });

  it("Should convert FixedIncome", () => {
    expect(convertAssetName("FixedIncome")).toBe("FIXED_INCOME");
  });

  it("Should convert CashAccount", () => {
    expect(convertAssetName("CashAccount")).toBe("CASH_ACCOUNTS");
  });

  it("Should convert a default case", () => {
    expect(convertAssetName("lalala")).toBe("lalala");
  });
});
