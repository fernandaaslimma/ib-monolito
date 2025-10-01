import { connect } from "redux-zero/react";
import OverviewOffShore from "./OverviewOffShore";
import { combineActions } from "redux-zero/utils";
import offshore from "../../actions/offshore";
import actions from "../../actions/login";

export default connect(({
    error,
    loading,
    userInfo,
    getInvestimentPositionOffShore,
    positionsOffShore,
    accountsOffShore,
    getAccountsOffShore,
    getTransactionsOffShore,
    transactionsOffShore,
    totalCount
}) => ({
    error,
    loading,
    userInfo,
    getInvestimentPositionOffShore,
    positionsOffShore,
    accountsOffShore,
    getAccountsOffShore,
    getTransactionsOffShore,
    transactionsOffShore,
    totalCount
}),
    combineActions(
        offshore,
        actions
    ))(OverviewOffShore);
