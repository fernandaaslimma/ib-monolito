import { connect } from "redux-zero/react";

import contractsActions from "../../../../actions/contracts";
import ContractCallToAction from "./ContractCallToAction";

export default connect(
  ({ signLoadingId }) => ({ signLoadingId }),
  contractsActions
)(ContractCallToAction);
