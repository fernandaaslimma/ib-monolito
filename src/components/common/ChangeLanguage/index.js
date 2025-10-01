import { connect } from "redux-zero/react";

import ChangeLanguage from "./ChangeLanguage";
import settingsActions from "../../../actions/settings";

export default connect(
  ({ userInfo }) => ({ userInfo }),
  settingsActions
)(ChangeLanguage);
