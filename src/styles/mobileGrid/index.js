import styled, { css } from "styled-components";
import { rem, remFontSize, media, alignProps } from "../tools";
import { white30, darkGreen, black50, grey20, grey90 } from "../settings";
import { Hr } from "../objects";
import { InProgressMovements } from "../../components/common/PendingTransactions/styles";

export const Wrapper = styled.div`
  background: ${white30};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(24)} 0;
  `)};

  ${InProgressMovements} {
    margin: ${rem(24)} ${rem(16)} ${rem(24)} ${rem(16)};
  }
`;

export const LinkCardWrapper = styled.div`
  margin-top: -96px;
  padding: 0 ${rem(15)};

  ${media.md(css`
    margin-top: -96px;
    padding: 0 ${rem(24)};
  `)};
`;

export const Name = styled.div`
  ${alignProps};
`;

export const AssetWrapper = styled.section`
  margin: ${rem(0)} ${rem(15)} ${rem(10)} ${rem(15)};

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

export const MobileRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PrincipalValue = styled.div`
  color: ${black50};
  font-family: Lato;
  font-size: ${remFontSize(11)};
  margin: 0 ${rem(3)} ${rem(11)} 0;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: ${rem(0.4)};
  min-width: ${rem(100)};
  ${alignProps};
`;

export const SecondaryValue = styled.div`
  color: ${black50};
  font-family: Lato;
  font-size: ${remFontSize(11)};
  margin: ${rem(8)} ${rem(8)} ${rem(8)} 0;
  text-transform: uppercase;
  letter-spacing: ${rem(0.4)};
  ${alignProps};
`;

export const Label = styled.div`
  color: ${black50};
  font-family: "Lato Semibold";
  font-size: ${remFontSize(12)};
  margin: 0 ${rem(8)} ${rem(11)} 0;
  text-transform: uppercase;
  font-weight: 600;
  ${alignProps};
`;

export const InfoWrapper = styled.div`
  font-family: "Lato Semibold";
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.3)};
  color: ${darkGreen};
  text-transform: uppercase;
  margin-bottom: ${rem(13)};
  width: 100%;
  ${alignProps};
`;

export const Separator = styled(Hr.withComponent("div"))`
  margin-bottom: ${rem(0)};

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `};
`;

export const VerticalSeparator = styled.div`
  margin: ${rem(0)};
  border-right: solid ${rem(16)} ${grey20};
  min-width: ${rem(1)};
  max-width: ${rem(1)};
`;

export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${rem(5)};

  ${({ columns }) =>
    columns === 2 &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `};
`;

export const GridInfo = styled.div`
  padding: ${rem(15)} 0 0 ${rem(9.5)};

  :nth-child(1) {
    padding: ${rem(15)} 0 0 0;
  }

  :nth-child(4) {
    padding: ${rem(15)} 0 0 0;
  }

  ${({ alignRight }) =>
    alignRight &&
    css`
      text-align: right;
    `};

  ${alignProps};
`;

export const GridInfoLeftBorder = styled(GridInfo)`
  position: relative;

  &:before {
    position: absolute;
    content: "";
    left: -${rem(2.5)};
    top: 0;
    bottom: 0;
    border-left: solid ${rem(1)} ${grey20};
  }
  ${alignProps};
`;

export const IncomeName = styled.div`
  color: ${black50};
  font-family: "Lato Bold";
  font-size: ${remFontSize(9)};
  margin: 0 ${rem(8)} ${rem(8)} 0;
  text-transform: uppercase;
  font-weight: 500;
  min-width: ${rem(50)};
  ${alignProps};
`;

export const TopHeader = styled.div`
  border-radius: ${rem(4)};
  border: solid ${rem(1)} ${darkGreen};
  margin: 0 ${rem(15)} ${rem(10)} ${rem(15)};
  text-transform: uppercase;
  color: ${darkGreen};
  display: flex;
  ${alignProps};
`;

export const TitleHeader = styled.div`
  font-family: "Lato Bold";
  padding: ${rem(10)};
  font-size: ${remFontSize(12)};
  color: ${darkGreen};
  font-weight: 900;
  ${alignProps};
`;

export const HeaderData = styled.div`
  display: flex;
  padding: ${rem(10)} ${rem(10)} 0 ${rem(10)};
  flex-grow: 1;
  flex-wrap: wrap;
`;

export const HeaderInfo = styled.div`
  color: ${darkGreen};
  margin: 0 0 ${rem(10)} ${rem(10)};
  flex-grow: 1;
  min-width: calc(50% - ${rem(10)});
  ${alignProps};
`;

export const HeaderLabel = styled.div`
  font-family: "Lato Semibold";
  font-size: ${remFontSize(8)};
  text-align: right;
  margin: 0 0 ${rem(2)} 0;
  ${alignProps};
`;

export const HeaderText = styled.div`
  font-family: Lato Bold;
  font-size: ${remFontSize(11)};
  text-align: right;
  color: ${darkGreen};
  margin-top: ${rem(5)};
  letter-spacing: ${rem(0.7)};
  ${alignProps};
`;

export const Text = styled.div`
  color: ${black50};
  font-family: Lato;
  font-size: ${remFontSize(11)};
  margin-top: ${rem(2)};
  text-transform: uppercase;
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};
  ${alignProps};
`;

export const Info = styled.div`
  color: ${grey90};
  margin-top: ${rem(13)};
  ${alignProps};
`;
