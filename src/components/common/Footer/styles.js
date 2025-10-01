import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import {
  white,
  darkestBlue,
  lightestBlue20,
  grey80
} from "../../../styles/settings";

export const FooterWrapper = styled.footer`
  background-color: ${darkestBlue};
  padding: ${rem(10)};
  ${media.md(css`
    min-height: auto;
    padding: ${rem(20)} ${rem(70)};
  `)};

  @media print {
    display: none;
  }

  ${({ visible }) =>
    visible &&
    css`
      display: none;
    `};
`;

export const LinkWrapper = styled.div`
  opacity: 1;
  border-bottom: solid 0.8px ${grey80};
  padding-bottom: ${rem(25)};
  margin: 0 ${rem(13)} 0 ${rem(13)};
`;

export const Disclaimer = styled.p`
  line-height: ${rem(11.7)};
  letter-spacing: ${rem(0.34)};
  font-size: ${remFontSize(9)};
  padding: 0 ${rem(15)} 0 ${rem(15)};

  ${media.md(css`
    border-bottom: none;
    padding: 0;
  `)};

  text-align: justify;
  color: ${white};
  opacity: 0.7;
  font-family: Lato;
`;

export const DisclaimerFrag = styled.span`
  display: none;

  ${({ expanded }) =>
    expanded &&
    css`
      display: inline;
    `};

  ${media.md(css`
    display: inline;
  `)};
`;

export const ToggleButton = styled.span`
  display: flex;
  font-family: "Lato";
  font-size: ${remFontSize(11)};
  font-weight: bold;
  letter-spacing: ${rem(0.3)};
  color: ${white};
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  text-align: center;
  padding: ${rem(10)};
  margin-bottom: ${rem(12)};
`;

export const Subcontent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  ${media.md(css`
    flex-direction: row;
  `)};
`;

export const Copyright = styled.div`
  font-size: ${remFontSize(11)};
  line-height: ${rem(17)};
  font-family: Lato;
  color: ${white};
  display: flex;
  text-align: center;
  padding: ${rem(20)};
  opacity: 0.7;

  ${media.md(css`
    padding: ${rem(20)} 0;
  `)};
`;

export const Text = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(11)};
  letter-spacing: ${rem(1.3)};
  color: ${lightestBlue20};
  transition: 0.2s color;
  margin-top: ${rem(15)};
  cursor: pointer;

  ${media.md(css`
    letter-spacing: ${rem(0.2)};
    font-size: ${remFontSize(11)};
    margin-top: 0;

    :before {
      content: "|";
      display: inline-block;
      margin: 0 ${rem(20)};
      color: ${white};
      opacity: 0.7;
    }
  `)};
`;
