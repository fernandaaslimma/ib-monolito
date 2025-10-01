import SessionExpiration from "./SessionExpiration";
import { connect } from "redux-zero/react";

import SessionExpirationActions from "../../../actions/sessionExpiration";
import openBankingActions from "../../../actions/openBanking";

export default connect(
  null,
  SessionExpirationActions,
  openBankingActions
)(SessionExpiration);
