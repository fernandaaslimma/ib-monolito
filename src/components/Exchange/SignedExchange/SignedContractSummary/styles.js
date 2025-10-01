import styled, { css } from "styled-components";
import { rem, media } from "../../../../styles/tools";
import { Section } from "../../../common/Card/styles";

export const SummaryWrapper = styled.section`
  margin-bottom: ${rem(27)};

  ${media.md(css`
    margin-bottom: ${rem(35)};
  `)};
`;

export const SummaryRow = styled.div`
  display: block;
  margin-bottom: ${rem(10)};

  ${media.md(css`
    margin-bottom: ${rem(17)};
  `)};

  ${media.lg(css`
    display: flex;
    margin-bottom: ${rem(20)};
  `)};

  ${Section} {
    ${({ operation }) =>
      operation &&
      css`
        :first-child {
          flex: 7;
        }

        :last-child {
          flex: 5;
        }
      `};

    ${({ operation }) =>
      !operation &&
      css`
        flex: 1;
      `};

    :not(:last-child) {
      margin-bottom: ${rem(10)};

      ${media.md(css`
        margin-bottom: ${rem(17)};
      `)};

      ${media.lg(css`
        margin-right: ${rem(20)};
        margin-bottom: 0;
      `)};
    }
  }
`;
