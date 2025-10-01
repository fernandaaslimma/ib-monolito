import { connect } from "redux-zero/react";

import ApproveNewTerms from "./ApproveNewTerms";
import toastrActions from "../../actions/toastr";
import notificationActions from "../../actions/notification";
import modalActions from "../../actions/modal";
import termsActions from "../../actions/terms";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({
    notification,
    openModal,
    closeModal,
    openToastr,
    closeToastr,
    enableToastrTimeout,
    downloadTerms,    
    notificatedId
  }) => ({
    notification,
    openModal,
    closeModal,
    openToastr,
    closeToastr,
    enableToastrTimeout,
    downloadTerms,
    notificatedId
  }),
  combineActions(modalActions, notificationActions, toastrActions, termsActions)
)(ApproveNewTerms);
