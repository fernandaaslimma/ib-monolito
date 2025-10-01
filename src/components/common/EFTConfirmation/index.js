import EFTConfirmation from "./EFTConfirmation";

import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import modalActions from "../../../actions/modal";

export default connect(
  null,
  combineActions(modalActions)
)(EFTConfirmation);
