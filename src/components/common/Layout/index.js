import { connect } from "redux-zero/react";
import Layout from "./Layout";
import menuAcitons from "../../../actions/menu";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({ setHiddenContentForMenuMobile, notVisible }) => ({
    setHiddenContentForMenuMobile,
    notVisible
  }),
  combineActions(menuAcitons)
)(Layout);
