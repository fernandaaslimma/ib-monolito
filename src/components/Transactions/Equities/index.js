import { connect } from "redux-zero/react";

import Equities from "./Equities";
import actions from "../../../actions/transactions";
import withMaintenanceMode from "../../common/withMaintenanceMode";

const Comp = connect(
  ({
    equityIncomeTransactions,
    getEquityIncomeTransactions,
    totalCount,
    loading,
    filter,
    error
  }) => ({
    equityIncomeTransactions,
    getEquityIncomeTransactions,
    totalCount,
    loading,
    filter,
    error
  }),
  actions
)(Equities);

export default withMaintenanceMode(Comp);
