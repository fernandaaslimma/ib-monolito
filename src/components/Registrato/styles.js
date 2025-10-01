import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../styles/tools";
import {
  black60,
  blue30,
  darkestBlue,
  lightestBlue20,
  lightGreen,
  errorRed
} from "../../styles/settings";

export const Title = styled.h1`
  color: ${darkestBlue};
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  font-size: ${remFontSize(17)};
  margin-bottom: ${rem(15)};
  line-height: ${remFontSize(20)};

  ${media.md(css`
    letter-spacing: ${rem(0.3)};
    font-size: ${remFontSize(21)};
    margin-bottom: ${rem(35)};
  `)};

  ${media.lg(css`
    letter-spacing: ${rem(0.4)};
    font-size: ${remFontSize(25)};
  `)};
`;

export const Text = styled.p`
  color: ${black60};
  font-size: ${remFontSize(14)};
  letter-spacing: ${rem(0.4)};
  margin-bottom: ${rem(15)};
  line-height: ${remFontSize(20)};

  ${media.md(css`
    line-height: ${remFontSize(18)};
  `)};
`;

export const ErrorSubtext = styled(Text)`
  font-size: ${remFontSize(12)};
  margin-bottom: ${rem(5)};
  padding-left: ${rem(10)};
  color: ${errorRed};
`;

export const ErrorText = styled(Text)`
  color: ${errorRed};
`;

export const Link = styled.a`
  color: ${lightestBlue20};
`;

export const RegistratoWrapper = styled.div`
  font-family: Lato;
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(35)} 0;
  `)};
`;

export const InnerContainer = styled.div`
  padding: ${rem(5)};

  ${media.md(css`
    padding: ${rem(10)};
  `)};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: ${rem(10)};
  border: solid ${blue30} 1px;
  border-radius: ${rem(4)};
  margin-top: ${rem(40)};

  ${media.md(css`
    flex-direction: row;
    padding: ${rem(20)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `)};
`;

export const Feedback = styled.div`
  margin-top: ${rem(10)};
  padding: 0 ${rem(5)};
  font-size: ${remFontSize(14)};
  line-height: ${remFontSize(18)};

  ${({ type }) =>
    type == "success"
      ? css`
          color: ${lightGreen};
        `
      : ""};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > * {
    margin-top: ${rem(15)};
  }

  ${media.md(css`
    flex-direction: row;
    width: initial;

    > * {
      margin-top: 0;
      :last-child {
        margin-left: ${rem(15)};
      }
    }

    button {
      min-width: 125px;
    }
  `)};
`;
