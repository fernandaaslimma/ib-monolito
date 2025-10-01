import {
  generateErrors,
  checkIfErrorsExist,
  generateBackendErrors
} from "../../utils/validations/password";
import * as passwordAPI from "../../services/password";

const actions = store => ({
  handleUserInput: (state, e) => {
    const { name, value } = e.target;
    return {
      createPassword: {
        ...state.createPassword,
        error: {},
        [name]: value
      }
    };
  },
  handleUserSubmit: (_, e, otp, createPassword) => {
    e.preventDefault();

    const error = generateErrors(createPassword);
    const errorsExist = checkIfErrorsExist(error);

    if (errorsExist) {
      return {
        createPassword: {
          ...createPassword,
          error
        }
      };
    }

    return passwordAPI
      .createPassword(otp, {
        ...createPassword,
        document: createPassword.document.replace(/([-./])/g, "")
      })
      .then(() => {
        return {
          createPasswordSuccess: true,
          createPassword: {}
        };
      })
      .catch(error => {
        if (error.status === 403) {
          return {
            createPasswordSuccess: false,
            createPassword: {
              error: {
                retryLimitExceeded: true
              }
            }
          };
        }

        if (error.status === 401) {
          return {
            createPasswordSuccess: false,
            createPassword: {
              error: {
                otp: true
              }
            }
          };
        }

        error.json().then(e => {
          store.setState({
            createPasswordSuccess: false,
            createPassword: {
              error: generateBackendErrors(e.errors)
            }
          });
        });
      });
  }
});

export default actions;
