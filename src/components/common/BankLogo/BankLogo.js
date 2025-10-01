import React from "react";
import { string } from "prop-types";

import Icon from "../Icon";
import { IconWrapper, LogoText, Wrapper } from "./styles";
import { translate } from "../../../utils/i18n";
import { darkestBlue, darkRed } from "../../../styles/settings";

function BankLogo({ color, primaryColor, secondaryColor, ...props }) {
  return (
    <Wrapper
      {...props}
      color={color}
      primaryColor={color || primaryColor}
      secondaryColor={color || secondaryColor}
    >
      <IconWrapper>
        <Icon type="Logo" />
      </IconWrapper>
      <LogoText>{translate("INTERNET_BANKING")}</LogoText>
    </Wrapper>
  );
}

BankLogo.defaultProps = {
  color: null,
  primaryColor: darkRed,
  secondaryColor: darkestBlue
};

BankLogo.propTypes = {
  color: string,
  primaryColor: string,
  secondaryColor: string
};

export default BankLogo;
