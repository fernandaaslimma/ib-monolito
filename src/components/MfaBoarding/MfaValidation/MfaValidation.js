import React, { Fragment } from "react";
import EFTToken from "../../common/EFTToken";
import { translate } from "../../../utils/i18n";
import { Button } from "react-bocombbm-components";

import ClickWrapper from "../../../utils/clickWrapper/clickWrapper";

import { ACTION_TYPE_APPOVE_TOTP_FACTOR } from "../../../utils/constants";

function MfaValidation({
  changeCurrentScreen,
  authFactorResponse,
  isMfaExchange
}) {
  const { authFactorID } = authFactorResponse;
  const params = {
    actionType: ACTION_TYPE_APPOVE_TOTP_FACTOR,
    payload: { id: authFactorID }
  };

  return (
    <Fragment>
      <EFTToken
        resendFunc={e => e.preventDefault()}
        title={translate("MFA_BOARDING_TITLE")}
        onMFAConfirmation={() =>
          isMfaExchange ? changeCurrentScreen(3) : changeCurrentScreen(6)
        }
        createAuthCodeParams={params}
        onMFAError={() => {}}
      />

      <ClickWrapper>
        <Button
          spacing={{ bottom: "m", top: "xs" }}
          type="text"
          small
          dataTest="RegisterLater"
          onClick={() => changeCurrentScreen(2)}
        >
          {translate("REGISTER_LATER")}
        </Button>
      </ClickWrapper>
    </Fragment>
  );
}

export default MfaValidation;
