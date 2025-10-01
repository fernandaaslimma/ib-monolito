import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import Suitability from "./Suitability";

import modalActions from "../../actions/modal";
import MFATokenActions from "../../actions/mfa";
import notificationActions from "../../actions/notification";
import suitabilityActions from "../../actions/suitability";

export default connect(
  ({
    error,
    notification,
    authFactors,
    getInvestorProfile,
    investorProfile,
    cleanSuitabilityError
  }) => ({
    error,
    notification,
    authFactors,
    getInvestorProfile,
    investorProfile,
    cleanSuitabilityError
  }),
  combineActions(
    modalActions,
    notificationActions,
    MFATokenActions,
    suitabilityActions
  )
)(Suitability);
