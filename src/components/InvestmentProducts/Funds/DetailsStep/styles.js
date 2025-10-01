import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray200, gray300 } from "../../../../styles/settings";

export const DetailHeader = styled.div`
  margin: ${rem(0)} ${rem(16)} ${rem(32)} ${rem(16)};
  padding-top: ${rem(27)};
`;
export const FundTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem(3)};
`;
export const InvestmentType = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(16)};
  line-height: 125%;

  letter-spacing: ${rem(0.452308)};

  color: ${gray200};
`;
export const SuitabilityFundType = styled.h3``;

export const FundName = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(20)};
  line-height: 125%;
  align-items: left;
  width: ${rem(221)};
  margin-bottom: ${rem(8)};

  letter-spacing: ${rem(0.452308)};

  color: ${gray300};
`;

export const FundDescription = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 160%;

  padding-top: ${rem(8)};

  letter-spacing: ${rem(0.452308)};

  color: ${gray200};
`;

export const QualifiedInvestorInfo = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  line-height: ${rem(20)};
  text-align: left;
  font-size: ${remFontSize(16)};
  letter-spacing: ${rem(0.452308)};
  color: ${gray200};
  padding: 0 ${rem(8)} 0 0;
`;

export const QualifiedInvestorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rem(8)};
`;

export const Wrapper = styled.div``;

export const ClickbleIcon = styled.div`
  cursor: pointer;
`;

export const InfoContent = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 150%;
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
  margin-bottom: ${rem(24)};

  b {
    font-weight: 600;
    color: ${gray300};
  }
`;

export const InfoContentBold = styled(InfoContent)`
  font-weight: 600;
  margin: 0;
  color: ${gray300};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: ${rem(24)} ${rem(16)} ${rem(32)} ${rem(16)};
`;

export const ButtonWrapper = styled.div`
  margin: ${rem(16)} ${rem(-8)} ${rem(-8)} ${rem(-8)};
`;

export const ButtonsWrapper = styled(ButtonWrapper)`
  display: flex;
`;

export const AsteriskMessage = styled.div`
  margin: ${rem(12)} ${rem(8)} ${rem(0)} ${rem(8)};
`;

export const AsteriskTitle = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 125%;
  color: ${gray200};
`;

export const Content = styled.div`
  margin-bottom: ${rem(24)};
`;

export const InfoContentDetais = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  color: ${gray200};
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem(16)};
`;

export const SubTitle = styled.span`
  font-weight: 700;
  font-size: ${remFontSize(16)};
  line-height: ${rem(20)};
  letter-spacing: ${rem(0.45)};
  color: ${gray300};
  margin: 0;
`;

export const ContentWrapper = styled.span`
  font-size: ${remFontSize(14)};
  line-height: ${rem(22, 4)};
  letter-spacing: ${rem(0.45)};
`;

export const ContentWrapper2 = styled.span`
  font-size: ${remFontSize(16)};
  line-height: ${rem(20)};
  letter-spacing: ${rem(0.45)};
  margin-top: ${rem(8)};
`;

export const FirstContentAvailar = styled.span`
  font-size: ${remFontSize(14)};
  line-height: ${rem(17, 5)};
  letter-spacing: ${rem(0.45)};
  display: flex;
  justify-content: space-between;
`;

export const ContentAvailar = styled.span`
  font-size: ${remFontSize(14)};
  line-height: ${rem(17, 5)};
  letter-spacing: ${rem(0.45)};
  display: flex;
  justify-content: space-between;
  margin-top: ${rem(14)};
`;

export const InfoContentResidents = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(22, 4)};
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
`;
