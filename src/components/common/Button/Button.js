import React from "react";
import { bool, node, string, func, number } from "prop-types";
import {
  ButtonTag,
  Content,
  WrapperChildren,
  WrapperIcon
} from "../../../styles/objects";
import LocalLoading from "../LocalLoading/";
import Icon from "../Icon";

function Button({
  children,
  onClick,
  isCallToAction,
  isWarning,
  type,
  disabled,
  width,
  className,
  small,
  height,
  dataTest,
  paddingSize,
  opacity,
  approveButton,
  actionSecondary,
  loading,
  background,
  color,
  border,
  fontSize,
  borderRadius,
  noBorderRadius,
  margin,
  padding,
  noHoverBackground,
  smallBlue,
  backgroundLoading,
  id,
  withIcon,
  isModalType,
  style
}) {
  return (
    <ButtonTag
      id={id}
      className={className}
      width={width}
      height={height}
      approveButton={approveButton}
      type={type}
      disabled={disabled}
      isCallToAction={isCallToAction}
      isWarning={isWarning}
      data-test={dataTest ? dataTest : Button.displayName}
      onClick={onClick}
      small={small}
      smallBlue={smallBlue}
      opacity={opacity}
      paddingSize={paddingSize}
      actionSecondary={actionSecondary}
      loading={loading}
      background={background}
      color={color}
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
      noBorderRadius={noBorderRadius}
      margin={margin}
      padding={padding}
      noHoverBackground={noHoverBackground}
      isModalType={isModalType}
      style={style}
    >
      <Content>
        {withIcon && !loading && (
          <WrapperIcon>
            <Icon
              type={withIcon.name}
              width={withIcon.width}
              height={withIcon.height}
            ></Icon>
          </WrapperIcon>
        )}
        {loading ? (
          <LocalLoading background={backgroundLoading} />
        ) : (
          <WrapperChildren withIcon={withIcon}>{children}</WrapperChildren>
        )}
      </Content>
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
  height: null,
  onClick: null,
  className: null,
  small: false,
  paddingSize: null,
  actionSecondary: null
};

Button.propTypes = {
  children: node,
  isCallToAction: bool,
  isWarning: bool,
  disabled: bool,
  type: string,
  width: number,
  onClick: func,
  className: string,
  small: bool,
  height: number,
  paddingSize: number,
  actionSecondary: bool
};

export default Button;
