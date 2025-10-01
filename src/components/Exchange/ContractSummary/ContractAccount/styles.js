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

  :nth-child(2) {
    flex-basis: 65%;
  }

  :nth-child(3) {
    flex-basis: 35%;
  }

  :nth-child(4) {
    margin: 0;
  }

  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    order: 4;
    flex-basis: 32.5%;
    margin: 0;
  }

  :nth-last-child(2) {
    order: 6;
    margin: 0;
  }
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

  ${({ isIntermediaryAccount }) =>
    !isIntermediaryAccount &&
    css`
      ${SummaryRow} {
        :nth-last-child(3) {
          flex-basis: 65%;
          order: 2;
        }

        :nth-last-child(4) {
          flex-basis: 35%;
          order: 3;
        }

        ${media.md(css`
          :nth-last-child(3),
          :nth-last-child(4) {
            order: 0;
            flex-basis: auto;
          }
        `)};

        ${media.lg(css`
          :nth-child(1),
          :nth-child(6) {
            flex-basis: ${rem(152)};
          }

          :nth-child(5) {
            margin-right: 0;
          }

          :nth-child(6),
          :nth-child(7) {
            order: 2;
          }
        `)};
      }
    `};

  ${({ isIntermediaryAccount }) =>
    isIntermediaryAccount &&
    css`
      ${SummaryRow} {
        ${media.lg(css`
          order: 0;

          :nth-child(4) {
            margin-right: 0;
          }

          :nth-child(5) {
            order: 2;
          }
        `)};
      }
    `};

  ${media.lg(css`
    ${Separator} {
      order: 0;
      display: block;
    }
  `)};
`;
