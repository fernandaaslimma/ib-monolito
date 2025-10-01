import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import clickWrapper from "./clickWrapper";

import modalActions from "../../actions/modal";
import toastrActions from "../../actions/toastr";

export default connect(
  ({ modalSettings }) => ({
    modalSettings
  }),
  combineActions(modalActions, toastrActions)
)(clickWrapper);
