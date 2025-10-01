import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { white30 } from "../../styles/settings";

export const ExchangeWrapper = styled.div`
  background: ${white30};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(35)} 0;
  `)};
`;
