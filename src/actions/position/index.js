import * as positionAPI from "../../services/position";
import formatNumber from "../../utils/formatNumber";
import { translate } from "../../utils/i18n";
import {
  PAGINATION_TOTAL,
  DEFAULT_API_RESPONSE_DATE_FORMAT
} from "../../utils/constants";
import moment from "moment";

export default () => ({
  getAccounts: async (
    _,
    byOldAPI = false,
    allAccounts = false,
    accountGroups
  ) => {
    try {
      const rawAccounts = await positionAPI.getAccounts(
        byOldAPI,
        allAccounts,
        accountGroups
      );
      const responseAccounts = await rawAccounts.json();

      const accounts = await Promise.all(
        responseAccounts.map(async responseAccount => {
          const rawBalance = await positionAPI.getBalance(
            responseAccount.id,
            byOldAPI
          );

          if (rawBalance.status === 204) {
            return {
              account: responseAccount.id,
              accountNumber: `${responseAccount.bankCode} ${responseAccount.branch} ${responseAccount.number}-${responseAccount.verifyingDigit}`,
              totalBalance: 0,
              blockedBalance: 0,
              availableBalance: 0,
              verifyingDigit: responseAccount.verifyingDigit,
              bankISPB: responseAccount.bankISPB,
              date: moment(DEFAULT_API_RESPONSE_DATE_FORMAT),
              bankCode: responseAccount.bankCode,
              branch: responseAccount.branch,
              number: responseAccount.number,
              name:
                responseAccount.holders && responseAccount.holders.length > 0
                  ? responseAccount.holders[0].name
                  : "",
              document:
                responseAccount.holders && responseAccount.holders.length > 0
                  ? responseAccount.holders[0].document
                  : "",
              holderId:
                responseAccount.holders && responseAccount.holders.length > 0
                  ? responseAccount.holders[0].id
                  : ""
            };
          }

          const responseBalance = await rawBalance.json();

          return {
            account: responseAccount.id,
            accountNumber: `${responseAccount.bankCode} ${responseAccount.branch} ${responseAccount.number}-${responseAccount.verifyingDigit}`,
            totalBalance: responseBalance.totalBalance,
            blockedBalance: responseBalance.blockedBalance,
            availableBalance: responseBalance.availableBalance,
            verifyingDigit: responseAccount.verifyingDigit,
            bankISPB: responseAccount.bankISPB,
            date: responseBalance.date,
            bankCode: responseAccount.bankCode,
            branch: responseAccount.branch,
            number: responseAccount.number,
            name:
              responseAccount.holders && responseAccount.holders.length > 0
                ? responseAccount.holders[0].name
                : "",
            document:
              responseAccount.holders && responseAccount.holders.length > 0
                ? responseAccount.holders[0].document
                : "",
            holderId:
              responseAccount.holders && responseAccount.holders.length > 0
                ? responseAccount.holders[0].id
                : ""
          };
        })
      );

      return {
        accounts: accounts
      };
    } catch (error) {
      return { error };
    }
  },
  getAccountsWithoutBalance: async (
    _,
    byOldAPI = false,
    allAccounts = false
  ) => {
    try {
      const rawAccounts = await positionAPI.getAccounts(byOldAPI, allAccounts);
      const responseAccounts = await rawAccounts.json();

      return {
        responseAccounts: responseAccounts
      };
    } catch (error) {
      return { error };
    }
  },
  getEquities: async () => {
    try {
      const rawEquities = await positionAPI.getEquities();
      const responseEquities = await rawEquities.json();

      return {
        equities: responseEquities
      };
    } catch (error) {
      return { error };
    }
  },
  getFixedIncome: async () => {
    try {
      const rawFixedIncome = await positionAPI.getFixedIncome();
      const responseFixedIncome = await rawFixedIncome.json();

      return {
        fixedIncome: responseFixedIncome
      };
    } catch (error) {
      return { error };
    }
  },
  getFunds: async (_, param) => {
    try {
      const rawFunds = await positionAPI.getFunds(param);
      const responseFunds = await rawFunds.json();

      return {
        funds: responseFunds
      };
    } catch (error) {
      return { error };
    }
  },
  getTotalEquities: async () => {
    try {
      const rawTotalEquities = await positionAPI.getTotalByType("Equity");
      const responseTotalEquities = await rawTotalEquities.json();

      return {
        totalEquities: responseTotalEquities[0]
      };
    } catch (error) {
      return { error };
    }
  },
  getTotalFunds: async () => {
    try {
      const rawTotalFunds = await positionAPI.getTotalByType("Funds");
      const responseTotalFunds = await rawTotalFunds.json();
      const filteredResponse = await responseTotalFunds.filter(
        item => item.assetType === "Funds"
      );

      return {
        totalFunds: filteredResponse[0]
      };
    } catch (error) {
      return { error };
    }
  },
  getTotalFixedIncome: async () => {
    try {
      const rawTotalFixedIncome = await positionAPI.getTotalByType(
        "FixedIncome"
      );
      const responseTotalFixedIncome = await rawTotalFixedIncome.json();

      return {
        totalFixedIncome: responseTotalFixedIncome[0]
      };
    } catch (error) {
      return { error };
    }
  },
  getTotalLca: async () => {
    try {
      const rawTotalLca = await positionAPI.getLcaTotal();
      const responseTotalLca = await rawTotalLca.json();
      return {
        totalLca: `${formatNumber(responseTotalLca.total, {
          digits: 2
        })}`,
        totalLcaRaw: responseTotalLca.total
      };
    } catch (error) {
      return { error };
    }
  },
  getSuggestionValues: async (_, priorityType, withdrawalValue) => {
    try {
      const rawSuggestionValues = await positionAPI.getValuesSuggestion(
        priorityType,
        withdrawalValue
      );
      const responseSuggestionValues = await rawSuggestionValues.json();
      return {
        totalMax: {
          totalMaxValue: responseSuggestionValues.totalMax,
          maxPositions: responseSuggestionValues.maxPositions
        },
        totalMin: {
          totalMinValue: responseSuggestionValues.totalMin,
          minPositions: responseSuggestionValues.minPositions
        }
      };
    } catch (error) {
      return { error };
    }
  },
  getPriorityTypes: async () => {
    try {
      let responsePriorityTypes;
      const rawPriorityTypes = await positionAPI.getPriorityTypesAPI();
      responsePriorityTypes = await rawPriorityTypes.json();

      responsePriorityTypes = responsePriorityTypes.map(item => ({
        ...item,
        name: translate(`PRIORITY_TYPE_${item.id}`)
      }));

      return {
        priorities: responsePriorityTypes
      };
    } catch (error) {
      return { error };
    }
  },

  postLcaDetails: async (_, detailsLCA) => {
    try {
      const body = detailsLCA;
      const rawLcaDetails = await positionAPI.postLcaDetailsAPI(body);
      const responseLcaDetails = await rawLcaDetails.json();
      return {
        responseLcaDetails: responseLcaDetails.positionDetails
      };
    } catch (error) {
      return { error };
    }
  },

  resetUuid: () => {
    return { randomUuid: undefined };
  },

  getAllLcaDetails: async (_, total) => {
    try {
      const body = total;
      const rawAllLcaDetails = await positionAPI.getAllLcaDetailsAPI(body);
      const responseAllLcaDetails = await rawAllLcaDetails.json();
      return {
        responseLcaDetails: responseAllLcaDetails.positionDetails
      };
    } catch (error) {
      return { error };
    }
  },

  postToWithdrawal: async (_, query) => {
    try {
      const requestBody = query;
      const rawToWithdrawal = await positionAPI.postToWithdrawalAPI(
        requestBody
      );
      const responseToWithdrawal = await rawToWithdrawal.json();
      return {
        responseToWithdrawal: responseToWithdrawal
      };
    } catch (error) {
      throw error;
    }
  },

  postToAproveWithdrawal: async (_, body, key) => {
    try {
      const requestBody = {
        message: {
          payload: body,
          messageAuthenticationCode: key
        }
      };
      const rawToAproveWithdrawal = await positionAPI.postToAproveWithdrawalAPI(
        requestBody
      );
      const responseToAproveWithdrawal = await rawToAproveWithdrawal.json();
      return {
        responseToAproveWithdrawal
      };
    } catch (error) {
      throw error;
    }
  },

  getBalance: async (_, id) => {
    try {
      const request = await positionAPI.getBalance(id);
      const response = await request.json();

      return {
        currentBalance: response
      };
    } catch (error) {
      return { error };
    }
  },

  getBalanceAndEventsHistory: async (_, currentAccount, params) => {
    try {
      const { range } = params;
      let momentRangeStart = moment(
        range.from,
        DEFAULT_API_RESPONSE_DATE_FORMAT
      );
      let momentRangeEnd = moment(range.to, DEFAULT_API_RESPONSE_DATE_FORMAT);

      const currentParams = {
        ...params,
        range: {
          from: momentRangeStart.format(DEFAULT_API_RESPONSE_DATE_FORMAT),
          to: momentRangeEnd.format(DEFAULT_API_RESPONSE_DATE_FORMAT)
        }
      };
      // get events
      const eventsRaw = await positionAPI.getEvents(
        currentAccount.account,
        currentParams
      );
      const events = await eventsRaw.json();

      const eventsTotalCount = Number(eventsRaw.headers.get(PAGINATION_TOTAL));

      return {
        balanceAndEventsHistory: events,
        eventsTotalCount
      };
    } catch (error) {
      return { error };
    }
  },

  getStatementsCnab: async (_, currentAccount, params) => {
    try {
      const { range } = params;

      let rangeStart = moment(
        range.from,
        DEFAULT_API_RESPONSE_DATE_FORMAT
      ).format(DEFAULT_API_RESPONSE_DATE_FORMAT);
      let rangeEnd = moment(range.to, DEFAULT_API_RESPONSE_DATE_FORMAT).format(
        DEFAULT_API_RESPONSE_DATE_FORMAT
      );

      const download = (content, filename, contentType) => {
        if (!contentType) contentType = "application/octet-stream";
        var a = document.createElement("a");
        var blob = new Blob([content], { type: contentType });
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
      };

      positionAPI
        .getCnab(currentAccount.account, rangeStart, rangeEnd)
        .then(resp => resp.text())
        .then(content =>
          download(content, "cnabFile.txt", "application/octet-stream")
        );
    } catch (error) {
      return { error };
    }
  },

  getFutureEventsHistory: async (_, currentAccount, params) => {
    try {
      const { range } = params;
      let momentRangeStart = moment(
        range.from,
        DEFAULT_API_RESPONSE_DATE_FORMAT
      );
      let momentRangeEnd = moment(range.to, DEFAULT_API_RESPONSE_DATE_FORMAT);

      const currentParams = {
        ...params,
        range: {
          from: momentRangeStart.format(DEFAULT_API_RESPONSE_DATE_FORMAT),
          to: momentRangeEnd.format(DEFAULT_API_RESPONSE_DATE_FORMAT)
        },
        onlyDaysWithTransaction: true,
        showFutureTransactions: true
      };
      // get events
      const eventsRaw = await positionAPI.getEvents(
        currentAccount.account,
        currentParams
      );
      const events = await eventsRaw.json();

      const futureEventsTotalCount = Number(
        eventsRaw.headers.get(PAGINATION_TOTAL)
      );

      return {
        futureEventsHistory: events,
        futureEventsTotalCount
      };
    } catch (error) {
      return { error };
    }
  },
  createFixedIncomeRedemption: async (_, body) => {
    try {
      const request = await positionAPI.createFixedIncomeRedemptionAPI(body);
      const response = await request.json();

      return {
        currentBalance: response
      };
    } catch (error) {
      throw { error };
    }
  },

  getLimitLca: async () => {
    try {
      const rawLimitLca = await positionAPI.getLimitLca();
      const responseLimitLca = await rawLimitLca.json();
      return {
        limitLca: responseLimitLca
      };
    } catch (error) {
      return { error };
    }
  }
});
