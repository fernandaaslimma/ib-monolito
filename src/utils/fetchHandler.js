import fetch from "isomorphic-fetch";
import { generate } from "shortid";
import { v4 as uuidv4 } from "uuid";

import { refreshToken } from "../services/login";
import { URLS } from "../../config/constants";
import { hardRedirect } from "./redirect";
import connectionCheck from "./connectionCheck";
import { getLanguage } from "./i18n/i18n";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  setSessionExpirationTime
} from "./token";
import store from "../utils/store";

const { LOCALHOST } = URLS;

const INCLUDE = "include";
const HTTP = "http";
const CULTURE = "Culture";

const stopRetriesCodes = [422];

export function formatUrl(path) {
  const isRelative = !path.includes(HTTP);
  const isServerSide = __SERVER__;

  return isServerSide && isRelative ? LOCALHOST + path : path;
}

let isRefreshing = false;

export function checkViewContextAndRedirect() {
  typeof MOBILEAPP_Logout === "function"
    ? MOBILEAPP_Logout() // eslint-disable-line
    : hardRedirect("/");
}

export function treating401status({
  payload,
  resolve,
  reject,
  url,
  options,
  refresh,
  retry = false
}) {
  if (isRefreshing) {
    setTimeout(() => {
      treating401status({
        payload,
        resolve,
        reject,
        url,
        options,
        refresh,
        retry: true
      });
    }, 500);
  } else {
    isRefreshing = true;
    if (retry) {
      isRefreshing = false;
      options.fetchRetry = 0;
      fetchHandler(url, options, {
        refresh: true
      })
        .then(resolve)
        .catch(reject);
    } else {
      refreshToken()
        .then(resp => resp.json())
        .then(resp => {
          isRefreshing = false;
          if (resp.access_token && resp.refresh_token) {
            setAccessToken(resp.access_token);
            setRefreshToken(resp.refresh_token);
            setSessionExpirationTime(resp.session_expires_in);
            options.fetchRetry = 0;
            fetchHandler(url, options, {
              refresh: true
            })
              .then(resolve)
              .catch(reject);
          } else {
            store.reset();
            checkViewContextAndRedirect();
            reject(resp);
          }
        })
        .catch(e => {
          isRefreshing = false;
          checkViewContextAndRedirect();
          reject(e);
        });
    }
  }
}

export function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}

export function getHeaders(headers, refresh) {
  if (headers) {
    headers.set(
      "Authorization",
      `Bearer ${refresh ? getAccessToken() : getRefreshToken()}`
    );
    return headers;
  }
  return new Headers({
    Authorization: `Bearer ${refresh ? getAccessToken() : getRefreshToken()}`
  });
}

export const injectDelay = time => data =>
  new Promise(resolve => setTimeout(() => resolve(data), time));

export default function fetchHandler(
  url,
  options = {},
  config = { refresh: true }
) {
  const fetchMethod = options.method || "DEFAULT";
  // This header is injected in each first request
  // and reused while in retry atempts, and can be
  // used to guarantee transactions idempotency in
  // API's that support this resource
  if (!options.fetchAttempting) {
    if (options.usesIdempotencyKey) {
      options.headers ? null : (options.headers = new Headers({}));
      options.headers.set("X-Idempotency-Key", uuidv4());
    }

    if (fetchMethod === "GET" || fetchMethod === "DEFAULT") {
      options.fetchRetry =
        options.fetchRetry === 0 ? 0 : options.fetchRetry || 1;
    } else {
      options.fetchRetry =
        options.fetchRetry === 0 ? 0 : options.fetchRetry || 0;
    }
  }

  return doFetch(url, options, config)
    .catch(async err => {
      if (stopRetriesCodes.includes(err.status) && options.fetchRetry >= 1) {
        options.fetchRetry = 0;
      }
      if (options.fetchRetry >= 1) {
        options.fetchRetry = options.fetchRetry - 1;
        options.fetchAttempting = true;
        return injectDelay(5000 / (options.fetchRetry + 1))().then(() =>
          fetchHandler(url, options, config)
        );
      } else {
        await connectionCheck();
        throw err;
      }
    })
    .then(resp => {
      return resp;
    });
}

export function doFetch(url, options = {}, config = { refresh: true }) {
  const { refresh } = config;
  const credentials = options.credentials || INCLUDE;
  const headers = getHeaders(options.headers, refresh);
  const fetchMethod = options.method || "DEFAULT";

  return new Promise((resolve, reject) => {
    const fetchOptions = { ...options, credentials, headers };
    const isomorphicPath = formatUrl(url);
    const path = updateQueryStringParameter(
      isomorphicPath,
      CULTURE,
      getLanguage()
    );

    // this random hash is appended to all request to
    // prevent any source of browser caching, since
    // IE11 and older browsers don't support fetch
    // caching API
    const updatePath = updateQueryStringParameter(
      path,
      "randomHash",
      generate()
    );
    fetch(updatePath, fetchOptions)
      .then(resp => {
        if (resp.status < 400 || resp.status === 401) {
          if (resp.status === 401 && refresh) {
            treating401status({
              payload: resp,
              resolve,
              reject,
              url: path,
              options: { ...options, credentials },
              refresh
            });
          } else {
            resolve(resp);
          }
        } else {
          if (resp.status === 422 || resp.status === 400) {
            let rawResponse = resp.clone();
            resp.json().then(response => {
              const { status, url } = rawResponse;
              return reject({ ...response, status, url });
            });
          } else {
            reject(resp);
          }
        }
      })
      .catch(error => {
        navigator.onLine
          ? reject(error)
          : fetchMethod === "GET" || fetchMethod === "DEFAULT"
          ? reject({ typeError: "Offline", fetchMethod: "GET", url })
          : reject({ typeError: "Offline", fetchMethod, url });
      });
  });
}
