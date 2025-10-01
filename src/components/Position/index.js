import { connect } from "redux-zero/react";
import Position from "./Position";
import { combineActions } from "redux-zero/utils";
import loginActions from "../../actions/login";
import offshoreActions from "../../actions/offshore";

export default connect(
  ({
    userInfo,
    getOffshorePosition,
    offshorePosition,
    accountsOffShore,
    getAccountsOffShore
  }) => ({
    userInfo,
    getOffshorePosition,
    offshorePosition,
    accountsOffShore,
    getAccountsOffShore
  }),
  combineActions(loginActions, offshoreActions)
)(Position);
