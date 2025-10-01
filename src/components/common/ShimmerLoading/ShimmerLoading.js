import React from "react";
import { number, bool } from "prop-types";

import { LoadingBar, LoadingCircle } from "./styles";

function ShimmerLoading(props) {
  return props.circle ? (
    <LoadingCircle {...props} />
  ) : (
    <LoadingBar {...props} />
  );
}

ShimmerLoading.defaultProps = {
  index: 0,
  inverse: false,
  darker: false
};

ShimmerLoading.propTypes = {
  index: number,
  inverse: bool,
  darker: bool
};

export default ShimmerLoading;
