import React from "react";
import SecondStepImage from "../../../../assets/imgs/SecondStepImage.png";
import {
  Container,
  Image,
  MfaImgTutorialText,
  MfaTextNumber,
  TextDiv,
  Title
} from "./styles";
import { translate } from "../../../../utils/i18n";
import ButtonResponsive from "../../../common/ButtonResponsive";

const SecondStep = ({ changeCurrentScreen }) => {
  return (
    <Container>
      <Title data-test="SecondStepTitleTestId">
        {translate("APP_INTRO_TUTORIAL_2_TITLE_EX")}
      </Title>
      <Image data-test="SecondStepImageTestId" src={SecondStepImage}></Image>

      <TextDiv>
        <MfaImgTutorialText data-test="SecondStepTextTestId">
          <MfaTextNumber>{translate("APP_AUTH_TUTORIAL_2_NUM")}</MfaTextNumber>
          {translate("APP_INTRO_TUTORIAL_2_TEXT_EX")}
        </MfaImgTutorialText>
      </TextDiv>
      <ButtonResponsive
        dataTest="SecondStepButtonTestId"
        label={translate("CONTINUE")}
        onClick={() => {
          changeCurrentScreen(5);
        }}
        onHover={true}
        percentWidth={85}
        margintop={30}
      ></ButtonResponsive>
    </Container>
  );
};

export default SecondStep;
