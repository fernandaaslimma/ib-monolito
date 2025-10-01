import { connect } from "redux-zero/react";

import WithdrawLca from "./WithdrawLca";
import withMaintenanceMode from "../../common/withMaintenanceMode";
import { combineActions } from "redux-zero/utils";
import actions from "../../../actions/position";
import mfaActions from "../../../actions/mfa";
import errorsActions from "../../../actions/error";
import toastrActions from "../../../actions/toastr";
import modalActions from "../../../actions/modal";
import headerActions from "../../../actions/header";
import EFT from "../../../actions/EFT";

const Comp = connect(
  ({
    transferData,
    totalLca,
    totalLcaRaw,
    totalMax,
    totalMin,
    priorities,
    responseLcaDetails,
    respBankISPB,
    accounts,
    responseAccounts,
    responseAllLcaDetails,
    openModal,
    modalSettings,
    approveEFT,
    denyEFT,
    mfaTokenParams,
    responseToWithdrawal,
    responseToAproveWithdrawal,
    error,
    lot,
    randomUuid,
    authFactors,
    methodChanging,
    headerOnClickBack,
    headerOnClickClose,
    availableDateRanges,
    userInfo,
    serverTime,
    limitLca
  }) => ({
    transferData,
    totalLca,
    totalLcaRaw,
    totalMax,
    totalMin,
    priorities,
    responseLcaDetails,
    respBankISPB,
    accounts,
    responseAccounts,
    responseAllLcaDetails,
    openModal,
    modalSettings,
    approveEFT,
    denyEFT,
    mfaTokenParams,
    responseToWithdrawal,
    responseToAproveWithdrawal,
    error,
    lot,
    randomUuid,
    authFactors,
    methodChanging,
    headerOnClickBack,
    headerOnClickClose,
    availableDateRanges,
    userInfo,
    serverTime,
    limitLca
  }),
  combineActions(
    EFT,
    actions,
    mfaActions,
    modalActions,
    errorsActions,
    toastrActions,
    headerActions
  )
)(WithdrawLca);

export default withMaintenanceMode(Comp);
