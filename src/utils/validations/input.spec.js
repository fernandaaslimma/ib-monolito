import {
  isValueNullOrUndefined,
  checkCPFOrCNPJ,
  checkValidDateLength,
  checkDefaultInputLength,
  checkTypeAndValidate,
  checkIfIsInteger,
  checkValidDDD,
  checkValidCnpj,
  isValidCnpjNumber,
  checkValidCpf,
  checkValidCpfAndCnpj
} from "./input";

describe("isValueNullOrUndefined", () => {
  it("Should return true when value is null", () => {
    expect(isValueNullOrUndefined()).toBeTruthy();
  });

  it("Should return false when value is exists", () => {
    expect(isValueNullOrUndefined("value")).toBeFalsy();
  });
});

describe("checkCPFOrCNPJ", () => {
  it("Should return false when CPF does not have enough characters", () => {
    expect(checkCPFOrCNPJ("12345")).toBeFalsy();
  });

  it("Should return false when CPF is null", () => {
    expect(checkCPFOrCNPJ()).toBeFalsy();
  });

  it("Should return true CPF have exactly 11 caracteres", () => {
    expect(checkCPFOrCNPJ("12345678910")).toBeTruthy();
  });

  it("Should return true when CNPJ does not have enough characters", () => {
    expect(checkCPFOrCNPJ("12345", true)).toBeFalsy();
  });

  it("Should return true if CNPJ have exactly 14 caracteres", () => {
    expect(checkCPFOrCNPJ("12345678910111", true)).toBeTruthy();
  });
});

describe("checkValidDateLength", () => {
  it("Should return false when value is null", () => {
    expect(checkValidDateLength()).toBeFalsy();
  });

  it("Should return false when value is exists", () => {
    expect(checkValidDateLength("12/12/2020")).toBeTruthy();
  });
});

describe("checkDefaultInputLength", () => {
  it("Should return false when value is null", () => {
    expect(checkDefaultInputLength()).toBeFalsy();
  });

  it("Should return false when value exists", () => {
    expect(checkDefaultInputLength("value")).toBeTruthy();
  });
});

describe("checkTypeAndValidate", () => {
  it("Should return false when value is not from any validation object type", () => {
    expect(checkTypeAndValidate("bla", "")).toBeFalsy();
  });

  it("Should return true when value has length and part of the validation object", () => {
    expect(checkTypeAndValidate("name", "value")).toBeTruthy();
  });
});

describe("checkIfIsInteger ", () => {
  it("Should return false when value is empty", () => {
    expect(checkIfIsInteger("")).toBeFalsy();
  });
});

describe("checkValidDDD", () => {
  it("Should return false when value is empty", () => {
    expect(checkValidDDD("")).toBeFalsy();
  });
  it("Should return false when value ! 2", () => {
    expect(checkValidDDD("1")).toBeFalsy();
  });

  describe("checkValidCnpj", () => {
    it("should return false for empty value", () => {
      expect(checkValidCnpj("")).toBe(false);
    });

    it("should return false for invalid CNPJ", () => {
      expect(checkValidCnpj("12345678901234")).toBe(false);
    });
  });
});

describe("isValidCnpjNumber", () => {
  it("should return false for empty value", () => {
    expect(isValidCnpjNumber("")).toBe(false);
  });

  it("should return false for undefined value", () => {
    expect(isValidCnpjNumber(undefined)).toBe(false);
  });

  it("should return false for null value", () => {
    expect(isValidCnpjNumber(null)).toBe(false);
  });

  it("should return true for valid value", () => {
    expect(isValidCnpjNumber("12345678901234")).toBe(true);
  });
});

describe("checkValidCpf", () => {
  it("should return false for invalid CPFs", () => {
    expect(checkValidCpf("000.000.000-00")).toBe(false);
    expect(checkValidCpf("111.111.111-11")).toBe(false);
    expect(checkValidCpf("222.222.222-22")).toBe(false);
    expect(checkValidCpf("333.333.333-33")).toBe(false);
    expect(checkValidCpf("444.444.444-44")).toBe(false);
    expect(checkValidCpf("555.555.555-55")).toBe(false);
    expect(checkValidCpf("666.666.666-66")).toBe(false);
    expect(checkValidCpf("777.777.777-77")).toBe(false);
    expect(checkValidCpf("888.888.888-88")).toBe(false);
    expect(checkValidCpf("999.999.999-99")).toBe(false);
    expect(checkValidCpf("123.456.789-10")).toBe(false);
  });

  it("should return true for valid CPFs", () => {
    expect(checkValidCpf("123.456.789-09")).toBe(true);
    expect(checkValidCpf("98765432100")).toBe(true);
    expect(checkValidCpf("529.982.247-25")).toBe(true);
  });
});

describe("checkValidCpfAndCnpj", () => {
  it("should return false for invalid CPF", () => {
    expect(checkValidCpfAndCnpj("12345678900")).toBe(false);
  });

  it("should return false for invalid CNPJ", () => {
    expect(checkValidCpfAndCnpj("12345678901234")).toBe(false);
  });

  it("should return true for valid CPF", () => {
    expect(checkValidCpfAndCnpj("12345678909")).toBe(true);
  });
});
