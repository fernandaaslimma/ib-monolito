import React from "react";
import { RoundedButton, Value } from "./styles";

function RadioButtonRounded({
  radioName,
  itemKey,
  selectedValue,
  setValue,
  buttonValue,
  disabled = false,
  style
}) {
  return (
    <RoundedButton for={`${radioName}${itemKey}`}>
      <input
        type="radio"
        id={`${radioName}${itemKey}`}
        key={itemKey}
        name={radioName}
        value={buttonValue}
        data-test={`${radioName}_${itemKey}`}
        checked={buttonValue === selectedValue}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
      />
      <Value htmlFor={`${radioName}${itemKey}`} style={style}>
        {buttonValue}
      </Value>
    </RoundedButton>
  );
}
export default RadioButtonRounded;
