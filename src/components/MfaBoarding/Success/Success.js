import React from "react";
import ClickWrapper from "../../../utils/clickWrapper";
import {
  Container,
  ImgSuccess,
  Title,
  SubTitle,
  BackHomeButton
} from "./styles";
import ImageSuccess from "../../../assets/imgs/mfa-sucess-icon.png";
import { translate } from "../../../utils/i18n";

function Success({ handleClose }) {
  return (
    <Container>
      <ImgSuccess src={ImageSuccess} data-test="MfaSuccessImage" />

      <Title>{translate("SUCCESS_TITLE")}</Title>
      <SubTitle>{translate("SUCCESS_SUBTITLE")}</SubTitle>
      <ClickWrapper>
        <BackHomeButton
          onClick={() => handleClose()}
          dataTest="MfaSuccessButton"
        >
          {translate("SUCCESS_BUTTON")}
        </BackHomeButton>
      </ClickWrapper>
    </Container>
  );
}

export default Success;
