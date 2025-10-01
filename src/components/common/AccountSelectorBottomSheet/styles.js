import styled from "styled-components";
import { gray200, gray300, gray90, white } from "../../../styles/settings";
import { rem, remFontSize } from "../../../styles/tools";

export const Account = styled.div`
  display: flex;
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-style: normal;
  font-weight: normal;
  color: ${gray200};
  line-height: ${rem(19)};
  text-align: left;
  padding: ${rem(24)} ${rem(16)} ${rem(4)} ${rem(16)};
  flex-direction: row;

  border-top: 1px solid ${gray90};
`;

export const AccountBalanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 ${rem(16)} ${rem(24)} ${rem(16)};
`;

export const AccountBalance = styled.div`
  display: flex;
  color: ${gray300};
  flex-direction: row;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;
  text-align: left;
  letter-spacing: 0.666666px;
  width: 100%;
`;

export const IconView = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${rem(30)};
  height: ${rem(30)};
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(8)} ${rem(8)} 0 ${rem(8)};
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

export const Space = styled.span`
  display: block;
  padding: 0 ${rem(8)};
`;

export const AccountSelectorWrapper = styled.div`
  background: ${white};
`;
