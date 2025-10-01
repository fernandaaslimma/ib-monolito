import styled, { css } from "styled-components";
import {
  neutral200,
  gray200,
  gray300,
  grey40,
  negative200,
  gray90
} from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const DropContainer = styled.div`
  margin-bottom: ${rem(14)};
`;

export const ReceivingInstitutionInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(16)};
`;

export const WapperBankImg = styled.img`
  height: ${rem(36)};
  width: ${rem(36)};
  border-radius: 50%;
`;

export const ReceivingInstitutionName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: 0.452308px;

  color: ${gray300};

  margin-left: ${rem(16)};
  margin-top: ${rem(2)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentTitle = styled.span`
  font-family: Lato;
  font-weight: 400;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(22.4)};
  letter-spacing: ${rem(0.45)};
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${rem(35)} 0 ${rem(40)} 0;
`;

export const Data = styled.span`
  font-family: Lato;
  font-weight: 700;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  margin-top: ${rem(12)};
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
  margin-bottom: ${rem(16.8)};
`;

export const LinkCitizen = styled.span`
  cursor: pointer;
  transition: 0.2s color;
  color: ${neutral200};
`;

export const Message = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: ${rem(24)};
  /* or 150% */

  display: inline;

  text-align: center;
  letter-spacing: 0.426667px;

  color: ${grey40};
  ${({ botomSpace }) =>
    botomSpace &&
    css`
      padding-bottom: ${botomSpace};
    `}
`;

export const SimpleBold = styled(Message)`
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  font-style: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  color: inherit;
`;

export const MessageBold = styled(Message)`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: 500;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(15)};
  color: #033b70;
  font-weight: 700;
`;

export const MessageRed = styled(Message)`
  color: ${negative200};
`;

export const CancelBottomSheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 430px;

  @media (max-width: ${rem(980)}) {
    height: calc(100vh - 3.25rem);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(48)} ${rem(16)} ${rem(24)} ${rem(16)};

  align-items: center;
`;

export const MainMessage = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(20)};
  line-height: ${rem(30)};
  text-align: center;
  letter-spacing: 0.416667px;
  color: #2d4758;
  margin: ${rem(32)} 0 ${rem(40)} 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  overflow: auto;
  bottom: 0;
  padding: 0 ${rem(8)} ${rem(24)} ${rem(8)};
  display: grid;
  grid-template-columns: 100%;

  @media (max-width: ${rem(980)}) {
    position: sticky;
    grid-template-columns: none;
  }
`;

export const DoubleButtonWrapper = styled.div`
  margin-top: auto;
  overflow: auto;
  bottom: 0;
  padding: 0 ${rem(8)} ${rem(24)} ${rem(8)};
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: ${rem(980)}) {
    position: sticky;
    grid-template-columns: none;
  }
`;

export const Account = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-style: normal;
  font-weight: normal;
  color: ${gray200};
  line-height: ${rem(19)};
  text-align: left;
  margin: ${rem(24)} 0 ${rem(8)} 0;
`;

export const WrapperArrow = styled.div`
  margin-left: ${rem(16)};
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(8)} ${rem(8)} 0 ${rem(8)};
`;

export const RadioAccount = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-weight: 600;
  color: ${gray300};
  line-height: 125%;
  text-align: left;
  margin: 0;
`;

export const Space = styled.span`
  display: block;
  height: 0.0625rem;
  background: rgb(211, 221, 228);
`;

export const Wrapper = styled.div`
  padding: ${rem(10)} 0 ${rem(60)} 0;
  max-width: ${rem(600)};
  margin: 0 auto;
  cursor: pointer;
  height: 100%;
`;

export const Title = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(15)};
  font-weight: 600;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(20)};
  color: #033b70;
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: 500;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(15)};
  color: #033b70;
  margin-top: ${rem(16)};
`;

export const WarningMessage = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-weight: normal;
  font-style: normal;
  letter-spacing: ${rem(0.42)};
  line-height: ${rem(20)};
  color: #587485;
  padding: 0 ${rem(16)} ${rem(32)} ${rem(16)};
  text-align: center;
`;

export const WrapperCard = styled.div``;

export const CardInput = styled.div`
  transition: all 0.5s linear;
  border: 1px solid ${gray90};
  border-radius: ${rem(4)};
  padding: ${rem(2)} ${rem(12)}
    ${({ noSelectAccount }) =>
      noSelectAccount &&
      css`
        border: 1px solid ${negative200};
      `};
`;

export const CardInputOption = styled.div`
  display: flex;
  border-bottom: 1px solid ${gray90};
  padding: ${rem(16)} 0;
  align-items: center;

  :last-child {
    border: none;
  }
`;

export const CardInputDisplayName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  color: ${gray300};
  margin-left: ${rem(6)};
`;

export const CardInputMsg = styled.span`
  transition: all 0.5s linear;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(10)};
  line-height: ${rem(12)};
  color: ${gray200};
  margin-top: ${rem(6)};

  ${({ noSelectAccount }) =>
    noSelectAccount &&
    css`
      color: ${negative200};
    `}
`;

export const CardInputTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14)};
  color: ${gray200};
  margin: -8px 0 ${rem(8)};
`;
