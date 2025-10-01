import { keyframes, css } from "styled-components";

const openUpDown = keyframes`
  from {
    opacity: 0;
    transform: scaleY(.8);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const animationOpenUpDown = css`
  transform-origin: 50% 0%;
  animation: ${openUpDown} 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const slideInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -50%, 0)
  }
  to {
    opacity: 1;
    transform: translateZ(0)}
  }
`;

export const animationSlideInDown = css`
  animation: ${slideInDown} 0.5s linear;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const animationFadeIn = css`
  animation: ${fadeIn} 0.3s linear;
`;
