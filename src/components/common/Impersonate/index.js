import { connect } from "redux-zero/react";

import Impersonate from "./Impersonate";

export default connect(({ userInfo }) => ({ userInfo }))(Impersonate);
