import styled from "styled-components";
import { blue20, gray200, gray500, white } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const ContainerBlue20 = styled.div`
  background: ${blue20};
  width: ${rem(600)};
  margin-bottom: ${rem(12)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
    min-height: ${rem(500)};
  }
`;

export const Container = styled.div`
  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${white};
  margin-top: ${rem(18)};
`;

export const ContainerSumary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 95%;
  padding-bottom: ${rem(50)};
`;

export const ContainerCurrency = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SpanCurrency = styled.span`
  font-weight: 400;
  font-size: ${remFontSize(12)};
  font-family: Lato;
  color: ${gray500};
  margin-top: ${rem(6)};
  text-align: center;
  margin-right: ${rem(2)};
`;

export const SpanCurrencyValue = styled.span`
  font-weight: 700;
  font-size: ${remFontSize(24)};
  font-family: Lato;
  color: ${gray500};
  margin-top: ${rem(6)};
`;

export const SpanTitle = styled.span`
  font-weight: 700;
  font-size: ${remFontSize(18)};
  font-family: Lato;
  color: ${gray500};
  line-height: ${rem(20)};
  margin-bottom: ${rem(40)};
`;

export const ModalWrapper = styled.div`
  background: #f6f9fb;
  font-family: "Lato";
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(22.4)};
  padding: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};
`;

export const ModalMessage = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: normal;
  font-style: normal;
  color: ${gray200};

  &:first-child {
    margin-bottom: ${rem(26)};
  }
`;

export const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid #d9e0e4;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: ${rem(16)} ${rem(16)} ${rem(16)} ${rem(16)};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(16)} ${rem(16)} ${rem(19)} ${rem(16)};
  min-height: ${rem(116)};
  justify-content: center;
  background: ${blue20};
`;

export const InfoSpan = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${rem(21)};
  color: ${gray200};
`;
