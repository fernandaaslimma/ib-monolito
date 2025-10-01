import EFTSchedule from "./EFTSchedule";

import { connect } from "redux-zero/react";
import modalActions from "../../../actions/modal";

export default connect(
  null,
  modalActions
)(EFTSchedule);
