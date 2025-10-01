import { connect } from "redux-zero/react";
import History from "./History";
import { combineActions } from "redux-zero/utils";
import onlineExchange from "../../../actions/onlineExchange";

export default connect(
  ({ getExchangeTransactions, exchangeTransactions, error }) => ({
    getExchangeTransactions,
    exchangeTransactions,
    error
  }),
  combineActions(onlineExchange)
)(History);
