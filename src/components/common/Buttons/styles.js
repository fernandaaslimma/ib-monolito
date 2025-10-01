import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";

export const BtnWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding.t ? padding.t : 0)}
        ${rem(padding.r ? padding.r : 0)} ${rem(padding.b ? padding.b : 0)}
        ${rem(padding.l ? padding.l : 0)};
    `};

  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `};
`;
