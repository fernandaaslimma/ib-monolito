import { connect } from "redux-zero/react";

import GenericNotification from "./GenericNotification";
import notificationActions from "../../actions/notification";
import modalActions from "../../actions/modal";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({ notification, openModal, closeModal, notificated }) => ({
    notification,
    openModal,
    closeModal,
    notificated
  }),
  combineActions(modalActions, notificationActions)
)(GenericNotification);
