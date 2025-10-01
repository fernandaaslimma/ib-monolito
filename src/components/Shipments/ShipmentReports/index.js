import ShipmentsReports from "./Reports";
import { connect } from "redux-zero/react";

import documentsActions from "../../../actions/documents";

export default connect(
  ({ getShipmentFiles, shipmentFiles, downloadDocument }) => ({
    getShipmentFiles,
    shipmentFiles,
    downloadDocument
  }),
  documentsActions
)(ShipmentsReports);
