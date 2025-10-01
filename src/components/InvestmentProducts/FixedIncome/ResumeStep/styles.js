import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray200, gray300 } from "../../../../styles/settings";

export const MainMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding-top: ${rem(34)};
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;
  text-align: center;
  color: ${gray300};
  margin: ${rem(19)} 0 ${rem(8)} 0;
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  text-align: center;
  color: ${gray200};
  margin-bottom: ${rem(24)};
`;

export const Item = styled.div`
  margin-bottom: ${rem(24)};

  :last-child {
    margin-bottom: ${rem(32)};
  }
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

export const ConfirmationValue = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};

  color: ${gray200};
`;
