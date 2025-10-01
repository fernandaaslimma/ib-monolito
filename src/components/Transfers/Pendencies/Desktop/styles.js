import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../../styles/tools";
import { white30, white, blue10, red } from "../../../../styles/settings";
import { default as ButtonRaw } from "../../../common/Button";

export const Name = styled.span`
  font-size: ${remFontSize(9)};
`;

export const WarningSpan = styled.span`
  color: ${red};
`;

export const Wrapper = styled.div`
  background: ${white30};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(24)} 0;
  `)};
`;

export const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  text-align: center;
  top: 0;
  left: 0;
`;

export const Content = styled.section`
  position: relative;
  z-index: 1;
  border-radius: ${rem(8)};
  background-color: ${white};
  box-shadow: 0 ${rem(4)} ${rem(40)} ${rem(10)} rgba(0, 0, 0, 0.2);
`;

export const CustomContainer = styled.div`
  width: calc(100vw - ${rem(30)});
  max-width: ${rem(1000)};
  padding: ${rem(8)} 0 ${rem(20)};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;

export const CustomMessage = styled.h1`
  color: ${blue10};
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: ${rem(0.5)};
  margin-top: ${rem(20)};
  margin-bottom: ${rem(20)};
  text-align: center;

  ${media.md(css`
    font-size: ${remFontSize(20)};
  `)};
`;

export const Button = styled(ButtonRaw)`
  margin-top: ${rem(20)};
  height: ${rem(40)};
  line-height: ${rem(40)};
  width: ${rem(120)};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }
`;
