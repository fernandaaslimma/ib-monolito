import styled from "styled-components";
import { remFontSize, rem } from "../../../styles/tools";
import { blue70, lightBlack, white } from "../../../styles/settings";

export const Title = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(24)};
  font-weight: bold;
  letter-spacing: 0.78px;
  text-align: center;
  color: ${blue70};

  margin-top: ${rem(33)};
  margin-bottom: ${rem(56)};
`;

export const AppTutorial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AddAccountTutorial = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${rem(64)};
  :last-child {
    margin-right: 0;
  }
`;

export const MfaImgTutorial = styled.img`
  width: ${rem(206)};
  height: ${rem(155)};
  object-fit: contain;
  margin-bottom: ${rem(24)};
`;

export const MfaImgTutorialText = styled.span`
  width: ${rem(211)};
  font-family: Lato;
  font-size: ${remFontSize(13)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.35px;
  color: ${lightBlack};
  text-align: left;
`;

export const MfaTextNumber = styled(MfaImgTutorialText)`
  font-weight: 900;
  color: ${blue70};
`;

export const MfaButtonText = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${white};
`;

export const ShowQrCodeButtonWrapper = styled.div`
  display: flex;
  margin-bottom: ${rem(14)};
  width: ${rem(179)};
`;
