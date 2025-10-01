import styled, { css } from "styled-components";
import { darkestRed } from "../../../../styles/settings";
import { rem } from "../../../../styles/tools";

export const Span = styled.div`
  ${({ red }) =>
    red &&
    css`
      color: ${darkestRed};
    `};
`;

export const RedirectBox = styled.div`
  position: relative;
  padding-top: ${rem(10)};
  padding-bottom: ${rem(26)};
  padding-left: ${rem(25)};
  margin-top: ${rem(20)};
`;
