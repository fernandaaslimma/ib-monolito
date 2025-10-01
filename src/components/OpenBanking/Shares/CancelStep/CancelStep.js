import React from "react";
import { Button, Icon } from "react-bocombbm-components";
import { conclusive200 } from "../../../../styles/settings";
import { OpenBankingSharesContext } from "../Shares";
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
    state: { selectedBank }
  } = React.useContext(OpenBankingSharesContext);

  return currentStep === 4 ? (
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
              dataTest="successIcon"
              height="58.67"
              width="58.67"
              type="RoundedCheck"
              color={conclusive200}
            />
          </IconWrapper>
          <CancelTitle data-test="messageEndSharing">
            {translate("OPEN_BANKING_CANCEL_SHARING_MODAL_TITLE")}
          </CancelTitle>
          <CancelMessage>
            {translate("OPEN_BANKING_CANCEL_SHARING_MODAL_RESUME_MSG_1")}
            {` ${selectedBank.organisationName ||
              selectedBank.authorisationServer.customerFriendlyName} `}
            {translate("OPEN_BANKING_CANCEL_SHARING_MODAL_RESUME_MSG_2")}
          </CancelMessage>
        </CancelStepWrapper>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              dataTest="transferBackButton"
              onClick={() => window.location.assign("/open-banking/my-shares")}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("OPEN_BANKING_CLOSE")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
    </React.Fragment>
  ) : null;
}

export default CancelStep;
