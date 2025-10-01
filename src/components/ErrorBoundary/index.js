import { connect } from "redux-zero/react";
import ErrorBoundary from "./ErrorBoundary";

import modalActions from "../../actions/modal";

export default connect(
  null,
  modalActions
)(ErrorBoundary);
