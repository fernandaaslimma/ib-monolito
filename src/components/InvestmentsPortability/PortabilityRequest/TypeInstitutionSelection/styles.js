import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../../styles/tools";
import {
  gray90,
  blue,
  gray200
} from "../../../../styles/settings";

export const DropDownWrapper = styled.div`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

export const Text = styled.div`
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 0)};
  font-size: ${props =>
    props.fontSize ? remFontSize(props.fontSize) : remFontSize(16)};
  font-family: Lato;
  color: ${props => (props.color ? props.color : gray90)};
  line-height: ${props => (props.lineHeight ? rem(props.lineHeight) : 0)};
  margin-top: ${props => (props.marginTop ? rem(props.marginTop) : 0)};
  margin-bottom: ${props => (props.marginBottom ? rem(props.marginBottom) : 0)};
  letter-spacing:  ${props => (props.letterSpacing ? rem(props.letterSpacing) : 0)};
`;

export const FooterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: ${rem(600)};
  padding-bottom: ${rem(60)};
  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: ${rem(600)};
  margin-bottom: ${rem(32)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
    min-height: ${rem(500)};
  }
`;

export const SecondaryText = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.42)};
  color: ${gray200};
  line-height: 100%;
  vertical-align: top;
  font-weight: 400;

  ${media.md(css`
    font-size: ${remFontSize(12)};
    max-width: ${rem(700)};
  `)};
`;

export const LinkText = styled.a`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  color: ${blue};
  vertical-align: top;
  text-align: center;
  letter-spacing: ${rem(0.42)};
  font-weight: normal;
  cursor: pointer;
  text-decoration: underline;

  ${media.md(css`
    font-size: ${remFontSize(12)};
    max-width: ${rem(700)};
  `)};
`;

