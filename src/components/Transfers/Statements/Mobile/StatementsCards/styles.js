import styled, { css } from "styled-components";
import { media, rem, remFontSize } from "../../../../../styles/tools";
import {
  gray200,
  gray300,
  blue20,
  conclusive200,
  white,
  darkGreen,
  mediumGray
} from "../../../../../styles/settings";

const getColors = ({ value }) => {
  return Number(value) >= 0
    ? css`
        color: ${conclusive200};
      `
    : css`
        color: ${gray300};
      `;
};

export const CardTitle = styled.p`
  color: ${darkGreen};
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(16)};
  padding: 0 0 ${rem(16)} ${rem(16)};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const AmountsContent = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  /* letter-spacing: ${rem(0.452308)}; */
  letter-spacing: 0.452px;
  font-weight: 400;
  line-height: ${rem(14)};
  color: ${mediumGray};
`;

export const AmountsValue = styled.div`
  color: ${darkGreen};
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(14)};
  letter-spacing: 0.452px;
  line-height: ${rem(14)};
`;

export const AvailableAmountHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 ${rem(8)} ${rem(8)} ${rem(8)};
  padding: 0px;
  justify-content: center;
  align-items: center;
  height: ${rem(38)};
  width: calc (100% - ${rem(16)});
  background: ${blue20};
  border-radius: ${rem(4)};
`;

export const BlockedAmountFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${rem(8)} ${rem(8)} 0 ${rem(8)};
  padding: 0px;
  justify-content: center;
  align-items: center;
  height: ${rem(38)};
  width: calc (100% - ${rem(16)});
  background: ${blue20};
  border-radius: ${rem(4)};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 ${rem(32)} 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
  padding: ${rem(16)};

  background: ${white};
  box-shadow: ${rem(0)} ${rem(1)} ${rem(12)} rgba(211, 225, 232, 0.12);
  border-radius: ${rem(4)};
`;
export const Line = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${rem(16)} ${rem(12)} ${rem(16)} ${rem(12)};
  background: none;

  ${({ isFuture }) =>
    !isFuture &&
    css`
      cursor: pointer;
    `}
`;

export const ItemDescription = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.45)};

  color: ${gray200};
`;

export const CounterPart = styled.div`
  display: inline-block;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  letter-spacing: ${rem(0.452308)};
  max-width: calc(100vw - ${rem(200)});

  color: ${gray300};
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const ItemValue = styled.div`
  font-family: Lato;
  font-weight: 600;
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.452308)};
  width: 45%;
  text-align: right;
  line-height: 125%;
  ${props => props && getColors(props)};
`;

export const StatementInfo = styled.span`
  flex-direction: column;
`;

export const VoucherTitle = styled.span`
  margin-top: ${rem(69)};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(20)};
  line-height: 125%;
  letter-spacing: ${rem(0.45)};
  color: ${gray300};
`;

export const VoucherDate = styled.span`
  margin-top: ${rem(7)};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: 125%;
  color: ${gray200};
`;

export const VoucherAmountDisclaimer = styled.span`
  margin-top: ${rem(32)};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  letter-spacing: ${rem(0.39)};
  color: ${gray200};
`;

export const VoucherAmount = styled.span`
  margin-top: ${rem(8)};

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(20)};
  line-height: 125%;

  letter-spacing: ${rem(0.666666)};

  color: ${gray300};
`;

export const VoucherLine = styled.hr`
  width: 100%;
  border: none;
  height: ${rem(1)};
  background: #d9e0e4;
  margin-top: ${rem(24)};
`;

export const VoucherWrapper = styled.section`
  margin: 0 auto;

  ${({ desktop }) =>
    !desktop &&
    css`
      max-width: ${rem(650)};
    `}
`;

export const AuthCode = styled.span`
  display: inline-block;
  margin-top: ${rem(15)};
  margin-bottom: ${rem(18)};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 150%;
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow: hidden;
`;

export const Disclaimer = styled.span`
  color: ${gray200};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 150%;
  margin: ${rem(24)} 0 ${rem(18)} 0;

  ${media.md(css`
    display: flex;
  `)};
`;

export const TearedVoucher = styled.div`
  background: ${white};
  width: 100%;
  height: ${rem(40)};
  position: relative;
  box-shadow: 0 10px 11px rgb(0 0 0 / 10%);

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: ${rem(40)};
    left: 0;
    right: 0;
    bottom: -29px;
    background: linear-gradient(-45deg, transparent 70%, white 75%),
      linear-gradient(45deg, transparent 70%, white 75%);
    background-repeat: repeat-x;
    background-size: 2rem 1.3rem, 2rem 1.3rem;
    background-position: center;
  }
`;

export const ShareArea = styled.section`
  display: grid;
  width: 100%;
  padding: ${rem(42)} ${rem(16)} ${rem(38)} ${rem(16)};
  ${media.md(css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    ${({ canShare }) =>
      canShare &&
      canShare === "TransferenciaEnviada" &&
      css`
        grid-template-columns: 1fr 1fr;
      `}
  `)};
`;

export const ContentNotShared = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${rem(16)} 0;
  background: ${white};

  ${media.md(css`
    padding: 0 ${rem(24)} 0;
  `)};
`;
