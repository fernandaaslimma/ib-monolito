import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { white, darkGreen, gray200 } from "../../../styles/settings";

export const InProgressMovements = styled.div`
  background: linear-gradient(0deg, ${white}, ${white});
  border-radius: ${rem(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(26)} ${rem(18)};
  margin: ${rem(19)} 0 ${rem(27)} 0;

  ${({ mode }) =>
    mode === "desktop" &&
    css`
      justify-content: center;
      cursor: pointer;
    `};
  ${({ withoutIcon }) =>
    withoutIcon === true &&
    css`
      padding: 0 ${rem(8)} ${rem(8)} ${rem(8)};
      margin: 0;
    `};
`;

export const ClicableItem = styled.div`
  cursor: pointer;
`;

export const HowManyMovements = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 125%;

  letter-spacing: ${rem(0.45)};

  color: ${darkGreen};

  ${({ mode }) =>
    mode === "desktop" &&
    css`
      padding: 0 ${rem(18)} 0 ${rem(18)};
    `};
  ${({ withoutIcon }) =>
    withoutIcon === true &&
    css`
      color: ${gray200};
    `};
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
