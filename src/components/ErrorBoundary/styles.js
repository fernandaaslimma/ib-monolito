import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../styles/tools";
import { black50, blue } from "../../styles/settings";

export const Content = styled.div`
  margin-top: ${rem(30)};

  ${media.md(css`
    margin-top: ${rem(30)};
  `)};
`;

export const Wrapper = styled.div`
  span {
    width: 65%;

    ${media.md(css`
      width: 100%;
    `)};
  }
`;

export const SecondaryText = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  letter-spacing: ${rem(0.6)};
  color: ${black50};
  line-height: 1.45;
  text-align: center;
  vertical-align: top;
  letter-spacing: ${rem(0.42)};
  font-weight: normal;

  ${media.md(css`
    font-size: ${remFontSize(16)};
    line-height: 1.32;
    max-width: 700px;
  `)};
`;

export const LinkText = styled.a`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  letter-spacing: ${rem(0.6)};
  color: ${blue};
  line-height: 1.45;
  vertical-align: top;
  text-align: center;
  letter-spacing: ${rem(0.42)};
  font-weight: normal;
  cursor: pointer;
  text-decoration: underline;

  ${media.md(css`
    font-size: ${remFontSize(16)};
    line-height: 1.32;
    max-width: 700px;
  `)};
`;
