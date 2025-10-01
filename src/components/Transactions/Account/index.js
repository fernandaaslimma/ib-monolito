import { connect } from "redux-zero/react";

import Account from "./Account";
import actions from "../../../actions/transactions";
import withMaintenanceMode from "../../common/withMaintenanceMode";

const Comp = connect(
  ({ cashAccounts, getUserCashAccountTransactions, loading, error }) => ({
    cashAccounts,
    getUserCashAccountTransactions,
    loading,
    error
  }),
  actions
)(Account);

export default withMaintenanceMode(Comp);
