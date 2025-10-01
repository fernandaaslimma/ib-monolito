import { connect } from "redux-zero/react";
import SendMoney from "./SendMoney";
import { combineActions } from "redux-zero/utils";
import actions from "../../../actions/login";
import onlineExchange from "../../../actions/onlineExchange";
import positionActions from "../../../actions/position";
import EFTActions from "../../../actions/EFT";
import mfaActions from "../../../actions/mfa";
import modalActions from "../../../actions/modal";
import error from "../../../actions/error";

export default connect(
  ({
    error,
    userInfo,
    exchangeRecipientAccounts,
    accounts,
    getAccounts,
    loading,
    exchangeData,
    setSelectedAccount,
    setFavored,
    setSelectedOperationNature,
    exchangeTransactionsSimulation,
    exchangeTransactionsSimulationRate,
    setTransactionValues,
    cleanExchangeTransactionsSimulation,
    registerExchangeOperation,
    getAvailableDateRanges,
    availableDateRanges,
    serverTime,
    openModal,
    closeModal,
    addError,
    confirmExchangeTransaction,
    transactionEx,
    exchangeError,
    cleanExchangeTransaction,
    getAuthFactors,
    authFactors,
    getExchangeTransactions,
    exchangeTransactions,
    cleanConfirmExchangeError
  }) => ({
    error,
    userInfo,
    exchangeRecipientAccounts,
    accounts,
    getAccounts,
    loading,
    exchangeData,
    setSelectedAccount,
    setFavored,
    setSelectedOperationNature,
    exchangeTransactionsSimulation,
    exchangeTransactionsSimulationRate,
    setTransactionValues,
    cleanExchangeTransactionsSimulation,
    registerExchangeOperation,
    getAvailableDateRanges,
    availableDateRanges,
    serverTime,
    openModal,
    closeModal,
    addError,
    confirmExchangeTransaction,
    transactionEx,
    exchangeError,
    cleanExchangeTransaction,
    getAuthFactors,
    authFactors,
    getExchangeTransactions,
    exchangeTransactions,
    cleanConfirmExchangeError
  }),
  combineActions(
    actions,
    onlineExchange,
    positionActions,
    EFTActions,
    modalActions,
    mfaActions,
    error
  )
)(SendMoney);
