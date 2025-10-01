import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import FixedIncome from "./FixedIncome";
import actions from "../../../actions/investmentProducts/FixedIncome";
import investmentProductsActions from "../../../actions/investmentProducts";
import EFTActions from "../../../actions/EFT";
import MFATokenActions from "../../../actions/mfa";
import modalActions from "../../../actions/modal";
import loginActions from "../../../actions/login";
import toastrActions from "../../../actions/toastr";

import positionActions from "../../../actions/position";
import withMaintenanceMode from "../../common/withMaintenanceMode";
import errorActions from "../../../actions/error";

const Comp = connect(
  ({
    investmentFI,
    getInvestmentFI,
    loading,
    error,
    availableDateRanges,
    serverTime,
    subscriptionsPendencies,
    authFactors,
    accounts,
    subscription,
    userInfo,
    pendingTransactionsFI,
    openToastr
  }) => ({
    investmentFI,
    getInvestmentFI,
    loading,
    error,
    availableDateRanges,
    serverTime,
    subscriptionsPendencies,
    authFactors,
    accounts,
    subscription,
    userInfo,
    pendingTransactionsFI,
    openToastr
  }),
  combineActions(
    actions,
    EFTActions,
    MFATokenActions,
    modalActions,
    loginActions,
    positionActions,
    investmentProductsActions,
    errorActions,
    toastrActions
  )
)(FixedIncome);

export default withMaintenanceMode(Comp);
