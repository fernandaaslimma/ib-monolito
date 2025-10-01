import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import CreatePassword from "./CreatePassword";
import passwordActions from "../../actions/password";
import settingsActions from "../../actions/settings";
export default connect(
  ({ createPassword, createPasswordSuccess }) => ({
    createPassword,
    createPasswordSuccess
  }),
  combineActions(passwordActions, settingsActions)
)(CreatePassword);
