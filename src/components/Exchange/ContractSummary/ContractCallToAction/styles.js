import styled, { css } from "styled-components";
import { rem, media } from "../../../../styles/tools";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${rem(20)} ${rem(34)} ${rem(10)};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};

  a {
    min-width: ${rem(180)};

    :first-child {
      margin-right: 0;
      margin-top: ${rem(15)};
      order: 1;
    }
  }

  ${media.lg(css`
    align-items: center;
    display: flex;
    margin: 0;

    a {
      width: auto;

      :first-child {
        margin-right: ${rem(10)};
        margin-top: 0;
        order: 0;
      }
    }
  `)};
`;
