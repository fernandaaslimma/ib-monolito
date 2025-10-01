import { connect } from "redux-zero/react";

import Home from "./Home";
import { combineActions } from "redux-zero/utils";
import actions from "../../actions/login";
import settingsActions from "../../actions/settings";
import notificationActions from "../../actions/notification";
import openBankingActions from "../../actions/openBanking";
import navigationMenu from "../../actions/navigationMenu";

export default connect(
  ({
    getNotification,
    notification,
    userInfo,
    ibNotifications,
    justLoggedIn,
    openBankingReceivedInfo,
    isConsentFlow,
    isConsentFlowConfirmation,
    isConsentFlowCancel,
    showNavigationMenu,
    setNotificationSelect
  }) => ({
    getNotification,
    notification,
    userInfo,
    ibNotifications,
    justLoggedIn,
    openBankingReceivedInfo,
    isConsentFlow,
    isConsentFlowConfirmation,
    isConsentFlowCancel,
    showNavigationMenu,
    setNotificationSelect
  }),
  combineActions(
    actions,
    settingsActions,
    notificationActions,
    openBankingActions,
    navigationMenu
  )
)(Home);
