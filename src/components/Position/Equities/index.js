import { connect } from "redux-zero/react";

import Equities from "./Equities";
import actions from "../../../actions/position";
import withMaintenanceMode from "../../common/withMaintenanceMode";

const Comp = connect(
  ({
    equities,
    totalEquities,
    loading,
    getEquities,
    getTotalEquities,
    error
  }) => ({
    equities,
    totalEquities,
    loading,
    getEquities,
    getTotalEquities,
    error
  }),
  actions
)(Equities);

export default withMaintenanceMode(Comp);
