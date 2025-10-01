import {
  checkDate,
  checkValue,
  checkFavored,
  checkAgency,
  checkBank,
  checkAccount,
  checkVerifyDigit,
  checkOriginAccount
} from "./EFT";

describe("checkDate", () => {
  it("Should return null when date is empty", () => {
    expect(checkDate("")).toBe(null);
  });

  it("Should return null when date is incomplete", () => {
    expect(checkDate("undefined")).toBe(false);
  });

  it("Should return false when date is invalid", () => {
    expect(checkDate("99/99/9999")).toBe(false);
  });
});

describe("checkValue", () => {
  it("Should return false when value is empty", () => {
    expect(checkValue()).toBeFalsy();
  });

  it("Should return true when value > 0", () => {
    expect(checkValue("123")).toBeTruthy();
  });
});

describe("checkFavored and checkCNPJ", () => {
  it("Should return false when favored is empty", () => {
    expect(checkFavored("")).toBeFalsy();
  });

  it("Should return true when favored >= 5", () => {
    expect(checkFavored("12345")).toBeTruthy();
  });
});

describe("checkAgency and checkAccount", () => {
  it("Should return false when agency is empty", () => {
    expect(checkAgency("")).toBeFalsy();
  });

  it("Should return true when agency > 2", () => {
    expect(checkAgency("123")).toBeTruthy();
  });

  it("Should return false when Account is empty", () => {
    expect(checkAccount("")).toBeFalsy();
  });

  it("Should return true when Account > 2", () => {
    expect(checkAccount("123")).toBeTruthy();
  });
});

describe("checkBank", () => {
  it("Should return false when Bank is empty", () => {
    expect(checkBank("", null)).toBeFalsy();
  });
  it("Should return a result when Bank is filled", () => {
    expect(checkBank("341", [{ name: "341", value: "mock" }])).toEqual({
      name: "341",
      value: "mock"
    });
  });

  describe("checkVerifyDigit ", () => {
    it("Should return false when digit is empty", () => {
      expect(checkVerifyDigit("")).toBeFalsy();
    });
    it("Should return true when digit > 0", () => {
      expect(checkVerifyDigit("123")).toBeTruthy();
    });
  });

  describe("checkOriginAccount ", () => {
    it("Should return false when number is empty", () => {
      expect(checkOriginAccount("")).toBeFalsy();
    });
    it("Should return true when number > 0", () => {
      expect(checkOriginAccount("123")).toBeTruthy();
    });
  });
});
