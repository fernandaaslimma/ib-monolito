import { connect } from "redux-zero/react";

import ConsolidatedPositionTable from "./ConsolidatedPositionTable";
import actions from "../../../../actions/summary";

export default connect(
  ({ assets, currentIndex, getAssetsByType, loading }) => ({
    assets,
    currentIndex,
    getAssetsByType,
    loading
  }),
  actions
)(ConsolidatedPositionTable);
