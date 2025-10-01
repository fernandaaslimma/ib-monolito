import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import {
  blue70,
  lightBlack,
  blueGreen,
  white,
  lightgrey
} from "../../../styles/settings";

export const Wrapper = styled.div`
  border: solid ${rem(20)} ${white};
  background: ${white};
  font-family: Lato;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-family: "Lato";
  font-size: ${remFontSize(24)};
  font-weight: 900;
  letter-spacing: ${remFontSize(0.8)};
  text-align: center;
  color: ${blue70};
  margin-top: ${rem(35)};
`;

export const Profile = styled.h2`
  font-family: "Lato";
  font-size: ${remFontSize(32)};
  font-weight: 900;
  letter-spacing: ${remFontSize(2.1)};
  text-align: center;
  color: ${blueGreen};
  margin-top: ${rem(20)};
  ${media.md(css`
    font-size: ${remFontSize(64)};
  `)};
`;

export const Description = styled.h2`
  font-family: "Lato";
  font-size: ${remFontSize(18)};
  font-weight: normal;
  letter-spacing: ${remFontSize(0.6)};
  text-align: center;
  color: ${lightBlack};
  margin: ${rem(30)} auto ${rem(50)} auto;

  ${media.md(css`
    padding: 0 ${rem(20)};
    width: ${rem(450)};
  `)};
`;

export const Token = styled.div`
  border-top: solid ${rem(1)} ${lightgrey};
  max-width: ${rem(750)};
  margin: auto auto ${rem(16)} auto;

  ${media.md(css`
    margin: auto auto ${rem(16)} auto;
    padding: 0 ${rem(150)};
  `)};

  & > div {
    border-bottom: none;
  }
`;

export const Buttons = styled.div`
  margin-top: ${rem(35)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

  > * {
    margin: ${rem(5)} 0;
    height: auto;
    padding: 0 ${rem(10)} 0 ${rem(10)};
    line-height: ${remFontSize(50)};
    font-size: ${remFontSize(13)};
    width: 100%;

    ${media.md(css`
      padding: 0 ${rem(15)} 0 ${rem(15)};
      margin: ${rem(5)};
      min-width: ${rem(165)};
      width: auto;
    `)};
  }

  ${media.md(css`
    margin-top: ${rem(65)};
    flex-direction: row;
    align-content: flex-start;
  `)};
`;
