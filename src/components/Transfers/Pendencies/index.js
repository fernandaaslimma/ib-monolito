import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import Pendencies from "./Pendencies";
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
    transfers,
    pendencies,
    openToastr,
    closeToastr,
    mfaTokenValidated,
    userInfo,
    pBase64,
    msgAuthCode,
    currentTransfer,
    isAfterCreation,
    error,
    notification,
    authFactors,
    methodChanging,
    headerOnClickBack,
    headerOnClickClose,
    transferData,
    serverTime
  }) => ({
    transfers,
    pendencies,
    openToastr,
    closeToastr,
    mfaTokenValidated,
    userInfo,
    pBase64,
    msgAuthCode,
    currentTransfer,
    isAfterCreation,
    error,
    notification,
    authFactors,
    methodChanging,
    headerOnClickBack,
    headerOnClickClose,
    transferData,
    serverTime
  }),
  combineActions(
    EFTActions,
    modalActions,
    toastrActions,
    MFATokenActions,
    loginActions,
    notificationActions,
    errorActions,
    headerActions
  )
)(Pendencies);
