import React from "react";
import { StepSlider, Hide } from "react-bocombbm-components";
import { InstanceContext } from "./portabilityRequestContext";
import { Wrapper } from "./styles";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import TypeInstitutionSelection from "./TypeInstitutionSelection";
import OriginAccountTypeSelection from "./OriginAccountTypeSelection";
import ReportCustodianAccounts from "./ReportCustodianAccounts";
import AssetsSelectionOrigin from "./AssetsSelectionOrigin";
import NotSupportMobile from '../../common/NotSupportMobile';
import OriginCompanySelection from "./OriginCompanySelection";
import AssetsSelectionDestination from "./AssetsSelectionDestination";

const PortabilityRequest = ({
  loading,
  error,
  getInstitutions,
  institutions,
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
}) => {

  const steps = [
    TypeInstitutionSelection,
    OriginCompanySelection,
    OriginAccountTypeSelection,
    ReportCustodianAccounts,
    AssetsSelectionOrigin,
    AssetsSelectionDestination
  ];

  return (
    <ErrorBoundary
      errorStatus={error}
    >
      <Wrapper>
        <>
          <Hide above="md">
            <NotSupportMobile />
          </Hide>
          <Hide below="md">
            <InstanceContext.Provider
              value={{
                loading,
                institutions,
                getInstitutions,
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
              }}
            >
              <StepSlider steps={steps} />
            </InstanceContext.Provider>
          </Hide>
        </>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default PortabilityRequest;