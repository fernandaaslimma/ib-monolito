import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import IndividualWireTransfer from "./IndividualWireTransfer";
import positionActions from "../../../actions/position";
import EFTActions from "../../../actions/EFT";
import modalActions from "../../../actions/modal";
import headerActions from "../../../actions/header";
import notificationActions from "../../../actions/notification";
import toastrActions from "../../../actions/toastr";
import MFATokenActions from "../../../actions/mfa";
import loginActions from "../../../actions/login";
import errorActions from "../../../actions/error";

export default connect(
  ({
    error,
    accounts,
    loading,
    originAccount,
    nextAvailableDate,
    transferData,
    banksList,
    favoredData,
    availableDateRanges,
    userInfo,
    createEFTData,
    isAfterCreation,
    methodChanging,
    approveEFT,
    currentTransfer,
    getAuthFactors,
    authFactors,
    openModal,
    openToastr,
    denyEFT,
    addError,
    addHeaderOnClickBack,
    pendencies,
    serverTime,
    favoredAccounts,
    limitTed
  }) => ({
    error,
    accounts,
    loading,
    originAccount,
    nextAvailableDate,
    transferData,
    banksList,
    favoredData,
    availableDateRanges,
    userInfo,
    createEFTData,
    isAfterCreation,
    methodChanging,
    approveEFT,
    currentTransfer,
    getAuthFactors,
    authFactors,
    openModal,
    openToastr,
    denyEFT,
    addError,
    addHeaderOnClickBack,
    pendencies,
    serverTime,
    favoredAccounts,
    limitTed
  }),
  combineActions(
    positionActions,
    EFTActions,
    modalActions,
    toastrActions,
    MFATokenActions,
    loginActions,
    notificationActions,
    errorActions,
    headerActions
  )
)(IndividualWireTransfer);
