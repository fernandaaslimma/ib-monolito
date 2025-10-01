import React from "react";
import { translate } from "../../../utils/i18n";

import { Button } from "react-bocombbm-components";

import {
  ExitConfirmationWrapper,
  Title,
  Message,
  ButtonsWrapper
} from "./styles";

export default function ExitConfirmation({
  title = null,
  message = null,
  onClickCancel,
  onClickExit,
  padding
}) {
  return (
    <ExitConfirmationWrapper padding={padding}>
      <Title>{title || translate("EXIT_CONFIRMATION_TITLE")}</Title>
      <Message>{message || translate("EXIT_CONFIRMATION_MESSAGE")}</Message>
      <ButtonsWrapper>
        <Button
          type="outline"
          onClick={onClickCancel}
          dataTest="exit-confirmation-cancel"
        >
          {translate("EXIT_CONFIRMATION_CANCEL")}
        </Button>
        <Button
          type="negative"
          isWarning
          onClick={onClickExit}
          dataTest="exit-confirmation-exit"
        >
          {translate("EXIT_CONFIRMATION_EXIT")}
        </Button>
      </ButtonsWrapper>
    </ExitConfirmationWrapper>
  );
}
