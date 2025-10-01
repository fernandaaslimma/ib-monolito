import React, { Fragment, useState } from "react";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import {
  Title,
  MfaImgTutorial,
  AddAccountTutorial,
  MfaImgTutorialText,
  AppTutorial,
  MfaTextNumber
} from "./styles";
import AddAccountImg from "../../../assets/imgs/mfa_tutorial_add_account.png";
import QrCodeImg from "../../../assets/imgs/mfa_tutorial_qr_code.png";
import QrCodeSecretImg from "../../../assets/imgs/mfa_tutorial_qr_code_secret.png";
import { translate } from "../../../utils/i18n";

function AppAuth({ changeCurrentScreen }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Fragment>
      <Title>{translate("APP_AUTH_TUTORIAL_TITLE")}</Title>
      <AppTutorial>
        <AddAccountTutorial>
          <MfaImgTutorial src={AddAccountImg} data-test="MfaImgTutorial_1" />
          <MfaImgTutorialText>
            <MfaTextNumber>
              {translate("APP_AUTH_TUTORIAL_1_NUM")}
            </MfaTextNumber>
            {translate("APP_AUTH_TUTORIAL_1_TEXT")}
          </MfaImgTutorialText>
        </AddAccountTutorial>

        <AddAccountTutorial>
          <MfaImgTutorial src={QrCodeImg} data-test="MfaImgTutorial_2" />
          <MfaImgTutorialText>
            <MfaTextNumber>
              {translate("APP_AUTH_TUTORIAL_2_NUM")}
            </MfaTextNumber>
            {translate("APP_AUTH_TUTORIAL_2_TEXT")}
          </MfaImgTutorialText>
        </AddAccountTutorial>

        <AddAccountTutorial>
          <MfaImgTutorial src={QrCodeSecretImg} data-test="MfaImgTutorial_3" />
          <MfaImgTutorialText>
            <MfaTextNumber>
              {translate("APP_AUTH_TUTORIAL_3_NUM")}
            </MfaTextNumber>
            {translate("APP_AUTH_TUTORIAL_3_TEXT")}
          </MfaImgTutorialText>
        </AddAccountTutorial>
      </AppTutorial>
      <ClickWrapper>
        <Button
          dataTest="ShowQrCodeButton"
          onClick={() => changeCurrentScreen(4) && setIsLoading(true)}
          spacing={{ top: "xl", bottom: "l" }}
          loading={isLoading}
        >
          {translate("SHOW_QR_CODE")}
        </Button>
      </ClickWrapper>
    </Fragment>
  );
}
export default AppAuth;
