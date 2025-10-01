import styled, { css, keyframes } from "styled-components";
import { rem } from "../../../styles/tools";
import { darkBlue, blue30 } from "../../../styles/settings";
import { isMsBrowser } from "../../../utils/getNavigator";

const animateWidth = width =>
  keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width}%;
  }
`;

const animateColor = keyframes`
  0% {
    background: ${blue30};
  }
  100% {
    background: ${darkBlue};
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  height: ${rem(8)};
  flex-grow: 1;
  background: ${blue30};
  border-radius: ${rem(4)};
  position: relative;
  padding: 0;
  margin: 0;
`;

export const Fill = styled.span`
  height: ${rem(8)};
  width: 0;
  position: absolute;
  z-index: 1;
  border-radius: ${rem(4)} 0 0 ${rem(4)};
  background: ${darkBlue};
  animation: ${({ width }) => animateWidth(width - 2)} 400ms
    ${({ delay }) => delay}ms linear forwards;

  ${isMsBrowser() &&
    css`
      top: 0;
    `};
`;

export const Value = styled.div`
  margin-right: ${rem(10)};
  color: ${darkBlue};
  font-weight: bold;
`;

export const BackFillBars = styled.span`
  height: ${rem(10)};
  top: 0;
  width: 2px;
  background: ${blue30};
  position: absolute;
  z-index: 0;
  left: 0;
  transform: translate(-4px, -${rem(1)});

  &:first-child,
  &:last-child {
    display: none;
  }

  ${({ position }) =>
    position &&
    css`
      left: calc(${position}% - ${rem(1)});
    `};

  ${({ fillment, position, delay }) =>
    position <= fillment &&
    css`
      animation: ${animateColor} 100ms ${delay + 400}ms linear forwards;
    `};
`;
