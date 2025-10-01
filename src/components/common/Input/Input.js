import React, { Component, Fragment } from "react";
import { string, func, bool, array, number, oneOfType } from "prop-types";
import MaskedInput from "react-text-mask";
import {
  datetimeMask,
  cpfcnpjMask,
  telephoneMask,
  correctedDatePipe,
  nameMask,
  cnpjHeadofficeBranchMask,
  cpfPassWordMask
} from "../../../utils/masks";
import {
  checkValidCpfAndCnpj,
  checkValidCpfAndPassport
} from "../../../utils/validations/input";
import { getDateFieldPlaceholderByLocale } from "../../../utils/i18n";

/* eslint-disable */

import {
  InputWrapper,
  InputField,
  Label,
  IconContainer,
  ValidityContainer,
  Tooltip,
  Prefix,
  ErrorMessage,
  FixedInitialIput
} from "./styles";
import Icon from "../Icon";

export const KEYCODES = {
  ENTER: 13,
  BACKSPACE: 8,
  ALL: "all"
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this._onKeyDown.bind(this);
    this.state = {
      isFocused: false,
      emptyState: false,
      isValid: typeof props.valid === "boolean" ? props.valid : null,
      isValidCPF: false
    };

    this.verifyingMask = this.verifyingMask.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.value === "" && this.state.isValid !== null) {
      this.setState({
        isValid: null
      });
    }

    if (
      (prevProps.value === "" && this.props.value.length > 4) ||
      prevProps.valid !== this.props.valid
    ) {
      this.setState({
        isValid:
          this.props.value === ""
            ? null
            : typeof this.props.valid === "function"
            ? this.props.valid()
            : this.state.isValid
      });
    }
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

  verifyingMask(valueInput) {
    const { value, maskType } = this.props;

    if (maskType === "cpfcnpj") {
      this.setState({
        isValid: checkValidCpfAndCnpj(value)
      });
    } else if (maskType === "documents") {
      this.setState({
        isValidCPF: checkValidCpfAndPassport(valueInput)
      });
    }
  }

  render() {
    const {
      label,
      labelStyles,
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
      prefix,
      maxLength,
      disabled,
      hasValidation,
      backgroundColor,
      msgError,
      fixedValue,
      spaceFixedInput,
      msgFocusInput,
      ...props
    } = this.props;
    const { isFocused, emptyState, isValid, isValidCPF } = this.state;
    if (maskType) {
      return (
        <InputWrapper
          valid={emptyState ? false : isValid}
          width={width}
          errorMessage={isValid === false && isFocused === false ? true : false}
        >
          <MaskedInput
            mask={
              (maskType === "datetime" && datetimeMask) ||
              (maskType === "telephone" && telephoneMask) ||
              (maskType === "documents" && cpfPassWordMask(isValidCPF)) ||
              (maskType === "cpfcnpj" && cpfcnpjMask(value)) ||
              (maskType === "cnpjSubscriptionFixed" &&
                cnpjHeadofficeBranchMask()) ||
              (maskType === "name" && nameMask())
            }
            keepCharPositions={maskType === "datetime"}
            pipe={maskType === "datetime" && correctedDatePipe()}
            onChange={e => {
              onChange && onChange(event);
              this.setState({
                emptyState: e.target.value === "",
                isValid: null
              });
              this.verifyingMask(e.target.value);
            }}
            guide={maskType === "datetime"}
            render={(refType, props) => (
              <InputField
                {...props}
                required
                maxLength={maxLength}
                type={type}
                value={value}
                name={name}
                icon={icon}
                label={label}
                labelStyles={labelStyles}
                onFocus={e => {
                  onFocus && onFocus(e);
                  this.setState({ isFocused: true });
                }}
                onBlur={e => {
                  onBlur && onBlur(e);
                  this.setState({
                    isFocused: false,
                    isValid: valid ? valid() : this.state.isValid
                  });
                }}
                innerRef={refType}
                ref={refType.current}
                autoComplete="new-password"
                placeholder={
                  maskType === "datetime" && isFocused
                    ? getDateFieldPlaceholderByLocale()
                    : ""
                }
                data-test={dataTest ? dataTest : Input.displayName}
                isEmpty={!value}
                tinyLabels={tinyLabels}
                disabled={disabled}
                EnableFixedInput={
                  fixedValue && spaceFixedInput ? spaceFixedInput : false
                }
              />
            )}
          />
          {fixedValue && spaceFixedInput && (
            <FixedInitialIput>{fixedValue}</FixedInitialIput>
          )}
          {label && (
            <Label tinyLabels={tinyLabels} labelStyles={labelStyles}>
              {label}
            </Label>
          )}
          {typeof icon === "string" && (
            <IconContainer>
              <Icon type={icon} />
            </IconContainer>
          )}
          {hasValidation && (isValid !== null || emptyState) && !disabled && (
            <ValidityContainer>
              {isValid && !emptyState ? (
                <Icon type="Check" width="13" height="13" />
              ) : (
                <Icon type="Attention" width="24" height="24" />
              )}
            </ValidityContainer>
          )}
          {isValid === false && isFocused === false && (
            <ErrorMessage data-test={dataTest + "MsgError"}>
              {msgError}
            </ErrorMessage>
          )}
        </InputWrapper>
      );
    }

    return (
      <Fragment>
        <InputWrapper
          valid={emptyState ? false : isValid}
          width={width}
          errorMessage={isValid === false && isFocused === false ? true : false}
        >
          {prefix && (value || isFocused) && (
            <Prefix label={label}>{prefix}</Prefix>
          )}
          <InputField
            {...props}
            required
            maxLength={maxLength}
            onChange={e => {
              onChange && onChange(e);
              this.setState({ emptyState: e.target.value === "" });
            }}
            innerRef={this.props.innerRef}
            onFocus={e => {
              onFocus && onFocus(e);
              this.setState({ isFocused: true });
            }}
            onBlur={e => {
              onBlur && onBlur(e);
              this.setState({
                isFocused: false,
                isValid: valid ? valid() : this.state.isValid
              });
            }}
            prefix={prefix}
            type={type}
            value={value}
            name={name}
            icon={icon}
            onKeyDown={this.onKeyDown}
            autoComplete="new-password"
            placeholder={placeholder}
            data-test={dataTest ? dataTest : Input.displayName}
            isEmpty={value === "" || value === null || value === undefined}
            label={label}
            tinyLabels={tinyLabels}
            disabled={disabled}
            background={backgroundColor}
            EnableFixedInput={
              fixedValue && spaceFixedInput ? spaceFixedInput : false
            }
          />

          {fixedValue && spaceFixedInput && (
            <FixedInitialIput>{fixedValue}</FixedInitialIput>
          )}
          {toolTip && <Tooltip hide={!isFocused}>{toolTip()}</Tooltip>}
          {label && (
            <Label tinyLabels={tinyLabels} labelStyles={labelStyles}>
              {label}
            </Label>
          )}
          {typeof icon === "string" && (
            <IconContainer label={label} msgFocusInput={msgFocusInput}>
              <Icon type={icon} />
            </IconContainer>
          )}
          {hasValidation && (isValid !== null || emptyState) && !disabled && (
            <ValidityContainer>
              {isValid && !emptyState ? (
                <Icon type="Check" width="13" height="13" />
              ) : (
                <Icon type="Attention" width="24" height="24" />
              )}
            </ValidityContainer>
          )}
          {isValid === false && isFocused === false && (
            <ErrorMessage data-test={dataTest + "MsgError"}>
              {msgError}
            </ErrorMessage>
          )}
          {msgFocusInput &&
            ((value.length > 0 || isFocused) && msgFocusInput())}
        </InputWrapper>
      </Fragment>
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
  valid: () => {},
  onFocus: null,
  tinyLabels: null,
  onBlur: () => {},
  value: "",
  disableKeys: [],
  disabled: false,
  msgError: null,
  EnableFixedInput: null,
  fixedValue: null,
  msgFocusInput: null
};

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  labelStyles: string,
  icon: string,
  tinyLabels: bool,
  value: oneOfType([number, string]),
  valid: oneOfType([bool, func]),
  onBlur: func,
  onFocus: func,
  disableKeys: oneOfType([number, string, array]),
  onChange: func,
  disabled: bool,
  hasValidation: bool,
  backgroundColor: string,
  msgError: string,
  fixedValue: string,
  EnableFixedInput: string,
  msgFocusInput: func
};

export default Input;
