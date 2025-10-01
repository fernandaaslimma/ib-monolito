import { connect } from "redux-zero/react";
import SixthStep from "./SixthStep";
import { combineActions } from "redux-zero/utils";
import mfaActions from "../../../../actions/mfa";

export default connect(
  ({ activatedAuthFactor, activateAuthFactor, error, loading }) => ({
    activatedAuthFactor,
    activateAuthFactor,
    error,
    loading
  }),
  combineActions(mfaActions)
)(SixthStep);
