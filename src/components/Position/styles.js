import styled, { css } from "styled-components";
import {
  white,
  regularGreen,
  trueBlue,
  white30,
  lighestgrey,
  darkGreen
} from "../../styles/settings";
import { rem, remFontSize, media } from "../../styles/tools";

export const Wrapper = styled.div`
  background: ${white30};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(24)} 0;
  `)};
`;

export const Name = styled.span`
  font-size: ${remFontSize(9)};
`;

export const Rectangle = styled.div`
  height: ${rem(22)};
  border-radius: ${rem(11)};
  color: ${white};
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: ${remFontSize(9)};
  width: ${rem(74)};
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

export const Container = styled.div`
  max-width: ${rem(600)};
  margin: auto;
  padding-inline: ${rem(16)};
  padding-bottom: ${rem(54)};

  @media (min-width: 600px) {
    padding-inline: 0;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  padding: ${rem(8)};
  border: solid ${lighestgrey} ${rem(2)};
  border-radius: ${rem(4)};
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Total = styled.span`
  font-family: "Lato";
  font-weight: 700;
  font-size: ${remFontSize(13)};
  line-height: ${rem(15.6)};
  letter-spacing: ${rem(0.42)};
  color: ${darkGreen};
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(28)};
`;


export const EmptyStateContainer = styled.div`
  padding-bottom: ${rem(58)};
  display: flex;
  min-height: ${rem(420)};
  align-items: center;
  justify-content: center;
`;
