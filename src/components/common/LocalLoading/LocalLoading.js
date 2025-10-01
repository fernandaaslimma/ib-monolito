import React from "react";
import { Wrapper, InnerWrapper, Bar } from "./styles";

function LocalLoading(props) {
  return (
    <Wrapper data-test="LocalLoading" {...props}>
      <InnerWrapper>
        <Bar background={props.background} />
        <Bar background={props.background} />
        <Bar background={props.background} />
        <Bar background={props.background} />
      </InnerWrapper>
    </Wrapper>
  );
}

export default LocalLoading;
