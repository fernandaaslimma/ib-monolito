import styled, { keyframes } from "styled-components";

import { grey60 } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

const movingGradient = keyframes`
  0% {
    background-position: -${rem(250)} 0;
  }
  100% {
    background-position: ${rem(250)} 0;
  }
`;

export const Container = styled.div`
  width: ${({ width }) => width};
  padding-left: ${({ paddingLeft }) => paddingLeft};
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Span = styled.span`
  display: block;
  border-radius: ${({ borderRadius }) => borderRadius};
  height: ${({ height }) => height};
  background: linear-gradient(to right, ${grey60} 20%, #ddd 50%, ${grey60} 80%);
  background-size: ${rem(500)} ${rem(100)};
  animation-name: ${movingGradient};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;
