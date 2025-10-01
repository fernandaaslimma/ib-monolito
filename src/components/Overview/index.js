import { connect } from "redux-zero/react";

import Overview from "./Overview";
import summaryActions from "../../actions/summary";
import investmentProducts from "../../actions/investmentProducts";
import Transactionsactions from "../../actions/transactions";
import errorActions from "../../actions/error";
import withMaintenanceMode from "../common/withMaintenanceMode";
import { combineActions } from "redux-zero/utils";
import offshore from "../../actions/offshore";

const Comp = connect(
  ({
    indexes,
    transactions,
    consolidatedPosition,
    consolidatedAssets,
    currentIndex,
    assets,
    error,
    userInfo,
    pendingTransactions,
    fundsIncomeTransactions,
    fixedIncomeTransactions,
    equityIncomeTransactions,
    loading,
    totalCount,
    cleanInvestorProfileError,
    isGlobalMode
  }) => ({
    indexes,
    transactions,
    consolidatedPosition,
    consolidatedAssets,
    currentIndex,
    assets,
    error,
    userInfo,
    pendingTransactions,
    fundsIncomeTransactions,
    fixedIncomeTransactions,
    equityIncomeTransactions,
    loading,
    totalCount,
    cleanInvestorProfileError,
    isGlobalMode
  }),
  combineActions(
    summaryActions,
    investmentProducts,
    Transactionsactions,
    errorActions,
    offshore
  )
)(Overview);

export default withMaintenanceMode(Comp);
