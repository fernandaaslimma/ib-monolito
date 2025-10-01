import styled, { css } from "styled-components";
import { remFontSize } from "../../../styles/tools";
import { gray200, white } from "../../../styles/settings";

export const Chart = styled.div`
  ${({ color, background, percentage }) =>
    color &&
    background &&
    percentage &&
    css`
      background: conic-gradient(${color} 0 ${percentage}, ${background} 0);
    `};

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
      height: ${width}px;
    `};

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;

export const DataChart = styled.div`
  background: ${white};
  border-radius: 50%;
  width: 85%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
`;

export const Percentage = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  font-size: ${remFontSize(11)};
  color: ${gray200};
`;
