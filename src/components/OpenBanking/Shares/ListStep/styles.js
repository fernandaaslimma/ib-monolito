import styled from "styled-components";
import { gray200, gray300, white } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const Wrapper = styled.div`
  padding: ${rem(10)} 0 ${rem(32)} 0;
  max-width: ${rem(600)};
  margin: 0 auto;
  cursor: pointer;
  @media (max-width: ${rem(600)}) {
    padding: ${rem(10)} ${rem(16)} ${rem(32)} ${rem(16)};
  }
`;

export const UpperWrapper = styled.div`
  max-width: ${rem(600)};
  margin: 0 auto;
`;

export const Card = styled.section`
  background: #ffffff;
  display: flex;
  margin-top: ${rem(16)};
  justify-content: space-between;
  padding: ${rem(16)} 0;

  border: 1px solid #eef1f3;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  min-width: 263px;

  :hover {
    cursor: pointer;
  }
`;

export const InstitutionInfo = styled.section`
  display: flex;
  align-items: center;
  margin-left: ${rem(16)};
`;

export const InstitutionName = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 125%;
  /* or 17px */

  letter-spacing: 0.452308px;

  color: #2d4758;

  margin-left: ${rem(16)};
`;
export const ShareDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: ${rem(12)};
`;
export const SharedDate = styled.span`
  white-space: nowrap;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 125%;
  /* identical to box height, or 12px */
  letter-spacing: 0.45px;
  color: #587485;
  margin-top: ${rem(19)};
`;

export const InfoCard = styled.div`
  padding: ${rem(16)} ${rem(15)} ${rem(24)} ${rem(15)};
  background: ${white};
  overflow: auto;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray200};
  line-height: ${remFontSize(22)};
`;

export const Title = styled.h2`
  font-size: ${remFontSize(18)};
  color: ${gray300};
  font-weight: 700;
  line-height: 125%;
  /* identical to box height, or 20px */

  letter-spacing: 0.452308px;
`;

export const AccessPortal = styled.span`
  cursor: pointer;
  margin-bottom: ${rem(40)};
  display: flex;
  justify-content: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.2px;

  color: #3976cf;
`;

export const WapperBankImg = styled.img`
  object-fit: cover;
  height: ${rem(36)};
  width: ${rem(36)};
  border-radius: ${rem(6)};
`;
