import fetchHandler from "../../utils/fetchHandler";

export const getFixedIncomeTransactions = (
  dateFrom = "",
  dateTo = "",
  offset = 0,
  limit = 10
) =>
  fetchHandler(
    `${__API__}/clientportfolio/v1/fixedincome/transactions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}&offset=${offset}`
  );

export const getEquityIncomeTransactions = (
  dateFrom = "",
  dateTo = "",
  offset = 0,
  limit = 10
) =>
  fetchHandler(
    `${__API__}/clientportfolio/v1/equity/transactions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}&offset=${offset}`
  );

export const getFundsIncomeTransactions = (
  dateFrom = "",
  dateTo = "",
  offset = 0,
  limit = 10
) =>
  fetchHandler(
    `${__API__}/clientportfolio/v1/funds/transactions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}&offset=${offset}`
  );

export const getCashAccountTransactions = (cashAccountId, dateFrom, dateTo) =>
  fetchHandler(
    `${__API__}/clientportfolio/v1/cashaccounts/${cashAccountId}/events?dateFrom=${dateFrom}&dateTo=${dateTo}`
  );

export const getUserCashAccount = () =>
  fetchHandler(`${__API__}/clientportfolio/v1/cashaccounts`);

export const getAccountBalanceByDate = (cashAccountId, date) =>
  fetchHandler(
    `${__API__}/clientportfolio/v1/cashaccounts/${cashAccountId}/balance-history?date=${date}`
  );
