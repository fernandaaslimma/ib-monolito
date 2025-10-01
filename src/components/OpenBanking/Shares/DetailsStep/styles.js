import styled, { css } from "styled-components";
import { gray300, white, gray200, grey40 } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const SubTitle = styled.h2`
  font-size: ${remFontSize(16)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 400;
  line-height: ${rem(24)};
  letter-spacing: 0.452308px;
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

export const InstitutionInfo = styled.section`
  display: flex;
  align-items: center;
  margin: ${rem(14)} 0 0 0;
`;

export const InstitutionName = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* or 17px */

  letter-spacing: 0.452308px;
  color: ${gray300};
`;
export const ShareDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  margin-left: ${rem(16)};
`;
export const SharedDate = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(10)};
  line-height: 125%;
  /* identical to box height, or 12px */

  letter-spacing: 0.45px;

  color: ${gray200};

  margin-top: ${rem(8)};
`;

export const WrapperTag = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const EndSharringSheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(500)};

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
  padding: 0 ${rem(6)} ${rem(24)};
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: ${rem(980)}) {
    position: sticky;
    grid-template-columns: none;
  }
`;

export const ButtonWrapperClose = styled.div`
  padding: 0 ${rem(6)} ${rem(24)};
  display: grid;
  grid-template-columns: auto;
`;

export const Message = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: ${rem(24)};
  display: inline;
  text-align: center;
  letter-spacing: 0.426667px;
  color: ${grey40};
`;

export const MessageBold = styled(Message)`
  font-family: Lato;
  font-weight: 500;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(15)};
  font-weight: 700;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const ChangeSharringSheetWrapper = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  padding: ${rem(24)} ${rem(16)};
  font-size: ${remFontSize(14)};
  line-height: 150%;
  color: ${gray200};
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const ChangeSharringButtonWrapper = styled.div`
  padding: 0 ${rem(6)} ${rem(24)};
  display: grid;
  grid-template-columns: auto auto;
`;
