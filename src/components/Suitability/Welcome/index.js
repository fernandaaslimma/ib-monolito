import Welcome from "./Welcome";
import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import modalActions from "../../../actions/modal";
import notificationActions from "../../../actions/notification";
import suitabilityActions from "../../../actions/suitability";

export default connect(
  ({ suitabilityInfo, userInfo }) => ({ suitabilityInfo, userInfo }),
  combineActions(modalActions, notificationActions, suitabilityActions)
)(Welcome);
