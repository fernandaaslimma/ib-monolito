import styled, { keyframes } from "styled-components";
import { darkestBlue } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

const opacitychange = keyframes`
  0%, 100% {
    opacity: 0;
  }

  60% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media print {
    visibility: hidden;
  }
`;

export const Circle = styled.span`
  display: inline-block;
  width: ${rem(20)};
  height: ${rem(20)};
  border-radius: 100%;
  background-color: ${darkestBlue};
  margin: ${rem(35)} ${rem(5)};

  :nth-child(1) {
    animation: ${opacitychange} 1s ease-in-out infinite;
  }

  :nth-child(2) {
    animation: ${opacitychange} 1s ease-in-out 0.33s infinite;
  }

  :nth-child(3) {
    animation: ${opacitychange} 1s ease-in-out 0.66s infinite;
  }
`;
