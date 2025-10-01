import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  InputWrapper,
  Title,
  ErrorMessage,
  ButtonWrapper
} from "./styles";
import SixStepImage from "../../../../assets/imgs/SixStepImage.png";
import Input from "../../../common/Input";
import { translate } from "../../../../utils/i18n";
import Button from "../../../common/Button";
import { blue, white } from "../../../../styles/settings";

const SixthStep = ({
  changeCurrentScreen,
  authFactorResponse,
  activatedAuthFactor,
  activateAuthFactor,
  error,
  loading
}) => {
  const [invalidInput, SetInvalidInput] = useState(false);
  const [valueInput, SetValueInput] = useState();
  const [buttonDisable, SetButtonEnable] = useState(true);

  const handleSubmitToken = async () => {
    await activateAuthFactor(valueInput, authFactorResponse.authFactorID);
  };

  useEffect(() => {
    if (activatedAuthFactor) changeCurrentScreen(9);
    if (error) SetInvalidInput(true);
  }, [activatedAuthFactor, error]);

  useEffect(() => {
    valueInput ? SetButtonEnable(false) : SetButtonEnable(true);
  }, [valueInput]);

  return (
    <Container>
      <Title data-test="SixthStepTitleTestId">
        {translate("APP_INTRO_TUTORIAL_6_TITLE_EX")}
      </Title>
      <Image data-test="SixthStepImageTestId" src={SixStepImage} />

      <InputWrapper>
        <Input
          dataTest="InputSixthStepTestId"
          onChange={e => SetValueInput(e.target.value)}
          disabled={false}
          value={valueInput}
          icon="Lock"
          type="text"
          name="TokenInput"
          label={translate("TOKEN")}
        />
      </InputWrapper>

      <ErrorMessage data-test="ErrorMessageSixthStep" visible={invalidInput}>
        {translate("TOKEN_ERROR_MESSAGE")}
      </ErrorMessage>

      <ButtonWrapper>
        <Button
          dataTest={"SixthStepButtonTestId"}
          disabled={buttonDisable}
          onClick={() => handleSubmitToken()}
          loading={loading}
          background={blue}
          noBorderRadius={true}
          noHoverBackground={true}
          color={white}
        >
          {translate("MFA_CONFIRM_BTN")}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default SixthStep;
