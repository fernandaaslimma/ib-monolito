import React, { Component } from "react";
import { string, func, bool, array, number, oneOfType } from "prop-types";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";

/* eslint-disable */

import {
  InputWrapper,
  InputField,
  Label,
  IconContainer,
  ValidityContainer,
  Tooltip
} from "./styles";
import Icon from "../Icon";

export const KEYCODES = {
  ENTER: 13,
  BACKSPACE: 8,
  ALL: "all"
};

const datetimeMask = [
  /[0-1]/,
  /[0-9]/,
  "/",
  /[0-3]/,
  /[0-9]/,
  "/",
  /[2]/,
  /[0]/,
  /[1-3]/,
  /\d/
];

const currencyMask = createNumberMask({
  prefix: "R$ ",
  suffix: "",
  allowDecimal: true,
  integerLimit: 12
});

const currencyMaskPtBR = createNumberMask({
  prefix: "R$ ",
  suffix: "",
  allowDecimal: true,
  integerLimit: 12,
  thousandsSeparatorSymbol: ".",
  decimalSymbol: ","
});

const cpfMask = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/
];

const cnpjMask = [
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/
];

const datetimeBrMask = [
  /[0-3]/,
  /[0-9]/,
  "/",
  /[0-1]/,
  /[0-9]/,
  "/",
  /[2]/,
  /[0]/,
  /\d/,
  /\d/
];

class Input extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this._onKeyDown.bind(this);
    this.state = {
      isFocused: false
    };
  }

  _onKeyDown(event) {
    const { disableKeys, onKeyDown } = this.props;

    const disableKeysArray = Array.isArray(disableKeys)
      ? disableKeys
      : [disableKeys];

    const disabledKey = disableKeysArray.find(
      disableKey => event.keyCode == disableKey || event.which == disableKey
    );

    if (disableKeysArray.includes(KEYCODES.ALL) || disabledKey) {
      event.preventDefault();
      return;
    }
    onKeyDown && onKeyDown(event);
  }

  render() {
    const {
      label,
      value,
      placeholder,
      onChange,
      onBlur,
      onFocus,
      onKeyUp,
      type,
      name,
      icon,
      valid,
      tinyLabels,
      toolTip,
      dataTest,
      width,
      maskType,
      refType,
      maxLength,
      heightPx,
      centered,
      disabled,
      filterStyle,
      ...props
    } = this.props;
    const { isFocused } = this.state;
    if (maskType) {
      return (
        <InputWrapper
          valid={valid}
          width={width}
          heightPx={heightPx}
          icon={icon}
        >
          <MaskedInput
            mask={
              (maskType === "currency" && currencyMask) ||
              (maskType === "currencyBr" && currencyMaskPtBR) ||
              (maskType === "datetime" && datetimeMask) ||
              (maskType === "datetimeBr" && datetimeBrMask) ||
              (maskType === "cnpj" && cnpjMask) ||
              (maskType === "cpf" && cpfMask)
            }
            onChange={onChange}
            guide={false}
            render={(refType, props) => (
              <InputField
                {...props}
                required
                maxLength={maxLength}
                type={type}
                value={value}
                name={name}
                innerRef={refType}
                onFocus={e => {
                  onFocus && onFocus(e);
                  toolTip && this.setState({ isFocused: true });
                }}
                onBlur={e => {
                  onBlur && onBlur(e);
                  toolTip && this.setState({ isFocused: false });
                }}
                ref={refType.current}
                autoComplete="new-password"
                placeholder={placeholder}
                data-test={dataTest ? dataTest : Input.displayName}
                isEmpty={!value}
                tinyLabels={tinyLabels}
                heightPx={heightPx}
                centered={centered}
                disabled={disabled}
              />
            )}
          />
          {label && (
            <Label
              icon={icon}
              tinyLabels={tinyLabels}
              filterStyle={filterStyle}
              disabled={disabled}
            >
              {label}
            </Label>
          )}
          {typeof icon === "string" && (
            <IconContainer>
              <Icon type={icon} />
            </IconContainer>
          )}
          {valid !== null && (
            <ValidityContainer>
              {valid ? (
                <Icon type="Check" width="13" height="13" />
              ) : (
                <Icon type="Attention" width="24" height="24" />
              )}
            </ValidityContainer>
          )}
        </InputWrapper>
      );
    }
    return (
      <InputWrapper valid={valid} width={width} heightPx={heightPx} icon={icon}>
        <InputField
          {...props}
          required
          maxLength={maxLength}
          onChange={onChange}
          innerRef={this.props.innerRef}
          onFocus={e => {
            onFocus && onFocus(e);
            toolTip && this.setState({ isFocused: true });
            this.setState({ isFocused: true });
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            toolTip && this.setState({ isFocused: false });
            this.setState({ isFocused: false });
          }}
          type={type}
          value={value}
          name={name}
          onKeyDown={this.onKeyDown}
          autoComplete="new-password"
          placeholder={placeholder}
          data-test={dataTest ? dataTest : Input.displayName}
          isEmpty={!value}
          tinyLabels={tinyLabels}
          heightPx={heightPx}
          disabled={disabled}
        />
        {toolTip && <Tooltip hide={!isFocused}>{toolTip()}</Tooltip>}
        {label && (
          <Label
            icon={icon}
            tinyLabels={tinyLabels}
            filterStyle={filterStyle}
            disabled={disabled}
          >
            {label}
          </Label>
        )}
        {typeof icon === "string" && (
          <IconContainer>
            <Icon type={icon} />
          </IconContainer>
        )}
        {valid !== null && (
          <ValidityContainer>
            {valid ? (
              <Icon type="Check" width="13" height="13" />
            ) : (
              !isFocused && <Icon type="Attention" width="24" height="24" />
            )}
          </ValidityContainer>
        )}
      </InputWrapper>
    );
  }
}

Input.displayName = "Input";

Input.defaultProps = {
  placeholder: "",
  type: "text",
  name: "",
  label: null,
  icon: null,
  valid: null,
  onFocus: null,
  tinyLabels: null,
  onBlur: () => { },
  value: "",
  disableKeys: []
};

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  icon: string,
  tinyLabels: bool,
  value: oneOfType([number, string]),
  valid: bool,
  onBlur: func,
  onFocus: func,
  disableKeys: oneOfType([number, string, array]),
  onChange: func,
  heightPx: string,
  centered: bool,
  disabled: bool
};

export default Input;
