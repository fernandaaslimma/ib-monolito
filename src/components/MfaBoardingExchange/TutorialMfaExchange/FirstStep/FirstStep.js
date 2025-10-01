import React from "react";
import FirstStepImage from "../../../../assets/imgs/FirstStepImage.png";
import {
  MfaImgTutorialText,
  MfaTextNumber,
  Title,
  TextDiv,
  Container,
  Image
} from "./styles";
import { translate } from "../../../../utils/i18n";
import ButtonResponsive from "../../../common/ButtonResponsive";

const FirstStep = ({ changeCurrentScreen }) => {
  return (
    <Container>
      <Title data-test="FirstStepTitleTestId">
        {translate("APP_AUTH_TUTORIAL_TITLE")}
      </Title>
      <Image data-test="FirstStepImageTestId" src={FirstStepImage}></Image>

      <TextDiv>
        <MfaImgTutorialText data-test="FirstStepTextTestId">
          <MfaTextNumber>{translate("APP_AUTH_TUTORIAL_1_NUM")}</MfaTextNumber>
          {translate("APP_INTRO_TUTORIAL_1_TEXT_EX")}
        </MfaImgTutorialText>
      </TextDiv>
      <ButtonResponsive
        dataTest="FirstStepButtonTestId"
        label={translate("MFA_CONFIRM_BTN")}
        onClick={() => {
          changeCurrentScreen(4);
        }}
        onHover={true}
        percentWidth={85}
        margintop={30}
      ></ButtonResponsive>
    </Container>
  );
};

export default FirstStep;
