import store from "../store";

export function userIsLoaded() {
  const { userInfo } = store.getState();
  return !!(userInfo && userInfo.email);
}
