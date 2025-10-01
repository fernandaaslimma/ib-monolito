import { combineActions } from "redux-zero/utils";
import { connect } from "redux-zero/react";
import offshore from "../../../actions/offshore";
import modalActions from "../../../actions/modal";
import loginActions from "../../../actions/login";
import EFTActions from "../../../actions/EFT";
import StatementsOffShore from "./StatementsOffShore";

export default connect(
    ({
      error,
      loading,      
      userInfo,            
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
        loading,
        userInfo,
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
      EFTActions,
      loginActions,
      modalActions,
      offshore
    )
  )(StatementsOffShore);