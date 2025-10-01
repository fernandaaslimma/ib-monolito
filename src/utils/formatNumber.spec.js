import formatNumber, {
  formatNumberWithoutCurrency,
  formatCPF,
  formatCNPJ,
  extractNumber,
  formatDocument,
  formatHideDocument
} from "./formatNumber";

jest.mock("../utils/i18n");

const getLanguageMock = require("../utils/i18n").getLanguage;

describe("formatNumber", () => {
  it("Should format a number as default currency", () => {
    getLanguageMock.mockImplementation(jest.fn(() => "pt-BR"));
    expect(formatNumber(321831290)).toBe("321.831.290");
  });

  it("Should call getLanguage to get current user language code", () => {
    const getLanguageMockSpy = jest.fn(() => "pt-BR");

    getLanguageMock.mockImplementation(getLanguageMockSpy);
    formatNumber(321831290);

    expect(getLanguageMockSpy).toHaveBeenCalled();
  });

  it("Should format a number as BRL currency", () => {
    getLanguageMock.mockImplementation(() => "pt-BR");
    expect(formatNumber(321831290, { currency: "BRL" })).toBe(
      "R$ 321.831.290,00"
    );
  });

  it("Should format a number as USD currency", () => {
    getLanguageMock.mockImplementation(() => "en-US");
    expect(formatNumber(321831290, { currency: "USD" })).toBe(
      "$321,831,290.00"
    );
  });

  it("Should format a number with two digits", () => {
    expect(formatNumber(321831290, { digits: 2 })).toBe("321,831,290.00");
  });

  it("Should format a number with one digits", () => {
    expect(formatNumber(321831290, { digits: 1 })).toBe("321,831,290.0");
  });
});

describe("formatNumberWithSpace", () => {
  it("Should format a number with two digits", () => {
    expect(formatNumberWithoutCurrency(321831290, { digits: 2 })).toBe(
      "321,831,290.00"
    );
  });
  it("Should format a number as USD currency", () => {
    getLanguageMock.mockImplementation(() => "en-US");
    expect(formatNumber(321831290, { digits: 2 })).toBe("321,831,290.00");
  });
});

describe("formatCPF", () => {
  it("Should formart with cpf mask", () => {
    expect(formatCPF(12861555812)).toBe("128.615.558-12");
  });
});

describe("formatCNPJ", () => {
  it("Should formart with CNPJ mask", () => {
    expect(formatCNPJ(99123321000112)).toBe("99.123.321/0001-12");
  });
});

describe("extractNumber", () => {
  it("Should extract only number", () => {
    expect(extractNumber("123---456..,,,78")).toBe("12345678");
  });
});

describe("formatDocument", () => {
  it("Should formart with CNPJ mask", () => {
    expect(formatDocument(99123321000112)).toBe("99.123.321/0001-12");
  });

  it("Should formart with CPF mask", () => {
    expect(formatDocument(11111111111)).toBe("111.111.111-11");
  });
});

describe("formatHideDocument", () => {
  it("Should formart with CNPJ mask", () => {
    expect(formatHideDocument(99123321000112)).toBe("**.123.321/0001-**");
  });

  it("Should formart with CPF mask", () => {
    expect(formatHideDocument(11111111111)).toBe("***.111.111-**");
  });
});
