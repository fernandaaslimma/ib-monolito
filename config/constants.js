const { join } = require("path");
require("./globals.js");

const PORT = __PORT__;
const HOST = __HOST__;
const API = __API__;
const APISENSEDIA = __APISENSEDIA__;
const FRONT_VERSION = __FRONT_VERSION__;
const SHOW_WIRETRANSFER_CONTENT_MOBILE =
  __SHOW_WIRETRANSFER_CONTENT_MOBILE__;
const SHOW_STATEMENTS_CONTENT_MOBILE =
  __SHOW_STATEMENTS_CONTENT_MOBILE__;
const SHOW_SUITABILITY_CONTENT_MOBILE =
  __SHOW_SUITABILITY_CONTENT_MOBILE__;
const IMPERSONATE_REDIRECT_URL = __IMPERSONATE_REDIRECT_URL__;
const ERROR_LOG_URL = __ERROR_LOG_URL__;
const SHOW_EDITABLE_REGISTRATION_CONTENT_MOBILE =
  __SHOW_EDITABLE_REGISTRATION_CONTENT_MOBILE__;
const EXCHANGE_TIMER_DURATION = __EXCHANGE_TIMER_DURATION__;
const DISABLE_DATE_END_OF_YEAR_UTC_MILISECOND = __DISABLE_DATE_END_OF_YEAR_UTC_MILISECOND__;

module.exports = {
  PATHS: {
    NODE_MODULES: join(__dirname, "..", "node_modules"),
    CLIENT: join(__dirname, "..", "src", "client"),
    SERVER: join(__dirname, "..", "src", "server"),
    SRC: join(__dirname, "..", "src"),
    COMPONENTS: join(__dirname, "..", "src", "components"),
    PUBLIC: join(__dirname, "..", "public"),
    SERVER_BUILD: join(__dirname, "..", "build")
  },
  URLS: {
    LOCALHOST: `http://${HOST || "localhost"}:${PORT || "9000"}`,
    API: API || "https://api.dev.bocombbm.com.br",
    APISENSEDIA: APISENSEDIA || "https://api.dev.bocombbm.com.br",
  },
  FRONT_VERSION,
  SHOW_WIRETRANSFER_CONTENT_MOBILE,
  SHOW_STATEMENTS_CONTENT_MOBILE,
  SHOW_SUITABILITY_CONTENT_MOBILE,
  IMPERSONATE_REDIRECT_URL,
  ERROR_LOG_URL,
  SHOW_EDITABLE_REGISTRATION_CONTENT_MOBILE,
  EXCHANGE_TIMER_DURATION,
  DISABLE_DATE_END_OF_YEAR_UTC_MILISECOND
};
