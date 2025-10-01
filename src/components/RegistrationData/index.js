import { connect } from "redux-zero/react";

import RegistrationData from "./RegistrationData";
import MFATokenActions from "../../actions/mfa";
import notificationActions from "../../actions/notification";
import modalActions from "../../actions/modal";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({ error, notification, authFactors }) => ({
    error,
    notification,
    authFactors
  }),
  combineActions(notificationActions, modalActions, MFATokenActions)
)(RegistrationData);
