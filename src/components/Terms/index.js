import { connect } from "redux-zero/react";
import Terms from "./Terms";

import actions from "../../actions/terms";

export default connect(
  ({ downloadTerms }) => ({
    downloadTerms
  }),
  actions
)(Terms);
