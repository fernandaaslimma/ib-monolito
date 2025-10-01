import Consent from "./Consent";
import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import openBankingActions from "../../../actions/openBanking";
import logoutActions from "../../../actions/logout";
import navigationMenu from "../../../actions/navigationMenu";
import userInfoActions from "../../../actions/login";

export default connect(
  ({
    openBankingReceivedInfo,
    isConsentFlow,
    isConsentFlowConfirmation,
    isConsentFlowCancel,
    openBankingReceivedInfoConfirmation,
    confirmConsentResponse,
    urlConfirmation,
    consentInfo,
    consentInfoError,
    intent_id,
    isNavigationMenuShown,
    cancelConsentResponse,
    approveConsentResponse,
    userInfo,
    error,
    specificOrganization,
    sharesList,
    receivedCurrentSharesSpecific
  }) => ({
    openBankingReceivedInfo,
    isConsentFlow,
    isConsentFlowConfirmation,
    isConsentFlowCancel,
    openBankingReceivedInfoConfirmation,
    confirmConsentResponse,
    urlConfirmation,
    consentInfo,
    consentInfoError,
    intent_id,
    isNavigationMenuShown,
    cancelConsentResponse,
    approveConsentResponse,
    userInfo,
    error,
    specificOrganization,
    sharesList,
    receivedCurrentSharesSpecific
  }),
  combineActions(
    openBankingActions,
    logoutActions,
    navigationMenu,
    userInfoActions
  )
)(Consent);
