import React from "react";
import PropTypes from "prop-types";

import { OptionWrapper } from "./styles";

const DropdownOption = ({ children, value }) => (
  <OptionWrapper value={value}>{children}</OptionWrapper>
);

DropdownOption.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.any
};

export default DropdownOption;
