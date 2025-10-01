import React from "react";
import { bool } from "prop-types";
import { Wrapper, Bar } from "./styles";

function GlobalLoading({ loading }) {
  if (loading) {
    return (
      <Wrapper data-test="Loading">
        <Bar />
        <Bar />
        <Bar />
      </Wrapper>
    );
  }

  return null;
}

GlobalLoading.defaultProps = {
  loading: null
};

GlobalLoading.propTypes = {
  loading: bool
};

export default GlobalLoading;
