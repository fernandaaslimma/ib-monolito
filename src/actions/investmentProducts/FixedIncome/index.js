import * as investmentProductsAPIFixedIncome from "../../../services/invesmentProducts/FixedIncome";

export default () => ({
  getInvestmentFI: async () => {
    try {
      const rawResponseFixedIncome = await investmentProductsAPIFixedIncome.getInvestmentFI();
      const investmentFI = await rawResponseFixedIncome.json();

      return {
        investmentFI
      };
    } catch (error) {
      return { error };
    }
  },
  createSubscriptionFI: async (_, body) => {
    try {
      const rawSubscriptionResponse = await investmentProductsAPIFixedIncome.createSubscriptionFI(
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
  approveSubscriptionFI: async (state, id) => {
    try {
      const body = {
        message: {
          payload: state.mfaTokenParams.payload,
          messageAuthenticationCode: state.mfaTokenParams.key
        }
      };
      await investmentProductsAPIFixedIncome.approveSubscriptionFI(id, body);
    } catch (error) {
      throw { error };
    }
  },
  getPendingTransactionsFI: async () => {
    try {
      const rawPendingTransactions = await investmentProductsAPIFixedIncome.getPendingTransactionsFI();
      const pendingTransactionsFI = await rawPendingTransactions.json();
      return {
        pendingTransactionsFI
      };
    } catch (error) {
      return { error };
    }
  }
});
