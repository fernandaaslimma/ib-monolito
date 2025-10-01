import { ISPB } from "./getBankISPB";

describe("ISPB", () => {
  it("should not be empty", () => {
    expect(ISPB).toBeTruthy();
    expect(Array.isArray(ISPB)).toBe(true);
    expect(ISPB.length).toBeGreaterThan(0);
  });
});
