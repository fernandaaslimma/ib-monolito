import styled, { css } from "styled-components";

import { rem, remFontSize, media } from "../../../styles/tools";
import { black50 } from "../../../styles/settings";
import { PENDING } from "../../../utils/constants";

export const Title = styled.h2`
  color: ${black50};
  font-family: Lato Semibold;
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.4)};
  line-height: 1;
  margin-bottom: ${rem(5)};

  :first-letter {
    text-transform: uppercase;
  }

  ${media.lg(css`
    font-size: ${remFontSize(13)};
  `)};
`;

export const Data = Title.withComponent("div").extend`
  font-family: 'Lato';
  font-size: ${remFontSize(13)};

  ${({ status }) =>
    status &&
    css`
      padding-left: ${rem(5)};
    `};
    :first-letter {
        text-transform: uppercase;
    }
`;

export const IconContainer = styled.span`
  align-items: center;
  border-radius: ${rem(4)};
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

export const DataItemWrapper = styled.div`
  display: inline-block;

  ${media.lg(css`
    margin: ${rem(10)} 0;
  `)};

  ${({ status, waitingBox }) =>
    status === PENDING &&
    waitingBox &&
    css`
      width: 60%;
      padding: ${rem(10)} ${rem(20)};
    `};

  ${({ status }) =>
    status &&
    css`
      padding: ${rem(0)} ${rem(21)};
    `};

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      ${Data} {
        text-align: center;
      }
    `};
`;
