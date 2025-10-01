import styled, { css } from "styled-components";
import { rem, media } from "../../../../../styles/tools";
import { blue, grey110 } from "../../../../../styles/settings";
import { Hr } from "../../../../../styles/objects";

export const Separator = styled(Hr.withComponent("span"))`
  display: block;

  ${({ order }) =>
    !order &&
    css`
      order: 4;

      :last-child {
        order: 6;
      }
    `};

  ${({ order }) =>
    order &&
    css`
      order: ${order};
    `};

  ${media.md(css`
    display: none;
  `)};

  ${media.lg(css`
    margin: ${rem(5)} 0;
  `)};
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  background-color: ${blue};
  border-radius: ${rem(4)};
  width: ${rem(30)};
  height: ${rem(30)};
  box-shadow: 0 ${rem(4)} ${rem(7)} 0 rgba(28, 96, 166, 0.3);
  margin: 0 auto;
  padding: ${rem(4)};

  ${media.md(css`
    margin-right: ${rem(20)};
  `)};

  :hover {
    opacity: 0.8;
  }
`;

export const SummaryRow = styled.div`
  margin-bottom: ${rem(20)};
  flex-basis: 100%;

  ${media.md(css`
    padding-top: ${rem(10)};
  `)};

  ${({ paddingRight }) =>
    paddingRight &&
    css`
      padding-right: ${rem(paddingRight)};
    `};
`;

export const SignatureText = styled.span`
  font-family: "Lato Bold", "Lato";
  line-height: 1.42;
`;

export const SignatureDate = styled.span`
  font-family: "Lato";
  font-style: italic;
  color: ${grey110};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ left }) =>
    left &&
    css`
      flex-basis: 60%;

      ${media.md(css`
        flex-basis: 56%;
      `)};
    `};
  }

  ${({ right }) =>
    right &&
    css`
      flex-basis: 40%;

      ${media.md(css`
        flex-basis: 44%;
      `)};
    `};
  }

  ${SummaryRow} {
    :nth-child(1) {
      order: 1;
      flex-basis: 50%;
    }

    :nth-child(2) {
      order: 3;
      margin-bottom: 0;
      flex-basis: 50%;
    }

    :nth-child(3) {
      order: 5;
    }

    :nth-child(4) {
      order: 6;
      margin-bottom: 0;
    }

    :nth-child(5) {
      order: 2;
      flex-basis: 50%;
    }

    :nth-child(6) {
      order: 4;
      flex-basis: 50%;
      margin-bottom: 0;
    }

    ${({ isCorporation }) =>
      isCorporation &&
      css`
        :nth-child(7) {
          order: 7;
          margin-bottom: 0;
        }

        :nth-child(8) {
          order: 8;
          margin-bottom: 0;
        }
      `};

      ${media.md(css`
        margin-right: ${rem(40)};
        margin-bottom: 0;
        order: 0;
        flex-basis: 11% !important;

        ${({ left, right }) =>
          left ||
          (right &&
            css`
              margin-bottom: ${rem(10)};
              flex-basis: 16% !important;
            `)};

        ${({ flexBasis }) =>
          flexBasis &&
          css`
            flex-basis: ${flexBasis} !important;
          `};
      `)};

      ${media.lg(css`
        flex-basis: auto !important;
      `)};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${media.md(css`
    justify-content: space-between;
    position: relative;
  `)};
`;

export const DownloadLink = styled.div`
  ${({ isCorporation }) =>
    isCorporation &&
    css`
      ${media.lg(css`
        top: ${rem(20)};
      `)};
    `};

  ${media.md(css`
    position: absolute;
    right: -${rem(15)};
    top: 0;
  `)};

  ${media.lg(css`
    top: ${rem(10)};
  `)};
`;
