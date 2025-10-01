import { connect } from "redux-zero/react";

import LoginForm from "./LoginForm";
import loginActions from "../../../actions/login";

export default connect(
  ({ login }) => ({ login }),
  loginActions
)(LoginForm);
