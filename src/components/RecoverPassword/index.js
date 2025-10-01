import { connect } from "redux-zero/react";

import RecoverPassword from "./RecoverPassword";
import actions from "../../actions/recoverPassword";

export default connect(
  ({ recoverPassword, recoverPasswordSuccess, cleanPasswordSuccess }) => ({
    recoverPassword,
    recoverPasswordSuccess,
    cleanPasswordSuccess
  }),
  actions
)(RecoverPassword);
