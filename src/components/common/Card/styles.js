import styled, { css } from "styled-components";
import { white, blue, lighestgrey } from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools/index";

export const Title = styled.h1`
  color: ${blue};
  font-family: "Lato";
  font-size: ${remFontSize(13)};
  font-weight: bold;
  line-height: 1.45;
  text-transform: uppercase;

  ${({ titleColor }) =>
    titleColor &&
    css`
      color: ${titleColor};
    `};

  ${({ BigTitle }) =>
    BigTitle &&
    css`
      font-size: ${remFontSize(16)};
      text-transform: none;

      ${media.md(css`
        font-size: ${remFontSize(24)};
        margin: ${rem(15)} ${rem(5)};
        text-transform: none;
      `)};
    `};

  ${({ capitalize }) =>
    capitalize &&
    css`
      text-transform: capitalize;
    `};

  ${({ actionSecondary }) =>
    actionSecondary &&
    css`
      margin: 0;
      ${media.md(css`
        margin: ${rem(15)} 0;
      `)};
    `};
`;

export const IconContainer = styled.span`
  align-items: center;
  background: ${white};
  border-radius: ${rem(4)};
  color: ${lighestgrey};
  display: inline-flex;
  height: ${rem(24)};
  justify-content: center;
  margin-right: ${rem(9)};
  width: ${rem(24)};

  ${({ iconContainerBg }) =>
    iconContainerBg &&
    css`
      background: rgba(${iconContainerBg}, 0.2);
    `};

  ${media.md(css`
    height: ${rem(28)};
    width: ${rem(28)};
    margin-right: ${rem(13)};
  `)};
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
`;

export const Section = styled.section`
  background-color: ${white};
  border-radius: ${rem(2)};
  padding: ${rem(12)};
  box-shadow: 0 ${rem(1)} ${rem(12)} ${rem(6)} rgba(211, 225, 232, 0.13);
  transition: height 0.8s linear;
  @media print {
    box-shadow: none;
    border-radius: none;
  }
  ${({ height }) =>
    height &&
    css`
      height: ${rem(height)};
    `};
  ${({ noBg }) =>
    noBg &&
    css`
      background: transparent;
    `};
  ${media.md(css`
    padding: ${rem(20)};
  `)};

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      ${Header} {
        margin-bottom: ${rem(20)};

        ${media.md(css`
          margin-bottom: ${rem(20)};
        `)};

        ${media.lg(css`
          margin-bottom: ${rem(10)};
        `)};
      }
    `};

  ${({ styles }) =>
    styles &&
    css`
      ${styles};
    `};
`;
