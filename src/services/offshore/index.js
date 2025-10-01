import fetchHandler from "../../utils/fetchHandler";

export const getOffshoreAccount = () => {
  try {
    return fetchHandler(`${__API__}/cashmanagementoffshore/v1/accounts`);
  } catch (error) {
    throw { error };
  }
};

export const getOffshorePosition = () => {
  try {
    return fetchHandler(
      `${__API__}/clientportfoliooffshore/v1/investments-offshore/position`
    );
  } catch (error) {
    throw { error };
  }
};

export const getBalanceOffShore = (accountId, currency) => {
  try {
    return fetchHandler(
      `${__API__}/cashmanagementoffshore/v1/accounts/${accountId}/balance?currency=${currency}`
    );
  } catch (error) {
    return { error };
  }
};

export const statementOffShore = (
  accountNumber,
  currency,
  dateFrom,
  dateTo
) => {
  try {
    return fetchHandler(
      `${__API__}/cashmanagementoffshore/v1/accounts/${accountNumber}/statement?currency=${currency}&dateFrom=${dateFrom}&dateTo=${dateTo}`
    );
  } catch (error) {
    return error;
  }
};

export const getInvestimentPositionOffShore = () => {
  try {
    return fetchHandler(`${__API__}/clientportfoliooffshore/v1/investments-offshore/position`);
  } catch (error) {
    return error;
  }
};

export const getTransactionsOffShore = ({
  dateFrom = "",
  dateTo = "",
  limit = 10,
  offset = 0,
  currency = ''
}) => {
  try {
    return fetchHandler(`${__API__}/clientportfoliooffshore/v1/investments-offshore/transactions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}&offset=${offset}&currency=${currency}`);
  } catch (error) {
    return error;
  }
};
