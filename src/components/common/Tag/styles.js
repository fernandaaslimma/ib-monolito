import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools/index";

export const TagElement = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lato;
  text-align: center;
  line-height: ${remFontSize(15)};
  font-size: ${remFontSize(12)};
  padding: ${rem(4)} ${rem(16)};
  border-radius: ${rem(100)};
  font-weight: bold;
  letter-spacing: 0.05em;
  width: ${rem(91)};

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}

    ${({ titleColor }) =>
      titleColor &&
      css`
        color: ${titleColor};
      `}

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `};
`;
