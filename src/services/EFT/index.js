import fetchHandler from "../../utils/fetchHandler";

export const getFavoreds = () => {
  try {
    return fetchHandler(`${__API__}/favored/v1/list`);
  } catch (error) {
    return { error };
  }
};

const commmonTransferHeaders = {
  method: "GET",
  credentials: "include",
  headers: new Headers({
    "Content-Type": "application/json"
  })
};

export const getTransferById = id => {
  try {
    return fetchHandler(
      `${__API__}/wiretransferrequest/v1/api/wiretransfer/${id}`,
      commmonTransferHeaders
    );
  } catch (error) {
    return { error };
  }
};

export const getTransfers = () => {
  try {
    return fetchHandler(
      `${__API__}/wiretransferrequest/v1/api/wiretransfer/statement`,
      commmonTransferHeaders
    );
  } catch (error) {
    return { error };
  }
};

export const getTransfersByType = ({ type }) => {
  try {
    return fetchHandler(
      `${__API__}/wiretransferrequest/v1/api/wiretransfer/statement?type=${type}`,
      commmonTransferHeaders
    );
  } catch (error) {
    return { error };
  }
};

export const getTransfersByPeriod = ({ type, unixStart, unixEnd }) => {
  try {
    return fetchHandler(
      `${__API__}/wiretransferrequest/v1/api/wiretransfer/statement?type=${type}&end=${unixStart}&end=${unixEnd}`,
      commmonTransferHeaders
    );
  } catch (error) {
    return { error };
  }
};

export const getApprovers = body => {
  try {
    return fetchHandler(
      `${__API__}/wiretransferrequest/v1/api/wiretransfer/approvement/flow`,
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

export const approveEFT = (transferOrderId, body, saveAccount = false) => {
  return approvementEFT(transferOrderId, true, body, saveAccount);
};

export const denyEFT = (transferOrderId, body, saveAccount = false) => {
  return approvementEFT(transferOrderId, false, body, saveAccount);
};

const approvementEFT = (
  transferOrderId,
  approve,
  body,
  saveAccount = false
) => {
  try {
    return fetchHandler(
      `${__API__}/wiretransferrequest/v1/api/wiretransfer/${transferOrderId}/approvement/${approve}/save/${saveAccount}`,
      {
        method: "PUT",
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

export const createEFT = body => {
  try {
    return fetchHandler(`${__API__}/wiretransferrequest/v1/api/wiretransfer`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  } catch (error) {
    return { error };
  }
};

export const getAvailableDateRanges = (date, service) => {
  try {
    return date
      ? fetchHandler(
          `${__API__}/calendar/v1/availabilityschedule?date=${date}&service=${service}`
        )
      : fetchHandler(
          `${__API__}/calendar/v1/availabilityschedule?service=${service}`
        );
  } catch (error) {
    return { error };
  }
};

export const getISPBList = () => {
  try {
    return fetchHandler(`${__API__}/cashmanagement/v1/banks`);
  } catch (error) {
    return { error };
  }
};

export const getFavoredAccounts = id => {
  try {
    return fetchHandler(
      `${__API__}/recipientaccountmanager/v1/RecipientAccount/cashaccount/${id}/recipients`
    );
  } catch (error) {
    return { error };
  }
};

export const deleteFavoredAccount = (
  accountId,
  recipientId,
  recipientAccountId
) => {
  try {
    return fetchHandler(
      `${__API__}/recipientaccountmanager/v1/recipientaccounts/cashaccounts/${accountId}/recipients/${recipientId}/accounts/${recipientAccountId}`,
      {
        method: "DELETE"
      }
    );
  } catch (error) {
    return { error };
  }
};

export const getLimit = () => {
  try {
    return fetchHandler(
      `${__API__}/wiretransferrequest/v1/api/wiretransfer/basicinfo`
    );
  } catch (error) {
    return { error };
  }
};
