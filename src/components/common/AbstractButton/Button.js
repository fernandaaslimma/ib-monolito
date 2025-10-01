import React from "react";
import { bool, node, string, func } from "prop-types";
import { ButtonTag } from "./styles";

function Button({
  children,
  onClick,
  isCallToAction,
  isWarning,
  isSecondary,
  isSpanButton,
  type,
  disabled,
  width,
  className,
  small,
  dataTest,
  opacity,
  height,
  noPadding,
  heightPx
}) {
  return (
    <ButtonTag
      className={className}
      width={width}
      type={type}
      disabled={disabled}
      isCallToAction={isCallToAction}
      isWarning={isWarning}
      isSecondary={isSecondary}
      isSpanButton={isSpanButton}
      data-test={dataTest ? dataTest : Button.displayName}
      onClick={onClick}
      small={small}
      opacity={opacity}
      height={height}
      noPadding={noPadding}
      heightPx={heightPx}
    >
      {children}
    </ButtonTag>
  );
}

Button.displayName = "Button";

Button.defaultProps = {
  isCallToAction: null,
  isWarning: null,
  type: "button",
  disabled: false,
  width: null,
  onClick: null,
  className: null,
  small: false
};

Button.propTypes = {
  children: node.isRequired, // eslint-disable-line
  isCallToAction: bool,
  isWarning: bool,
  isSecondary: bool,
  isSpanButton: bool,
  disabled: bool,
  type: string,
  width: string,
  onClick: func,
  className: string,
  small: bool,
  dataTest: string,
  opacity: string,
  height: string,
  noPadding: bool,
  heightPx: string
};

export default Button;
