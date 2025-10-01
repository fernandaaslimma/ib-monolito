import EFTToken from "./EFTToken";

import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import MFATokenActions from "../../../actions/mfa";
import toastrActions from "../../../actions/toastr";

export default connect(
  ({ mfaToken, mfaTokenValidated, authFactors, methodChanging, ...props }) => ({
    mfaToken,
    mfaTokenValidated,
    authFactors,
    methodChanging,
    props
  }),
  combineActions(MFATokenActions, toastrActions)
)(EFTToken);
