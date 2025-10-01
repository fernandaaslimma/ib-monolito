import React from "react";
import { func, node, string, array, bool } from "prop-types";

import {
  Wrapper,
  IconWrapper,
  PrimaryText,
  SecondaryText,
  ErrorImg
} from "./styles";
import Error404Img from "../../../assets/imgs/ic-page-404.png";

function DefaultContent({
  Icon,
  primaryText,
  secondaryTexts,
  children,
  isIe,
  minHeight,
  marginBottom,
  paddingTop,
  paddingBottom,
  customizedTitle,
  customizedMessage,
  ...props
}) {
  return (
    <Wrapper
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      minHeight={minHeight}
      data-test={props["data-test"]}
    >
      {Icon && (
        <IconWrapper>
          {isIe ? <ErrorImg src={Error404Img} alt="IePNG404" /> : <Icon />}
        </IconWrapper>
      )}
      {!customizedTitle ? (
        <PrimaryText data-test={props["data-test"] + "Title"}>
          {primaryText}
        </PrimaryText>
      ) : (
        customizedTitle
      )}
      {secondaryTexts &&
        secondaryTexts.map((item, index) => (
          <SecondaryText
            data-test={props["data-test"] + "SubTitle"}
            marginBottom={marginBottom}
            key={index}
          >
            {item}
          </SecondaryText>
        ))}
      {customizedMessage}
      {children}
    </Wrapper>
  );
}

DefaultContent.defaultTypes = {
  secondaryTexts: [],
  Icon: () => {},
  isIe: false,
  children: null,
  customizedMessage: null
};

DefaultContent.propTypes = {
  Icon: func,
  primaryText: string.isRequired,
  secondaryTexts: array,
  customizedMessage: node,
  isIe: bool,
  children: node
};

export default DefaultContent;
