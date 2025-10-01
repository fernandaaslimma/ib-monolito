import { connect } from "redux-zero/react";

import Account from "./Account";
import actions from "../../../actions/position";
import withMaintenanceMode from "../../common/withMaintenanceMode";

const Comp = connect(
  store => ({
    accounts: store.accounts,
    loading: store.loading,
    error: store.error
  }),
  actions
)(Account);

export default withMaintenanceMode(Comp);
