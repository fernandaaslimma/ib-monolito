import styled, { keyframes } from "styled-components";
import { rem } from "../../../styles/tools";
import { darkBlue, blue10, white } from "../../../styles/settings";

const loading = keyframes`
  from {
    left: 50%;
    width: 0;
    z-index: 100;
  }

  33.333% {
    left: 0;
    width: 100%;
    z-index: 10;
  }

  to {
    left: 0;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${rem(3)};
  background-color: ${white};
  z-index: 100000;
  @media print {
    visibility: hidden;
  }
`;

export const Bar = styled.div`
  content: "";
  display: inline-block;
  position: absolute;
  width: 0;
  height: 100%;
  left: 50%;
  text-align: center;

  :nth-child(1) {
    background-color: ${darkBlue};
    animation: ${loading} 3s linear infinite;
  }

  :nth-child(2) {
    background-color: ${blue10};
    animation: ${loading} 3s linear 1s infinite;
  }

  :nth-child(3) {
    background-color: ${white};
    animation: ${loading} 3s linear 2s infinite;
  }
`;
