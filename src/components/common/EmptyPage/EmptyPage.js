import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Title, Text, ActionButton } from "./styles";

const EmptyPage = ({
  title,
  text,
  buttonText,
  buttonAction,
  buttonDataTest,
  buttonDisable
}) => (
  <Wrapper>
    <Title hideIcon>{title}</Title>
    <Text>{text}</Text>
    {buttonText && (
      <ActionButton
        disabled={buttonDisable}
        onClick={buttonAction}
        dataTest={buttonDataTest}
      >
        {buttonText}
      </ActionButton>
    )}
  </Wrapper>
);

EmptyPage.propTypes = {
  title: PropTypes.any.isRequired,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonDataTest: PropTypes.string,
  buttonAction: PropTypes.func,
  hideIcon: PropTypes.bool,
  buttonDisable: PropTypes.bool
};

export default EmptyPage;
