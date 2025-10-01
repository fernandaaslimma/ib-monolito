import MfaBoardingScreens from "./MfaBoardingScreens";
import { connect } from "redux-zero/react";
import notificationActions from "../../../actions/notification";
import modalActions from "../../../actions/modal";
import mfaActions from "../../../actions/mfa";
import tostrActions from "../../../actions/toastr";
import { combineActions } from "redux-zero/utils";
export default connect(
  ({
    mfaTokenValidated,
    mfaTokenParams,
    authFactorResponse,
    authCodeResponse,
    activatedAuthFactor,
    notification,
    methodChanging
  }) => ({
    mfaTokenValidated,
    mfaTokenParams,
    authFactorResponse,
    authCodeResponse,
    activatedAuthFactor,
    notification,
    methodChanging
  }),
  combineActions(modalActions, mfaActions, tostrActions, notificationActions)
)(MfaBoardingScreens);
