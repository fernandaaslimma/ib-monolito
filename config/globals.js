// Global variables //

if (window !== undefined) {
  global.__SERVER__ = window.SERVER || true;
  global.__STATICS__ = window.STATICS || "";
  global.__API__ = window.API || "https://api.dev.bocombbm.com.br";
  global.__EXCHANGE_TIMER_DURATION__ = window.EXCHANGE_TIMER_DURATION || 180;
  global.__PORT__ = window.PORT || "";
  global.__HOST__ = window.HOST || "";
  global.__APISENSEDIA__ = window.PISENSEDIA || "";
  global.__FRONT_VERSION__ = window.FRONT_VERSION || "";
  global.__SHOW_WIRETRANSFER_CONTENT_MOBILE__ =
    window.SHOW_WIRETRANSFER_CONTENT_MOBILE || "";
  global.__SHOW_STATEMENTS_CONTENT_MOBILE__ =
    window.SHOW_STATEMENTS_CONTENT_MOBILE || "";
  global.__SHOW_SUITABILITY_CONTENT_MOBILE__ =
    window.SHOW_SUITABILITY_CONTENT_MOBILE || "";
  global.__IMPERSONATE_REDIRECT_URL__ = window.IMPERSONATE_REDIRECT_URL || "";
  global.__SHOW_EDITABLE_REGISTRATION_CONTENT_MOBILE__ =
    window.SHOW_EDITABLE_REGISTRATION_CONTENT_MOBILE || "";
  global.__ERROR_LOG_URL__ = window.ERROR_LOG_URL || "";
  global.__DISABLE_DATE_END_OF_YEAR_UTC_MILISECOND__ =
    window.DISABLE_DATE_END_OF_YEAR_UTC_MILISECOND || 0;
}
