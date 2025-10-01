import { connect } from "redux-zero/react";

import FixedIncome from "./FixedIncome";
import actions from "../../../actions/position";
import investmentProductsActions from "../../../actions/investmentProducts";
import investmentProductsActionsFI from "../../../actions/investmentProducts/FixedIncome";
import EFTActions from "../../../actions/EFT";
import loginActions from "../../../actions/login";
import withMaintenanceMode from "../../common/withMaintenanceMode";
import { combineActions } from "redux-zero/utils";

const Comp = connect(
  ({
    fixedIncome,
    totalFixedIncome,
    loading,
    getFixedIncome,
    getTotalFixedIncome,
    error,
    pendingTransactionsFI,
    totalLcaRaw,
    serverTime,
    userInfo
  }) => ({
    fixedIncome,
    totalFixedIncome,
    loading,
    getFixedIncome,
    getTotalFixedIncome,
    error,
    pendingTransactionsFI,
    totalLcaRaw,
    serverTime,
    userInfo
  }),
  combineActions(
    actions,
    investmentProductsActions,
    investmentProductsActionsFI,
    EFTActions,
    loginActions
  )
)(FixedIncome);

export default withMaintenanceMode(Comp);
