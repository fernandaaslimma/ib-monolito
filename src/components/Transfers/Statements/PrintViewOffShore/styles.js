import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { white, grey70, gray200 } from "../../../../styles/settings";
import { Header, IconContainer } from "../../../common/Card/styles";
import { Wrapper, SecondaryText } from "../../../common/DefaultContent/styles";

export const LineSeparator = styled.div`
  display: block;
  height: ${rem(1)};
  border: 0;
  margin: 0;
  padding: 0;
  border: ${rem(1)} solid #d3dde466;
`;

export const PrintAtualBalance = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${rem(28)};
  width: 100%;
  border-radius: ${rem(4)};
  padding: ${rem(8)} ${rem(12)} ${rem(8)} ${rem(12)};
  justify: space-between;
  border: ${rem(1)} solid #d3dde4;
  box-sizing: border-box;
  margin: ${rem(16)} 0 ${rem(16)} 0;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(9)};
  line-height: ${rem(10)};
  /* identical to box height */
  letter-spacing: 0.355385px;
  color: #5b6b75;
  @media print {
    page-break-inside: avoid;
  }
`;

export const PrintTotalAmounts = styled.section`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(9)};
  line-height: ${rem(11)};
  text-align: right;
  letter-spacing: 0.387692px;

  color: #5b6b75;

  ${({ atualValue }) =>
    atualValue < 0 &&
    css`
      color: #e96767;
    `};
`;

export const PrintCardWrapper = styled.div`
  ${Header} {
    margin-left: ${rem(8)};
  }

  ${IconContainer} {
    margin-right: ${rem(8)};
  }

  @media print {
    page-break-inside: avoid;
  }

  display: block;
  border-radius: ${rem(4)};
  margin-top: ${rem(16)};
`;

export const DefaultWrapper = styled.div`
  ${Wrapper}, ${SecondaryText} {
    display: block;
    max-width: none;
  }
`;

export const ContentCardPrint = styled.div`
  position: relative;
  top: 0;
`;

export const PrintWrapper = styled.div`
  @page {
    margin: 0mm 0mm 0mm 0mm;
    background-color: ${white} !important;
  }

  width: 100%;
  padding: 0 ${rem(16)} ${rem(16)} ${rem(16)};
  margin: 0;
  background-color: ${white} !important;
`;

export const PrintModel = styled.table`
  width: 100%;
  margin: 0;
  display: table;
`;

export const PrintHeader = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: ${rem(60)};
  width: 100%;
  padding: 0 ${rem(16)} 0 ${rem(16)};
  @media print {
    visibility: visible;
  }
`;

export const PrintHeaderSpace = styled.thead`
  height: ${rem(60)};
  display: table-header-group;
  width: 100%;
`;

export const PrintHeaderTr = styled.tr`
  width: 100%;
  height: ${rem(60)};
`;

export const PrintHeaderTd = styled.td`
  height: ${rem(60)};
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${rem(16)} 0 ${rem(8)} 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-family: Lato;
  font-size: ${rem(9)};
  font-style: normal;
  font-weight: 400;
  line-height: ${rem(10)};
  letter-spacing: 0.4000000059604645px;
  justify-items: stretch;
  padding: 0 0 ${rem(16)} 0;
  align-items: flex-end;
`;

export const PrintFooter = styled.div`
  visibility: hidden;
  display: flex;
  height: ${rem(78)};
  width: 100%;
  padding: 0 ${rem(16)} 0 ${rem(16)};
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  @media print {
    visibility: visible;
  }
`;

export const PrintFooterSpace = styled.tfoot`
  height: 78px !important;
  display: table-footer-group;
`;

export const PrintFooterTr = styled.tr`
  height: 78px !important;
  width: 100%;
`;

export const PrintFooterTd = styled.tr`
  height: 78px !important;
  width: 100%;
`;

export const PrintTextWraper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-size: ${rem(9)};
  font-style: normal;
  font-weight: 400;
  line-height: ${rem(10)};
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #27445f;

  & > span {
    font-size: ${rem(9)};
    padding: ${rem(8)} 0 0 0;
    width: ${rem(417)};
    color: #27445f;
  }
