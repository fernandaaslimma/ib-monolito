import React from "react";
import {
  Container,
  MfaImgTutorialText,
  MfaTextNumber,
  Title,
  Image,
  TextDiv
} from "./styles";
import FiveStepImage from "../../../../assets/imgs/FiveStepImage.png";
import { translate } from "../../../../utils/i18n";
import ButtonResponsive from "../../../common/ButtonResponsive";

const FiveStep = ({ changeCurrentScreen }) => {
  return (
    <Container>
      <Title data-test="FiveStepTitleTestId">
        {translate("APP_INTRO_TUTORIAL_5_TITLE_EX")}
      </Title>
      <Image data-test="FiveStepImageTestId" src={FiveStepImage} />

      <TextDiv>
        <MfaImgTutorialText data-test="FiveStepTextTestId">
          <MfaTextNumber>
            {translate("APP_AUTH_TUTORIAL_4_NUM_EX")}
          </MfaTextNumber>
          {translate("APP_INTRO_TUTORIAL_5_TEXT_EX")}
        </MfaImgTutorialText>
      </TextDiv>
      <ButtonResponsive
        dataTest="FiveStepButtonTestId"
        label={translate("CONTINUE")}
        onClick={() => {
          changeCurrentScreen(8);
        }}
        onHover={true}
        percentWidth={85}
        margintop={30}
      ></ButtonResponsive>
    </Container>
  );
};

export default FiveStep;
