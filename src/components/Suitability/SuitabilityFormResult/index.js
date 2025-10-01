import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";

import suitabilityActions from "../../../actions/suitability";
import modalActions from "../../../actions/modal";
import SuitabilityFormResult from "./SuitabilityFormResult";
import notificationActions from "../../../actions/notification";
import errorActions from "../../../actions/error";
import mfaActions from "../../../actions/mfa";
export default connect(
  ({
    approveSuitability,
    suitabilityFormParams,
    suitabilityResult,
    mfaToken,
    mfaTokenValidated,
    mfaTokenParams,
    loading,
    methodChanging
  }) => ({
    approveSuitability,
    suitabilityFormParams,
    suitabilityResult,
    mfaToken,
    mfaTokenValidated,
    mfaTokenParams,
    loading,
    methodChanging
  }),
  combineActions(
    suitabilityActions,
    modalActions,
    notificationActions,
    mfaActions,
    errorActions
  )
)(SuitabilityFormResult);
