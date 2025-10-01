import styled, { css } from "styled-components";
import {
  gray200,
  gray300,
  white,
  neutral200
} from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const AccountBalance = styled.div`
  display: flex;
  background: #eef1f3;
  box-sizing: border-box;
  border-radius: ${rem(4)};
  align-items: center;
  align-content: center;
  border: ${rem(2)} #eef1f3 solid;
  margin: 0 0 0 0;

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

export const ValueInstitution = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(12)} 0 ${rem(11)} ${rem(10)};
  padding: 0;
`;

export const SaveAccount = styled.div`
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

export const SubTitle = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: 600;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(17, 5)};
  color: #2d4758;
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

export const ReceivingInstitutionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rem(16)};
  cursor: pointer;
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

export const WrapperBottomSheet = styled.div``;

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

export const WrapperInstitution = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardAccounts = styled.div`
  display: flex;
  font-family: Lato;
  font-style: normal;
  padding: ${rem(16)};
  margin-bottom: ${rem(24)};
  background: ${white};
  border: 1px solid #eef1f3;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding)} ${rem(16)};
    }
  `}
`;

export const CardAccountsNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Lato;
  font-style: normal;
  padding: ${rem(16)};
  margin-bottom: ${rem(24)};
  background: ${white};
  border: 1px solid #eef1f3;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding)} ${rem(16)};
    }
  `}
`;

export const WrapperCardAccounts = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

export const WrapperAccounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${rem(24)};
  white-space: nowrap;
`;

export const TitleAccounts = styled.p`
  font-size: ${remFontSize(14)};
  font-weight: 500;
  color: ${gray300};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const LinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Lato;
  font-weight: 400;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  cursor: pointer;
`;

export const LinkCitizen = styled.span`
  text-decoration: underline;
  transition: 0.2s color;
  color: ${neutral200};
`;

export const WrapperSearch = styled.div`
  margin: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};
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

export const TitleNames = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: 700;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(16, 8)};
  margin-bottom: ${rem(16)};
  color: #27445f;
`;

export const TitleBig = styled.h2`
  font-size: ${remFontSize(16)};
  margin: 0 0 0 0;
  color: ${gray300};
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.452308px;
  margin-top: ${rem(40)};
`;

export const AbsoluteWrapperBottomSheet = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  border-top: solid ${rem(1)} #d3dde4;

  @media (max-width: 991px) {
    position: absolute;
    width: 100%;
  }
`;
