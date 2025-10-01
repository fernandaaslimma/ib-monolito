import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import { translate } from "../../../utils/i18n";
import CornerBox from "../../common/CornerBox";
import Input from "../../common/Input";
import {
  Wrapper,
  Title,
  FormWrapper,
  QrCodeWrapper,
  InputWrapper
} from "./styles";
import { blue70 } from "../../../styles/settings";

function QrCode({
  changeCurrentScreen,
  openToastr,
  closeToastr,
  activationURL,
  submitToken
}) {
  const [tokenValue, setTokenValue] = useState("");
  const [validToken, setValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMFAInputToken = e => {
    const { value } = e.target;
    value.length > 0 ? setValidToken(true) : setValidToken(false);
    setTokenValue(value);
  };

  const handleConfirmButton = async () => {
    // logica de validação do token
    setIsLoading(true);
    const tokenVerify = await submitToken(tokenValue);
    if (tokenVerify === true) {
      changeCurrentScreen(7);
    } else {
      setIsLoading(false);
      closeToastr();
      openToastr({
        text: translate("MFA_BOARDING_SCREEN_QRCODE_TOASTR_ERROR_MSG"),
        isBelow: false,
        isTop: true,
        timeout: 8000,
        error: true
      });
    }
  };

  return (
    <Wrapper>
      <Title>{translate("MFA_BOARDING_SCREEN_QRCODE_TITLE")}</Title>
      <QrCodeWrapper>
        <CornerBox
          width={158}
          height={142}
          cornerColor={blue70}
          cornerSize={24}
          cornerThickness={5}
          cornerOpacity={0.12}
        >
          <QRCode
            value={activationURL}
            renderAs={"svg"}
            size={142}
            data-test="qrCodeImg"
          />
        </CornerBox>
      </QrCodeWrapper>
      <FormWrapper>
        <InputWrapper>
          <Input
            dataTest="QrCodeInput"
            onChange={handleMFAInputToken}
            value={tokenValue}
            disabled={false}
            icon="Lock"
            type="text"
            name="TokenInput"
            label={translate("MFA_BOARDING_SCREEN_QRCODE_INPUT_LABEL")}
          />
        </InputWrapper>
        <ClickWrapper>
          <Button
            spacing={{ top: "xs", bottom: "xs", right: "none", left: "none" }}
            onClick={() => handleConfirmButton()}
            dataTest="QrCodeButton"
            loading={isLoading}
            disabled={!validToken}
          >
            {translate("CONFIRM_BTN")}
          </Button>
        </ClickWrapper>
      </FormWrapper>
    </Wrapper>
  );
}
export default QrCode;
