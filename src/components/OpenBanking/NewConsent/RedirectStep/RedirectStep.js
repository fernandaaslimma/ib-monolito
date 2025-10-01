import React, { useContext } from "react";
import Icon from "../../../common/Icon";
import store from "../../../../utils/store";
import { translate } from "../../../../utils/i18n";
import { StepVisibility } from "../../Consent/styles";
import { OpenBankingNewConsentContext } from "../NewConsent";
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
    props: { shareResponseJson }
  } = useContext(OpenBankingNewConsentContext);

  React.useEffect(() => {
    if (currentStep === 4) {
      store.setState({ loading: true });

      setTimeout(() => {
        // const redirectUri = shareResponseJson && shareResponseJson.redirect_uri;
        // const url = `/${redirectUri.slice(redirectUri.indexOf("?"))}`;
        // const slicedParameters = url.split("&");

        // const scope = slicedParameters[1];
        // const consentId = scope.substring(scope.indexOf(":") + 1);
        // const consentId2 = consentId.substring(consentId.indexOf(":") + 1);
        // const consentIdFinal = consentId2.substring(
        //   consentId2.indexOf(":") + 1
        // );

        // const stateParameter = slicedParameters[4];
        // const stateValue = stateParameter.substring(
        //   stateParameter.indexOf("=") + 1
        // );

        // const consentIdTpp = {
        //   state: stateValue,
        //   consentId: consentIdFinal
        // };
        // localStorage.setItem("consentIdTpp", JSON.stringify(consentIdTpp));
        store.setState({ loading: false });
        hardRedirect(shareResponseJson && shareResponseJson.redirect_uri);
      }, 6000);
    }
  }, [currentStep, shareResponseJson]);

  return (
    <ContainerWrapper>
      {currentStep === 4 && <StepVisibility id="RedirectStep" />}
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
          destiny={consentLogo}
          destinyName={consentName && consentName}
          flow={"tpp"}
        />
      </InfoSpace>
    </ContainerWrapper>
  );
}

export default RedirectStep;
