import InvestmentProducts from "./InvestmentProducts";

import { connect } from "redux-zero/react";

export default connect(({ userInfo }) => ({ userInfo }))(InvestmentProducts);
