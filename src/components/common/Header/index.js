import { connect } from "redux-zero/react";

import Header from "./Header";
import logoutActions from "../../../actions/logout";
import loginActions from "../../../actions/login";
import modalActions from "../../../actions/modal";
import navigationMenu from "../../../actions/navigationMenu";
import positionActions from "../../../actions/position";
import toastrActions from "../../../actions/toastr";
import suitabilityActions from "../../../actions/suitability";
import { combineActions } from "redux-zero/utils";

export default connect(
  ({
    userInfo,
    isNavigationMenuShown,
    showNavigationMenu,
    accounts,
    getAccounts,
    getSuitabilityInfo,
    openToastr,
    openModal,
    closeModal,
    getInvestorProfile,
    investorProfile
  }) => ({
    userInfo,
    isNavigationMenuShown,
    showNavigationMenu,
    accounts,
    getAccounts,
    getSuitabilityInfo,
    openToastr,
    openModal,
    closeModal,
    getInvestorProfile,
    investorProfile
  }),
  combineActions(
    logoutActions,
    modalActions,
    navigationMenu,
    positionActions,
    toastrActions,
    suitabilityActions,
    loginActions
  )
)(Header);
