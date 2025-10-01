import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { black50 } from "../../../styles/settings";

export const IconWrapper = styled.div`
  padding-right: ${rem(9)};
`;

export const LogoText = styled.p`
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  text-transform: uppercase;
  font-size: ${remFontSize(10)};
  line-height: 1;
  letter-spacing: ${rem(0.2)};
  color: ${black50};
  margin-bottom: ${rem(2)};
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: flex-end;

  ${({ color }) =>
    color &&
    css`
      ${LogoText} {
        color: ${color};
      }
    `};

  ${({ primaryColor }) =>
    primaryColor &&
    css`
      .logo-icon-primary {
        fill: ${primaryColor};
      }
    `};

  ${({ secondaryColor }) =>
    secondaryColor &&
    css`
      .logo-icon-secondary {
        fill: ${secondaryColor};
      }
    `};
`;
