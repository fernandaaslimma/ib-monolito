import React, { useContext } from "react";
import Icon from "../../../common/Icon";
import store from "../../../../utils/store";
import { translate } from "../../../../utils/i18n";
import { StepVisibility } from "../../Consent/styles";
import { OpenBankingSharesContext } from "../Shares";
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
    state: { consentLogo, consentName },
    props: { shareResponseJsonPatch }
  } = useContext(OpenBankingSharesContext);

  React.useEffect(() => {
    if (currentStep === 7 && shareResponseJsonPatch) {
      store.setState({ loading: true });
      setTimeout(() => {
        store.setState({ loading: false });
        hardRedirect(
          shareResponseJsonPatch && shareResponseJsonPatch.redirect_uri
        );
      }, 6000);
    }
  }, [currentStep, shareResponseJsonPatch]);

  return (
    <ContainerWrapper>
      {currentStep === 7 && <StepVisibility id="RedirectStep" />}
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
          originName={translate("OPEN_BANKING_NEW_BBM_BANK")}
          destiny={consentLogo ? consentLogo : "Bank"}
          destinyName={consentName && consentName}
        />
      </InfoSpace>
    </ContainerWrapper>
  );
}

export default RedirectStep;
