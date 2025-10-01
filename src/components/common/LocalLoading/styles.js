import styled, { css, keyframes } from "styled-components";
import { white } from "../../../styles/settings";
import { rem } from "../../../styles/tools";
import { Child } from "../../../styles/objects";

const loading = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
  }
  40% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: ${rem(40)};
  + ${Child} {
    opacity: 0;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Bar = styled.div`
  display: inline-block;
  width: ${rem(3)};
  height: ${rem(18)};
  margin: 0 ${rem(2)};
  border-radius: ${rem(4)};
  animation: ${loading} 1s ease-in-out infinite;
  background-color: ${white};

  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `};

  :nth-child(1) {
    animation-delay: 0;
  }

  :nth-child(2) {
    animation-delay: 0.09s;
  }

  :nth-child(3) {
    animation-delay: 0.18s;
  }

  :nth-child(4) {
    animation-delay: 0.27s;
  }
`;
