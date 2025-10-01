import styled, { css } from "styled-components";
import { rem, media } from "../../../../styles/tools";

export const PageAsModalContainer = styled.div`
  padding: ${rem(8)} 0 ${rem(14)} 0;
  width: calc(100vw - ${rem(20)});

  ${media.md(css`
    ${({ width }) => {
      return (
        width &&
        css`
          width: ${width};
        `
      );
    }};
  `)};
`;
