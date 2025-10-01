import * as creditAPI from "../../services/credit";

export default () => ({
  getContracts: async () => {
    try {
      const rawResponseTypes = await creditAPI.getContracts();
      const contractsResponse = await rawResponseTypes.json();

      return {
        creditContracts: contractsResponse
      };
    } catch (error) {
      return { error };
    }
  },
  getInstallmentBalances: async (_, id) => {
    try {
      const rawResponseInstallments = await creditAPI.getInstallmentBalances(
        id
      );
      const installmentsResponse = await rawResponseInstallments.json();
      const installmentsPropsToCalculate = installmentsResponse.map(
        // eslint-disable-next-line no-unused-vars
        ({ referenceDate, maturityDate, ...rest }) => rest
      );

      const installmentBalancesTotals = installmentsPropsToCalculate.reduce(
        (acc, current) => {
          (acc.principalValue += current.principalValue),
            (acc.monetaryAdjustmentValue += current.monetaryAdjustmentValue),
            (acc.interestValue += current.interestValue),
            (acc.latePaymentCommissionValue +=
              current.latePaymentCommissionValue),
            (acc.iofValue += current.iofValue),
            (acc.defaultInterestValue += current.defaultInterestValue),
            (acc.fineValue += current.fineValue),
            (acc.totalValue += current.totalValue);
          return acc;
        }
      );

      return {
        installmentBalances: installmentsResponse,
        installmentBalancesTotals: installmentBalancesTotals
      };
    } catch (error) {
      return { error };
    }
  }
});
