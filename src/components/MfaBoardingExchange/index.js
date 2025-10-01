import MfaBoardingExchange from "./MfaBoardingExchange";

import { connect } from "redux-zero/react";

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
)(MfaBoardingExchange);
