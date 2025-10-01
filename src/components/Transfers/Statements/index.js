import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import Statements from "./Statements";
import positionActions from "../../../actions/position";
import loginActions from "../../../actions/login";
import EFTActions from "../../../actions/EFT";
import modalActions from "../../../actions/modal";
import offshore from "../../../actions/offshore";

export default connect(
  ({
    error,
    accounts,
    balanceAndEventsHistory,
    loading,
    eventsTotalCount,
    currentPageStartDate,
    futureEventsHistory,
    futureEventsTotalCount,
    userInfo,
    pendencies,
    banksList,
    openModal,
    closeModal,
    modalSettings,
    isGlobalMode,
    getAccountsOffShore,
    accountsOffShore,
    getBalanceAndEventsHistoryOffShore,
    balanceAndEventsHistoryOffShore
  }) => ({
    error,
    accounts,
    balanceAndEventsHistory,
    loading,
    eventsTotalCount,
    currentPageStartDate,
    futureEventsHistory,
    futureEventsTotalCount,
    userInfo,
    pendencies,
    banksList,
    openModal,
    closeModal,
    modalSettings,
    isGlobalMode,
    getAccountsOffShore,
    accountsOffShore,
    getBalanceAndEventsHistoryOffShore,
    balanceAndEventsHistoryOffShore
  }),
  combineActions(
    positionActions,
    EFTActions,
    loginActions,
    modalActions,
    offshore
  )
)(Statements);
