import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";

import Toastr from "./Toastr";
import actions from "../../../actions/toastr";

const Component = connect(
  ({ toastrSettings, cancelTimeout, enableToastrTimeout }) => ({
    toastrSettings,
    cancelTimeout,
    enableToastrTimeout
  }),
  actions
)(Toastr);

export default withRouter(Component);
