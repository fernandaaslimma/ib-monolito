import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray200, gray300 } from "../../../../styles/settings";
import { CheckboxSpan } from "../../../common/Checkbox/styles";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ResumeInfoWrapper = styled.div`
  margin: ${rem(24)} ${rem(16)} 0 ${rem(16)};
  width: ${rem(600)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const AlertWrapper = styled.div`
  margin: ${rem(0)} ${rem(16)} 0 ${rem(16)};
  width: ${rem(600)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const ResumeItemTitle = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  color: ${gray300};

  margin-bottom: ${rem(8)};
  margin-right: ${rem(8)};
`;

export const ResumeItemTitleBold = styled.span`
  font-family: Lato;
  font-weight: 900;
  font-size: ${remFontSize(17.5)};
  font-scretch: condensed;
  line-height: ${rem(20)};
  color: ${gray300};

  margin-bottom: ${rem(8)};
  margin-right: ${rem(8)};
`;

export const ResumeItemValue = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  color: ${gray200};
  margin: 0;
`;

export const SubItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${rem(16)};
  margin-bottom: ${rem(24)};
`;

export const ResumeAmmount = styled.div`
  display: flex;
  align-items: center;
`;
export const Currency = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14)};
  letter-spacing: 0.05em;
  margin-right: ${rem(3)};

  color: ${gray300};
`;
export const ResumeAmmountValue = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: ${rem(29)};
  letter-spacing: 0.05em;
  color: ${gray300};
`;

export const Item = styled.div`
  margin-bottom: ${rem(24)};

  :last-child {
    margin-bottom: ${rem(32)};
  }
`;

export const ItemRemunerationInfo = styled.div`
  margin-bottom: ${rem(10)};
`;

export const ContractAdhesionFunds = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: 125%;

  color: ${gray300};

  margin: ${rem(24)} 0 ${rem(16)} 0;
`;

export const ReadTerm = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 160%;
  letter-spacing: ${rem(0.452308)};
  text-decoration-line: underline;

  color: #3976cf;
  cursor: pointer;
`;

export const CheckboxContent = styled.div`
  margin: 0;
`;

export const CheckboxText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};

  color: ${gray200};
`;

export const CheckboxTextBold = styled(CheckboxText)`
  font-weight: bold;
  color: ${gray300};
`;

export const CheckboxContainer = styled.span`
  ${CheckboxSpan} {
    position: relative;
    top: ${rem(-3)};
  }

  margin: ${rem(6)};
`;

export const InfoWrapper = styled.div`
  margin: ${rem(24)} ${rem(16)} ${rem(32)} ${rem(16)};
  display: flex;
  flex-direction: column;
`;

export const InfoRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UnsuitableFundText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 150%;
  align-items: center;
  letter-spacing: ${rem(0.45)};

  color: ${gray200};
`;

export const UnsuitableFundTextBold = styled(UnsuitableFundText)`
  font-weight: bold;

  color: ${gray300};
`;

export const InfoModalWrapper = styled.div`
  margin: ${rem(24)} ${rem(16)} ${rem(24)} ${rem(16)};
`;

export const InfoContent = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(15)};
  line-height: 150%;
  color: ${gray200};
  margin-bottom: ${rem(24)};

  b {
    font-weight: 600;
    color: ${gray300};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${rem(21)};
  color: ${gray200};
  margin: ${rem(13)} ${rem(36)} ${rem(0)} ${rem(36)};
  min-height: ${rem(116)};
  align-items: center;

  @media (max-width: ${rem(600)}) {
    margin: ${rem(13)} ${rem(16)} ${rem(0)} ${rem(16)};
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  overflow: auto;
  margin: ${rem(6)} ${rem(8)} ${rem(22)} ${rem(8)};
`;

export const ButtonsWrapper = styled(ButtonWrapper)`
  display: flex;
`;

export const InfoContentBold = styled(InfoContent)`
  font-weight: 600;
  margin: 0;
  color: ${gray300};
`;

export const Message = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 150%;
`;

export const MessageBold = styled(Message)`
  font-weight: bold;
`;

export const StepVisibilityWrapper = styled.div`
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  margin-top: ${rem(16)};
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const TextInfoContainer = styled.span`
`;