import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import { blue10 } from "../../../styles/settings";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: ${rem(11)};
`;

export const QrCodeWrapper = styled.div`
  padding-top: ${rem(30)};
  display: flex;
  flex-direction: column;
  padding-bottom: ${rem(20)};
  width: ${rem(276)};
  height: ${rem(252)};
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${rem(276)};
  margin-bottom: ${rem(14)};
`;

export const Title = styled.h2`
  font-family: "Lato";
  font-size: ${remFontSize(20)};
  font-weight: 900;
  letter-spacing: ${rem(0.78)};
  color: ${blue10};
  margin: ${rem(20)} ${rem(10)} ${rem(18)} ${rem(10)};
  ${media.md(css`
    font-size: ${remFontSize(24)};
  `)};
`;

export const InputWrapper = styled.div`
  margin: ${rem(12)} ${rem(0)} ${rem(12)} ${rem(0)};
  width: ${rem(276)};
  height: ${rem(48)};
`;
