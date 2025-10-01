import styled, { css } from "styled-components";
import { lightGreen, white, orange, red } from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools";

export const Wrapper = styled.div`
  cursor: pointer;
  position: fixed;
  opacity: 0;
  z-index: 9999;
  width: 100%;
  min-height: ${rem(34)};
  background-color: ${lightGreen};
  box-shadow: 0 ${rem(4)} ${rem(22)} 0 rgba(28, 205, 163, 0.3);
  transition: 0.4s ease-in-out;
  ${media.md(css`
    min-height: ${rem(40)};
  `)};

  :hover {
    opacity: 0.8;
  }

  ${({ error }) =>
    error &&
    css`
      background-color: ${red};
      box-shadow: 0 ${rem(4)} ${rem(22)} 0 rgba(233, 103, 103, 0.3);
    `};

  ${({ warning }) =>
    warning &&
    css`
      background-color: ${orange};
    `};

  ${({ opened }) =>
    opened &&
    css`
      opacity: 1;
      top: 0;
    `};
  ${({ opened, isBelow }) =>
    opened &&
    isBelow &&
    css`
      opacity: 1;
      top: ${rem(140)};
    `};

  ${({ opened }) =>
    !opened &&
    css`
      opacity: 0;
      top: -${rem(50)};
    `};
  ${({ opened, isScrolling }) =>
    !opened &&
    isScrolling &&
    css`
      background: red;
      opacity: 0;
      top: ${rem(-50)};
    `};
  ${({ isScrolling, opened }) =>
    isScrolling &&
    opened &&
    css`
      top: ${rem(0)} !important;
    `};
`;

export const Text = styled.p`
  font-size: ${remFontSize(14)};
  font-family: "Lato";
  letter-spacing: ${rem(0.1)};
  text-align: center;
  padding: ${rem(10)} 0 ${rem(5)};
  color: ${white};
  width: 90%;
  margin: 0 auto;

  ${media.md(css`
    font-size: ${remFontSize(15)};
    padding-top: ${rem(12)};
  `)};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${rem(10)};
  right: ${rem(10)};

  ${media.md(css`
    top: ${rem(12)};
  `)};
`;
