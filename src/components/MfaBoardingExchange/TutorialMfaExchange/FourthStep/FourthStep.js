import React from "react";
import {
  Title,
  MfaImgTutorialText,
  MfaTextNumber,
  Span,
  SpanWrapper,
  Container,
  TextDiv,
  ContainerTwoButtons
} from "./styles";
import { translate } from "../../../../utils/i18n";
import { blue, white } from "../../../../styles/settings";
import ButtonResponsive from "../../../common/ButtonResponsive";

const FourthStep = ({ changeCurrentScreen, secretKey = "" }) => {
  const copy = value => {
    if (!navigator.clipboard) return;
    return navigator.clipboard.writeText(value);
  };

  return (
    <Container>
      <Title data-test="FourthStepTitleTestId">
        {translate("APP_INTRO_TUTORIAL_4_TITLE_EX")}
      </Title>

      <SpanWrapper>
        <Span data-test="FourthStepSpanTokenTestId">{secretKey}</Span>
      </SpanWrapper>

      <TextDiv>
        <MfaImgTutorialText data-test="FourthStepTextTestId">
          <MfaTextNumber>{translate("APP_AUTH_TUTORIAL_3_NUM")}</MfaTextNumber>
          {translate("APP_INTRO_TUTORIAL_4_TEXT_EX")}
        </MfaImgTutorialText>
      </TextDiv>

      <ContainerTwoButtons>
        <ButtonResponsive
          dataTest="FourthStepButtonCopyTestId"
          label={translate("COPY")}
          onClick={() => {
            copy(secretKey);
          }}
          percentWidth={48}
          margintop={30}
          borderRadius={4}
          background={white}
          color={blue}
        ></ButtonResponsive>
        <ButtonResponsive
          dataTest="FourthStepButtonChangeTestId"
          label={translate("CONTINUE")}
          onClick={() => {
            changeCurrentScreen(7);
          }}
          percentWidth={48}
          margintop={30}
          onHover={true}
          borderRadius={4}
        ></ButtonResponsive>
      </ContainerTwoButtons>
    </Container>
  );
};

export default FourthStep;
