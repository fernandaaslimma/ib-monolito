import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../styles/tools";
import { darkestBlue, white, grey50, red } from "../../styles/settings";
import { InputWrapper, InputField, Label } from "../common/Input/styles";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100vh;

  ${media.md(css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rem(50)};
    min-height: calc(100vh - ${rem(60)});
  `)};
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${white};
  box-shadow: 0 ${rem(20)} ${rem(40)} ${rem(10)} rgba(224, 224, 224, 0.2);
  position: relative;

  ${media.md(css`
    width: ${rem(443)};
    border-radius: ${rem(8)};
  `)};
`;

export const Content = styled.div`
  text-align: center;
  padding: 0 ${rem(18)};
  margin: ${rem(20)} 0;

  ${media.md(css`
    padding: 0 ${rem(45)};
  `)};

  ${InputWrapper} {
    margin-bottom: ${rem(9)};
  }

  ${InputField} {
    height: ${rem(62)};

    :focus ~ ${Label} {
      top: ${rem(20)};
    }
  }
`;

export const FloatingText = styled.p`
  display: none;

  ${media.md(css`
    bottom: ${rem(35)};
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
  font-size: ${remFontSize(21)};
  letter-spacing: ${rem(0.1)};
  color: ${darkestBlue};
  margin-bottom: ${rem(25)};

  ${media.md(css`
    margin-bottom: ${rem(29)};
  `)};
`;

export const ButtonWrapper = styled.div`
  margin: ${rem(20)} 0;
`;

export const IconWrapper = styled.div`
  padding-right: ${rem(8.8)};
`;

export const Header = styled.div`
  text-align: center;
  padding: ${rem(27)} ${rem(34)} ${rem(12)} ${rem(44)};
  border-bottom: solid ${rem(0.7)} ${grey50};
  min-height: ${rem(83)};
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
