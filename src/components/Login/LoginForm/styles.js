import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { red, lightestBlue20 } from "../../../styles/settings";

export const ButtonWrapper = styled.div`
  margin: ${rem(20)} 0;
  height: ${rem(50)};
`;

export const ErrorMessage = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  font-style: italic;
  letter-spacing: ${rem(0.1)};
  text-align: center;
  color: ${red};
  height: ${rem(16)};
  margin-bottom: ${rem(9)};

  ${media.md(css`
    margin-bottom: ${rem(16)};
  `)};
`;

export const FloatingText = styled.div`
  display: inline-flex;
  cursor: pointer;
  margin-bottom: ${rem(25)};
  ${media.md(css`
    font-family: "Lato Bold";
    color: ${lightestBlue20};
    letter-spacing: ${rem(0.4)};
    font-size: ${remFontSize(11)};
    font-weight: 600;
  `)};
`;
