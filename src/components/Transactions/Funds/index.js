import { connect } from "redux-zero/react";

import Funds from "./Funds";
import actions from "../../../actions/transactions";
import withMaintenanceMode from "../../common/withMaintenanceMode";

const Comp = connect(
  ({
    fundsIncomeTransactions,
    getFundsIncomeTransactions,
    loading,
    totalCount,
    filter,
    error
  }) => ({
    fundsIncomeTransactions,
    getFundsIncomeTransactions,
    loading,
    totalCount,
    filter,
    error
  }),
  actions
)(Funds);

export default withMaintenanceMode(Comp);
