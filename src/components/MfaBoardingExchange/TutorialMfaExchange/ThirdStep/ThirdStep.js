import React from "react";
import ThirdStepImage from "../../../../assets/imgs/ThirdStepImage.png";
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

const ThirdStep = ({ changeCurrentScreen }) => {
  return (
    <Container>
      <Title data-test="ThirdStepTitleTestId">
        {translate("APP_INTRO_TUTORIAL_3_TITLE_EX")}
      </Title>
      <Image data-test="ThirdStepImageTestId" src={ThirdStepImage}></Image>

      <TextDiv>
        <MfaImgTutorialText data-test="ThirdStepTextTestId">
          <MfaTextNumber>{translate("APP_AUTH_TUTORIAL_3_NUM")}</MfaTextNumber>
          {translate("APP_INTRO_TUTORIAL_3_TEXT_EX")}
        </MfaImgTutorialText>
      </TextDiv>
      <ButtonResponsive
        dataTest="ThirdStepButtonTestId"
        label={translate("CODE_GENERATE_BUTTON_MFA_EX")}
        onClick={() => {
          changeCurrentScreen(6);
        }}
        onHover={true}
        percentWidth={85}
        margintop={30}
      ></ButtonResponsive>
    </Container>
  );
};

export default ThirdStep;
