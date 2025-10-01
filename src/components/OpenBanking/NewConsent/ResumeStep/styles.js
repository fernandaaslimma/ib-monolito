import styled from "styled-components";
import { gray200, gray300, white } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: auto;
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

export const InfoCard = styled.div`
  padding: ${rem(16)} ${rem(15)} ${rem(16)} ${rem(15)};
  background: ${white};
  overflow: auto;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray200};
  line-height: ${remFontSize(22)};
  margin-bottom: ${rem(16)};
`;

export const Title = styled.h2`
  font-size: ${remFontSize(18)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 700;
  line-height: 125%;
  /* identical to box height, or 20px */

  letter-spacing: 0.452308px;
`;

export const SubTitle = styled.h2`
  font-size: ${remFontSize(14)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 600;
  line-height: ${rem(24)};
  letter-spacing: 0.452308px;
`;

export const ReceivingInstitutionInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(16)};
`;

export const ReceivingInstitutionName = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  letter-spacing: 0.452308px;
  color: ${gray300};
  margin-left: ${rem(16)};
`;

export const TitleLabel = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: 400;
  font-style: normal;
  letter-spacing: ${rem(0.45)};
  line-height: ${rem(15)};
  color: #587485;
  margin-top: ${rem(16)};
`;
