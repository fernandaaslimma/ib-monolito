import styled from "styled-components";
import { remFontSize, rem } from "../../../../styles/tools";
import { blue70, lightBlack } from "../../../../styles/settings";

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${rem(66)};
  margin-top: ${rem(66)};
  padding-inline: ${rem(16)};
`;

export const Span = styled.div`
  font-weight: ${rem(300)};
  font-family: Lato;
  color: #587485;
  letter-spacing: ${rem(0.45)};
  font-size: ${remFontSize(18)};
  inline-size: ${rem(312)};
  overflow-wrap: break-word;
`;

export const Title = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(22)};
  font-weight: bold;
  letter-spacing: 0.78px;
  text-align: center;
  color: ${blue70};
  margin-top: ${rem(33)};
  margin-bottom: ${rem(33)};
`;

export const MfaImgTutorialText = styled.span`
  width: 30%;
  font-family: Lato;
  font-size: ${remFontSize(15)};
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

export const Container = styled.div`
  width: 100%;
  max-width: ${rem(500)};
  margin: 0 auto;

  @media (min-width: 500px) {
    min-width: ${rem(500)};
  }
`;

export const ContainerTwoButtons = styled.div`
  width: 90%;
  max-width: ${rem(500)};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  max-width: ${rem(250)};
  max-height: ${rem(250)};
  width: 70%;
  display: block;
  margin: 0 auto;
  margin-bottom: ${rem(33)};
`;

export const TextDiv = styled.div`
  width: 70%;
  display: block;
  margin: 0 auto;
`;
