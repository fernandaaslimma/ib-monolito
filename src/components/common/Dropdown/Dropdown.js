import React, { Component } from "react";
import { string, oneOfType, func, bool, number } from "prop-types";
import {
  DropdownWrapper,
  DropdownField,
  PositionedIconContainer
} from "./styles";
import { Label } from "../../common/Input/styles";
import Icon from "../../common/Icon";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyState: false,
      isValid: typeof props.valid === "boolean" ? props.valid : null
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value === "" && this.state.isValid !== null) {
      this.setState({
        isValid: null
      });
    }

    if (prevProps.value === "" && this.props.value !== "") {
      this.setState({
        isValid: this.props.valid ? this.props.valid() : this.state.isValid
      });
    }
  }

  render() {
    const {
      value,
      placeholder,
      onChange,
      type,
      name,
      dataTest,
      list,
      label,
      tinyLabels,
      width,
      accountNumber,
      valid,
      noMargin,
      height,
      disabled,
      noEmptySelection,
      widthIcon = "10",
      heightIcon = "10",
      colorIcon
    } = this.props;

    const emptyOptionTemplate = noEmptySelection
      ? []
      : [{ name: "", selected: true }];

    const { emptyState, isValid } = this.state;

    return (
      <DropdownWrapper
        valid={emptyState ? false : isValid}
        width={width}
        noMargin={noMargin}
      >
        <DropdownField
          required
          height={height}
          disabled={disabled}
          onChange={e => {
            onChange && onChange(e);
            this.setState({ emptyState: e.target.value === "" });
          }}
          onBlur={() => {
            this.setState({
              isValid: valid ? valid() : this.state.isValid
            });
          }}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          data-test={dataTest ? dataTest : Dropdown.displayName}
          isEmpty={!value}
          tinyLabels={tinyLabels}
          hasLabel={label}
        >
          {accountNumber &&
            emptyOptionTemplate.concat(list).map((e, i) => (
              <option
                data-test={`option_${i}`}
                key={i}
                value={e.accountNumber}
                defaultValue={i === 0}
              >
                {e.accountNumber}
              </option>
            ))}
          {!accountNumber &&
            emptyOptionTemplate.concat(list).map((e, i) => (
              <option
                data-test={`option_${i}`}
                key={i}
                value={e.value}
                defaultValue={e.selected}
              >
                {e.name}
              </option>
            ))}
        </DropdownField>
        {noEmptySelection && (
          <PositionedIconContainer>
            <Icon
              type="Arrow"
              width={widthIcon}
              height={heightIcon}
              color={colorIcon}
            />
          </PositionedIconContainer>
        )}
        {label && <Label tinyLabels={tinyLabels}>{label}</Label>}
        {(isValid !== null || emptyState) && (
          <PositionedIconContainer>
            {isValid && !emptyState ? (
              <Icon type="Check" width="13" height="13" />
            ) : (
              <Icon type="Attention" width="24" height="24" />
            )}
          </PositionedIconContainer>
        )}
      </DropdownWrapper>
    );
  }
}

Dropdown.defaultProps = {
  value: "",
  name: "",
  label: "",
  height: "46"
};

Dropdown.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  icon: string,
  height: oneOfType([number, string]),
  tinyLabels: bool,
  value: oneOfType([number, string]),
  valid: oneOfType([bool, func]),
  onChange: func
};

export default Dropdown;
