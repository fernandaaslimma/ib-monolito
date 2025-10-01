import React from "react";
import { string } from "prop-types";
import { HideStyle } from "./styles";

function Hide({ children, below, above }) {
  return (
    <HideStyle below={below} above={above}>
      {children}
    </HideStyle>
  );
}

Hide.displayName = "Hide";

Hide.defaultProps = {
  below: null,
  above: null
};

Hide.propTypes = {
  below: string,
  above: string
};

export default Hide;
