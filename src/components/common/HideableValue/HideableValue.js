import React from "react";
import { string, number, bool, oneOfType } from "prop-types";
import { Pattern, Value, Wrapper, Currency } from "./styles";
import formatNumber from "../../../utils/formatNumber";

const HideableValue = ({
  hide,
  value,
  currency,
  currencyColor,
  currencySize,
  pattern,
  styles,
  dataTest,
  colorized,
  digits,
  blocked
}) => {
  const commonProps = {
    colorized,
    value,
    hide
  };
  return (
    <Wrapper
      styles={styles}
      blocked={blocked}
      data-test={dataTest ? dataTest : HideableValue.displayName}
    >
      {currency && (
        <Currency
          {...commonProps}
          currencyColor={currencyColor}
          currencySize={currencySize}
        >
          {currency}
        </Currency>
      )}
      {!blocked && hide ? (
        <Pattern>{pattern}</Pattern>
      ) : (
        <Value data-test="value" {...commonProps}>
          {formatNumber(value, { digits: digits || 2 })}
        </Value>
      )}
    </Wrapper>
  );
};

HideableValue.displayName = "HideableValue";

HideableValue.defaultProps = {
  pattern: "******",
  hide: false
};

HideableValue.propTypes = {
  hide: bool,
  value: oneOfType([number, string]).isRequired,
  currency: string,
  pattern: string,
  styles: oneOfType([bool, string])
};

export default HideableValue;
