import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import {
  lightBlack,
  grey30,
  black50,
  lightRed,
  blue
} from "../../../styles/settings";

export const CompositeInputList = styled.ul`
  text-align: center;
  padding: 0;
  ${media.md(css`
    padding: 0 ${rem(30)};
  `)};
`;

export const CompositeInputItem = styled.li`
  display: flex;
  align-items: center;
  text-align: left;
  margin: ${rem(30)} 0;
  flex-direction: column-reverse;
  ${media.md(css`
    flex-direction: row;
    margin: ${rem(20)} 0;
  `)};
`;

export const CompositeInputTotal = styled.li`
  text-align: center;
  margin: ${rem(40)} 0 ${rem(20)};
  padding-top: ${rem(20)};
  color: ${lightRed};
  text-transform: uppercase;
  position: sticky;
  bottom: 100px;
  font-weight: bold;
  border-top: solid ${rem(2)} ${lightRed};

  ${({ valid }) =>
    valid &&
    css`
      color: ${blue};
      border-top-color: ${blue};
    `};

  ${media.md(css`
    text-align: left;
  `)};
`;

export const InputItem = styled.div`
  border-radius: ${rem(4)};
  border: solid ${rem(2)} ${grey30};
  position: relative;
  display: flex;
  min-width: ${rem(130)};
  width: ${rem(130)};

  input {
    padding: ${rem(16)} 0 ${rem(16)} ${rem(20)};
    border: none;
    display: inline-block;
    width: ${rem(100)};
    color: ${black50};
    font-size: ${remFontSize(18)};
    font-weight: 300;
    text-align: center;
    position: relative;

    :focus {
      outline: none;

      ::placeholder {
        color: transparent;
      }
    }
  }

  ${({ pristine }) =>
    pristine &&
    css`
      input::placeholder {
        color: ${lightBlack};
      }
    `};

  ${({ hint }) =>
    hint &&
    css`
      padding-right: ${rem(30)};

      :after {
        content: "${hint}";
        color: ${lightBlack};
        font-weight: bold;
        position: absolute;
        right: ${rem(15)};
        top: 50%;
        transform: translate( 0, -50%);
      }
    `};
`;

export const Label = styled.label`
  color: ${lightBlack};
  font-size: ${remFontSize(16)};
  line-height: ${remFontSize(20)};
  margin-bottom: ${rem(15)};
  width: 90%;
  text-align: center;

  ${media.md(css`
    margin-left: ${rem(30)};
    margin-bottom: ${rem(0)};
    width: initial;
    font-size: ${remFontSize(20)};
    text-align: left;
  `)};
`;
