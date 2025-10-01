import { connect } from "redux-zero/react";
import ReturnShipments from "./ReturnShipments";
import shipmentAction from "../../../actions/shipments/return";

export default connect(
  ({ shipments, downloadFile, error }) => ({
    shipments,
    downloadFile,
    error
  }),
  shipmentAction
)(ReturnShipments);
