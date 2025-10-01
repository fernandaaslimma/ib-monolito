import * as passwordAPI from "../../services/password";

const actions = () => ({
  handleUserInputRecoverPassword: (state, e) => {
    const { name, value } = e.target;
    return {
      recoverPassword: {
        ...state.recoverPassword,
        error: null,
        [name]: value
      }
    };
  },
  handleUserSubmit: (state, e) => {
    e.preventDefault();
    return passwordAPI
      .emailPassword(state.recoverPassword.email)
      .then(() => {
        return {
          recoverPasswordSuccess: true,
          recoverPassword: {
            ...state.recoverPassword
          }
        };
      })
      .catch(error => {
        return {
          recoverPasswordSuccess: false,
          recoverPassword: {
            ...state.recoverPassword,
            error
          }
        };
      });
  },
  cleanPasswordSuccess: () => {
    return {
      recoverPasswordSuccess: false,
      recoverPassword: {}
    };
  }
});

export default actions;
