import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import { blue70, lightBlack, white, purple } from "../../../styles/settings";

export const Wrapper = styled.form`
  background: ${white};
  font-family: Lato;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: ${remFontSize(24)};
  font-weight: 900;
  letter-spacing: ${remFontSize(0.8)};
  text-align: center;
  color: ${blue70};
  margin: ${rem(60)} ${rem(15)} 0 ${rem(15)};

  ${media.md(css`
    margin: ${rem(87)} 0 0 0;
  `)};
`;

export const Description = styled.h2`
  font-size: ${remFontSize(16)};
  font-weight: normal;
  letter-spacing: ${remFontSize(0.6)};
  text-align: center;
  color: ${lightBlack};
  margin: ${rem(30)} auto 0 auto;
  width: 50%;
`;

export const Buttons = styled.div`
  margin: ${rem(35)} auto ${rem(30)} auto;
  display: flex;
  justify-content: center;

  > * {
    margin: ${rem(10)};
    height: auto;
    padding: 0;
    margin-right: 0;

    :last-child {
      margin-right: ${rem(10)};
    }

    ${media.md(css`
      padding: 0 ${rem(15)} 0 ${rem(15)};
    `)};
  }

  ${media.md(css`
    margin: ${rem(90)} auto ${rem(30)} auto;
  `)};
`;

export const MessageWrapper = styled.div`
  padding: ${rem(20)} ${rem(10)} 0 ${rem(10)};
  ${media.md(css`
    padding: ${rem(20)} ${rem(160)} 0 ${rem(160)};
  `)};
`;

export const Message = styled.h1`
  color: ${purple};
  font-size: ${remFontSize(20)};
  letter-spacing: ${rem(0.4)};
  display: inline;
`;
