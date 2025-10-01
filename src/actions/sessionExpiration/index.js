import { refreshToken } from "../../services/login";
import { checkViewContextAndRedirect } from "../../utils/fetchHandler";
import { setAccessToken, setRefreshToken } from "../../utils/token";

export default () => ({
  updateAccessAndRefreshToken: () => {
    return refreshToken()
      .then(resp => resp.json())
      .then(resp => {
        if (resp.access_token && resp.refresh_token) {
          setAccessToken(resp.access_token);
          setRefreshToken(resp.refresh_token);

          return {
            left: resp.session_expires_in
          };
        }
      })
      .catch(() => {
        checkViewContextAndRedirect();
      });
  }
});
