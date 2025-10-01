import { ISODateToBrFormat, ptBrToIso } from "./dateHelpers";

describe("dateUtils", () => {
  it("should convert ISO date to Brazilian format", () => {
    const isoDate = "2010-06-01T12:34:56Z";
    const expectedBrFormat = "01/06/2010";

    const brFormat = ISODateToBrFormat(isoDate);

    expect(brFormat).toEqual(expectedBrFormat);
  });

  it("should convert Brazilian date to ISO format", () => {
    const brDate = "01/06/2010";
    const expectedIsoFormat = "2010-06-01";

    const isoFormat = ptBrToIso(brDate);

    expect(isoFormat).toEqual(expectedIsoFormat);
  });
});
