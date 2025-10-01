import React from "react";
import { Container, Image, SpanErrorMsg, SpanTitle } from "../styles";
import ImageError from "../../../../../assets/imgs/error.png";

const Error = ({ mainMessage, secondaryMessage }) => {
  return (
    <Container>
      <Image src={ImageError} data-test="ErrorImage" />
      <SpanTitle data-test="ErrorTitle">{mainMessage}</SpanTitle>
      <SpanErrorMsg data-test="ErrorMsg">{secondaryMessage}</SpanErrorMsg>
    </Container>
  );
};

export default Error;
