require("isomorphic-fetch");
require("jest-localstorage-mock");

const constantDate = new Date("2010-06-01T01:01:01");

/* eslint no-global-assign:off */
Date = class extends Date {
  constructor() {
    super();
    return constantDate;
  }
};

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

window.__API__ = "";
window.__APISENSEDIA__ = "";
window.__FRONT_VERSION__ = "";
window.__SHOW_WIRETRANSFER_CONTENT_MOBILE__ = "";
window.__SHOW_STATEMENTS_CONTENT_MOBILE__ = "";
window.__SHOW_SUITABILITY_CONTENT_MOBILE__ = "";
window.__IMPERSONATE_REDIRECT_URL__ = "";
window.__SHOW_EDITABLE_REGISTRATION_CONTENT_MOBILE__ = "";
window.__EXCHANGE_TIMER_DURATION__ = 180;
window.__DISABLE_DATE_END_OF_YEAR_UTC_MILISECOND__ = 0;

window.scrollTo = jest.fn();

Object.defineProperty(window.navigator, "userAgent", {
  value: "Fake userAgent"
});

jest.mock("shortid", () => ({
  generate: () => "hash"
}));
