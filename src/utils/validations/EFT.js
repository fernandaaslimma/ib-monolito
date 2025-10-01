import moment from "moment";
import { unFormatNumber } from "../formatNumber";
import {
  getDateFieldParserLocale,
  getDateFieldPlaceholderByLocale
} from "../i18n";

export const checkDate = (date, byPlaceholderLocale = false, serverTime) => {
  const parser = byPlaceholderLocale
    ? getDateFieldPlaceholderByLocale()
    : getDateFieldParserLocale();
  if (date) {
    const transactionDate = moment(serverTime)
      .utcOffset(-3)
      .startOf("day");
    const newDate = moment(date, parser)
      .utcOffset(-3, true)
      .startOf("day");
    const result =
      newDate instanceof moment &&
      newDate.isSameOrAfter(transactionDate, "day");
    return result;
  }
  return null;
};

export const isToday = (date, unixReference) => {
  const thisDay = moment(unixReference) //GMT -3
    .utcOffset(-3)
    .startOf("day");
  const inputedDate = moment
    .utc(date, getDateFieldParserLocale())
    .utcOffset(-3, true)
    .startOf("day");
  const result = thisDay.diff(inputedDate, "day") === 0;

  return result;
};

export const checkValue = value => {
  if (value) {
    return unFormatNumber(value) > 0;
  }
  return null;
};

export const checkFavored = favored => {
  if (favored) {
    return favored.length >= 5;
  }
  return null;
};

export const checkBank = (bank, list) => {
  if (bank) {
    const result = list.find(
      item => item.name.toLowerCase() === bank.toLowerCase()
    );

    return result;
  }
  return null;
};

export const checkAgency = agency => {
  if (agency) {
    return agency.length > 2;
  }
  return null;
};

export const checkAccount = account => {
  if (account) {
    return account.length > 2;
  }
  return null;
};

export const checkVerifyDigit = digit => {
  if (digit) {
    return digit.length > 0;
  }
  return null;
};

export const checkOriginAccount = number => {
  if (number) {
    return number.length > 0;
  }
  return null;
};

export const hasAvailableBalance = (originAccount, transferData, accounts) => {
  const value = Number.parseFloat(unFormatNumber(transferData.value));
  const balance = accounts.find(c => c.accountNumber === originAccount.number)
    .availableBalance;

  return balance >= value;
};
