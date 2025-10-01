import { IS_CLIENT } from "../../utils/constants";

export default () => ({
  setLanguage: (state, preferredLanguage) => {
    IS_CLIENT && sessionStorage.clear();
    return {
      userInfo: {
        ...state.userInfo,
        preferredLanguage
      }
    };
  },
  clearLanguageWithoutClearSessionStorage: state => {
    return {
      userInfo: {
        ...state.userInfo,
        preferredLanguage: null
      }
    };
  }
});
