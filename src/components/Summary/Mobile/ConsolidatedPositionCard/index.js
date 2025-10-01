import { connect } from "redux-zero/react";

import ConsolidatedPositionCard from "./ConsolidatedPositionCard";
import actions from "../../../../actions/summary";

export default connect(
  ({ assets, currentIndex, getAssetsByType, loading }) => ({
    assets,
    currentIndex,
    getAssetsByType,
    loading
  }),
  actions
)(ConsolidatedPositionCard);
