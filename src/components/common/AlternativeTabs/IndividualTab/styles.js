import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray200, neutral300 } from "../../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rem(16)};
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      border-bottom: solid ${rem(2)} ${neutral300};
    `};
`;

export const Title = styled.div`
  font-family: Lato;
  font-weight: 600;
  font-size: ${remFontSize(16)};
  line-height: ${rem(21)};
  letter-spacing: ${rem(0.25)};
  color: ${gray200};

  ${({ selected }) =>
    selected &&
    css`
      color: ${neutral300};
      font-weight: 700;
    `};
`;
