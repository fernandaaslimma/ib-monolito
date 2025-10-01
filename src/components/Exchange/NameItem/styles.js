import styled, { css } from "styled-components";

import { rem, remFontSize, media } from "../../../styles/tools";
import { black50, grey110, grey160 } from "../../../styles/settings";

export const NamesBox = styled.div`
  line-height: 1.5;
  letter-spacing: ${rem(0.7)};
`;

export const SignerName = styled.span`
  ${({ isSelf }) =>
    isSelf &&
    css`
      font-weight: bold;
    `};
`;

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

export const Data = styled.div`
  font-family: Lato;
  margin: 0;

  :first-letter {
    text-transform: uppercase;
  }
`;

export const NameWeight = styled.span`
  font-weight: 500;
  font-size: ${remFontSize(13)};
  ${({ isSelf }) =>
    isSelf &&
    css`
      font-weight: 600;
    `};
`;

export const NameLinedTrough = styled.span`
  font-weight: 500;
  font-size: ${remFontSize(13)};
  text-decoration: line-through;
  color: ${grey160};
`;

export const SpacerForName = styled.span`
  font-family: "Lato";
  font-style: italic;
  color: ${grey110};
  font-weight: 300;
  padding: 0 ${rem(3)};
`;

export const SignDate = styled.div`
  font-family: "Lato";
  font-size: ${remFontSize(10)};
  font-weight: bold;
  line-height: 2.3;
  letter-spacing: ${rem(0.4)};
  ${({ nameSigned }) =>
    nameSigned &&
    css`
      font-weight: normal;
      line-height: 1.2;

      color: ${grey160};
    `};
  ${({ positionY }) =>
    positionY &&
    css`
      transform: translateY(${rem(10)});
    `};
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

export const Info = styled.div`
  width: 100%;
`;

export const Spacer = styled.span`
  padding-left: ${rem(15)};
`;

export const DataItemWrapper = styled.div`
  display: inline-block;
  line-height: 1.7;
  font-size: ${remFontSize(12)};
  position: relative;
  margin: ${rem(1)} ${rem(10)};

  ${media.lg(css`
    margin: ${rem(10)} 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `)};

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      ${Data} {
        text-align: center;
      }
    `};
`;
