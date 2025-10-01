import React, { Component } from "react";
import { string, oneOfType, func, bool, number, array } from "prop-types";
import {
  DropdownWrapper,
  DropdownField,
  PositionedIconContainer,
  Label
} from "./styles";
import Icon from "../Icon";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyState: false,
      isValid: null,
      focusItem: null
    };
  }

  componentDidMount() {
    const { selectedItem, hasEmptySelection } = this.props;

    (selectedItem !== null || !hasEmptySelection) &&
      this.setState({
        isValid: true,
        focusItem: true
      });
  }

  handleValueSelect(e) {
    this.setState({
      isValid: true,
      emptyState: e === ""
    });
  }

  handleFocusSelect(focus) {
    this.setState({
      focusItem: focus
    });
  }

  render() {
    const {
      disabled,
      required,
      list,
      label,
      placeholder,
      onChange,
      dataTest,
      tinyLabels,
      width,
      height,
      valid,
      noMargin,
      hasEmptySelection,
      keyName,
      selectedItem,
      clearInput
    } = this.props;

    const { emptyState, isValid, focusItem } = this.state;

    return (
      <DropdownWrapper
        valid={emptyState ? false : isValid}
        width={width}
        noMargin={noMargin}
      >
        <DropdownField
          data-test={dataTest ? dataTest : Dropdown.displayName}
          required={required}
          disabled={disabled}
          hasLabel={label}
          tinyLabels={tinyLabels}
          placeholder={placeholder}
          height={height}
          isEmpty={isValid}
          onChange={e => {
            onChange && onChange(e);
            this.handleValueSelect(e.target.value);
          }}
          onBlur={() => {
            this.handleFocusSelect(false);
            this.setState({
              isValid: valid ? valid() : this.state.isValid
            });
          }}
          onFocus={() => this.handleFocusSelect(true)}
        >
          {hasEmptySelection && (
            <option key={0} value={null} selected={clearInput}></option>
          )}

          {list.map((e, i) => (
            <option
              key={i}
              value={e[keyName.toLowerCase()]}
              selected={
                clearInput
                  ? false
                  : selectedItem === i || (i === 0 && !hasEmptySelection)
                  ? true
                  : false
              }
            >
              {e[keyName.toLowerCase()]}
            </option>
          ))}
        </DropdownField>

        {label && (
          <Label
            tinyLabels={tinyLabels}
            isValid={isValid}
            focusItem={focusItem}
            clearInput={clearInput}
          >
            {label}
          </Label>
        )}

        {!clearInput &&
          ((isValid !== null || emptyState || required) && (
            <PositionedIconContainer>
              {isValid && !emptyState ? (
                <Icon type="Check" width="13" height="13" />
              ) : (
                <Icon type="Attention" width="24" height="24" />
              )}
            </PositionedIconContainer>
          ))}
      </DropdownWrapper>
    );
  }
}

Dropdown.defaultProps = {
  list: [{ name: "" }],
  label: "",
  placeholder: "",
  width: "100",
  height: "46",
  tinyLabels: true,
  required: false,
  disabled: false,
  hasEmptySelection: false,
  selectedItem: null,
  keyName: undefined,
  clearInput: false
};

Dropdown.propTypes = {
  list: array,
  label: string,
  placeholder: string,
  width: number,
  height: number,
  tinyLabels: bool,
  required: bool,
  disabled: bool,
  hasEmptySelection: bool,
  selectedItem: number,
  keyName: string,
  valid: oneOfType([bool, func]),
  onChange: func,
  clearInput: bool
};

export default Dropdown;
