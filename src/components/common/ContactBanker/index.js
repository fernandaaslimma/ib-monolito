import ContactBanker from "./ContactBanker";

import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import modalActions from "../../../actions/modal";
import toastrActions from "../../../actions/toastr";
import contactsActions from "../../../actions/contacts";
import errorsActions from "../../../actions/error";

export default connect(
  ({
    responseAccountManagers,
    responsePostEmail,
    responseButtonMessage,
    error
  }) => ({
    responseAccountManagers,
    responsePostEmail,
    responseButtonMessage,
    error
  }),
  combineActions(modalActions, toastrActions, contactsActions, errorsActions)
)(ContactBanker);
