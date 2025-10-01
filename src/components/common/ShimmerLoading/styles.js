import styled, { keyframes, css } from "styled-components";
import { grey140, grey150, grey20 } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

const opacitychange = keyframes`
  0%, 100% {
      opacity: 0.2;
  }
  50% {
      opacity: 1;
  }
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: ${rem(10)};
  background-color: ${grey150};
  animation: ${opacitychange} 1.5s ease-in-out infinite;

  ${({ index }) =>
    index % 2 === 0 &&
    css`
      background-color: ${grey140};
    `};

  ${({ inverse }) =>
    inverse &&
    css`
      background-color: ${grey140};
    `};

  ${({ inverse, index }) =>
    inverse &&
    index % 2 === 0 &&
    css`
      background-color: ${grey150};
    `};

  ${({ darker }) =>
    darker &&
    css`
      background-color: ${grey20};
    `};

  ${({ height }) =>
    height &&
    css`
      height: ${rem(height)};
    `};

  ${({ width }) =>
    width &&
    css`
      width: ${rem(width)};
      margin: 0 auto;
    `};

  ${({ left }) =>
    left &&
    css`
      display: flex;
      margin: 0;
    `};
`;

export const LoadingCircle = styled.div`
  width: ${rem(50)};
  height: ${rem(50)};
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${grey150};
  animation: ${opacitychange} 1.5s ease-in-out infinite;

  ${({ height, width }) =>
    height &&
    width &&
    css`
      height: ${rem(height)};
      width: ${rem(width)};
    `};

  ${({ height }) =>
    height &&
    css`
      height: ${rem(height)};
    `};
`;
