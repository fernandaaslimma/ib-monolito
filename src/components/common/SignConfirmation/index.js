import { connect } from "redux-zero/react";

import SignConfirmation from "./SignConfirmation";
import actions from "../../../actions/contracts";

export default connect(
  ({ resetContracts }) => ({ resetContracts }),
  actions
)(SignConfirmation);
