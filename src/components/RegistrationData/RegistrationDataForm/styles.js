import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import {
  white,
  blue05,
  grey70,
  grey80,
  grey90,
  blue70,
  lightBlack,
  darkGreen,
  grey130,
  darkestBlue,
  darkestRed
} from "../../../styles/settings";
import { isInternetExplorer } from "../../../utils/getNavigator";
import { CheckboxSpan } from "../../common/Checkbox/styles";

export const Wrapper = styled.div`
  background: ${white};
  font-family: "Lato";
`;

export const InnerWrapContent = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: ${rem(24)} 0 ${rem(9)} 0;
  background: ${blue05};
  ${media.md(css`
    width: auto;
    padding: ${rem(24)} ${rem(75)} ${rem(9)};
  `)};
`;

export const Greeting = styled.h1`
  font-size: ${remFontSize(24)};
  font-weight: bold;
  margin-bottom: ${rem(12)};
  letter-spacing: ${rem(0.8)};
  color: ${blue70};
  font-family: "Lato Bold";
`;

export const Title = styled.h3`
  font-size: ${remFontSize(14)};
  color: ${darkGreen};
  font-family: "Lato Bold";
`;

export const InnerTitle = styled.h3`
  font-size: ${remFontSize(10)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: ${rem(0.4)};
  color: ${grey90};
`;

export const Warning = styled.h2`
  font-size: ${remFontSize(16)};
  font-weight: bold;
  letter-spacing: ${rem(0.8)};
  color: ${blue70};
`;

export const UserInformation = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(20)};
  border-bottom: solid ${rem(1)} ${grey80};
  ${media.md(css`
    padding: ${rem(30)} ${rem(75)};
    text-align: left;
  `)};
`;

export const BasicInfo = styled.p`
  font-family: "Lato";
  margin-top: ${rem(20)};
  line-height: ${rem(20)};
  color: ${lightBlack};

  b {
    font-family: "Lato Bold";
    font-weight: 900;
  }

  ${({ small }) =>
    small &&
    css`
      font-size: ${remFontSize(14)};
    `};

  ${({ emphasis }) =>
    emphasis &&
    css`
      color: ${darkestBlue};
      font-family: "Lato Bold";
      font-weight: 900;
    `};
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-column-gap: ${rem(15)};
  grid-template-columns: 1fr;
  grid-row-gap: ${rem(15)};
  padding: ${rem(15)};
  border-radius: ${rem(4)};

  ${media.md(css`
    grid-template-columns: 1fr 1fr 1fr;
  `)};

  ${isInternetExplorer() &&
    css`
      display: flex;
      flex-wrap: wrap;
    `};
`;

export const InnerGridWrapper = styled(GridWrapper)`
  grid-template-columns: 1fr;
  padding: 0;
  border-radius: 0;
  box-shadow: none;

  ${({ columns }) => {
    let fractions = "1fr";
    for (let i = 1; i < columns; i++) {
      fractions += " 1fr";
    }

    return (
      columns &&
      css`
        grid-template-columns: 1;
        ${media.md(css`
          grid-template-columns: ${fractions};
        `)};
      `
    );
  }};
`;

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

export const Highlight = styled.b`
  font-family: Lato Bold;
`;

export const Understatement = styled.div`
  padding: 0 ${rem(20)} ${rem(25)} ${rem(20)};
  border-top: solid ${rem(1)} ${grey130};

  ${media.md(css`
    width: auto;
    padding: 0 ${rem(50)} ${rem(30)} ${rem(50)};
  `)}
`;

export const Option = styled.div`
  ${CheckboxSpan} {
    position: relative;
    top: ${rem(-3)};
  }

  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: bold;
  font-stretch: normal;
  line-height: normal;
  vertical-align: baseline;
  letter-spacing: ${rem(0.25)};
  color: ${grey70};
`;

export const FatcaForm = styled.div`
  margin-top: ${rem(24)};
`;

export const InputMargin = styled.div`
  margin: ${rem(15)} ${rem(9)} ${rem(32)} ${rem(34)};
`;

export const DragAndDropArea = styled.div`
  margin: 0 ${rem(10)} 0 ${rem(10)};
`;

export const SmallErrorMessage = styled.span`
  font-size: ${remFontSize(12)};
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: ${rem(0.39)};
  color: ${darkestRed};
`;

export const GridContent = styled.div`
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  -ms-grid-columns: repeat(2, 1fr);
  grid-column-gap: ${rem(16)};
`;

export const Item = styled.span`
  font-weight: bold;
  display: inline-block;

  + span:before {
    content: ",";
    margin-right: ${rem(5)};
    font-weight: normal;
  }

  :last-child:before {
    content: attr(data-last);
    margin: 0 ${rem(5)};
    font-weight: normal;
  }

  :only-of-type:before {
    content: "";
    margin: 0;
  }
`;

export const Agreement = styled.div`
  margin-top: ${rem(35)};
`;

export const TokenWrapper = styled.div`
  margin: auto auto ${rem(16)} auto;
  ${media.md(css`
    margin: auto auto ${rem(16)} auto;
  `)};
`;

export const WrapperAlert = styled.div`
  padding: 0 19px 32px 19px;

  ${media.md(css`
    padding: 0 76px 32px 76px;
  `)};
`;

export const WrapperText = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
`;

export const TextBold = styled.span`
  font-weight: 700;
`;
