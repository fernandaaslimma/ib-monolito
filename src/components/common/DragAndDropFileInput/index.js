import { connect } from "redux-zero/react";
import DragAndDropFileInput from "./DragAndDropFileInput";
import toastrActions from "../../../actions/toastr";

export default connect(
  null,
  toastrActions
)(DragAndDropFileInput);
