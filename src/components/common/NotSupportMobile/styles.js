import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";

export const Wrapper = styled.div`
  margin-bottom: 25%;

  svg {
    height: ${rem(75)};
    width: auto;

    ${media.md(css`
      height: auto;
    `)};
  }
`;
