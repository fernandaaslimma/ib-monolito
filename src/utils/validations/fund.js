import moment from "moment";
import {
  getDateFieldParserLocale,
  getDateFieldPlaceholderByLocale
} from "../i18n";

export const checkDate = (date, serverTime, byPlaceholderLocale = false) => {
  const parser = byPlaceholderLocale
    ? getDateFieldPlaceholderByLocale()
    : getDateFieldParserLocale();
  if (date) {
    const funAplicationDate = moment(serverTime)
      .utcOffset(-3)
      .startOf("day")
      .format(parser);
    const newDate = moment(date)
      .utcOffset(-3, true)
      .startOf("day")
      .format(parser);
    const result = newDate === funAplicationDate;
    return result;
  }
  return null;
};
