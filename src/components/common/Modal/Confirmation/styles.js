import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../../styles/tools";
import { black50 } from "../../../../styles/settings";
import { default as ButtonRaw } from "../../Button";

export const Button = styled(ButtonRaw)`
  height: ${rem(40)};
  line-height: ${rem(40)};
  width: ${rem(100)};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }
`;

export const ConfirmationContainer = styled.div`
  width: calc(100vw - ${rem(30)});
  max-width: ${rem(352)};
  padding: ${rem(48)} ${rem(30)} ${rem(36)};
`;

export const ConfirmationMessage = styled.h1`
  color: ${black50};
  font-family: Lato;
  font-size: ${remFontSize(16)};
  line-height: 0.95;
  letter-spacing: ${rem(0.5)};
  margin-bottom: ${rem(36)};
  text-align: center;

  ${media.md(css`
    font-size: ${remFontSize(20)};
  `)};
`;
