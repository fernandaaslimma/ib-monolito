import React from "react";
import { string } from "prop-types";

import { Wrapper } from "./styles";

import Icon from "../Icon";

function Disclaimer({ text }) {
  return (
    <Wrapper>
      <Icon type="Info" />
      <span>{text}</span>
    </Wrapper>
  );
}

Disclaimer.defaultProps = {
  text: ""
};

Disclaimer.propTypes = {
  text: string
};

export default Disclaimer;
