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

export const InfoSpace = styled.div`
  padding: ${rem(16)} ${rem(15)} ${rem(16)} ${rem(15)};
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
  font-size: ${remFontSize(16)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 700;
  line-height: 125%;
  /* identical to box height, or 20px */

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
  /* identical to box height, or 17px */

  letter-spacing: 0.452308px;

  color: ${gray300};

  margin-left: ${rem(16)};
`;
