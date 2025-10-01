import React from "react";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import {
  Title,
  SubTitle,
  WrapperUnderStoodButton,
  LaterRegistrationWrapper
} from "./styles";
import { translate } from "../../../utils/i18n";

function LaterRegistration({ changeCurrentScreen, handleClose }) {
  return (
    <LaterRegistrationWrapper>
      <Title>{translate("APP_TITLE_LATER_REGISTRATION")}</Title>
      <SubTitle fontSize={18}>
        {translate("APP_TITLE_LATER_REGISTRATION_SUBTITLE")}
      </SubTitle>
      <WrapperUnderStoodButton>
        <ClickWrapper>
          <Button
            dataTest="RegiterNowBtn"
            spacing={{ top: "xl" }}
            onClick={() => changeCurrentScreen(1)}
            block
          >
            {translate("REGISTER_NOW")}
          </Button>
        </ClickWrapper>
        <ClickWrapper>
          <Button
            onClick={() => handleClose()}
            type="text"
            dataTest="RegisterLater"
          >
            {translate("REGISTER_LATER")}
          </Button>
        </ClickWrapper>
      </WrapperUnderStoodButton>
    </LaterRegistrationWrapper>
  );
}
export default LaterRegistration;
