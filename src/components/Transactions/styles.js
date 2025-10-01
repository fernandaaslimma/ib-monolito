import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../styles/tools";
import {
  white30,
  white,
  regularGreen,
  trueBlue,
  darkestRed,
  darkGreen
} from "../../styles/settings";

export const Title = styled.h1`
  font-size: ${remFontSize(20)};
  margin: ${rem(25)} 0 ${rem(10)};
  font-family: "Lato Bold", Lato;
  color: ${darkGreen};
`;

export const Wrapper = styled.div`
  background: ${white30};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: 0;
  `)};
`;

export const Name = styled.span`
  font-size: ${remFontSize(9)};
`;

export const Span = styled.div`
  ${({ red }) =>
    red &&
    css`
      color: ${darkestRed};
    `};
`;

export const DateRow = styled.span`
  font-weight: normal;
`;

export const BalanceAmountRow = styled.span`
  font-weight: bold;

  ${({ red }) =>
    red &&
    css`
      color: ${darkestRed};
    `};
`;

export const Rectangle = styled.div`
  height: ${rem(22)};
  border-radius: ${rem(11)};
  color: ${white};
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: ${remFontSize(9)};
  width: ${rem(90)};
  font-weight: normal;
  margin-left: -${rem(10)};

  ${({ color }) =>
    color === "green"
      ? css`
          background: ${regularGreen};
        `
      : css`
          background: ${trueBlue};
        `};
`;
