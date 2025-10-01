import { connect } from "redux-zero/react";

import Credit from "./Credit";
import actions from "../../actions/credit";
import withMaintenanceMode from "../common/withMaintenanceMode";

const Comp = connect(
  ({
    error,
    creditContracts,
    installmentBalances,
    installmentBalancesTotals
  }) => ({
    error,
    creditContracts,
    installmentBalances,
    installmentBalancesTotals
  }),
  actions
)(Credit);

export default withMaintenanceMode(Comp);
