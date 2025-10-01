import React from "react";
import { bool, string, func } from "prop-types";
import { CheckboxTag, Check, CheckboxSpan } from "./styles";

function Checkbox({
  label,
  onChange,
  checked,
  name,
  disabled = false,
  dataTest,
  type = "common",
  margin,
  Span = true,
  beforeTop,
  beforeLeft
}) {
  const randomId = Math.floor(Math.random() * 10000);
  return (
    <CheckboxTag
      data-test={dataTest}
      htmlFor={randomId}
      disabled={disabled}
      type={type}
      margin={margin}
    >
      <input
        type="checkbox"
        id={randomId}
        checked={checked}
        name={name}
        disabled={disabled}
        onChange={e => onChange(e)}
      />
      <Check beforeTop={beforeTop} beforeLeft={beforeLeft} />
      {Span && <CheckboxSpan>{type === "common" ? label : ""}</CheckboxSpan>}
    </CheckboxTag>
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
