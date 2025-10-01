import React, { useContext } from "react";
import Icon from "../../../common/Icon";
import store from "../../../../utils/store";
import { translate } from "../../../../utils/i18n";
import { StepVisibility } from "../../Consent/styles";
import { OpenBankingConsentContext } from "../Consent";
import {
  InfoCard,
  Title,
  InfoSpace,
  ReceivingInstitutionInfo,
  SubTitle,
  ContainerWrapper
} from "./styles";

import RedirectCard from "../../../common/RedirectCard";
import { hardRedirect } from "../../../../utils/redirect";

function RedirectStep({ currentStep }) {
  const {
    props: {
      setIsApproveConsent,
      cancelConsentResponse,
      approveConsentResponse,
      consentInfo,
      specificOrganization
    }
  } = useContext(OpenBankingConsentContext);

  React.useEffect(() => {
    if (currentStep === 3) {
      store.setState({ loading: true });
      setTimeout(() => {
        store.setState({ loading: false });
        hardRedirect(
          cancelConsentResponse
            ? cancelConsentResponse.redirect_uri
            : approveConsentResponse
            ? approveConsentResponse.redirect_uri
            : undefined
        );
      }, 6000);
    }
  }, [
    currentStep,
    cancelConsentResponse,
    approveConsentResponse,
    setIsApproveConsent
  ]);

  return (
    <ContainerWrapper>
      {currentStep === 3 && <StepVisibility id="RedirectStep" />}
      <InfoCard>
        <Title>{translate("OPEN_BANKING_REDIRECT")}</Title>
      </InfoCard>

      <InfoSpace>
        <ReceivingInstitutionInfo>
          <Icon type="OpenBanking" />
        </ReceivingInstitutionInfo>
        <SubTitle>{translate("OPEN_BANKING_REDIRECT_MSG")}</SubTitle>

        <RedirectCard
          origin={"Bbm"}
          originName={"Banco BOCOM BBM"}
          destiny={
            specificOrganization
              ? specificOrganization[0].CustomerFriendlyLogoUri
              : "Bank"
          }
          destinyName={consentInfo && consentInfo.organisationName}
        />
      </InfoSpace>
    </ContainerWrapper>
  );
}

export default RedirectStep;
