import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../../styles/tools";
import { blue10, grey, white } from "../../../../styles/settings";
import { default as ButtonRaw } from "../../Button";

export const Button = styled(ButtonRaw)`
  margin-top: ${rem(20)};
  height: ${rem(40)};
  line-height: ${rem(40)};
  width: ${rem(120)};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }

  ${({ shouldStartDisabled }) =>
    shouldStartDisabled &&
    css`
      background-color: ${grey};
      box-shadow: none;
      border: solid ${rem(1)} ${grey};
      color: ${white};
      cursor: not-allowed;
      pointer-events: none;
    `};
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
