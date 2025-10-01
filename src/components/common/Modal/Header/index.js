import { connect } from "redux-zero/react";

import Header from "./Header";
import actions from "../../../../actions/header";

export default connect(
  ({ headerOnClickBack, headerOnClickClose }) => ({
    headerOnClickBack,
    headerOnClickClose
  }),
  actions
)(Header);
