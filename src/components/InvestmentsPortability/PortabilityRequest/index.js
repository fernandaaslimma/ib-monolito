import { connect } from "redux-zero/react";
import PortabilityRequest from "./PortabilityRequest";
import { combineActions } from "redux-zero/utils";
import error from "../../../actions/error";
import investmentsPortability from "../../../actions/investmentsPortability";
import actions from "../../../actions/login";

export default connect(
  ({
    error,
    loading,
    getInstitutions,
    institutions,
    portabilityData,
    setCustodianAccounts,
    cleanCustodianAccounts,
    custodianAccounts,
    setSelectedInstitutions,
    selectedInstitutions,
    getPositions,
    positions,
    setAssetCategory,
    assetCategory,
    userInfo,
    setIsOriginBocom,
    isOriginBocom,
    requestPortability,
    setCompany,
    company
  }) => ({
    error,
    loading,
    getInstitutions,
    institutions,
    portabilityData,
    setCustodianAccounts,
    cleanCustodianAccounts,
    custodianAccounts,
    setSelectedInstitutions,
    selectedInstitutions,
    getPositions,
    positions,
    setAssetCategory,
    assetCategory,
    userInfo,
    setIsOriginBocom,
    isOriginBocom,
    requestPortability,
    setCompany,
    company
  }),
  combineActions(
    error,
    investmentsPortability,
    actions
  )
)(PortabilityRequest);
