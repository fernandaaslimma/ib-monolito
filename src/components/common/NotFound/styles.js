import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";

export const Content = styled.div`
  margin-top: ${rem(30)};

  ${media.md(css`
    margin-top: ${rem(30)};
  `)};
`;

export const Wrapper = styled.div`
  span {
    width: 65%;

    ${media.md(css`
      width: 100%;
    `)};
  }
`;
