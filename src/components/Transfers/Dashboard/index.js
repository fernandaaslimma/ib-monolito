import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import Dashboard from "./Dashboard";
import EFTActions from "../../../actions/EFT";
import positionActions from "../../../actions/position";
import modalActions from "../../../actions/modal";
import toastrActions from "../../../actions/toastr";
import loginActions from "../../../actions/login";
import MFATokenActions from "../../../actions/mfa";

export default connect(
  ({
    signLoadingId,
    favoreds,
    transferData,
    favoredData,
    originAccount,
    availableBalance,
    accounts,
    getAccounts,
    getApprovers,
    approvers,
    quantity,
    resetFields,
    openToastr,
    closeToastr,
    userInfo,
    createEFTData,
    banksList,
    authFactors,
    pendencies,
    authFactorsResponse,
    mfaTokenValidated,
    pBase64,
    msgAuthCode,
    availableDateRanges,
    nextAvailableDate,
    modalSettings,
    loading,
    serverTime,
    error,
    getFavoredAccounts,
    favoredAccounts,
    deleteFavoredAccount,
    deletedFavoredAccount
  }) => ({
    signLoadingId,
    favoreds,
    transferData,
    favoredData,
    originAccount,
    availableBalance,
    accounts,
    getAccounts,
    getApprovers,
    approvers,
    resetFields,
    banksList,
    authFactors,
    pendencies,
    authFactorsResponse,
    openToastr,
    closeToastr,
    mfaTokenValidated,
    userInfo,
    pBase64,
    msgAuthCode,
    quantity,
    createEFTData,
    availableDateRanges,
    nextAvailableDate,
    modalSettings,
    loading,
    serverTime,
    error,
    getFavoredAccounts,
    favoredAccounts,
    deleteFavoredAccount,
    deletedFavoredAccount
  }),
  combineActions(
    EFTActions,
    positionActions,
    modalActions,
    toastrActions,
    loginActions,
    MFATokenActions
  )
)(Dashboard);
