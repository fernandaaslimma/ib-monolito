import { connect } from "redux-zero/react";
import EmailSent from "./SentMail";

// import RecoverPassword from "./RecoverPassword";
import actions from "../../actions/recoverPassword";

export default connect(
  ({ recoverPassword, cleanPasswordSuccess }) => ({
    recoverPassword,
    cleanPasswordSuccess
  }),
  actions
)(EmailSent);
