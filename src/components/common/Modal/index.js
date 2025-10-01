import { connect } from "redux-zero/react";

// eslint-disable-next-line import/no-named-as-default
import Modal from "./Modal";
import actions from "../../../actions/modal";

export default connect(
  ({ modalSettings }) => ({ modalSettings }),
  actions
)(Modal);
