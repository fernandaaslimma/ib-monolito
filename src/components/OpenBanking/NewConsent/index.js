import NewConsent from "./NewConsent";
import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import openBankingActions from "../../../actions/openBanking";

export default connect(
  ({
    error,
    consentCreated,
    institutions,
    specificOrganization,
    userInfo,
    shareResponseJson,
    updateScopeError,
    dataPermissions
  }) => ({
    error,
    consentCreated,
    institutions,
    specificOrganization,
    userInfo,
    shareResponseJson,
    updateScopeError,
    dataPermissions
  }),
  combineActions(openBankingActions)
)(NewConsent);
