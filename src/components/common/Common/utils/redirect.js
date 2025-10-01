import history from "../services/history";

export const hardRedirect = url =>
  typeof window === "object" && window.location.assign(url);

export const redirect = url => history.push(url);
