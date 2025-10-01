import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { white30, darkGreen, white, gray300 } from "../../../styles/settings";

export const Wrapper = styled.div`
  background: ${white30};
  padding-top: ${rem(15)};

  ${media.md(css`
    padding-top: ${rem(27)};
  `)}
`;

export const Title = styled.div`
  font-size: ${remFontSize(18)};
  color: ${darkGreen};
  font-weight: 900;
  font-family: "Lato";
  padding: ${rem(10)};
  margin: ${rem(5)} 0 ${rem(5)} 0;
`;

export const ChartController = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(5)};
`;

export const Dot = styled.div`
  width: ${rem(7)};
  height: ${rem(7)};
  border: solid ${rem(1)} ${darkGreen};
  margin: ${rem(2)};
  border-radius: ${rem(10)};

  ${({ active }) =>
    active &&
    css`
      background-color: ${darkGreen};
    `};
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  display: flex;
  flex-direction: column;
  border-top: solid ${rem(1)} #d3dde4;
`;

export const InProgressMovements = styled.div`
  background: linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: ${rem(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(26)} ${rem(18)};
  margin: ${rem(19)} 0 ${rem(27)} 0;
`;

export const HowManyMovements = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 125%;

  letter-spacing: ${rem(0.45)};

  color: #27445f;
`;

export const TransactionsWrapper = styled.ul`
  margin: none;
  padding: ${rem(24)} ${rem(16)} ${rem(16)} ${rem(16)};
`;

export const TransaciontionTitle = styled.p`
  color: ${gray300};
  font-family: Lato Bold;
  font-size: ${remFontSize(16)};
  padding: 0 0 ${rem(16)} 0;

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const ItemWrapper = styled.li`
  background: ${white};
  box-shadow: 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.16);
  border-radius: ${rem(4)};
  margin-bottom: ${rem(32)};
  cursor: pointer;
`;

export const RotateComponent = styled.div`
  margin-right: ${rem(-7)};
  ${({ isRotate }) =>
    isRotate &&
    css`
      transform: rotate(180deg);
    `}

  ${({ angle }) =>
    angle &&
    css`
      transform: rotate(${angle}deg);
    `}
`;
