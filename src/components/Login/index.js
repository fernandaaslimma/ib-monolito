import { connect } from "redux-zero/react";

import Login from "./Login";
import loginActions from "../../actions/login";
import toastrActions from "../../actions/toastr";
import modalActions from "../../actions/modal";
import settingsActions from "../../actions/settings";
import openBankingActions from "../../actions/openBanking";

export default connect(
  ({
    login,
    loginSuccess,
    openBankingReceivedInfo,
    isConsentFlowConfirmation,
    urlRouteParams
  }) => ({
    login,
    loginSuccess,
    openBankingReceivedInfo,
    isConsentFlowConfirmation,
    urlRouteParams
  }),
  (...actionParams) => ({
    ...loginActions(...actionParams),
    ...toastrActions(...actionParams),
    ...modalActions(...actionParams),
    ...settingsActions(...actionParams),
    ...openBankingActions(...actionParams)
  })
)(Login);
