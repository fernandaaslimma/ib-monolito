import styled, { css } from "styled-components";
import { rem, media } from "../../../../styles/tools";

import { Hr } from "../../../../styles/objects";

export const Separator = styled(Hr.withComponent("span"))`
  order: 5;

  :last-child {
    order: 8;
  }

  ${media.lg(css`
    margin: ${rem(5)} 0;
  `)};
`;

export const SummaryRow = styled.div`
  margin-bottom: ${rem(20)};
  flex-basis: 100%;

  :nth-child(1) {
    order: 1;
    flex-basis: 65%;
  }

  :nth-child(2) {
    order: 4;
    margin: 0;
    flex-basis: 35%;
  }

  :nth-child(3) {
    order: 6;
  }

  :nth-child(4) {
    order: 7;
    margin: 0;
  }

  :nth-child(5) {
    order: 9;
    margin: 0;
  }

  :nth-child(6) {
    order: 2;
    flex-basis: 35%;
    margin: 0;
  }

  :nth-child(7) {
    order: 3;
    margin: 0;
    flex-basis: 65%;
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

      :nth-child(6),
      :nth-child(7) {
        order: 2;
      }

      :nth-child(1),
      :nth-child(6) {
        flex-basis: ${rem(100)};
      }
    }

    ${Separator} {
      order: 0;

      :last-child {
        display: none;
      }
    }
  `)};

  ${({ isBuy }) =>
    isBuy &&
    css`
      ${media.lg(css`
        ${SummaryRow} {
          :nth-child(1),
          :nth-child(6) {
            flex-basis: ${rem(108)};
          }
        }
      `)};
    `};

  ${({ isBuy }) =>
    !isBuy &&
    css`
      ${media.lg(css`
        ${SummaryRow} {
          :nth-child(1) {
            order: 1;
            flex-basis: auto;
          }

          :nth-child(2) {
            order: 8;
            margin: 0;
          }

          :nth-child(3) {
            order: 3;
            margin-right: ${rem(46)};
          }

          :nth-child(4) {
            order: 7;
          }

          :nth-child(5) {
            order: 6;
            flex-basis: ${rem(245)};
          }

          :nth-child(6) {
            order: 4;
            margin: 0;
          }

          :nth-child(7) {
            order: 2;
          }
        }
        ${Separator} {
          order: 5;
        }
      `)};
    `};
`;
