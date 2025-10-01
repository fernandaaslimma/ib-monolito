import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import SuitabilityModal from "./SuitabilityModal";

import modalActions from "../../../actions/modal";
import mfaActions from "../../../actions/mfa";
import notificationActions from "../../../actions/notification";
import errorActions from "../../../actions/error";

export default connect(
  ({
    error,
    notification,
    authFactors,
    getInvestorProfile,
    investorProfile,
    getAuthFactors
  }) => ({
    error,
    notification,
    authFactors,
    getInvestorProfile,
    investorProfile,
    getAuthFactors
  }),
  combineActions(modalActions, notificationActions, mfaActions, errorActions)
)(SuitabilityModal);
