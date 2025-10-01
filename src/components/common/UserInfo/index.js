import { connect } from "redux-zero/react";

import UserInfo from "./UserInfo";
import actions from "../../../actions/login";
import offshoreActions from "../../../actions/offshore";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({ userInfo, getOffshoreAccount, offshoreAccount, getOffshorePosition }) => ({
    userInfo,
    getOffshoreAccount,
    getOffshorePosition,
    offshoreAccount
  }),
  combineActions(actions, offshoreActions)
)(UserInfo);
