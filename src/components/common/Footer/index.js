import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";
import { combineActions } from "redux-zero/utils";
import modalActions from "../../../actions/modal";
import errorsActions from "../../../actions/error";
import termsActions from "../../../actions/terms";

import Footer from "./Footer";

export default connect(
  ({ userInfo, error, downloadTerms }) => ({ userInfo, error, downloadTerms }),
  combineActions(modalActions, errorsActions, termsActions)
)(withRouter(Footer));
