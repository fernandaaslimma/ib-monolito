import { connect } from "redux-zero/react";
import notificationActions from "../../../actions/notification";
import modalActions from "../../../actions/modal";
import mfaActions from "../../../actions/mfa";
import tostrActions from "../../../actions/toastr";
import { combineActions } from "redux-zero/utils";
import MfaBoardingScreenExchange from "./MfaBoardingScreenExchange";
export default connect(
  ({
    mfaTokenValidated,
    mfaTokenParams,
    authFactorResponse,
    createAuthFactor,
    authCodeResponse,
    notification,
    methodChanging,
    error
  }) => ({
    mfaTokenValidated,
    mfaTokenParams,
    authFactorResponse,
    createAuthFactor,
    authCodeResponse,
    notification,
    methodChanging,
    error
  }),
  combineActions(modalActions, mfaActions, tostrActions, notificationActions)
)(MfaBoardingScreenExchange);
