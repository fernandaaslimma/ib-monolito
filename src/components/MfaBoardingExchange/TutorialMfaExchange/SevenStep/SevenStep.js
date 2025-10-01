import React from "react";
import { Container, Image, SubTitle, TextDiv, Title } from "./styles";
import ImageSuccess from "../../../../assets/imgs/success.png";
import { translate } from "../../../../utils/i18n";
import ButtonResponsive from "../../../common/ButtonResponsive";

const SevenStep = ({ handleClose }) => {
  return (
    <Container>
      <Image src={ImageSuccess} data-test="MfaExchangeSuccessImage" />

      <TextDiv>
        <Title data-test="SevenStepTitleTestId">
          {translate("SUCCESS_TITLE")}
        </Title>
        <SubTitle data-test="SevenStepSubTitleTestId">
          {translate("SUCCESS_SUBTITLE")}
        </SubTitle>
      </TextDiv>

      <ButtonResponsive
        dataTest="SevenStepButtonTestId"
        label={translate("CONTINUE")}
        onClick={() => {
          handleClose();
        }}
        onHover={true}
        percentWidth={85}
        margintop={30}
      ></ButtonResponsive>
    </Container>
  );
};

export default SevenStep;
