import React from "react";

import PropTypes from "prop-types";

import { CardWrapper } from "./styles";

const Card = ({
  children,
  marginTop = "40px",
  marginBottom = "0px",
  height
}) => (
  <CardWrapper
    marginTop={marginTop}
    marginBottom={marginBottom}
    height={height}
  >
    {children}
  </CardWrapper>
);

Card.propTypes = {
  children: PropTypes.any.isRequired,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string
};

export default Card;
