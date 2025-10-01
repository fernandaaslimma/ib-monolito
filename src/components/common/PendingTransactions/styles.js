import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { white, gray300, darkGreen } from "../../../styles/settings";

export const FullInfoWrapper = styled.div``;

export const InProgressMovements = styled.div`
  background: linear-gradient(0deg, ${white}, ${white});
  border-radius: ${rem(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(24)} ${rem(16)};
  margin-top: ${props =>
    props.margins && props.margins.top ? props.margins.top : rem(24)};
  margin-right: ${props =>
    props.margins && props.margins.right ? props.margins.right : 0};
  margin-bottom: ${props =>
    props.margins && props.margins.bottom ? props.margins.bottom : rem(24)};
  margin-left: ${props =>
    props.margins && props.margins.left ? props.margins.left : 0};

  ${({ mode }) =>
    mode === "desktop" &&
    css`
      justify-content: center;
      cursor: pointer;
    `};

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background: linear-gradient(0deg, ${backgroundColor}, ${backgroundColor});
    `};
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
  border-radius: ${rem(4)};
  margin-bottom: ${rem(16)};
  padding: ${rem(8)} ${rem(16)};

  :only-of-type {
    margin-bottom: ${rem(32)};
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: auto;
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
