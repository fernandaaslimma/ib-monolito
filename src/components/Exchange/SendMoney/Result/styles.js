import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { blue20, gray200, gray500 } from "../../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 95%;
  padding-bottom: ${rem(50)};
`;

export const ContainerBlue20 = styled.div`
  background: ${blue20};
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
    min-height: ${rem(500)};
  }
`;

export const Image = styled.img`
  max-width: ${rem(250)};
  max-height: ${rem(250)};
  width: ${rem(61)};
  display: block;
  margin: 0 auto;
  margin-top: ${rem(60)};
`;

export const SpanTitle = styled.span`
  font-weight: 700;
  font-size: ${remFontSize(24)};
  letter-spacing: ${rem(0.45)};
  font-family: Lato;
  color: ${gray500};
  line-height: ${rem(30)};
  align-self: center;
  text-align: center;
  margin-top: ${rem(16)};
`;

export const SpanRequestDate = styled.span`
  font-weight: 400;
  font-size: ${remFontSize(18)};
  font-family: Lato;
  color: ${gray200};
  line-height: ${rem(22.5)};
  letter-spacing: ${rem(0.45)};
  align-self: center;
  margin-top: ${rem(24)};
  margin-bottom: ${rem(14)};
`;

export const SpanErrorMsg = styled.span`
  font-weight: 400;
  font-size: ${remFontSize(16)};
  font-family: Lato;
  color: ${gray200};
  line-height: ${rem(19.5)};
  letter-spacing: ${rem(0.45)};
  align-self: center;
  text-align: center;
  margin-top: ${rem(24)};
  margin-inline: ${rem(32)};
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${rem(600)};
  margin: auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${rem(24)} ${rem(16)} ${rem(29)} ${rem(16)};
`;

export const InfoContent = styled.span`
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${rem(21)};
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
`;
