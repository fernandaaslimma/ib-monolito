import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import ResumeCard from "../../../common/ResumeCard";
import { scrollToTop } from "../../../../utils/dom";
import { Button } from "react-bocombbm-components";
import {
  Separator,
  StepVisibility,
  BtnWrapper,
  StickyWrapper
} from "../../Consent/styles";
import { translate } from "../../../../utils/i18n";
import { OpenBankingSharesContext } from "../Shares";

import { ContainerWrapper } from "./styles";

function ConfirmStep({ currentStep, stepForward, goToStep }) {
  const {
    changeState,
    props: { shareResourcesPatchTpp, rejectConsentReceived },
    state: {
      loadingApi,
      newConsentCreated,
      selectedBank,
      payloadToNewConsent,
      previusStep
    }
  } = useContext(OpenBankingSharesContext);

  const [newExpiration, setNewExpiration] = useState(null);

  useEffect(() => {
    if (currentStep === 6) {
      scrollToTop();
      const newDate = moment()
        .add(payloadToNewConsent.deadLine.total, "month")
        .toISOString();
      setNewExpiration(newDate);
    }
  }, [payloadToNewConsent, currentStep]);

  const consentPatch = async () => {
    const { shareId } = newConsentCreated;

    changeState({ loadingApi: true });

    await shareResourcesPatchTpp(shareId, payloadToNewConsent);
    await rejectConsentReceived(selectedBank.shareId);
    changeState({ loadingApi: false });
    setTimeout(() => {
      stepForward();
    }, 1000);
  };

  return (
    <ContainerWrapper>
      {currentStep === 6 && <StepVisibility id="ConfirmStep" />}

      {currentStep === 6 && (
        <ResumeCard
          dataTest="ResumeCardConfirmStep"
          cardTitle={translate("OPEN_BANKING_CONFIRMATION_SHARING")}
          cardMessage={translate("OPEN_BANKING_CONFIRMATION_SHARING_MSG")}
          destinyLogoUri={
            newConsentCreated &&
            newConsentCreated.authorisationServer.customerFriendlyLogoUri
          }
          destinyName={
            (newConsentCreated && newConsentCreated.organisationName) ||
            newConsentCreated.authorisationServer.customerFriendlyName
          }
          // name={consentName && consentName}   // Ver com BBM de onde vira o dado para preencher o nome
          document={
            newConsentCreated &&
            newConsentCreated.loggedUser.document.identification
          }
          destiny={
            (newConsentCreated && newConsentCreated.organisationName) ||
            newConsentCreated.authorisationServer.customerFriendlyName
          }
          purpose={newConsentCreated && newConsentCreated.finality.displayName}
          expiration={newExpiration}
        />
      )}
      <StickyWrapper>
        <Separator />
        <BtnWrapper>
          <Button
            dataTest="changeRenewBackButton"
            onClick={() => goToStep(previusStep)}
            type="outline"
            spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            disabled={loadingApi}
          >
            {previusStep === 5
              ? translate("OPEN_BANKING_CANCEL")
              : translate("OPEN_BANKING_SHARED_BACK")}
          </Button>
          <Button
            dataTest="changeRenewConfirmButton"
            onClick={() => consentPatch()}
            spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            loading={loadingApi}
          >
            {translate("OPEN_BANKING_SHARED_APPROVE")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>
    </ContainerWrapper>
  );
}

export default ConfirmStep;
