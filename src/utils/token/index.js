import Cookies from "universal-cookie";

const cookies = new Cookies();

export const ACCESS_TOKEN = "IB-ACCESS-TOKEN";
export const REFRESH_TOKEN = "IB-REFRESH-TOKEN";
export const SESSION_EXPIRATION = "SESSION_EXPIRES_IN";

export const setAccessToken = token => {
  cookies.set(ACCESS_TOKEN, token, { path: "/" });
};

export const getAccessToken = () => {
  return cookies.get(ACCESS_TOKEN);
};

export const setRefreshToken = token => {
  cookies.set(REFRESH_TOKEN, token, { path: "/" });
};

export const getRefreshToken = () => {
  return cookies.get(REFRESH_TOKEN);
};

export const setSessionExpirationTime = time => {
  cookies.set(SESSION_EXPIRATION, time);
};

export const getSessionExpirationTime = () => {
  return cookies.get(SESSION_EXPIRATION);
};
