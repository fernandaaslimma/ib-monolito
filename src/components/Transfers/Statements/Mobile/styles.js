import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  lighestgrey,
  gray300,
  gray200,
  negative300,
  darkGreen
} from "../../../../styles/settings";

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: auto;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccTitle = styled.p`
  color: ${gray300};
  font-family: Lato Bold;
  font-size: ${remFontSize(16)};
  padding: ${rem(32)} ${rem(10)} ${rem(15)} ${rem(10)};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const Separator = styled.span`
  display: block;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const Space = styled.span`
  display: block;
  padding: 0 ${rem(8)};
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(8)} ${rem(8)} 0 ${rem(8)};
`;

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  margin-top: ${rem(27)};
  margin-left: ${rem(16)};
  margin-right: ${rem(16)};
  height: ${rem(60)};

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const BalanceWrapper = styled(AccountWrapper)`
  margin-top: ${rem(4)};
`;

export const FutureTransactionsWrapper = styled(AccountWrapper)`
  margin-top: 0px;
  height: ${rem(49)};
  margin-bottom: ${rem(24)};
`;

export const AccountBalance = styled.div`
  display: flex;
  color: ${darkGreen};
  flex-direction: row;
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: ${remFontSize(20)};
  line-height: normal;
  text-align: left;
  letter-spacing: 0.667px;
  width: 100%;
  padding: ${rem(16)};
`;

export const Account = styled.div`
  display: flex;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  color: ${gray200};
  line-height: normal;
  text-align: left;
  align-items: center;
  width: 100%;
  padding: ${rem(16)};
  flex-direction: row;
  font-weight: 700;
  letter-spacing: 0.667px;
  color: ${darkGreen};
  height: 100%;
`;

export const RadioAccount = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: 600;
  color: ${gray300};
  line-height: 125%;
  text-align: left;
  margin: 0;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(24)} 0 ${rem(32)} 0;
`;

export const FilterLabels = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 ${rem(16)} 0 ${rem(16)};

  color: ${gray300};
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  padding: ${rem(16)} ${rem(16)} ${rem(32)} ${rem(16)};
  overflow-x: auto;

  label + label {
    margin-left: ${rem(12)};
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rem(16)} ${rem(16)} 0 ${rem(16)};
  div + div {
    margin-left: ${rem(12)};
  }
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rem(24)} ${rem(16)} 0 ${rem(16)};
  div + div {
    margin-left: ${rem(12)};
  }
  div {
    flex-grow: 1;
  }
`;

export const CalendarButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: ${rem(16)};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(24)};
  margin-right: ${rem(16)};

  div:only-child {
    padding: 0 ${rem(24)} 0 ${rem(24)};
  }

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const IconView = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: ${rem(16)};
`;

export const ClicableItem = styled.div`
  cursor: pointer;
`;

export const AccountBalanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 ${rem(8)} ${rem(24)} ${rem(0)};
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rem(8)} ${rem(16)} 0 ${rem(16)};
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.45)};
  color: ${negative300};
`;

export const MobileStatementsWrapper = styled.div`
  max-width: ${rem(600)};
  margin: 0 auto;
`;

export const BtnWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  flex-basis: 0;
`;
