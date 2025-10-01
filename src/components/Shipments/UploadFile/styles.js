import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { isInternetExplorer } from "../../../utils/getNavigator";

export const Block = styled.div`
  padding: 0 0 ${rem(15)} 0;
  text-align: left;

  ${({ layered }) =>
    css`
      position: relative;
      z-index: ${layered};
    `}

  ${({ span }) =>
    span &&
    css`
      grid-column-start: 1;
      grid-column-end: 1;
      ${media.md(css`
        grid-column-start: ${span[0]};
        grid-column-end: ${span[1] + 1};
      `)};
    `};

  ${isInternetExplorer() &&
    css`
      min-width: 33.33%;
      max-width: 33.33%;

      ${({ IEFractionParts }) =>
        IEFractionParts &&
        css`
          min-width: ${100 / IEFractionParts}%;
          max-width: ${100 / IEFractionParts}%;
        `};

      ${({ span, IEFractionParts }) => {
        const percentFraction = `${
          IEFractionParts ? 100 / IEFractionParts : 33.33
        }`;
        return (
          span &&
          css`
            min-width: ${(span[1] - (span[0] - 1)) * percentFraction}%;
            max-width: ${(span[1] - (span[0] - 1)) * percentFraction}%;
          `
        );
      }};
    `};
`;

export const InnerBlock = styled(Block)`
  border: none;
  padding: 0;

  ${isInternetExplorer() &&
    css`
      padding: ${rem(5)};
    `};
`;
