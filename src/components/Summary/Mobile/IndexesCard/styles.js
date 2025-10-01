import styled, { css } from "styled-components";

import { rem, remFontSize } from "../../../../styles/tools";
import { darkGreen, grey90 } from "../../../../styles/settings";

export const IndexWrapper = styled.section`
  margin-right: ${rem(15)};
  margin-left: ${rem(15)};
  margin-bottom: ${rem(15)};
`;

export const IndexGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: ${rem(5)};
  margin-top: ${rem(10)};
`;

export const IndexName = styled.div`
  font-family: "Lato Bold";
  font-size: ${remFontSize(12)};
  color: ${darkGreen};
`;

export const Info = styled.div`
  font-family: "Lato Bold";
  font-size: ${remFontSize(12)};
  color: ${darkGreen};
  font-weight: 900;

  ${({ alignEnd }) =>
    alignEnd &&
    css`
      text-align: end;
    `};
`;

export const InfoLabel = styled.div`
  font-family: "Lato Bold";
  font-size: ${remFontSize(9)};
  color: ${grey90};
  text-transform: uppercase;
`;

export const InfoValue = styled.div`
  font-family: "Lato";
  font-size: ${remFontSize(14)};
  color: ${grey90};
  margin: ${rem(10)} 0;
`;
