import styled, { css } from "styled-components";
import { white, lighestgrey } from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools/index";

export const Title = styled.h1`
  font-family: "Lato";
  font-size: ${remFontSize(11)};
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.452308px;
  color: #27445f;

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
  height: ${rem(20)};
  justify-content: center;
  margin-right: ${rem(10)};
  width: ${rem(20)};

  ${({ iconContainerBg }) =>
    iconContainerBg &&
    css`
      background: rgba(${iconContainerBg}, 0.2);
    `};
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
`;

export const Section = styled.section`
  background-color: ${white};
  border-radius: ${rem(4)};
  padding: ${rem(12)} ${rem(12)} ${rem(8)} ${rem(12)};
  border: 1px solid #d3dde4;
  box-sizing: border-box;

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

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      ${Header} {
        margin-bottom: ${rem(6)};
      }
    `};

  ${({ styles }) =>
    styles &&
    css`
      ${styles};
    `};
`;
