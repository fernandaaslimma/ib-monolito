import React from "react";
import { Button, Icon } from "react-bocombbm-components";
import { negative200 } from "../../../../styles/settings";
import { OpenBankingConsentContext } from "../Consent";
import { BtnWrapper, StickyWrapper, Separator } from "../../Consent/styles";
import {
  CancelStepWrapper,
  IconWrapper,
  CancelMessage,
  CancelTitle,
  ContainerWrapper
} from "./styles";
import { translate } from "../../../../utils/i18n";

function CancelStep({ currentStep }) {
  const {
    props: { consentInfo }
  } = React.useContext(OpenBankingConsentContext);

  return currentStep === 5 ? (
    <React.Fragment>
      <ContainerWrapper>
        <CancelStepWrapper>
          <IconWrapper>
            <Icon
              spacing={{
                top: "none",
                bottom: "none",
                left: "none",
                right: "none"
              }}
              dataTest="AttentionIcon"
              height="80"
              width="80"
              type="Attention"
              color={negative200}
            />
          </IconWrapper>
          <CancelTitle>{translate("OPEN_BANKING_CANCEL_TITLE")}</CancelTitle>
          <CancelMessage>
            {`${translate("OPEN_BANKING_CANCEL_MSG_1")} ${
              consentInfo.organisationName
            } ${translate("OPEN_BANKING_CANCEL_MSG_2")}`}
          </CancelMessage>
        </CancelStepWrapper>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              dataTest="transferBackButton"
              onClick={() => window.location.assign("/home")}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("OPEN_BANKING_CANCEL_BUTTON_START")}
            </Button>
            <Button
              dataTest="transferBackButton"
              onClick={() => window.location.assign("/open-banking/my-shares")}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("OPEN_BANKING_CANCEL_BUTTON_SHARES")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
    </React.Fragment>
  ) : null;
}

export default CancelStep;
