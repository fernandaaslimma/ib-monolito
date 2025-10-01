import moment from "moment";
import * as offshoreApi from "../../services/offshore";
import {
  DEFAULT_API_RESPONSE_DATE_FORMAT,
  PAGINATION_TOTAL
} from "../../utils/constants";

export default () => ({
  setIsGlobalMode: (_, mode) => {
    return {
      isGlobalMode: mode
    };
  },
  getOffshoreAccount: async () => {
    try {
      const rawOffshoreAccount = await offshoreApi.getOffshoreAccount();
      const offshoreAccount = await rawOffshoreAccount.json();
      return { offshoreAccount };
    } catch (error) {
      return { error };
    }
  },
  getOffshorePosition: async () => {
    try {
      const rawOffshorePosition = await offshoreApi.getOffshorePosition();
      const offshorePosition = await rawOffshorePosition.json();
      return { offshorePosition };
    } catch (error) {
      return { error };
    }
  },
  getAccountsOffShore: async () => {
    try {
      const rawAccounts = await offshoreApi.getOffshoreAccount();
      const responseAccounts = await rawAccounts.json();
      const accounts = await Promise.all(
        responseAccounts.map(async responseAccount => {
          const balances = await Promise.all(
            responseAccount.currencies.map(async currency => {
              const rawBalance = await offshoreApi.getBalanceOffShore(
                responseAccount.account,
                currency.code
              );

              if (rawBalance.status === 204) {
                return {
                  accountNumber: 0,
                  currency: {},
                  balances: {}
                };
              }

              const responseBalance = await rawBalance.json();

              return {
                availableBalance: responseBalance.totalAmount,
                date: responseBalance.date,
                currency: currency.code
              };
            })
          );

          return {
            accountNumber: responseAccount.account,
            currency: responseAccount.currencies,
            balances: balances
          };
        })
      );

      return {
        accountsOffShore: accounts
      };
    } catch (error) {
      return { error };
    }
  },
  getBalanceOffShore: async (_, id, currency) => {
    try {
      const request = await offshoreApi.getBalanceOffShore(id, currency);
      const response = await request.json();

      return {
        currentBalanceOffShore: response
      };
    } catch (error) {
      return { error };
    }
  },
  getBalanceAndEventsHistoryOffShore: async (
    _,
    currentAccount,
    params,
    currency
  ) => {
    try {
      const { range } = params;

      let momentRangeStart = moment(
        range.from,
        DEFAULT_API_RESPONSE_DATE_FORMAT
      );
      let momentRangeEnd = moment(range.to, DEFAULT_API_RESPONSE_DATE_FORMAT);

      const eventsRaw = await offshoreApi.statementOffShore(
        currentAccount.accountNumber,
        currency,
        momentRangeStart.format(DEFAULT_API_RESPONSE_DATE_FORMAT),
        momentRangeEnd.format(DEFAULT_API_RESPONSE_DATE_FORMAT)
      );

      const events = await eventsRaw.json();

      const eventsTotalCountOffShore = Number(
        eventsRaw.headers.get(PAGINATION_TOTAL)
      );

      return {
        balanceAndEventsHistoryOffShore: events,
        eventsTotalCountOffShore
      };
    } catch (error) {
      return { error };
    }
  },
  getInvestimentPositionOffShore: async () => {
    try {
      const rawInvestimentPosition = await offshoreApi.getInvestimentPositionOffShore();
      const positionsOffShore = await rawInvestimentPosition.json();
      return { positionsOffShore: positionsOffShore?.investments };
    } catch (error) {
      return { error };
    }
  },
  getTransactionsOffShore: async (
    _,
    value
  ) => {
    try {

      const rawTransactionOffShore = await offshoreApi.getTransactionsOffShore(
        value
      );
      const totalCount = parseInt(rawTransactionOffShore.headers.get(PAGINATION_TOTAL));
      const transactionsOffShore = await rawTransactionOffShore.json();

      return {
        transactionsOffShore: transactionsOffShore,
        totalCount
      };
    } catch (error) {
      return { error };
    }
  },
});
