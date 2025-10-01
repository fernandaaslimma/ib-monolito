import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import FileValidation from "./FileValidation";
import validationAction from "../../../actions/shipments/validation";
import modalActions from "../../../actions/modal";

export default connect(
  ({ error, RemmitanceValidationResponse, cnabLayouts }) => ({
    error,
    RemmitanceValidationResponse,
    cnabLayouts
  }),
  combineActions(validationAction, modalActions)
)(FileValidation);
