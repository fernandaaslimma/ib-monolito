import { connect } from "redux-zero/react";

import MfaBoarding from "./MfaBoarding";
import notificationActions from "../../actions/notification";
import modalActions from "../../actions/modal";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({ notification, openModal, closeModal }) => ({
    notification,
    openModal,
    closeModal
  }),
  combineActions(modalActions, notificationActions)
)(MfaBoarding);
