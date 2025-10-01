import { connect } from "redux-zero/react";

import Exchange from "./Exchange";
import contractsActions from "../../actions/contracts";

export default connect(
  ({ contracts, error }) => ({ contracts, error }),
  contractsActions
)(Exchange);
