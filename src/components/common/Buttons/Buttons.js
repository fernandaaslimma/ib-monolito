import React from "react";
import { array, string } from "prop-types";
import Button from "../Button";
import { BtnWrapper } from "./styles";

function Buttons({ paddingWrapper, flexDirection, buttons }) {
  return (
    <BtnWrapper padding={paddingWrapper} flexDirection={flexDirection}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          dataTest={button.dataTest}
          onClick={button.onClick}
          background={button.background}
          color={button.color}
          border={button.border}
          fontSize={button.fontSize}
          borderRadius={button.borderRadius}
          margin={button.margin}
          padding={button.padding}
          noHoverBackground={button.noHoverBackground}
          disabled={button.disabled}
          style={button.style}
        >
          {button.children}
        </Button>
      ))}
    </BtnWrapper>
  );
}

Button.displayName = "Button";

Button.propTypes = {
  button: array,
  paddingWrapper: string,
  flexDirection: string
};

export default Buttons;
