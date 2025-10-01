import React from "react";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../../utils/clickWrapper";
import { translate } from "../../../../utils/i18n";
import { ButtonsWrapper } from "./styles";

function SelectMethod({ methods, changeCurrentMethod }) {
  const factorButtonMessage = {
    mail: translate("CHANGE_MFA_METHOD_EMAIL_BUTTON"),
    totp: translate("CHANGE_MFA_METHOD_TOTP_BUTTON"),
    mobile: translate("CHANGE_MFA_METHOD_MOBILE_BUTTON")
  };

  const factorButtonIcon = {
    mail: "MFAEmailIcon",
    totp: "MFAAuthenticatorIcon",
    mobile: "MFASmartphoneIcon"
  };

  return (
    <ButtonsWrapper>
      {methods.map((method, index) => (
        <ClickWrapper key={index}>
          <Button
            type="outline"
            withIcon={{ name: factorButtonIcon[method.type], position: "left" }}
            spacing={{ top: "s", bottom: "none", right: "none", left: "none" }}
            onClick={() => changeCurrentMethod(method.id)}
            dataTest={`MethodSelectionButton_${method.type}`}
            block
            alignLeft
          >
            {factorButtonMessage[method.type]}
          </Button>
        </ClickWrapper>
      ))}
    </ButtonsWrapper>
  );
}
export default SelectMethod;
