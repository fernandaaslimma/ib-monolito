import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import Menu from "./Menu";
import menuAcitons from "../../../actions/menu";

export default connect(
  ({ setHiddenContentForMenuMobile }) => ({
    setHiddenContentForMenuMobile
  }),
  combineActions(menuAcitons)
)(Menu);
