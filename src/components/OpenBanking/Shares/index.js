import Shares from "./Shares";
import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import openBankingActions from "../../../actions/openBanking";

export default connect(
  ({
    transmittedCurrentShares,
    receivedCurrentShares,
    userInfo,
    error,
    consentCreated,
    shareResponseJsonPatch,
    institutions
  }) => ({
    transmittedCurrentShares,
    receivedCurrentShares,
    userInfo,
    error,
    consentCreated,
    shareResponseJsonPatch,
    institutions
  }),
  combineActions(openBankingActions)
)(Shares);
