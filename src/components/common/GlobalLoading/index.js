import { connect } from "redux-zero/react";

import GlobalLoading from "./GlobalLoading";

export default connect(({ loading }) => ({ loading }))(GlobalLoading);
