import { connect } from "redux-zero/react";

import Funds from "./Funds";
import actions from "../../../actions/position";
import withMaintenanceMode from "../../common/withMaintenanceMode";

const Comp = connect(
  ({ funds, totalFunds, loading, getFunds, getTotalFunds, error }) => ({
    funds,
    totalFunds,
    loading,
    getFunds,
    getTotalFunds,
    error
  }),
  actions
)(Funds);

export default withMaintenanceMode(Comp);
