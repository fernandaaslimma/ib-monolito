import { connect } from "redux-zero/react";

import Documents from "./Documents";
import actions from "../../actions/documents";
import withMaintenanceMode from "../common/withMaintenanceMode";

const Comp = connect(
  ({ filesByFolder, loading, getFilesByFolder, downloadDocument, error }) => ({
    filesByFolder,
    loading,
    getFilesByFolder,
    downloadDocument,
    error
  }),
  actions
)(Documents);

export default withMaintenanceMode(Comp);
