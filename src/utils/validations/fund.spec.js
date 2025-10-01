import { checkDate } from "./fund";

describe("checkDate", () => {
  it("Should return null when date is empty", () => {
    expect(checkDate("")).toBe(null);
  });

  it("Should return null when date is incomplete", () => {
    expect(checkDate("undefined")).toBe(false);
  });

  it("Should return false when date is invalid", () => {
    expect(checkDate("14/04/2021", "15/04/2021")).toBe(false);
  });
});
