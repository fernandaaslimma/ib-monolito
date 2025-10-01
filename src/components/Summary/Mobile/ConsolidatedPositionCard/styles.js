import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../../styles/tools";
import {
  darkGreen,
  blue30,
  grey90,
  white30
} from "../../../../styles/settings";

export const Title = styled.div`
  font-size: ${remFontSize(18)};
  color: ${darkGreen};
  font-weight: 900;
  font-family: "Lato";
  padding: ${rem(10)};
  width: 100%;
  margin: ${rem(5)} 0 ${rem(5)} 0;
`;

export const AssetType = styled.div`
  display: flex;
  font-size: ${remFontSize(14)};
  margin-top: ${rem(5)};
  color: ${darkGreen};
  font-weight: bold;
  font-family: "Lato";
  justify-content: space-between;
`;

export const ExpandCollapseArrow = styled.div`
  float: right;

  ${({ collapse }) =>
    collapse &&
    css`
      transform: rotate(-180deg);
    `};
`;

export const AssetWrapper = styled.section`
  margin-right: ${rem(15)};
  margin-bottom: ${rem(10)};
  margin-left: ${rem(15)};

  ${media.md(css`
    margin-bottom: ${rem(35)};
  `)};
`;

export const AssetRow = styled.div`
  display: block;
  margin-bottom: ${rem(10)};

  ${media.md(css`
    margin-bottom: ${rem(17)};
  `)};

  ${media.lg(css`
    display: flex;
    margin-bottom: ${rem(20)};
  `)};
`;

export const TopHeader = styled.div`
  border-radius: ${rem(4)};
  border: ${rem(1)} solid ${darkGreen};
  margin-right: ${rem(15)};
  margin-bottom: ${rem(10)};
  margin-left: ${rem(15)};
  text-transform: uppercase;
  padding: ${rem(10)};
  color: ${darkGreen};
`;

export const TitleHeader = styled.div`
  font-family: "Lato Bold";
  font-size: ${remFontSize(12)};
  color: ${darkGreen};
  font-weight: 900;
`;

export const HeaderData = styled.div`
  display: flex;
`;

export const HeaderInfo = styled.div`
  color: ${darkGreen};
  margin: ${rem(10)} ${rem(10)} 0 0;
  flex-grow: 1;

  :last-child {
    margin: ${rem(10)} 0 0 0;
  }
`;

export const HeaderLabel = styled.div`
  font-family: "Lato Semibold";
  font-size: ${remFontSize(8)};
  margin: 0 0 ${rem(2)} 0;
`;

export const HeaderText = styled.div`
  font-family: "Lato Semibold";
  font-size: ${remFontSize(11)};
  color: ${darkGreen};
  font-weight: 900;
  letter-spacing: ${rem(0.7)};
`;

export const AssetName = styled.div`
  font-family: "Lato Bold";
  font-size: ${remFontSize(10)};
  color: ${darkGreen};
  font-weight: 900;
  letter-spacing: ${rem(0.3)};
  margin: ${rem(20)} 0;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${rem(5)};
  border-bottom: ${rem(1)} solid ${blue30};
  :last-child {
    border-bottom: none !important;
  }
  :nth-last-child(2) {
    border-bottom: none !important;
  }
  :nth-last-child(3) {
    border-bottom: none !important;
  }
  :nth-last-child(1) {
    border-bottom: none;
  }
  ${({ length }) =>
    length === 1 &&
    css`
      border-bottom: none;
    `};
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

export const TotalCard = styled.div`
  background-color: ${white30};
  padding: ${rem(5)};
  border-radius: ${rem(6)};
`;

export const RedirectBox = styled.div`
  padding: ${rem(10)} ${rem(0)};
  width: 100%;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  font-size: ${remFontSize(12)};
  color: ${grey90};
  font-weight: 900;
  margin: ${rem(10)} 0;
`;
