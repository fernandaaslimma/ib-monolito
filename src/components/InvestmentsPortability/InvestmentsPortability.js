import React, { useState, useEffect, Fragment } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { Hide, StepSlider } from "react-bocombbm-components";
import NotSupportMobile from "../common/NotSupportMobile";
import { Wrapper } from "./styles";
import { formatCNPJ } from "../../utils/formatNumber";
import PortabilityDetail from "./PortabilityDetail/PortabilityDetail";
import Portabilities from "./Portabilities/Portabilities";

const InvestmentsPortability = ({
  error,
  getPortabilities,
  portabilitiesResponse,
  loading
}) => {
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const rowClick = item => {
    setSelectedDetails(item.details);
    setSelectedItem(item);
  };

  const backToMainTable = () => {
    setSelectedDetails(null);
  };

  useEffect(() => {
    getPortabilities();
  }, []);

  const normalizedData =
    portabilitiesResponse?.map(item => ({
      id: item.id,
      date: item.date,
      originInstitution:
        item.originInstitution?.name ||
        formatCNPJ(item.originInstitution?.documentNumber),
      destinationInstitution:
        item.destinationInstitution?.name ||
        formatCNPJ(item.destinationInstitution?.documentNumber),
      channel: item.channel?.name,
      totalPortabilityIndicator: item.totalPortabilityIndicator ? "NÃO" : "SIM",
      status: JSON.stringify({
        name: item.status?.name,
        code: item.status?.code
      }),
      details: item.portabilityItems?.map(detail => ({
        accountType: detail.assetCategory,
        sourceCustodianAccount: detail.originAccount,
        destinationCustodianAccount: detail.destinationAccount,
        allAssets: detail.totalTransferAssetIndicator ? "Sim" : "Não",
        assetCode: detail.assetCode,
        quantityTransfer: detail.transferQuantity,
        status: JSON.stringify({
          name: detail.status?.name,
          code: detail.status?.code
        }),
        estimate: new Date(detail.estimatedDate).toLocaleDateString("pt-BR"),
        lastUpdate: new Date(detail.modificationDate).toLocaleDateString(
          "pt-BR"
        ),
        notes: detail.remarks
      }))
    })) || [];

  return (
    <ErrorBoundary errorStatus={error}>
      <Wrapper>
        <Fragment>
          <Hide above="md">
            <NotSupportMobile />
          </Hide>
          <Hide below="md">
            <StepSlider
              dataTest="investmentsPortability"
              steps={[
                ({ stepForward }) => (
                  <Portabilities
                    key="portabilities"
                    loading={loading}
                    normalizedData={normalizedData}
                    stepForward={stepForward}
                    rowClick={rowClick}
                  />
                ),
                ({ stepBack }) =>
                  selectedDetails && (
                    <PortabilityDetail
                      key="portabilityDetails"
                      selectedItem={selectedItem}
                      selectedDetails={selectedDetails}
                      backToMainTable={backToMainTable}
                      stepBack={stepBack}
                    />
                  )
              ]}
            />
          </Hide>
        </Fragment>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default InvestmentsPortability;
