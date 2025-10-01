import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../styles/tools";
import { white, grey50, grey10, black50, red } from "../../styles/settings";

export const HeaderSub = styled.div`
  padding: 0 ${rem(18)} ${rem(10)};

  ${media.md(css`
    padding-bottom: 0;
  `)};
`;

export const FloatingText = styled.p`
  display: none;

  ${media.md(css`
    bottom: ${rem(153)};
    color: ${white};
    display: block;
    font-family: "Roboto Bold", "Roboto Medium", Roboto;
    font-size: ${remFontSize(99)};
    left: ${rem(12)};
    letter-spacing: ${rem(-1.4)};
    line-height: 1;
    position: absolute;
    text-align: left;
    text-transform: uppercase;
    transform-origin: 0 0;
    transform: rotate(-90deg) translateY(-100%) translateX(-50%);
    user-select: none;
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

export const SubTitle = styled.h3`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  font-style: italic;
  line-height: 1.23;
  letter-spacing: ${rem(0.3)};
  color: ${black50};
  margin: ${rem(10)} 0 ${rem(20)};
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
  min-height: ${rem(16)};
  margin-bottom: ${rem(9)};

  ${media.md(css`
    margin-bottom: ${rem(28)};
  `)};
`;
