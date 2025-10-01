import React from "react";
import { bool, string, func, oneOfType, arrayOf } from "prop-types";
import { RadioTag, Check, Label, SubLabel, UpperLabel } from "./styles";
import { v4 as uuidv4 } from "uuid";

function Radio({
  label,
  upperLabel,
  subLabels,
  onChange,
  checked,
  name,
  disabled,
  value,
  id = uuidv4(),
  dataTest,
  dataTestLabel
}) {
  return (
    <RadioTag
      htmlFor={id}
      disabled={disabled}
      data-test={dataTestLabel}
      hasSub={subLabels && subLabels.length}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        value={value}
        name={name}
        disabled={disabled}
        onChange={e => onChange(e)}
        data-test={dataTest}
      />
      <Check />
      <Label>
        {upperLabel && <UpperLabel>{upperLabel}</UpperLabel>}
        {label}
        {subLabels &&
          subLabels.length > 0 &&
          subLabels.map((subLabel, index) => {
            return <SubLabel key={index}>{subLabel}</SubLabel>;
          })}
      </Label>
    </RadioTag>
  );
}

Radio.displayName = "Radio";

Radio.defaultProps = {
  dataTestLabel: "Radio",
  dataTest: "RadioInput"
};

Radio.propTypes = {
  label: string,
  upperLabel: string,
  subLabels: arrayOf(string),
  onChange: func,
  checked: bool,
  disabled: bool,
  name: string,
  value: oneOfType([bool, string])
};

export default Radio;
