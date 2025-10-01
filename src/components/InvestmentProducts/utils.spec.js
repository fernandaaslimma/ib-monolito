import { verifyDays } from "./utils";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  withI18n: component => component,
  isZhCN: () => false,
  isPtBR: () => false
}));

describe("verifyDays", () => {
  it("Should format a str", () => {
    expect(verifyDays(0, "Útil")).toBe("SAME_DAY_FUNDS");
  });

  it("Should format a str", () => {
    expect(verifyDays(0, "Corrido")).toBe("SAME_DAY_FUNDS");
  });

  it("Should format a str", () => {
    expect(verifyDays(1, "Útil")).toBe("ONE_WORKING_DAY_FUNDS");
  });

  it("Should format a str", () => {
    expect(verifyDays(1, "Corrido")).toBe("ONE_CONSECUTIVE_DAY_FUNDS");
  });

  it("Should format a str", () => {
    expect(verifyDays(2, "Útil")).toBe("2WORKING_DAYS_FUNDS");
  });

  it("Should format a str", () => {
    expect(verifyDays(2, "Corrido")).toBe("2CONSECUTIVE_DAYS_FUNDS");
  });
});
