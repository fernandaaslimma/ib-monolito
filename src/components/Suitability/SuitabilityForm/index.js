import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";

import suitabilityActions from "../../../actions/suitability";
import notificationActions from "../../../actions/notification";
import modalActions from "../../../actions/modal";
import SuitabilityForm from "./SuitabilityForm";

export default connect(
  ({ suitabilityFormData, notification, suitabilityForm }) => ({
    suitabilityForm,
    suitabilityFormData,
    notification
  }),
  combineActions(suitabilityActions, modalActions, notificationActions)
)(SuitabilityForm);
