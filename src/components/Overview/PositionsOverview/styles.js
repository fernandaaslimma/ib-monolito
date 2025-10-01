import styled, { css } from "styled-components";
import { gray90, neutral200, white } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

export const Wrapper = styled.section`
  background: ${white};
`;

export const Container = styled.div`
  padding: ${rem(12)} ${rem(16)} 0 ${rem(16)};
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: calc(100% - 55%);
  z-index: 999;
  right: ${rem(4)};

  ${({ position }) => {
    if (position && position === 1) {
      return css`
        left: ${rem(4)};
        right: auto;
      `;
    }
  }};

  ${({ angle }) =>
    angle &&
    css`
      transform: rotate(${angle}deg);
    `}
`;

export const ChartController = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(5)};
`;

export const Dot = styled.div`
  width: ${rem(6)};
  height: ${rem(6)};
  background-color: ${gray90};

  margin: ${rem(4)};
  border-radius: ${rem(10)};

  ${({ active }) =>
    active &&
    css`
      background-color: ${neutral200};
    `};
`;
