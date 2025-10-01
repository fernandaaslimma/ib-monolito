import React, { Component } from "react";

import { translate } from "../../../utils/i18n";
import { List, Item, Example, IconWrapper } from "./styles";
import Icon from "../Icon";
import { grey70 } from "../../../styles/settings";

class PasswordTooltip extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <List data-test="PasswordTooltip">
        <IconWrapper>
          <Icon type="SmallArrow" color={grey70} />
        </IconWrapper>
        <Item>{translate("USE_EXACTLY_8_NUMBERS")}</Item>
        <IconWrapper>
          <Icon type="SmallArrow" color={grey70} />
        </IconWrapper>
        <Item>{translate("DO_NOT_USE_YOUR_BIRTHDATE_OR_SSN")}</Item>
        <IconWrapper>
          <Icon type="SmallArrow" color={grey70} />
        </IconWrapper>
        <Item>
          {translate("DO_NOT_REPEAT_A_NUMBER_MORE_THAN_3_TIMES")}
          <Example>{translate("EG")} 11112222, 11223333</Example>
        </Item>
        <IconWrapper>
          <Icon type="SmallArrow" color={grey70} />
        </IconWrapper>
        <Item>
          {translate("DO_NOT_USE_NUMERICAL_SEQUENCES")}
          <Example>{translate("EG")} 12345678, 98765432</Example>
        </Item>
      </List>
    );
  }
}

export default PasswordTooltip;
