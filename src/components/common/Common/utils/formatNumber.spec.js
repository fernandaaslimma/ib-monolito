import formatNumber from "./formatNumber";
import { PT_BR, EN_US } from "./constants";

describe("formatNumber", () => {
  it("Should format a number as default currency", () => {
    expect(formatNumber(321831290)).toBe("321,831,290");
  });

  it("Should format a number as BRL currency", () => {
    expect(formatNumber(321831290, { currency: "BRL" }, PT_BR)).toBe(
      "R$ 321.831.290,00"
    );
  });

  it("Should format a number as USD currency", () => {
    expect(formatNumber(321831290, { currency: "USD" }, EN_US)).toBe(
      "$321,831,290.00"
    );
  });

  it("Should format a number with two digits", () => {
    expect(formatNumber(321831290, { digits: 2 })).toBe("321,831,290.00");
  });

  it("Should format a number with one digits", () => {
    expect(formatNumber(321831290, { digits: 1 })).toBe("321,831,290.0");
  });

  it("Should use en-US as a default locale when locale parameter is invalid", () => {
    expect(formatNumber(321831290, { digits: 1 }, "asdasd")).toBe(
      "321,831,290.0"
    );
  });
});
