import React from "react";
import { RoundedButton } from "./styles";

function RadioButtonRounded({
  inputName,
  itemKey,
  setValue,
  buttonValue,
  isChecked,
  storedValue
}) {
  return (
    <RoundedButton for={`${inputName}${itemKey}`}>
      <input
        type="checkbox"
        id={`${inputName}${itemKey}`}
        key={itemKey}
        name={`${inputName}${itemKey}`}
        value={buttonValue}
        data-test={`${inputName}_${itemKey}`}
        checked={isChecked(storedValue)}
        onChange={e => setValue(e.target.value)}
      />
      <div htmlFor={`${inputName}${itemKey}`}>{buttonValue}</div>
    </RoundedButton>
  );
}
export default RadioButtonRounded;
