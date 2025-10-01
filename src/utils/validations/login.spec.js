import { checkValidEmail, checkValidPassword } from "./login";

describe("checkValidEmail", () => {
  it("Should return false when email is empty", () => {
    expect(checkValidEmail("")).toBeFalsy();
  });

  it("Should return false when email has no @", () => {
    expect(checkValidEmail("asdasd.com")).toBeFalsy();
  });

  it("Should return false when email has two @", () => {
    expect(checkValidEmail("asd@asd@asd.com")).toBeFalsy();
  });

  it("Should return false when email has no domain", () => {
    expect(checkValidEmail("asd@com")).toBeFalsy();
  });

  it("Should return false when email has space", () => {
    expect(checkValidEmail("asd@asas.com ")).toBeFalsy();
  });

  it("Should return false when email has comma", () => {
    expect(checkValidEmail("asd@asd,asd.com")).toBeFalsy();
  });

  it("Should return true when email is valid", () => {
    expect(checkValidEmail("asd@asd.com")).toBeTruthy();
  });
});

describe("checkValidPassword", () => {
  it("Should return false when password is empty", () => {
    expect(checkValidPassword("")).toBeFalsy();
  });

  it("Should return false when password is smaller than 8 caracteres", () => {
    expect(checkValidPassword("1234567")).toBeFalsy();
  });

  it("Should return true password have exactly 8 caracteres", () => {
    expect(checkValidPassword("12345678")).toBeTruthy();
  });

  it("Should return true password is bigger than 6 caracteres", () => {
    expect(checkValidPassword("123456789")).toBeTruthy();
  });
});
