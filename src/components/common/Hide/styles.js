import styled, { css } from "styled-components";
import { media } from "../../../styles/tools";

export const HideStyle = styled.div`
  display: none;

  ${({ below }) =>
    below &&
    media[below](css`
      display: block;
    `)};

  ${({ above }) =>
    above &&
    css`
      display: block;

      ${media[above](css`
        display: none;
      `)};
    `};
`;
