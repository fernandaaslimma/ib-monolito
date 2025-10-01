import { connect } from "redux-zero/react";

import Summary from "./Summary";
import summaryActions from "../../actions/summary";
import investmentProducts from "../../actions/investmentProducts";
import withMaintenanceMode from "../common/withMaintenanceMode";
import { combineActions } from "redux-zero/utils";

const Comp = connect(
  ({
    indexes,
    transactions,
    consolidatedPosition,
    consolidatedAssets,
    getIndexes,
    getConsolidatedAssets,
    getTransactions,
    getConsolidatedPosition,
    loading,
    error,
    userInfo,
    pendingTransactions
  }) => ({
    indexes,
    transactions,
    consolidatedPosition,
    consolidatedAssets,
    getIndexes,
    getConsolidatedAssets,
    getTransactions,
    getConsolidatedPosition,
    loading,
    error,
    userInfo,
    pendingTransactions
  }),
  combineActions(summaryActions, investmentProducts)
)(Summary);

export default withMaintenanceMode(Comp);
