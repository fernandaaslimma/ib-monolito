import styled from "styled-components";
import {
  gray200,
  gray300,
  neutral200,
  white
} from "../../../../styles/settings";
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

export const SquareCard = styled.div`
  padding: ${rem(16)} ${rem(16)} ${rem(16)} ${rem(16)};
  margin: ${rem(16)} 0 ${rem(16)} 0;
  background: ${white};
  border: 1px solid #eef1f3;
  border-radius: 4px;
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

export const AuthorizerName = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: 0.452308px;

  color: ${gray300};
`;

export const AuthorizerDocument = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: 0.45px;

  color: ${gray300};
`;

export const AuthorizerFieldLabel = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(12)};
  line-height: 125%;
  /* identical to box height, or 15px */

  letter-spacing: 0.452308px;

  color: ${gray200};
`;

export const LabelSection = styled.section`
  display: flex;
  flex-direction: column;

  & + .LabelSection {
    margin-top: ${rem(8)};
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubTitle = styled.h2`
  font-size: ${remFontSize(16)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 400;
  line-height: ${rem(24)};
  /* identical to box height, or 20px */

  letter-spacing: 0.452308px;
`;

export const SquareCardTitle = styled.h2`
  margin: 0 0 ${rem(15)} 0;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  letter-spacing: 0.45px;
  color: ${neutral200};
`;

export const ReceivingInstitutionInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(16)};
`;

export const WapperBankImg = styled.img`
  height: ${rem(36)};
  width: ${rem(36)};
  border-radius: ${rem(6)};
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
