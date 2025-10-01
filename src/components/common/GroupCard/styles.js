import styled, { css } from "styled-components";
import { grey90 } from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools/index";
import { PENDING } from "../../../utils/constants";

export const Title = styled.h1`
  color: ${grey90};
  font-family: "Lato";
  font-size: ${remFontSize(11)};
  font-weight: bold;
  line-height: 1.45;
  text-transform: uppercase;

  ${({ titleColor }) =>
    titleColor &&
    css`
      color: ${titleColor};
    `};
  ${({ titleSignatures }) =>
    titleSignatures &&
    css`
      font-size: ${remFontSize(10)};
    `};
`;

export const IconContainer = styled.span`
  align-items: center;
  border-radius: ${rem(4)};
  display: inline-flex;
  justify-content: center;
  height: ${rem(14)};
  width: ${rem(17)};
  margin-right: ${rem(10)};

  ${({ iconContainerBg }) =>
    iconContainerBg &&
    css`
      background: rgba(${iconContainerBg}, 0.2);
    `};
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  margin-bottom: ${rem(10)};

  ${media.lg(css`
    margin-bottom: 0;
  `)};
`;

export const Section = styled.section`
  display: inline-block;
  font-family: Lato;
  text-align: left;
  font-size: ${remFontSize(13.5)};
  color: ${grey90};
  padding: ${rem(0)} ${rem(21)};
  margin: ${rem(20)} 0 ${rem(12)};

  ${media.lg(css`
    height: 100%;
  `)};

  ${({ status, waitingBox }) =>
    status === PENDING &&
    waitingBox &&
    css`
      padding: ${rem(10)} ${rem(20)};

      ${media.lg(css`
        width: 60%;
      `)};
    `};

  ${({ pendingBox, waitingBox }) =>
    (pendingBox || waitingBox) &&
    css`
      margin-bottom: 0;
      margin-top: 0;
      padding: ${rem(25)} ${rem(21)};

      ${media.lg(css`
        margin-bottom: ${rem(12)};
      `)};
    `};

  ${({ status, pendingBox, blockedBox }) =>
    status &&
    pendingBox &&
    blockedBox &&
    css`
      padding: ${rem(20)} ${rem(21)};

      ${media.lg(css`
        width: 60%;
      `)};
    `};
`;
