import React, { Component } from "react";
import {
  IS_CLIENT,
  EN_US,
  PT_BR_DATE_FORMAT,
  EN_US_DATE_FORMAT,
  PT_BR_DATE_PARSER,
  EN_US_DATE_PARSER,
  PT_BR_DAY_MONTH_FORMAT,
  EN_US_DAY_MONTH_FORMAT,
  PT_BR_SHORT_DATE_FORMAT,
  EN_US_SHORT_DATE_FORMAT,
  PT_BR_24H_FORMAT,
  EN_US_AM_PM_FORMAT
} from "../constants";

let data = {};
let language;

export const storedLanguage =
  IS_CLIENT && sessionStorage.getItem("preferredLanguage");

export const INITIAL_LANGUAGE = storedLanguage || EN_US;

export function setTranslations(translations) {
  data = translations;
  return data;
}

export function setLanguage(lang) {
  language = lang;
  IS_CLIENT && sessionStorage.setItem("preferredLanguage", lang);

  return language;
}

export function getLanguage() {
  const selectedLanguage = language === "keys" ? "en-US" : language;
  return selectedLanguage;
}

export function getStorageLanguage() {
  return language;
}

export function isPtBR() {
  return language === "pt-BR";
}

export function isEnUS() {
  return language === "en-US";
}

export function isZhCN() {
  return language === "zh-CN";
}

export async function bootstrap(lang = INITIAL_LANGUAGE) {
  setLanguage(lang);

  const i18nStatus = await import(`../../../i18n/${lang}.json`);

  return setTranslations(i18nStatus);
}

export function translate(name, additional = false) {
  return additional ? `${data[name]} ${data[additional]}` : data[name];
}

export const getShortDateByLocale = () =>
  isPtBR() ? PT_BR_SHORT_DATE_FORMAT : EN_US_SHORT_DATE_FORMAT;

export const getDateFieldPlaceholderByLocale = () =>
  isPtBR() ? PT_BR_DATE_FORMAT : EN_US_DATE_FORMAT;

export const getDateFieldParserLocale = () =>
  isPtBR() ? PT_BR_DATE_PARSER : EN_US_DATE_PARSER;

export const getDayMonthFieldFormatterByLocale = () =>
  isPtBR() ? PT_BR_DAY_MONTH_FORMAT : EN_US_DAY_MONTH_FORMAT;

export const getSufixFormatHourByLocate = () =>
  isPtBR() ? PT_BR_24H_FORMAT : EN_US_AM_PM_FORMAT;

export const withI18n = WrappedComponent => {
  class I18nWrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        done: false
      };
    }

    setLanguage(lang = INITIAL_LANGUAGE) {
      setLanguage(lang);
      this.setState({ done: false });

      return bootstrap(lang);
    }

    async componentDidMount() {
      const self = this;

      this.unlistenLanguage = this.props.subscribe(async function(state) {
        if (IS_CLIENT && sessionStorage.getItem("preferredLanguage")) return;

        const languageProp =
          state.userInfo && state.userInfo.preferredLanguage
            ? state.userInfo.preferredLanguage
            : INITIAL_LANGUAGE;

        await self.setLanguage(languageProp);
        self.setState({ done: true });

        return languageProp;
      });

      await this.setLanguage();
      this.setState({ done: true });
    }

    async componentWillUnmount() {
      this.unlistenLanguage();
    }

    render() {
      if (!this.state.done) {
        return null;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return I18nWrapper;
};
