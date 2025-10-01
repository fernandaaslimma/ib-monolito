import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import actions from "../../actions/investmentsPortability";
import InvestmentsPortability from "./InvestmentsPortability";
import error from "../../actions/error";

export default connect(
  ({
     error,
     portabilitiesResponse,
     getPortabilities,
     loading
  }) => ({
    error,
    portabilitiesResponse,
    getPortabilities,
    loading
  }),
  combineActions(
    actions,
    error
  )
)(InvestmentsPortability);