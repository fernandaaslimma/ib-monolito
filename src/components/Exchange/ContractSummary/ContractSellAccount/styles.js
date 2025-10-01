import styled, { css } from "styled-components";
import { rem, media } from "../../../../styles/tools";

import { Hr } from "../../../../styles/objects";

export const Separator = styled(Hr.withComponent("span"))`
  order: 5;

  ${media.lg(css`
    margin: ${rem(5)} 0;
  `)};
`;

export const SummaryRow = styled.div`
  margin-bottom: ${rem(20)};
  flex-basis: 100%;

  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    flex-basis: 32.5%;
    margin-bottom: 0;
  }

  :nth-child(5) {
    flex-basis: 65%;
  }

  :nth-child(6) {
    flex-basis: 35%;
  }

  :nth-child(5),
  :nth-child(6) {
    order: 6;
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.md(css`
    ${SummaryRow} {
      margin-right: ${rem(40)};
      margin-bottom: 0;
      order: 0;
      flex-basis: auto;
    }

    ${Separator} {
      display: none;
    }
  `)};

  ${media.lg(css`
    ${SummaryRow} {
      order: 0;

      :nth-child(1),
      :nth-child(5) {
        flex-basis: ${rem(140)};
      }

      :nth-child(4) {
        margin-right: 0;
      }

      :nth-child(6) {
        flex: 1;
        margin-right: 0;
      }

      :nth-child(5),
      :nth-child(6) {
        order: 6;
      }
    }

    ${Separator} {
      order: 5;
      display: block;
    }
  `)};
`;
