import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  gray200,
  gray300,
  lighestgrey,
  white,
  blue20,
  gray90
} from "../../../../styles/settings";

export const DetailsContainer = styled.div`
  background-color: ${white};
  padding: ${rem(16)};
`;

export const ValueTitle = styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: ${rem(14)};
  color: #587485;
`;

export const ValueText = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: ${rem(14)};
  color: #587485;
  margin-left: ${rem(2.5)};
`;

export const ValueContainer = styled.div`
  display: flex;
  margin-top: ${rem(8)};
  margin-bottom: ${rem(12)};
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  margin-top: ${rem(8)};
`;

export const ValuesContainer = styled.div`
  display: flex;
  margin-top: ${rem(8)};
  align-items: flex-start;
  flex-direction: column;
`;

export const Text = styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(16.8)};
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
  margin-top: ${rem(8)};
`;

export const FooterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: ${rem(16)} 0 ${rem(16)} 0;
  box-shadow: ${`0px ${rem(1)} 0px ${lighestgrey} inset`};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const CurrencyContainer = styled.div`
  background: ${white};
  min-height: 116px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 17px;
  align-items: flex-start;
  margin-top: 16px;
`;

export const ExchangeContainer = styled.div`
  background: ${white};
  min-height: 116px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 17px;
  align-items: space-between;
  margin-top: 16px;
`;

export const CurrencyTitle = styled.div`
  color: #2d4758;
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(16)};
  margin-bottom: 16px;
`;

export const AmmountWrapper = styled.div``;

export const AccTitle = styled.p`
  color: ${gray300};
  font-family: Lato;
  font-size: ${remFontSize(14)};
  padding: ${rem(0)} ${rem(10)} ${rem(8)} ${rem(0)};
  margin: 0;

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ accTitleStyle }) =>
    accTitleStyle &&
    css`
      ${accTitleStyle}
    `}
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const InfoContent = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: #033b70;
  vertical-align: baseline;
`;

export const InfoContentBold = styled.span`
  font-weight: 700;
  vertical-align: baseline;
`;

export const AlertMessageWrapper = styled.div`
  margin-bottom: ${rem(20)};
`;

export const InfoContainerError = styled.div`
  display: flex;
  padding: ${rem(16)} ${rem(16)} ${rem(19)} ${rem(16)};
  min-height: ${rem(116)};
  align-items: center;
  background: ${blue20};
`;

export const InfoContentError = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${rem(21)};
  color: ${gray200};
  vertical-align: baseline;
`;

export const InfoContentErrorBold = styled.span`
  font-weight: 700;
  vertical-align: baseline;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  padding: ${rem(16)} ${rem(16)} ${rem(16)} ${rem(16)};
  border-top: ${`${rem(1)} solid ${gray90}`};
`;
