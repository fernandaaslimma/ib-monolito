import React, { Fragment } from "react";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import {
  Title,
  MfaImgTutorial,
  AddAccountTutorial,
  MfaImgTutorialText,
  AppTutorial,
  MfaTextNumber,
  MfaButtonText
} from "./styles";
import StepOneImg from "../../../assets/imgs/mfa_tutorial_stepone.png";
import StepTwoImg from "../../../assets/imgs/mfa_tutorial_steptwo.png";
import { translate } from "../../../utils/i18n";

function AppBbm({ changeCurrentScreen, handleClose }) {
  return (
    <Fragment>
      <Title>{translate("APP_INTRO_TUTORIAL_TITLE")}</Title>
      <AppTutorial>
        <AddAccountTutorial>
          <MfaImgTutorial src={StepOneImg} data-test="MfaImgTutorialStep_1" />
          <MfaImgTutorialText>
            <MfaTextNumber>
              {translate("APP_AUTH_TUTORIAL_1_NUM")}
            </MfaTextNumber>
            {translate("APP_INTRO_TUTORIAL_1_TEXT")}
          </MfaImgTutorialText>
        </AddAccountTutorial>

        <AddAccountTutorial>
          <MfaImgTutorial src={StepTwoImg} data-test="MfaImgTutorialStep_2" />
          <MfaImgTutorialText>
            <MfaTextNumber>
              {translate("APP_AUTH_TUTORIAL_2_NUM")}
            </MfaTextNumber>
            {translate("APP_INTRO_TUTORIAL_2_TEXT")}
          </MfaImgTutorialText>
        </AddAccountTutorial>
      </AppTutorial>
      <ClickWrapper>
        <Button
          spacing={{ top: "xs", bottom: "xs", right: "none", left: "none" }}
          dataTest="UnderStoodButton"
          onClick={() => handleClose()}
          type="conclusive"
        >
          <MfaButtonText>{translate("UNDERSTOOD")}</MfaButtonText>
        </Button>
      </ClickWrapper>
      <ClickWrapper>
        <Button
          type="text"
          onClick={() => changeCurrentScreen(2)}
          dataTest="RegisterLater"
          spacing={{ bottom: "m", top: "xs" }}
        >
          {translate("REGISTER_LATER")}
        </Button>
      </ClickWrapper>
    </Fragment>
  );
}
export default AppBbm;
