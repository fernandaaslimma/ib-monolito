import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Span, Container } from "./styles";

const LoadingBar = ({ height, width, paddingLeft, borderRadius }) => (
  <Container paddingLeft={paddingLeft} width={width}>
    <Wrapper>
      <Span height={height} borderRadius={borderRadius} />
    </Wrapper>
  </Container>
);

LoadingBar.defaultProps = {
  height: "12px",
  width: "100%",
  paddingLeft: "0",
  borderRadius: "6.25rem"
};

LoadingBar.propTypes = {
  paddingLeft: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string
};

export default LoadingBar;
