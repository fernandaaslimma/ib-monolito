import React from "react";
import {
  Ammount,
  Wrapper,
  Currency,
  AmmountWrapper,
  Underliner,
  InvalidMessage,
  FlagIconContainer
} from "./styles.js";
import { BRL_CURRENCY } from "../../../../../utils/constants.js";
import { toCurrency } from "../../../../../utils/currency";

import Icon from "../../../../common/Icon";
import { translate } from "../../../../../utils/i18n/i18n.js";

function ExchangeInput({
  onChange = () => {},
  iconRight = false,
  value = null,
  currency = BRL_CURRENCY,
  maxLength = "16",
  invalidMessage = null,
  icon = null,
  dataTest,
  isValid
}) {
  const changeValue = e => {
    const value = e.target.value;
    const valueAsCurrency = value.length
      ? toCurrency(value)
      : toCurrency(translate("EXCHANGE_INITAL_VALUE"));
    onChange(valueAsCurrency);
  };

  return (
    <Wrapper>
      <AmmountWrapper>
        <Currency>{currency}</Currency>
        <Ammount
          data-test={dataTest}
          type="text"
          inputMode="numeric"
          onChange={changeValue}
          maxLength={maxLength}
          valid={!value ? true : isValid}
          value={value ? value : translate("EXCHANGE_INITAL_VALUE")}
        />
        {iconRight && (
          <FlagIconContainer>
            <Icon type={icon} height={28} width={28} />
          </FlagIconContainer>
        )}
      </AmmountWrapper>
      <Underliner valid={!value ? true : isValid} />
      {value && !isValid && <InvalidMessage>{invalidMessage}</InvalidMessage>}
    </Wrapper>
  );
}

export default ExchangeInput;
