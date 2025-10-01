import { connect } from "redux-zero/react";

import Routes from "./Routes";
import actions from "../../actions/state";
import offshoreActions from "../../actions/offshore";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({ userInfo, isGlobalMode, setIsGlobalMode }) => ({
    userInfo,
    isGlobalMode,
    setIsGlobalMode
  }),
  combineActions(actions, offshoreActions)
)(Routes);
