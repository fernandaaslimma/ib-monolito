import React, { useState, useRef } from "react";
import {
  Ammount,
  IncrementButtons,
  Increment,
  Wrapper,
  Currency,
  AmmountWrapper,
  Underliner,
  InvalidMessage
} from "./styles";
import { toCurrency, animateCurrencyIncrement } from "../../../utils/currency";
import { Button } from "react-bocombbm-components";
import formaNumber, { unFormatNumber } from "../../../utils/formatNumber";
import { array, func, shape, number, string, bool } from "prop-types";
import { BRL_CURRENCY } from "../../../utils/constants.js";
import ShimmerLoading from "../ShimmerLoading";
import { translate } from "../../../utils/i18n/i18n.js";

function AmmountInput({
  increments,
  config,
  onChange,
  showTotalButton,
  blockAddValues,
  backgroundColor,
  loading
}) {
  const {
    currency = BRL_CURRENCY,
    available = "0.00",
    minimum = null,
    minimumBalance = null,
    maximum = null,
    invalidMessages,
    ammountValue = translate("EXCHANGE_INITAL_VALUE"),
    operation = "invest"
  } = config;

  const { ranges, totalLabel } = increments;
  const inputRef = useRef(null);
  const [inputValue, updateInput] = useState(ammountValue);
  const [disabled, setDisabled] = useState(false);
  const [pristine, setPristine] = useState(true);

  const changeValue = e => {
    const value = e.target.value;
    const valueAsCurrency = value.length ? toCurrency(value) : toCurrency("0");
    e.target.value = valueAsCurrency;
    updateInput(valueAsCurrency);
    onChange(valueAsCurrency);
  };

  React.useEffect(() => {
    inputRef.current && (inputRef.current.value = ammountValue);
    updateInput(ammountValue);
  }, [ammountValue]);

  const callback = value => {
    setDisabled(false);
    onChange(value);
  };

  const count = (value, isTotal = false) => {
    setPristine(false);
    setDisabled(true);
    const start = unFormatNumber(inputValue);
    const end = isTotal ? value : start + unFormatNumber(value);
    updateInput(toCurrency(end.toFixed(2)));
    animateCurrencyIncrement(inputRef.current, start, end, 500, callback);
  };

  const verifyLimit = buttonValue => {
    return unFormatNumber(buttonValue) + unFormatNumber(inputValue) > available;
  };

  let invalidMessage;
  let validValue = false;
  if (operation === "invest") {
    switch (true) {
      case !minimum && unFormatNumber(inputValue) > available:
      case minimum && unFormatNumber(inputValue) > available:
        invalidMessage = invalidMessages.aboveAvailable;
        validValue = false;
        break;
      case minimum && unFormatNumber(inputValue) < minimum:
        invalidMessage = invalidMessages.belowMinimum;
        validValue = false;
        break;
      case maximum && unFormatNumber(inputValue) > maximum:
        invalidMessage = invalidMessages.aboveMaximum;
        validValue = false;
        break;
      case !maximum:
      default:
        validValue = true;
    }
  }

  if (operation === "redeem") {
    switch (true) {
      case !minimum && unFormatNumber(inputValue) > available:
        invalidMessage = invalidMessages.aboveAvailable;
        validValue = false;
        break;
      case minimum && unFormatNumber(inputValue) > available:
        invalidMessage = invalidMessages.aboveAvailable;
        validValue = false;
        break;
      case minimumBalance &&
        unFormatNumber(inputValue) > available - minimumBalance &&
        unFormatNumber(inputValue) < available:
        invalidMessage = invalidMessages.aboveMinimumBalance;
        validValue = false;
        break;
      case minimum && unFormatNumber(inputValue) < minimum:
        invalidMessage = invalidMessages.belowMinimum;
        validValue = false;
        break;
      default:
        validValue = true;
    }
  }

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <AmmountWrapper>
        <Currency>
          {loading ? (
            <ShimmerLoading darker width={14} height={14} />
          ) : (
            currency
          )}
        </Currency>
        {loading ? (
          <ShimmerLoading darker width={50} height={30} left />
        ) : (
          <Ammount
            type="text"
            inputMode="numeric"
            onChange={changeValue}
            onFocus={() => setPristine(false)}
            data-test="Ammount"
            defaultValue={formaNumber(inputValue, { digits: 2 })}
            maxLength="16"
            innerRef={inputRef}
          />
        )}
      </AmmountWrapper>
      <Underliner valid={validValue} pristine={pristine} />
      {!validValue && !pristine && (
        <InvalidMessage data-test="InvalidValue">
          {invalidMessage}
        </InvalidMessage>
      )}
      {increments && (
        <IncrementButtons>
          {ranges.map((range, index) => (
            <Increment key={index}>
              <Button
                type="outline"
                dataTest={`Increment_${range}`}
                disabled={
                  blockAddValues
                    ? disabled || verifyLimit(formaNumber(range, { digits: 0 }))
                    : disabled
                }
                onClick={() => count(range)}
                loading={loading}
              >{`+${formaNumber(range, { digits: 0 })}`}</Button>
            </Increment>
          ))}
          {available > 0 && showTotalButton && (
            <Increment>
              <Button
                type="outline"
                dataTest="IncrementTotal"
                onClick={() => count(available, true)}
                disabled={disabled}
                loading={loading}
              >
                <center>{totalLabel}</center>
              </Button>
            </Increment>
          )}
        </IncrementButtons>
      )}
    </Wrapper>
  );
}

AmmountInput.defaultProps = {
  increments: {
    ranges: []
  }
};

AmmountInput.propTypes = {
  onChange: func.isRequired,
  showTotalButton: bool,
  config: shape({
    currency: string,
    invalidMessage: string,
    available: number,
    minimum: number,
    ammountValue: string
  }).isRequired,
  increments: shape({ ranges: array, totalLabel: string })
};

export default AmmountInput;
