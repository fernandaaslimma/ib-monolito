import fetchHandler from "../../utils/fetchHandler";

export const getContracts = () =>
  fetchHandler(`${__API__}/creditportfolio/v1/contracts?vision=Portability`);

export const getInstallmentBalances = id =>
  fetchHandler(
    `${__API__}/creditportfolio/v1/contracts/${id}/installment-balances?balanceType=PrePayment`
  );
