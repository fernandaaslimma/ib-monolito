import fetchHandler from "../../utils/fetchHandler";

export const getAccounts = (byOldAPI, allAccounts, accountGroups) => {
  try {
    return byOldAPI
      ? fetchHandler(`${__API__}/clientportfolio/v1/cashaccounts`)
      : allAccounts
      ? fetchHandler(
          `${__API__}/cashmanagement/v1/cashaccounts?allAccounts=true`
        )
      : accountGroups
      ? fetchHandler(
          `${__API__}/cashmanagement/v1/cashaccounts?accountGroups=${accountGroups.join(
            "&accountGroups="
          )}`
        )
      : fetchHandler(`${__API__}/cashmanagement/v1/cashaccounts`);
  } catch (error) {
    return { error };
  }
};

export const getBalance = (accountId, byOldAPI) => {
  try {
    return byOldAPI
      ? fetchHandler(
          `${__API__}/clientportfolio/v1/cashaccounts/${accountId}/balance`
        )
      : fetchHandler(
          `${__API__}/cashmanagement/v1/cashaccounts/${accountId}/balance`
        );
  } catch (error) {
    return { error };
  }
};

export const getEquities = () => {
  try {
    return fetchHandler(`${__API__}/clientportfolio/v1/equity/position`);
  } catch (error) {
    return { error };
  }
};

export const getFixedIncome = () => {
  try {
    return fetchHandler(`${__API__}/clientportfolio/v1/fixedincome/position`);
  } catch (error) {
    return { error };
  }
};

export const getFunds = param => {
  const params = param && param.groupBy ? `?groupBy=${param.groupBy}` : "";

  try {
    return fetchHandler(
      `${__API__}/clientportfolio/v1/funds/position${params}`
    );
  } catch (error) {
    return { error };
  }
};

export const getTotalByType = type => {
  try {
    if (type) {
      return fetchHandler(
        `${__API__}/clientportfolio/v1/consolidated/totals/position?assetType=${type}`
      );
    }
    return fetchHandler(
      `${__API__}/clientportfolio/v1/consolidated/totals/position`
    );
  } catch (error) {
    return { error };
  }
};

export const getAssets = type => {
  try {
    if (type) {
      return fetchHandler(
        `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetName&assetType=${type}`
      );
    }
    return fetchHandler(
      `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetName`
    );
  } catch (error) {
    return { error };
  }
};

export const getAssetsClass = type => {
  try {
    if (type) {
      return fetchHandler(
        `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass&assetType=${type}`
      );
    }
    return fetchHandler(
      `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass`
    );
  } catch (error) {
    return { error };
  }
};

export const getLcaTotal = () => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/total`
    );
  } catch (error) {
    return { error };
  }
};

export const getValuesSuggestion = (priorityType, withdrawalValue) => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/suggestedvalues/${priorityType}/${withdrawalValue}`
    );
  } catch (error) {
    return { error };
  }
};

export const getPriorityTypesAPI = () => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/prioritytypes`
    );
  } catch (error) {
    return { error };
  }
};

export const postLcaDetailsAPI = body => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/details`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};

export const getAllLcaDetailsAPI = body => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/all/details/${body}`
    );
  } catch (error) {
    return { error };
  }
};

export const postToWithdrawalAPI = async body => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/withdraw`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        fetchRetry: 4,
        usesIdempotencyKey: true
      }
    );
  } catch (error) {
    throw { error };
  }
};

export const postToAproveWithdrawalAPI = body => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/approve`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch (error) {
    return { error };
  }
};
export const getBalanceHistory = (id, { range }) => {
  try {
    return fetchHandler(
      `${__API__}/cashmanagement/v1/cashaccounts/${id}/balance-history?dateFrom=${range.from}&dateTo=${range.to}`
    );
  } catch (error) {
    return { error };
  }
};

export const getCnab = (id, dateFrom, dateTo) =>
  fetchHandler(
    `${__API__}/cashmanagement/v1/cashaccounts/${id}/statement/cnab?dateFrom=${dateFrom}&dateTo=${dateTo}`
  );

export const getEvents = (
  id,
  { range, limit, offset, onlyDaysWithTransaction, showFutureTransactions }
) => {
  try {
    return !limit && !offset
      ? fetchHandler(
          `${__API__}/cashmanagement/v1/cashaccounts/${id}/statement?dateFrom=${range.from}&dateTo=${range.to}&onlyDaysWithTransactions=${onlyDaysWithTransaction}&showFutureTransactions=${showFutureTransactions}`
        )
      : fetchHandler(
          `${__API__}/cashmanagement/v1/cashaccounts/${id}/statement?dateFrom=${range.from}&dateTo=${range.to}&limit=${limit}&offset=${offset}&onlyDaysWithTransactions=${onlyDaysWithTransaction}&showFutureTransactions=${showFutureTransactions}`
        );
  } catch (error) {
    return error;
  }
};

export const createFixedIncomeRedemptionAPI = body => {
  try {
    return fetchHandler(`${__API__}/torfixedincome/v1/redemptions`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      usesIdempotencyKey: true
    });
  } catch (error) {
    throw { error };
  }
};

export const getLimitLca = () => {
  try {
    return fetchHandler(
      `${__API__}/investmentmanagementbff/v1/api/fixedincome/information/basicinfo`
    );
  } catch (error) {
    throw { error };
  }
};
