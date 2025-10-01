import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";

export const Content = styled.div`
  min-height: calc(100vh - ${rem(336)});

  ${({ visible }) =>
    visible &&
    css`
      display: none;
    `};
`;
