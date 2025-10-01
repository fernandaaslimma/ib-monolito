import styled, { css } from "styled-components";
import { rem } from "../../../../styles/tools";

export const ScrollModalContainer = styled.div`
  padding: ${rem(8)} 0 ${rem(14)} 0;
  width: calc(100vw - ${rem(20)});

  ${({ width }) => {
    return (
      width &&
      css`
        width: ${width};
      `
    );
  }};

  ${({ bigModal }) =>
    bigModal &&
    css`
      margin: auto;
      max-height: calc(100vh - ${rem(10)});
    `};
`;
