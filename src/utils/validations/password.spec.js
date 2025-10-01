import {
  checkIsValidPassword,
  generateErrors,
  checkIfErrorsExist,
  generateBackendErrors
} from "./password";

describe("checkValidPassword", () => {
  it("Should return false when password is empty", () => {
    expect(checkIsValidPassword("")).toBeFalsy();
  });

  it("Should return false when password is smaller than 8 caracteres", () => {
    expect(checkIsValidPassword("1234567")).toBeFalsy();
  });

  it("Should return false and password is bigger than 8 caracteres", () => {
    expect(checkIsValidPassword("123456789")).toBeFalsy();
  });

  it("Should return true and password have 8 caracteres", () => {
    expect(checkIsValidPassword("12345678")).toBeTruthy();
  });
});

describe("checkIfErrorsExist", () => {
  it("Should return false when there are no errors", () => {
    expect(
      checkIfErrorsExist({ password: false, passwordConfirmation: false })
    ).toBe(false);
  });

  it("Should return true when there are errors", () => {
    expect(
      checkIfErrorsExist({ password: true, passwordConfirmation: false })
    ).toBe(true);
  });
});

describe("generateErrors", () => {
  it("Should generate an error object", () => {
    expect(
      generateErrors({
        password: "",
        passwordConfirmation: ""
      })
    ).toEqual({
      password: true,
      passwordConfirmation: true,
      passwordMatch: false
    });
  });
});

describe("generateBackendErrors", () => {
  it("Should return the default error when error list is empty", () => {
    expect(generateBackendErrors()).toEqual({ default: true });
  });

  it("Should return the sequentialPasswords error when error code is 100", () => {
    expect(generateBackendErrors([{ code: 100 }])).toEqual({
      sequentialPasswords: true
    });
  });

  it("Should return the birthdayOrSSN error when error code is 101", () => {
    expect(generateBackendErrors([{ code: 101 }])).toEqual({
      birthdayOrSSN: true
    });
  });

  it("Should return the fourAlgarisms error when error code is 102", () => {
    expect(generateBackendErrors([{ code: 102 }])).toEqual({
      fourAlgarisms: true
    });
  });

  it("Should return the default error otherwise", () => {
    expect(generateBackendErrors([{ code: 103 }])).toEqual({ default: true });
  });

  it("Should return the infoUnmatch error otherwise", () => {
    expect(generateBackendErrors([{ code: 200 }])).toEqual({
      infoUnmatch: true
    });
  });
});
