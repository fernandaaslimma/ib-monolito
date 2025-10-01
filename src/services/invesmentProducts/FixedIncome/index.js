import fetchHandler from "../../../utils/fetchHandler";

export const getInvestmentFI = () => {
  try {
    return fetchHandler(`${__API__}/torfixedincome/v1/products`);
  } catch (error) {
    return { error };
  }
};

export const createSubscriptionFI = body => {
  try {
    return fetchHandler(`${__API__}/torfixedincome/v1/subscriptions`, {
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

export const approveSubscriptionFI = (id, body) => {
  try {
    return fetchHandler(
      `${__API__}/torfixedincome/v1/subscriptions/${id}/confirm`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    throw { error };
  }
};

export const getPendingTransactionsFI = () => {
  try {
    return fetchHandler(`${__API__}/torfixedincome/v1/pendingtransactions`);
  } catch (error) {
    return { error };
  }
};