`;

export const PrintContent = styled.tbody`
  width: 100%;
  margin: 0;
`;

export const PrintBalance = styled.div`
  width: 100%;
  margin: 0;
`;

export const PrintResume = styled.div`
  padding: 0 ${rem(12)} 0 ${rem(12)};
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(9)};
  line-height: ${rem(10)};
  /* identical to box height */

  letter-spacing: 0.355385px;
  text-transform: uppercase;

  color: #5b6b75;
  width: 100%;
  margin: 0;
`;

export const PrintResumeItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${rem(28)};
  padding: ${rem(8)} 0 ${rem(8)} 0;
  margin: 0;
`;

export const Events = styled.ul`
  font-family: Lato;
  margin: ${rem(10)} 0 ${rem(10)} 0;
`;

export const PrintItemAmount = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(9)};
  line-height: ${rem(11)};
  text-align: right;
  letter-spacing: 0.387692px;

  color: #5b6b75;

  ${({ atualValue }) =>
    atualValue < 0 &&
    css`
      color: #e96767;
    `};
`;

export const PrintLine = styled.li`
  display: grid;
  grid-template-columns: 50% 35% 15%;
  gap: ${rem(5)};
  padding: ${rem(8)} ${rem(22)} ${rem(8)} ${rem(12)};
  background: none;

  :nth-child(2n) {
    background: #f6f9fb;
  }

  ${({ clickable }) =>
    clickable &&
    css`
      :hover {
        cursor: pointer;
      }
    `};
`;

export const EmptyItem = styled.span`
  min-width: ${rem(244)};

  @media print {
    min-width: ${rem(20)};
  }
`;

export const PrintDescriptionItem = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: ${rem(9)};
  line-height: ${rem(10)};
  letter-spacing: 0.355385px;
  color: #5b6b75;
`;

export const PrintCounterPart = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: ${rem(9)};
  line-height: ${rem(10)};
  letter-spacing: 0.355385px;
  color: #5b6b75;
`;

export const PrintDescriptionTextItem = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(9)};
  line-height: ${rem(10)};
  letter-spacing: 0.355385px;
  text-transform: uppercase;
  color: #27445f;
`;

export const PrintAmountTextItem = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(9)};
  line-height: ${rem(10)};
  text-align: right;
  letter-spacing: 0.355385px;
  text-transform: uppercase;
  color: #27445f;
`;

export const PrintAccountInformation = styled.section`
  display: grid;
  grid-template-columns: auto ${rem(220)};
  gap: ${rem(5)}
  width: 100%;
  height: ${rem(65)};
  align-items: center;
`;

export const PrintStatementsInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: ${rem(123)};
  align-items: center;
  margin-bottom: -${rem(16)};
`;

export const PrintStatementTitle = styled.div`
  font-family: Lato;
  font-size: ${rem(12)};
  font-style: normal;
  font-weight: 500;
  line-height: ${rem(14)};
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #27445f;
  padding: 0 0 ${rem(12)} 0;
`;

export const PrintStatementsRange = styled.div`
  font-family: Lato;
  font-size: ${rem(10)};
  font-style: normal;
  font-weight: 400;
  line-height: ${rem(12)};
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #27445f;
`;

export const PrinAccountInfoItem = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AccountInfoItemValue = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(80)};

  @media print {
    margin-left: auto;
    justify-content: center;
  }
`;

export const AccountInfoLabel = styled.section`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14)};
  letter-spacing: ${rem(0.4)};

  color: ${grey70};

  margin-bottom: ${rem(4)};

  @media print {
    font-weight: 400;

    color: ${grey70};
  }
`;

export const AccountInfoContent = styled.section`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(14)};
  line-height: ${rem(14)};
  /* identical to box height */

  letter-spacing: ${rem(0.4)};
  text-transform: uppercase;

  color: ${gray200};

  @media print {
    font-weight: 400;

    color: ${grey70};
  }
`;
