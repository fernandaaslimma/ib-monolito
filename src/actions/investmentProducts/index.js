import * as investmentProductsAPI from "../../services/invesmentProducts";
import moment from "moment";
import { downloadFromBase64 } from "../../utils/downloadFile";

export default () => ({
  getInvestmentFunds: async (_, closedFunds = { showClosedFunds: false }) => {
    try {
      const rawResponseFunds = await investmentProductsAPI.getInvestmentFunds(
        closedFunds
      );
      const notModeledInvestmentFunds = await rawResponseFunds.json();

      const investmentFunds = notModeledInvestmentFunds.map(fund => ({
        ...fund,
        monthActivity: moment(fund.quotaDate).diff(
          moment(fund.inceptionDate),
          "months"
        )
      }));

      return {
        investmentFunds
      };
    } catch (error) {
      return { error };
    }
  },
  getSubscriptionsPendencies: async () => {
    try {
      const rawSubsPendencies = await investmentProductsAPI.getSubscriptionsPendencies();
      const subscriptionsPendencies = await rawSubsPendencies.json();

      return {
        subscriptionsPendencies
      };
    } catch (error) {
      return { error };
    }
  },
  createSubscription: async (_, body) => {
    try {
      const rawSubscriptionResponse = await investmentProductsAPI.createSubscription(
        body
      );
      const subscription = await rawSubscriptionResponse.json();

      return {
        subscription
      };
    } catch (error) {
      return { error };
    }
  },
  approveSubscription: async (state, id) => {
    try {
      const body = {
        message: {
          payload: state.mfaTokenParams.payload,
          messageAuthenticationCode: state.mfaTokenParams.key
        }
      };
      await investmentProductsAPI.approveSubscription(id, body);
    } catch (error) {
      throw { error };
    }
  },

  createRedemption: async (_, body) => {
    try {
      const rawRedemptionResponse = await investmentProductsAPI.createRedemption(
        body
      );
      const redemption = await rawRedemptionResponse.json();

      return {
        redemption
      };
    } catch (error) {
      throw { error };
    }
  },
  approveRedemption: async (state, id) => {
    try {
      const body = {
        message: {
          payload: state.mfaTokenParams.payload,
          messageAuthenticationCode: state.mfaTokenParams.key
        }
      };
      await investmentProductsAPI.approveRedemption(id, body);
    } catch (error) {
      throw { error };
    }
  },

  getPendingTransactions: async () => {
    try {
      const rawPendingTransactions = await investmentProductsAPI.getPendingTransactions();
      const pendingTransactions = await rawPendingTransactions.json();
      return {
        pendingTransactions
      };
    } catch (error) {
      return { error };
    }
  },

  getPendingTransactionsFunds: async () => {
    try {
      const rawPendingTransactions = await investmentProductsAPI.getPendingTransactionsFunds();
      const pendingTransactionsFunds = await rawPendingTransactions.json();
      return {
        pendingTransactionsFunds
      };
    } catch (error) {
      return { error };
    }
  },
  downloadTermsFunds: async (_, id, unsuitableTerm) => {
    investmentProductsAPI
      .downloadTerm(id, unsuitableTerm)
      .then(resp => {
        return resp.blob();
      })
      .then(async blob => {
        var reader = new FileReader();
        reader.onload = async () => {
          const newResult = await reader.result.split(",")[1];
          await downloadFromBase64(newResult, `${id}`);
        };
        reader.readAsDataURL(blob);
      });
  }
});
