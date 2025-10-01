import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../styles/tools";
import {
  grey50,
  grey10,
  black50,
  red,
  lightestBlue20
} from "../../styles/settings";

export const BackButtonWrapper = styled.div`
  display: inline-flex;
  opacity: 1;
  cursor: pointer;
  transform: translateY(${rem(-15)});
  ${media.md(css`
    color: ${lightestBlue20};
    letter-spacing: ${rem(0.4)};
    font-size: ${remFontSize(11)};
    font-weight: 600;
  `)};
`;

export const Title = styled.h2`
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  font-size: ${remFontSize(20)};
  letter-spacing: 0.1px;
  color: ${grey10};

  ${media.md(css`
    margin-bottom: ${rem(10)};
  `)};
`;

export const Subtitle = styled.h3`
  font-family: Lato;
  margin-bottom: ${rem(20)};
  font-size: ${remFontSize(13)};
  font-style: italic;
  line-height: 1.23;
  letter-spacing: ${rem(0.3)};
  text-align: center;
  color: ${black50};
  margin-top: ${rem(8)};
  ${media.xs(css`
    margin-top: ${rem(1)};
  `)};
`;

export const ButtonWrapper = styled.div`
  margin: ${rem(23)} 0 ${rem(32)};
`;

export const IconWrapper = styled.div`
  padding: ${rem(27)} ${rem(34)} ${rem(3)} ${rem(44)};

  ${media.md(css`
    padding-bottom: 0;
  `)};
`;

export const Header = styled.div`
  text-align: center;
  border-bottom: solid ${rem(0.7)} ${grey50};
  min-height: ${rem(83)};
`;

export const HeaderName = styled.p`
  font-family: "Lato";
  font-size: ${remFontSize(14)};
  line-height: 1;
  letter-spacing: ${rem(0.3)};
  text-align: center;
  color: ${black50};
  padding-top: ${rem(6)};
  word-break: break-all;

  ${media.md(css`
    line-height: 2.42;
  `)};
`;

export const HeaderEmail = styled(HeaderName)`
  padding-bottom: ${rem(6)};

  ${media.md(css`
    margin-top: -${rem(18)};
  `)};
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
    margin-bottom: ${rem(28)};
  `)};
`;
