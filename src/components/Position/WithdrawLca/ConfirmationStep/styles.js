import styled, { css } from "styled-components";
import {
  darkGreen,
  gray200,
  gray300,
  gray90,
  grey60,
  lighestgrey,
  white
} from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";
import { Header, IconContainer, Section } from "../../../common/Card/styles";

export const AccountBalance = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${rem(1)} solid ${gray90};
  box-sizing: border-box;
  border-radius: ${rem(6)};
  align-items: center;
  align-content: center;
  margin: ${rem(16)} ${rem(8)} 0 ${rem(8)};
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

export const SelectedAccount = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: ${rem(19)};
  letter-spacing: ${rem(0.39)};

  color: ${gray200};
  margin: ${rem(10)} 0 ${rem(11)} ${rem(12)};
`;

export const WithdrawalValueInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: ${rem(12)};
  border-bottom: ${rem(1)} solid #99b5c6;
`;
export const WithdrawalCurrency = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14)};
  letter-spacing: 0.05em;

  color: ${gray300};
  margin-right: ${rem(4)};
`;
export const WithdrawalValue = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(28)};
  line-height: ${rem(34)};
  /* identical to box height */

  text-align: right;
  letter-spacing: 0.05em;

  color: ${gray300};
`;
export const LcaInformation = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: ${rem(16)};
`;
export const LcaInformationLine = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + .LcaInformationLine {
    margin-top: ${rem(16)};
  }
`;
export const Value = styled.section`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  text-align: right;
  letter-spacing: ${rem(0.45)};

  color: ${gray300};
`;
export const Label = styled.section`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: ${rem(0.452308)};

  color: ${gray200};

  ${({ left }) =>
    left &&
    css`
      display: flex;
    `};
`;

export const DetailsTitle = styled.span`
  margin: ${rem(32)} 0 ${rem(25)} ${rem(8)};
  font-family: Lato;
  font-size: ${remFontSize(18)};
  font-weight: bold;
  letter-spacing: ${rem(0.45)};
  color: ${darkGreen};
`;

export const CardWrapper = styled.div`
  ${Section} {
    margin: ${rem(8)};
    padding: ${rem(12)} ${rem(12)} 0 ${rem(12)};
  }

  ${IconContainer} {
    margin-right: ${rem(6)};
    svg {
      width: ${rem(20)};
      height: ${rem(20)};
    }
  }

  ${Header} {
    margin-bottom: ${rem(15)};
  }
`;

export const RedemptionErrorMessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${rem(16)};
  background: ${grey60};
`;

export const RedemptionErrorMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: 160%;
  letter-spacing: ${rem(0.452308)};

  color: ${gray200};

  & + .RedemptionErrorMessage {
    margin-top: ${rem(20)};
  }
`;

export const FixedButtonArea = styled.div`
  display: grid;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding: ${rem(16)};
  box-shadow: inset 0 ${rem(1)} 0 0 ${lighestgrey};
  background-color: ${white};
`;
