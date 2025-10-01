import { connect } from "redux-zero/react";

import FixedIncome from "./FixedIncome";
import actions from "../../../actions/transactions";
import withMaintenanceMode from "../../common/withMaintenanceMode";

const Comp = connect(
  ({
    fixedIncomeTransactions,
    getFixedIncomeTransactions,
    loading,
    totalCount,
    filter,
    error
  }) => ({
    fixedIncomeTransactions,
    getFixedIncomeTransactions,
    loading,
    totalCount,
    filter,
    error
  }),
  actions
)(FixedIncome);

export default withMaintenanceMode(Comp);
