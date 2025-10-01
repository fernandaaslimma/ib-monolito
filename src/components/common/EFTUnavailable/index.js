import EFTUnavailable from "./EFTUnavailable";

import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";

import modalActions from "../../../actions/modal";
import EFTActions from "../../../actions/EFT";

export default connect(
  ({ nextAvailableDate, transferData, serverTime }) => ({
    nextAvailableDate,
    transferData,
    serverTime
  }),
  combineActions(modalActions, EFTActions)
)(EFTUnavailable);
