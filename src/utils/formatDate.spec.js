import formatDate, {
  getMonthShortName,
  formatDateToLocale,
  formatToQuery,
  formatDateForDayPicker,
  formatHour,
  formatDateWithHour,
  getDateStringFromEpoch,
  formatDateTime
} from "./formatDate";

jest.mock("../utils/i18n", () => ({
  translate: id => id,
  getLanguage: jest.fn(),
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY",
  isZhCN: () => false,
  isPtBR: () => false
}));

const getLanguageMock = require("../utils/i18n").getLanguage;

describe("formatDate", () => {
  it("Should return '' when date is invalid", () => {
    expect(formatDate(null)).toBe("");
  });

  it.skip("Should format the date", () => {
    expect(formatDate("2010/01/01")).toBe("01/01/2010");
  });
});

describe("formatDateTIme", () => {
  it("Should return '' when date is invalid", () => {
    expect(formatDateTime(null)).toBe("");
  });

  it("Should format the date", () => {
    expect(formatDateTime("2010-01-06T01:01:44.5093538")).toBe(
      "06/01/2010 - 01:01 AM"
    );
  });
});

describe("formatDateToLocale", () => {
  it("Should return '' when date is invalid", () => {
    getLanguageMock.mockImplementation(jest.fn(() => "pt-BR"));
    expect(formatDateToLocale(null)).toBe("");
  });

  it("Should format the date without timezones", () => {
    getLanguageMock.mockImplementation(jest.fn(() => "pt-BR"));
    expect(formatDateToLocale("2010-06-01")).toBe("01/06/2010");
  });

  it("Should format the date with timezones", () => {
    getLanguageMock.mockImplementation(jest.fn(() => "pt-BR"));
    expect(formatDateToLocale("2010-06-01T12:18:44.3628354-03:00")).toBe(
      "01/06/2010"
    );
  });
});

describe("getMonthShortName", () => {
  it("Should return '' when date is invalid", () => {
    expect(getMonthShortName(null)).toBe("");
  });

  it("Should call getLanguage to get current user language code", () => {
    const getLanguageMockSpy = jest.fn(() => "en-US");

    getLanguageMock.mockImplementation(getLanguageMockSpy);
    getMonthShortName("2010/01/01");

    expect(getLanguageMockSpy).toHaveBeenCalled();
  });

  it.skip("Should return the short name of the month", () => {
    getLanguageMock.mockImplementation(() => "en-US");
    expect(getMonthShortName("2010/01/01")).toBe("Jan");
  });
});

describe("formatToQuery", () => {
  it("Should format the date", () => {
    expect(formatToQuery(new Date("2010-06-01T00:00:00"))).toBe("2010-06-01");
  });

  it("Should handle an empty value", () => {
    expect(formatToQuery()).toBe("");
  });
});

describe("formatDateForDayPicker", () => {
  it("Should format the date", () => {
    expect(formatDateForDayPicker(new Date("2010-06-01T00:00:00"))).toBe(
      "6/1/2010"
    );
  });

  it("Should handle an empty value", () => {
    expect(formatDateForDayPicker()).toBe("");
  });
});

describe("formatHour", () => {
  it("Should format the date", () => {
    expect(formatHour("20T10:25:10")).toBe("10:25");
  });

  it("Should handle an empty value", () => {
    expect(formatHour()).toBe("");
  });
});

describe("formatDateWithHour", () => {
  it("Should format the date", () => {
    expect(formatDateWithHour("2010-06-01T10:18:44.3645054-03:00")).toBe(
      "6/1/2010\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A010:18"
    );
  });

  it("Should handle an empty value", () => {
    expect(formatDateWithHour()).toBe("");
  });
});

describe("getDateStringFromEpoch", () => {
  it.skip("Should format the date", () => {
    expect(getDateStringFromEpoch(1709847711000)).toBe("03/07/2024");
  });

  it("Should handle an empty value", () => {
    expect(getDateStringFromEpoch()).toBe("");
  });
});
