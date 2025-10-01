import { connect } from "redux-zero/react";

import ContractSummary from "./ContractSummary";
import contractsActions from "../../../actions/contracts";

export default connect(
  ({ groupsInProgress, userInfoMail }) => ({ groupsInProgress, userInfoMail }),
  contractsActions
)(ContractSummary);
