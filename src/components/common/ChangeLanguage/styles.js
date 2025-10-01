import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { grey10, grey70 } from "../../../styles/settings";

export const Wrapper = styled.div`
  ${media.md(css`
    position: relative;
  `)};
`;

export const LanguageContainer = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  color: ${grey10};
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  margin-right: ${rem(10)};
  :hover * {
    opacity: 0.7;
  }
`;

export const Text = styled.span`
  display: inline-block;
  width: 0;
  overflow: hidden;
  font-size: ${remFontSize(10)};
  line-height: 1.6;
  letter-spacing: ${rem(0.4)};
  text-transform: uppercase;
  text-align: left;
  margin: 0 ${rem(8)} 0 ${rem(5)};
  white-space: nowrap;
  font-family: Lato;

  ${media.md(css`
    width: auto;
  `)};
`;

export const Arrow = styled.span`
  color: ${grey70};
  display: inline-block;
  font-size: ${remFontSize(6)};
  transform: rotate(45deg);
  margin-left: ${rem(2)};

  :after {
    content: "\u25E2";
  }
`;
