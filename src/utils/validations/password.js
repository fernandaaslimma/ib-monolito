export const checkIsValidPassword = text =>
  typeof text === "string" && text.length === 8;

export const generateErrors = createPassword => {
  let error = {};

  const isValidPassword = checkIsValidPassword(createPassword.password);
  error.password = !isValidPassword;

  const isValidPasswordConfirmation = checkIsValidPassword(
    createPassword.passwordConfirmation
  );
  error.passwordConfirmation = !isValidPasswordConfirmation;

  error.passwordMatch =
    isValidPassword &&
    isValidPasswordConfirmation &&
    createPassword.password !== createPassword.passwordConfirmation;

  return error;
};

export const generateBackendErrors = (errors = []) => {
  const error = errors[0];
  if (error) {
    switch (error.code) {
      case 100: {
        return {
          sequentialPasswords: true
        };
      }
      case 101: {
        return {
          birthdayOrSSN: true
        };
      }
      case 102: {
        return {
          fourAlgarisms: true
        };
      }
      case 200: {
        return {
          infoUnmatch: true
        };
      }
      default: {
        return {
          default: true
        };
      }
    }
  }
  return {
    default: true
  };
};

export const checkIfErrorsExist = errorsList => {
  return Object.values(errorsList).filter(Boolean).length > 0;
};
