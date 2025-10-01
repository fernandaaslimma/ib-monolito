import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";

import registrationActions from "../../../actions/registration";
import notificationActions from "../../../actions/notification";
import modalActions from "../../../actions/modal";
import mfaActions from "../../../actions/mfa";
import toastrActions from "../../../actions/toastr";

import RegistrationDataForm from "./RegistrationDataForm";

export default connect(
  ({
    registrationFormData,
    dataPersonalRegistration,
    notification,
    loading,
    mfaTokenValidated,
    mfaTokenParams,
    countries,
    userInfo,
    methodChanging
  }) => ({
    registrationFormData,
    dataPersonalRegistration,
    notification,
    loading,
    mfaTokenValidated,
    mfaTokenParams,
    countries,
    userInfo,
    methodChanging
  }),
  combineActions(
    registrationActions,
    modalActions,
    notificationActions,
    mfaActions,
    toastrActions
  )
)(RegistrationDataForm);
