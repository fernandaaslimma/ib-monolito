import styled, { css } from "styled-components";
import { media, rem } from "../../../styles/tools";

export const Wrapper = styled.div`
  padding-inline: ${rem(16)};
  ${media.md(css`
    max-width: ${rem(600)};
    margin: 0 auto;
  `)};
`;
