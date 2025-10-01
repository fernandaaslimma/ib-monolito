import fetchHandler from "../../utils/fetchHandler";
import store from "../../utils/store";

export function fetchTokenApi(headers) {
  return new Promise((resolve, reject) => {
    fetch(`${__API__}/spa/token`, {
      method: "POST",
      headers,
      credentials: "include"
    })
      .then(resp => {
        if (resp.status >= 400) {
          reject(resp);
        }
        resolve(resp);
      })
      .catch(reject);
  });
}
function fetchImpersonateTokenApi(headers) {
  return new Promise((resolve, reject) => {
    fetch(`${__API__}/spa/token/impersonate`, {
      method: "POST",
      headers,
      credentials: "include"
    })
      .then(resp => {
        if (resp.status >= 400) {
          reject(resp);
        }
        resolve(resp);
      })
      .catch(reject);
  });
}

export const signIn = (email, password) => {
  const base64 = btoa(`${email}:${password}`);
  const headers = new Headers({
    Authorization: `Basic ${base64}`
  });
  return fetchTokenApi(headers);
};

export const autoSignInFromMobileHash = hashToken => {
  const headers = new Headers({
    "authorization-code": hashToken
  });
  return fetchTokenApi(headers);
};

export const autoSignInFromImpersonateHash = hashToken => {
  const headers = new Headers({
    "authorization-code": hashToken
  });
  return fetchImpersonateTokenApi(headers);
};

export const preflightForInternetExplorer = (email, password) => {
  const base64 = btoa(`${email}:${password}`);
  const headers = new Headers({
    Authorization: `Basic ${base64}`
  });
  const noParams =
    email && email.length === 0 && password && password.length === 0;
  return fetch(`${__API__}/spa/token`, {
    method: "POST",
    headers: !noParams ? headers : {},
    credentials: "include"
  });
};

export const logout = () => {
  return fetchHandler(`${__API__}/spa/logout`, {
    method: "POST"
  });
};

export const getUserData = () =>
  fetchHandler(`${__API__}/ibusermanagement/v1/people/userinfo`);

export const getInfo = () => fetchHandler(`${__API__}/esign/v1/api/info`);

export const refreshToken = () => {
  const state = store.getState();
  const userInfo = state.userInfo;
  const API =
    userInfo.impersonate && userInfo.impersonate.name
      ? `${__API__}/spa/token/impersonate`
      : `${__API__}/spa/token`;

  return fetchHandler(
    API,
    {
      method: "POST"
    },
    {
      refresh: false
    }
  );
};
