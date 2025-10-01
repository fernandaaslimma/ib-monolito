import styled, { css } from "styled-components";
import {
  gray300,
  white,
  neutral200,
  gray200
} from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const SaveAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${rem(6)};
  margin: ${rem(20)} ${rem(12)} 0 ${rem(16)};

  ${({ jContent }) =>
    jContent &&
    css`
      justify-content: ${jContent};
    `}

  ${({ checked }) =>
    checked &&
    css`
      background: #eef1f3;
    `}

  @media (min-width: 991px) {
    margin-right: ${rem(20)};
  }
`;

export const SaveAccountDeadLine = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${rem(6)};
  margin: 0 ${rem(16)} ${rem(16)} ${rem(16)};
  padding: ${rem(15)};

  ${({ jContent }) =>
    jContent &&
    css`
      justify-content: ${jContent};
    `}

  ${({ checked }) =>
    checked &&
    css`
      background: #eef1f3;
    `}
`;

export const SaveAccountInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const WapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem(36)};
  width: ${rem(36)};
  border-radius: ${rem(6)};
  border: 1px solid #d9e0e4;
`;

export const SaveAccountInfoDeadLine = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${rem(16)};
`;

export const Text = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-weight: 600;
  font-style: normal;
  color: #2d4758;
  margin-right: ${rem(16)};
`;

export const CardAccounts = styled.div`
  font-family: Lato;
  font-style: normal;
  font-size: ${rem(14)};
  line-height: ${rem(16.8)};
  padding: ${rem(16)};
  margin-bottom: ${rem(16)};
  background: ${white};
  border: 1px solid #eef1f3;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding)} ${rem(16)};
    }
  `}
`;

export const LinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: Lato;
  font-weight: 400;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  margin-top: ${rem(16)};
  margin-bottom: ${rem(6)};

  ${({ flexStart }) => {
    flexStart &&
      css`
        align-items: flex-start;
        margin-bottom: ${rem(16)};
      `;
  }}
`;

export const LinkCitizen = styled.span`
  text-decoration: underline;
  transition: 0.2s color;
  color: ${neutral200};
  cursor: pointer;
`;

export const WrapperSearch = styled.div`
  margin: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};
  background: #f6f9fb;
`;

export const DescriptionNames = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: 400;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(22, 4)};
  color: #587485;
  margin-bottom: ${rem(40)};
`;

export const DescriptionNewConsent = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: 400;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(22, 4)};
  color: #587485;
`;

export const ReceivingInstitutionInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(16)};
`;

export const WrapperInstitution = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReceivingInstitutionName = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: 0.452308px;

  color: ${gray300};

  margin-left: ${rem(16)};
`;

export const AllText = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(12.64)};
  font-weight: 500;
  font-style: normal;
  letter-spacing: ${rem(0.2)};
  margin-right: ${rem(16)};
`;

export const AccountBalance = styled.div`
  display: flex;
  background: #eef1f3;
  box-sizing: border-box;
  border-radius: ${rem(4)};
  align-items: center;
  align-content: center;
  border: ${rem(2)} #eef1f3 solid;
  cursor: pointer;

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: pointer;
    `}

  ${({ noSpacebetween }) =>
    !noSpacebetween &&
    css`
      background: none;
      justify-content: space-between;
    `}
`;

export const AccountText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;

  font-size: ${remFontSize(15)};
  line-height: ${rem(20)};
  margin: ${rem(14)} 0 ${rem(14)} ${rem(15)};
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

export const Wrapper = styled.div``;

export const Separator = styled.div`
  height: ${rem(1)};
  background-color: #d9e0e4;
`;

export const SubTitle = styled.div`
  font-size: ${remFontSize(12)};
  margin: ${rem(16)} 0 ${rem(11.2)} ${rem(3)};
  font-weight: 500;
  font-style: normal;
  line-height: ${rem(14.4)};
`;

export const Title = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: 400;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(15)};
  color: #587485;
  margin-top: ${rem(16)};
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
