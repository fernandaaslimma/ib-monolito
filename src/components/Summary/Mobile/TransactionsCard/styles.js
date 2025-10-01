import styled, { css } from "styled-components";

import { rem, remFontSize } from "../../../../styles/tools";
import { darkGreen, grey90 } from "../../../../styles/settings";

export const TransactionWrapper = styled.section`
  margin-right: ${rem(15)};
  margin-bottom: ${rem(15)};
  margin-left: ${rem(15)};
`;

export const TransactionRow = styled.div`
  display: block;
  margin-bottom: ${rem(10)};
`;

export const AssetName = styled.div`
  font-family: "Lato Bold";
  font-size: ${remFontSize(12)};
  color: ${darkGreen};
  font-weight: 900;
  letter-spacing: ${rem(0.3)};
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${rem(5)};
  margin-top: ${rem(10)};
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
  font-size: ${remFontSize(8)};
  color: ${darkGreen};
  font-weight: 900;
  text-transform: uppercase;
`;

export const InfoValue = styled.div`
  font-family: "Lato Bold";
  font-size: ${remFontSize(11)};
  color: ${grey90};
  font-weight: 900;
  margin: ${rem(10)} 0;
`;
