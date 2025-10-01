import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import Funds from "./Funds";
import actions from "../../../actions/investmentProducts";
import EFTActions from "../../../actions/EFT";
import MFATokenActions from "../../../actions/mfa";
import modalActions from "../../../actions/modal";
import toastrActions from "../../../actions/toastr";
import termsActions from "../../../actions/terms";
import loginActions from "../../../actions/login";

import positionActions from "../../../actions/position";
import withMaintenanceMode from "../../common/withMaintenanceMode";
import addError from "../../../actions/error";

const Comp = connect(
  ({
    funds,
    getFunds,
    loading,
    error,
    investmentFunds,
    availableDateRanges,
    serverTime,
    subscriptionsPendencies,
    authFactors,
    accounts,
    subscription,
    openToastr,
    closeToastr,
    userInfo,
    pendingTransactionsFunds
  }) => ({
    funds,
    getFunds,
    loading,
    error,
    investmentFunds,
    availableDateRanges,
    serverTime,
    subscriptionsPendencies,
    authFactors,
    accounts,
    subscription,
    openToastr,
    closeToastr,
    userInfo,
    pendingTransactionsFunds
  }),
  combineActions(
    actions,
    EFTActions,
    positionActions,
    MFATokenActions,
    modalActions,
    toastrActions,
    addError,
    termsActions,
    loginActions
  )
)(Funds);

export default withMaintenanceMode(Comp);
