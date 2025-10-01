import fetchHandler from "../../utils/fetchHandler";

export const getExchangeRecipientAccounts = () => {
  try {
    return fetchHandler(`${__API__}/torfx/v1/online-exchange/recipients`);
  } catch (error) {
    return { error };
  }
};

export const getExchangeTransactionsSimulation = ({
  originCurrency,
  targetCurrency,
  originTotal,
  targetTotal,
  type,
  nature
}) => {
  try {
    if (originTotal)
      return fetchHandler(
        `${__API__}/torfx/v1/online-exchange/transactions/simulation?originCurrency=${originCurrency}&targetCurrency=${targetCurrency}&originTotal=${originTotal}&type=${type}&fxNatureCode=${nature}`
      );
    if (targetTotal)
      return fetchHandler(
        `${__API__}/torfx/v1/online-exchange/transactions/simulation?originCurrency=${originCurrency}&targetCurrency=${targetCurrency}&targetTotal=${targetTotal}&type=${type}&fxNatureCode=${nature}`
      );
  } catch (error) {
    return { error };
  }
};

export const registerExchangeOperation = body => {
  try {
    return fetchHandler(`${__API__}/torfx/v1/online-exchange/transactions`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      fetchRetry: 4,
      usesIdempotencyKey: true
    });
  } catch (error) {
    return { error };
  }
};

export const getExchangeTransactions = body => {
  try {
    return fetchHandler(
      `${__API__}/torfx/v1/online-exchange/transactions/history?dateFrom=${body.dateFrom}&dateTo=${body.dateTo}`
    );
  } catch (error) {
    return { error };
  }
};

export const confirmTransactionExchange = (body, id) => {
  try {
    return fetchHandler(
      `${__API__}/torfx/v1/online-exchange/transactions/${id}/confirmation`,
      {
        method: "POST",
        body: JSON.stringify({
          message: body
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (exchangeError) {
    return { exchangeError };
  }
};
