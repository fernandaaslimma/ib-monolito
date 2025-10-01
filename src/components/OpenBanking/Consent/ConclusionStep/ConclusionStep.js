import React from "react";
import { Button, Icon } from "react-bocombbm-components";
import { conclusive200 } from "../../../../styles/settings";
import { OpenBankingConsentContext } from "../Consent";
import { BtnWrapper, StickyWrapper, Separator } from "../../Consent/styles";
import {
  ConclusionStepWrapper,
  IconWrapper,
  SucessMessage,
  SucessTitle,
  ContainerWrapper
} from "./styles";
import { translate } from "../../../../utils/i18n";

function ConclusionStep({ currentStep }) {
  const {
    props: { consentInfo }
  } = React.useContext(OpenBankingConsentContext);

  return currentStep === 4 ? (
    <React.Fragment>
      <ContainerWrapper>
        <ConclusionStepWrapper>
          <IconWrapper>
            <Icon
              spacing={{
                top: "none",
                bottom: "none",
                left: "none",
                right: "none"
              }}
              dataTest="successIcon"
              height="80"
              width="80"
              type="RoundedCheck"
              color={conclusive200}
            />
          </IconWrapper>
          <SucessTitle>
            {translate("OPEN_BANKING_CONCLUSION_TITLE")}
          </SucessTitle>
          <SucessMessage>
            {`${translate("OPEN_BANKING_CONCLUSION_MSG_1")} ${
              consentInfo.organisationName
            } ${translate("OPEN_BANKING_CONCLUSION_MSG_2")}`}
          </SucessMessage>
        </ConclusionStepWrapper>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              dataTest="transferBackButton"
              onClick={() => window.location.assign("/home")}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("OPEN_BANKING_CONCLUSION_BUTTON_START")}
            </Button>
            <Button
              dataTest="transferBackButton"
              onClick={() => window.location.assign("/open-banking/my-shares")}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("OPEN_BANKING_CONCLUSION_BUTTON_SHARES")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
    </React.Fragment>
  ) : null;
}

export default ConclusionStep;
