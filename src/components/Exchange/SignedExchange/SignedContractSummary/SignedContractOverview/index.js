import { connect } from "redux-zero/react";

import SignedContractOverview from "./SignedContractOverview";
import contractsActions from "../../../../../actions/contracts";

export default connect(
  null,
  contractsActions
)(SignedContractOverview);
