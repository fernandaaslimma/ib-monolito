import React from "react";
import { bool, string, func, oneOfType, array } from "prop-types";
import { RadioButtonTag } from "./styles";

function RadioButton({ label, onChange, checked, dataTest }) {
  const randomId = Math.floor(Math.random() * 10000);
  const labelIsArray = Array.isArray(label);
  return (
    <RadioButtonTag
      htmlFor={randomId}
      data-test={dataTest ? dataTest : `${randomId}_${RadioButton.displayName}`}
    >
      <input
        type="radio"
        id={randomId}
        checked={checked}
        onChange={e => onChange(e)}
      />
      <p>
        {labelIsArray
          ? label.map((label, index) => (
              <span key={`${label}_${index}`}>{label}</span>
            ))
          : `${label}`}
      </p>
    </RadioButtonTag>
  );
}

RadioButton.displayName = "RadioButton";

RadioButton.propTypes = {
  label: oneOfType([string, array]),
  onChange: func,
  checked: bool
};

export default RadioButton;
