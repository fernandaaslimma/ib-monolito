import React from "react";
import { bool, string, func } from "prop-types";
import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
  CheckboxSpan
} from "./styles";

function Checkbox({ label, onChange, checked, name, disabled, dataTest }) {
  const randomId = Math.floor(Math.random() * 10000);
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={randomId}
        checked={checked}
        name={name}
        disabled={disabled}
        onChange={e => onChange(e)}
        data-test={`switchSaveAccount_${checked}`}
        type="checkbox"
      />
      <CheckBoxLabel
        data-test={dataTest}
        disabled={disabled}
        htmlFor={randomId}
      />
      <CheckboxSpan>{label}</CheckboxSpan>
    </CheckBoxWrapper>
  );
}

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  label: string,
  onChange: func,
  checked: bool,
  disabled: bool,
  name: string
};

export default Checkbox;
