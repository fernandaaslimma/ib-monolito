import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { white, gray300, gray200 } from "../../../../styles/settings";

export const ListWrapper = styled.ul`
  margin: none;
  padding: ${rem(16)};
`;

export const AccountWrapper = styled.div`
  background: ${white};
  padding: ${rem(8)} ${rem(16)} ${rem(24)} ${rem(16)};
`;

export const TotalAvailableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #d9e0e4;
  box-sizing: border-box;
  border-radius: 6px;
  margin: ${rem(16)} ${rem(8)} 0 ${rem(8)};
  padding: ${rem(16)} ${rem(12)};
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #587485;
`;

export const Account = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-style: normal;
  font-weight: normal;
  display: flex;
  align-items: center;
  color: ${gray200};
  line-height: ${rem(19)};
  margin-bottom: ${rem(4)};
`;

export const AccountText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;

  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  padding: 0;
  color: ${gray200};
`;
export const Currency = styled.span`
  font-size: ${remFontSize(14)};
  font-weight: 400;
  color: #99b5c6;
`;

export const Value = styled.span`
  font-size: ${remFontSize(14)};
  font-weight: 700;
  color: #2d4758;
`;

export const AccountBalanceWrapper = styled.div`
  display: flex;
`;

export const FormWrapper = styled.div`
  padding: ${rem(16)} ${rem(8)};
  font-family: Lato;
  text-align: center;
`;

export const FundAmmount = styled.p`
  color: ${gray300};
  font-family: Lato Bold;
  font-size: ${remFontSize(16)};
  text-align: center;
  padding: ${rem(32)} ${rem(20)} ${rem(15)} ${rem(10)};
`;

export const Type = styled.p`
  line-height: 125%;
  letter-spacing: 0.452308px;
  padding: ${rem(16)} 0 ${rem(8)} 0;
  font-size: ${remFontSize(16)};
  color: ${gray200};
  margin: 0;
`;

export const Name = styled.h2`
  padding: 0;
  margin: 0;
  line-height: 125%;
  letter-spacing: 0.452308px;
  font-size: ${remFontSize(20)};
  color: ${gray300};
  font-weight: bold;
`;

export const ContainerWrapperAccounts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${rem(8)} ${rem(8)} ${rem(8)} ${rem(8)};
`;

export const CardTitle = styled.span`
  display: flex;
  padding: ${rem(24)} ${rem(8)} ${rem(16)};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 125%;
  /* identical to box height, or 20px */

  letter-spacing: 0.452308px;

  color: #2d4758;
`;

export const FormWrapperInfoCard = styled.div`
  padding: ${rem(24)} ${rem(12)};
  margin: 0 ${rem(8)} 0;
  background: #ffffff;
  box-shadow: 0px 1px 12px rgba(211, 225, 232, 0.12);
  border-radius: 4px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & + .InfoWrapper {
    margin-top: ${rem(16)};
  }
`;
export const Label = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: 0.452308px;

  color: #587485;
`;
export const InfoValue = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 125%;
  /* identical to box height, or 17px */

  text-align: right;
  letter-spacing: 0.45px;

  color: #2d4758;
`;
