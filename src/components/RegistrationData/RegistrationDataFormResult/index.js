import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";

import modalActions from "../../../actions/modal";
import RegistrationDataFormResult from "./RegistrationDataFormResult";
import notificationActions from "../../../actions/notification";

export default connect(
  null,
  combineActions(modalActions, notificationActions)
)(RegistrationDataFormResult);
