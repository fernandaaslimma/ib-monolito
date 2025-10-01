import { connect } from "redux-zero/react";

import CanAccess from "./CanAccess";

export default connect(({ userInfo }) => ({
  userInfo
}))(CanAccess);
