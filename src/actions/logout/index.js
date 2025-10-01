import * as loginAPI from "../../services/login";
import { setAccessToken, setRefreshToken } from "../../utils/token";

const actions = store => ({
  doLogout: state => {
    store.setState({ skipLoading: true });

    return loginAPI
      .logout()
      .then(() => {
        setAccessToken("");
        setRefreshToken("");

        store.setState({
          isLogged: false,
          loginSuccess: false,
          skipLoading: false
        });
      })
      .catch(() => {
        store.setState({
          isLogged: state.isLogged,
          loginSuccess: state.loginSuccess,
          skipLoading: false
        });
      })
      .then(() => {
        store.reset();
      });
  }
});

export default actions;
