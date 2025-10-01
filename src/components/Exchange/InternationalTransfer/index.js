import InternationalTransfer from "./InternationalTransfer";
import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import mfaActions from "../../../actions/mfa";
import onlineExchanges from "../../../actions/onlineExchange";

export default connect(
  ({
    getAuthFactors,
    authFactors,
    error,
    getExchangeTransactions,
    exchangeTransactions
  }) => ({
    getAuthFactors,
    authFactors,
    error,
    getExchangeTransactions,
    exchangeTransactions
  }),
  combineActions(mfaActions, onlineExchanges)
)(InternationalTransfer);
