import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { white30 } from "../../../styles/settings";

export const Wrapper = styled.div`
  background: ${white30};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding-top: ${rem(27)};
  `)};
`;
