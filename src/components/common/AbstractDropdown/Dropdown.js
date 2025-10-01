import React from "react";
import PropTypes, { bool } from "prop-types";

import DropdownOption from "../DropdownOption";
import LocalIcon from "../../common/Icon";
import { DropdownWrapper, Container, Label } from "./styles";
import { darkGreen } from "../../../styles/settings";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      selected: false
    };
  }

  handleOnFocus() {
    this.setState({ focus: true });
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({ selected: !!value });
  }

  componentDidUpdate() {}

  getSnapshotBeforeUpdate(prevProps) {
    const { value } = this.props;
    if (prevProps.value !== value) {
      this.setState({ selected: !!value || value === 0 });
    }
    return null;
  }

  handleOnBlur() {
    this.setState({ focus: false });
  }

  render() {
    const {
      error,
      children,
      disabled,
      id,
      name,
      dataTest,
      label,
      value,
      onChange,
      activeOptionEmpty,
      width,
      height,
      filterStyle
    } = this.props;
    const { focus, selected } = this.state;
    return (
      <Container
        focus={focus}
        error={error}
        disabled={disabled}
        width={width}
        height={height}
      >
        <Label
          focus={focus}
          selected={selected}
          disabled={disabled}
          htmlFor={id}
          filterStyle={filterStyle}
        >
          {label}
        </Label>
        <DropdownWrapper
          onFocus={this.handleOnFocus.bind(this)}
          onBlur={this.handleOnBlur.bind(this)}
          onChange={onChange}
          disabled={disabled}
          value={value}
          id={id}
          name={name}
          data-test={dataTest}
        >
          {activeOptionEmpty && (
            <Dropdown.Option key={""} value={""}>
              {""}
            </Dropdown.Option>
          )}
          ${children}
        </DropdownWrapper>
        <LocalIcon type="Arrow" color={darkGreen} />
      </Container>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.array.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  dataTest: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  activeOptionEmpty: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  filterStyle: bool
};

Dropdown.defaultProps = {
  error: false,
  loading: false,
  value: "",
  activeOptionEmpty: false
};

Dropdown.Option = DropdownOption;

export default Dropdown;
