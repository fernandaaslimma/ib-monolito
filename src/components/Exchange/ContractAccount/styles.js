import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { Hr } from "../../../styles/objects";

export const Separator = styled(Hr.withComponent("span"))`
  order: 5;

  ${media.lg(css`
    margin: ${rem(5)} 0;
  `)};
`;

export const SummaryRow = styled.div`
  margin-bottom: ${rem(20)};
  flex-basis: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.md(css`
    ${SummaryRow} {
      margin-right: ${rem(35)};
      margin-bottom: 0;
      order: 0;
      flex-basis: auto;
    }

    ${Separator} {
      display: none;
    }
  `)};

  ${media.lg(css`
    ${Separator} {
      order: 0;
      display: block;
    }
  `)};
`;
