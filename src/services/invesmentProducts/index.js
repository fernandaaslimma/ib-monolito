import fetchHandler from "../../utils/fetchHandler";

export const getInvestmentFunds = closedFunds => {
  try {
    return fetchHandler(
      `${__API__}/torfunds/v1/funds?ShowClosedFunds=${closedFunds.showClosedFunds}`
    );
  } catch (error) {
    return { error };
  }
};

export const getSubscriptionsPendencies = () => {
  try {
    return fetchHandler(
      `${__API__}/clientdocumentsubmission/v1/subscriptions/pendencies`
    );
  } catch (error) {
    return { error };
  }
};

export const createSubscription = body => {
  try {
    return fetchHandler(`${__API__}/torfunds/v1/subscriptions`, {
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

export const approveSubscription = (id, body) => {
  try {
    return fetchHandler(`${__API__}/torfunds/v1/subscriptions/${id}/confirm`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  } catch (error) {
    return { error };
  }
};

export const getPendingTransactions = () => {
  try {
    return fetchHandler(`${__API__}/tor/v1/pendingtransactions`);
  } catch (error) {
    return { error };
  }
};

export const getPendingTransactionsFunds = () => {
  try {
    return fetchHandler(`${__API__}/torfunds/v1/pendingtransactions`);
  } catch (error) {
    return { error };
  }
};

export const createRedemption = body => {
  try {
    return fetchHandler(`${__API__}/torfunds/v1/redemptions`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      fetchRetry: 4,
      usesIdempotencyKey: true
    });
  } catch (error) {
    throw { error };
  }
};

export const approveRedemption = (id, body) => {
  try {
    return fetchHandler(`${__API__}/torfunds/v1/redemptions/${id}/confirm`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  } catch (error) {
    return { error };
  }
};

export const downloadTerm = (id, unsuitableTerm) => {
  const options = {
    headers: new Headers({
      "X-Fetch-Type": "download/pdf",
      "X-File-Name": `${id}`
    })
  };
  return !unsuitableTerm
    ? fetchHandler(`${__API__}/productterms/fundos/${id}`, options)
    : fetchHandler(
        `${__API__}/productterms/fundos/desenquadramento/${id}`,
        options
      );
};
