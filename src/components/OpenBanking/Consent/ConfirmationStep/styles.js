import styled, { css } from "styled-components";
import {
  gray200,
  white,
  neutral200,
  grey40
} from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`;

export const ConclusionStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${rem(16)};
  max-width: ${rem(600)};
  margin: 0 auto;
`;

export const IconWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${rem(50)};
`;

export const SucessMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: ${remFontSize(27)};
  text-align: center;
  color: ${gray200};
  margin: ${rem(24)} 0 ${rem(40)} 0;
`;

export const CancelMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(18)};
  line-height: ${remFontSize(27)};
  text-align: center;
  color: ${gray200};
  margin: ${rem(24)} 0 ${rem(40)} 0;
`;

export const SubMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: ${remFontSize(16)};
  text-align: center;
  color: ${gray200};
  margin: 0 0 ${rem(207)} 0;
`;

export const BottomMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: 129%;
  text-align: center;
  color: ${gray200};
  margin: ${rem(24)} ${rem(8)} ${rem(24)} ${rem(8)};
`;

export const SubTitle = styled.h2`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: 600;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(17, 5)};
  color: #2d4758;
`;

export const TitleSub = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: 400;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(15)};
  color: #587485;
  margin-top: ${rem(16)};
`;

export const BtnWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  flex-basis: 0;
  display: flex;

  > div {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  border-top: solid ${rem(1)} #d3dde4;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 ${rem(16)};
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
  font-size: ${rem(14)};
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
  font-size: ${rem(14)};
  line-height: ${rem(16.8)};
`;

export const LinkCitizen = styled.span`
  cursor: pointer;
  transition: 0.2s color;
  color: ${neutral200};
`;

export const AccountBalance = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: ${rem(4)};
  align-items: center;
  align-content: center;
  border: ${rem(2)} #eef1f3 solid;

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: pointer;
    `}
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${rem(12)} ${rem(10)} ${rem(11)} 0;
  padding: 0;
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

export const ResourceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: 500;
  font-style: normal;
  line-height: ${remFontSize(17, 5)};
  margin-right: ${rem(16)};
  align-items: center;
  color: #587485;
  margin: ${rem(16)} ${rem(16)} ${rem(20)} ${rem(16)};
`;

export const SaveAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${rem(6)};
  margin: 0 ${rem(16)} ${rem(12)} ${rem(16)};
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

export const Text = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-weight: 600;
  font-style: normal;
  color: #2d4758;
  margin-right: ${rem(16)};
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  padding: ${rem(12)};

  @media (min-width: ${rem(348)}) {
    label + label {
      margin-left: ${rem(12)};
      padding-bottom: ${rem(32)};
    }
  }

  @media (max-width: ${rem(348)}) {
    flex-direction: column;
    label {
      margin-bottom: ${rem(23)};
    }
  }
`;

export const ResourceWrapper = styled.div`
  margin: 0 0 ${rem(8)} 0;
`;

export const Wrapper = styled.div`
  padding: ${rem(10)} 0 ${rem(60)} 0;
  max-width: ${rem(600)};
  margin: 0 auto;
  cursor: pointer;
`;

export const WrapperCard = styled.div``;

export const Title = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(15)};
  font-weight: 600;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(20)};
  color: #033b70;
`;

export const SubTitleDiv = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: 500;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(15)};
  color: #033b70;
  margin-top: ${rem(16)};
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
