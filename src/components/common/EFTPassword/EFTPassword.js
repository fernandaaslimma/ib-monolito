import React from "react";
// import { object } from "prop-types";
// import { translate } from "../../../utils/i18n";
import Icon from "../Icon";
import Input from "../Input";

import { translate } from "../../../utils/i18n";

import { EFTModalWrapper, IconWrapper, Title, Message } from "./styles";

function EFTPassword() {
  return (
    <EFTModalWrapper>
      <IconWrapper>
        <Icon type="TransferPassword" />
      </IconWrapper>
      <Title>{translate("TRANSFER_PASSWORD")}</Title>
      <Message>{translate("TRANSFER_PASSWORD_MESSAGE")}</Message>
      <Input
        // onChange={handleUserInputFavoredData}
        type="password"
        name="favored"
        // valid={isValidFavored}
        // value={favoredData.favored}
        label={translate("TRANSFER_PASSWORD")}
        value={111111}
        tinyLabels
        width={60}
      />
    </EFTModalWrapper>
  );
}

EFTPassword.displayName = "EFTPassword";

EFTPassword.defaultProps = {
  // transferData: null,
  // favoredData: null,
  // originAccount: null
};

EFTPassword.propTypes = {
  // transferData: object,
  // favoredData: object,
  // originAccount: object
};

export default EFTPassword;
