import * as transactionsAPI from "../../services/transactions";
import { PAGINATION_TOTAL } from "../../utils/constants";

export default () => ({
  getFixedIncomeTransactions: async (
    _,
    dateFrom = "",
    dateTo = "",
    offset = 0,
    limit = 10
  ) => {
    try {
      const raw = await transactionsAPI.getFixedIncomeTransactions(
        dateFrom,
        dateTo,
        offset,
        limit
      );
      const totalCount = raw.headers.get(PAGINATION_TOTAL);
      const json = await raw.json();

      return {
        fixedIncomeTransactions: json,
        totalCount: parseInt(totalCount)
      };
    } catch (error) {
      return { error };
    }
  },
  getFundsIncomeTransactions: async (
    _,
    dateFrom = "",
    dateTo = "",
    offset = 0,
    limit = 10
  ) => {
    try {
      const raw = await transactionsAPI.getFundsIncomeTransactions(
        dateFrom,
        dateTo,
        offset,
        limit
      );
      const totalCount = raw.headers.get(PAGINATION_TOTAL);
      const json = await raw.json();

      return {
        fundsIncomeTransactions: json,
        totalCount: parseInt(totalCount)
      };
    } catch (error) {
      return { error };
    }
  },
  getEquityIncomeTransactions: async (
    _,
    dateFrom = "",
    dateTo = "",
    offset = 0,
    limit = 10
  ) => {
    try {
      const raw = await transactionsAPI.getEquityIncomeTransactions(
        dateFrom,
        dateTo,
        offset,
        limit
      );
      const totalCount = raw.headers.get(PAGINATION_TOTAL);
      const json = await raw.json();

      return {
        equityIncomeTransactions: json,
        totalCount: parseInt(totalCount)
      };
    } catch (error) {
      return { error };
    }
  },
  getUserCashAccountTransactions: async (state, dateFrom, dateTo) => {
    try {
      const rawUserCashAccount = await transactionsAPI.getUserCashAccount();
      const responseUserCashAccount = await rawUserCashAccount.json();

      const date = new Date();
      const closeBalanceDate = dateFrom || date.toJSON();
      const openBalanceDate =
        dateTo || new Date(date.setMonth(date.getMonth() - 1)).toJSON();

      let cashAccounts = [];

      for (const cashAccount of responseUserCashAccount) {
        const accountId = cashAccount.id;
        const accountName = `${cashAccount.number}-${cashAccount.verifyingDigit}`;

        const rawCashAccount = await transactionsAPI.getCashAccountTransactions(
          accountId,
          openBalanceDate,
          closeBalanceDate
        );

        const responseCashAccount = await rawCashAccount.json();
        const rawAccountOpenBalance = await transactionsAPI.getAccountBalanceByDate(
          accountId,
          openBalanceDate
        );

        const responseAccountOpenBalance = await rawAccountOpenBalance.json();
        const rawAccountCloseBalance = await transactionsAPI.getAccountBalanceByDate(
          accountId,
          closeBalanceDate
        );

        const responseAccountCloseBalance = await rawAccountCloseBalance.json();

        cashAccounts.push({
          userCashAccount: accountName,
          cashAccountTransactions: responseCashAccount,
          accountOpenBalance: responseAccountOpenBalance,
          accountCloseBalance: responseAccountCloseBalance
        });
      }

      return { cashAccounts };
    } catch (error) {
      return { error };
    }
  }
});
