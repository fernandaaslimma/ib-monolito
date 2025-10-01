import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools/index";

export const Span = styled.span`
  display: inline-flex;

  ${({ top, right }) =>
    top &&
    right &&
    css`
      svg {
        top: ${rem(top)};
        right: ${rem(right)};
      }
    `};
  /*This prop only work for very low size icons < 30px */
  ${({ fixCrossAxisAlign }) =>
    fixCrossAxisAlign &&
    css`
      transform: translateY(${rem(fixCrossAxisAlign)});
    `};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ cursorPointer }) =>
    cursorPointer &&
    css`
      cursor: pointer;
    `};

  ${({ width, height }) =>
    width &&
    height &&
    css`
      svg {
        width: ${rem(width)};
        height: ${rem(height)};
      }
    `};
`;
