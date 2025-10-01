import * as onlineExchangeApi from "../../services/onlineExchange";

export default () => ({
  getExchangeRecipientAccounts: async () => {
    try {
      const rawExchangeRecipientAccounts = await onlineExchangeApi.getExchangeRecipientAccounts();
      const exchangeRecipientAccounts = await rawExchangeRecipientAccounts.json();
      return { exchangeRecipientAccounts: exchangeRecipientAccounts };
    } catch (error) {
      return { error };
    }
  },

  getExchangeTransactionsSimulation: async (_, payload) => {
    try {
      const rawExchangeTransactionsSimulation = await onlineExchangeApi.getExchangeTransactionsSimulation(
        payload
      );
      const exchangeTransactionsSimulation = await rawExchangeTransactionsSimulation.json();
      return {
        exchangeTransactionsSimulation: exchangeTransactionsSimulation
      };
    } catch (error) {
      return { error };
    }
  },

  getExchangeTransactionsSimulationRate: async (_, payload) => {
    try {
      const rawExchangeTransactionsSimulation = await onlineExchangeApi.getExchangeTransactionsSimulation(
        payload
      );
      const exchangeTransactionsSimulation = await rawExchangeTransactionsSimulation.json();
      return {
        exchangeTransactionsSimulationRate:
          exchangeTransactionsSimulation &&
          exchangeTransactionsSimulation.currencyRate.currencyRateValue
      };
    } catch (error) {
      return { error };
    }
  },

  registerExchangeOperation: async (_, body) => {
    try {
      const rawTransaction = await onlineExchangeApi.registerExchangeOperation(
        body
      );
      const transactionEx = await rawTransaction.json();
      return { transactionEx };
    } catch (error) {
      return { error };
    }
  },

  confirmExchangeTransaction: async state => {
    try {
      await onlineExchangeApi.confirmTransactionExchange(
        {
          payload: state.mfaTokenParams.payload,
          messageAuthenticationCode: state.mfaTokenParams.key
        },
        state.transactionEx.id
      );
      return;
    } catch (exchangeError) {
      return { exchangeError };
    }
  },

  cleanExchangeTransactionsSimulation: () => {
    return { exchangeTransactionsSimulation: null };
  },

  cleanExchangeTransaction: () => {
    return { transactionEx: null, exchangeTransactionsSimulation: null };
  },

  setSelectedAccount: (state, value) => {
    return {
      exchangeData: {
        ...state.exchangeData,
        selectedAccount: value
      }
    };
  },

  setFavored: (state, value) => {
    return {
      exchangeData: {
        ...state.exchangeData,
        favored: value
      }
    };
  },

  setSelectedOperationNature: (state, value) => {
    return {
      exchangeData: {
        ...state.exchangeData,
        selectedOperationNature: value
      }
    };
  },

  setTransactionValues: (state, value) => {
    return {
      exchangeData: {
        ...state.exchangeData,
        transactionValues: value
      }
    };
  },

  setRemainingTime: (state, value) => {
    return {
      exchangeData: {
        ...state.exchangeData,
        remainingTime: value
      }
    };
  },

  getExchangeTransactions: async (_state, body) => {
    try {
      const rawExchangeTransactions = await onlineExchangeApi.getExchangeTransactions(
        body
      );
      const exchangeTransactions = await rawExchangeTransactions.json();
      return { exchangeTransactions: exchangeTransactions };
    } catch (error) {
      return { error };
    }
  },

  cleanConfirmExchangeError: () => {
    return { exchangeError: null };
  }
});
