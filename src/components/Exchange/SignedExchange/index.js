import { connect } from "redux-zero/react";

import SignedExchange from "./SignedExchange";
import contractsActions from "../../../actions/contracts";

export default connect(
  ({ signedContracts, loading, error }) => ({
    signedContracts,
    loading,
    error
  }),
  contractsActions
)(SignedExchange);
