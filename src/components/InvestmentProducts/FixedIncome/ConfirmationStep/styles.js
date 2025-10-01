import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray200, gray300, gray90 } from "../../../../styles/settings";
import { CheckboxSpan } from "../../../common/Checkbox/styles";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`;

export const ResumeInfoWrapper = styled.div`
  margin: 0 ${rem(16)} ${rem(40)};
`;

export const ResumeItemTitle = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  color: ${gray300};

  margin-bottom: ${rem(8)};
`;

export const ResumeItemValue = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  color: ${gray200};
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
export const ButtonWrapper = styled.div`
  margin: 0 ${rem(-8)} ${rem(-8)} ${rem(-8)};
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
  font-size: ${remFontSize(14)};
  line-height: 150%;
`;

export const MessageBold = styled(Message)`
  font-weight: bold;
`;

export const AccountBalance = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${rem(1)} solid ${gray90};
  box-sizing: border-box;
  border-radius: ${rem(6)};
  align-items: center;
  align-content: center;
  margin-top: ${rem(16)};
`;

export const AccountText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;

  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  margin: ${rem(12)} 0 ${rem(11)} ${rem(15)};
  padding: 0;
  color: ${gray200};
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${rem(12)} ${rem(10)} ${rem(11)} 0;
  padding: 0;
`;

export const ClickableItem = styled.span`
  cursor: pointer;
`;

export const ConfirmationValue = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};

  color: ${gray200};
`;

export const ConfirmationInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & + .ConfirmationInfoWrapper {
    padding-top: ${rem(24)};
  }
`;
export const ConfirmationLabel = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  margin-bottom: ${rem(7)};

  color: ${gray300};
`;

export const ApplicationResume = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${rem(24)} 0 ${rem(32)};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;

  text-align: center;

  color: ${gray300};
`;
export const BottomSheetWrapper = styled.div`
  max-width: ${rem(600)};
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  background: #f6f9fb;
  padding: ${rem(24)} ${rem(16)};
`;

export const PendencieContent = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 150%;
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
  padding-bottom: ${rem(24)};

  b {
    font-weight: 600;
    color: ${gray300};
  }
`;

export const PendencieContentBold = styled(PendencieContent)`
  font-weight: 600;
  margin: 0;
  color: ${gray300};
`;

export const PendenciesButtonsWrapper = styled(ButtonWrapper)`
  padding: ${rem(16)};
  display: flex;
  box-shadow: inset 0px 1px 0px #d3dde4;
`;
