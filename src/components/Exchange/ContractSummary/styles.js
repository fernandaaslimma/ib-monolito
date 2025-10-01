import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { black30 } from "../../../styles/settings";
import { Section } from "../../common/Card/styles";

export const Title = styled.h1`
  color: ${black30};
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  font-size: ${remFontSize(17)};
  margin-bottom: ${rem(10)};

  ${media.md(css`
    letter-spacing: ${rem(0.3)};
    font-size: ${remFontSize(21)};
    margin-bottom: ${rem(14)};
  `)};

  ${media.lg(css`
    letter-spacing: ${rem(0.4)};
    font-size: ${remFontSize(25)};
    margin-bottom: ${rem(20)};
  `)};
`;

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
