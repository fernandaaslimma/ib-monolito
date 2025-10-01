/* eslint-disable */
import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import {
  white,
  grey30,
  black50,
  darkBlue,
  green,
  red,
  blue20
} from "../../../styles/settings";

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: ${rem(55)};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  color: ${black50};
  transition: 0.3s color;
  pointer-events: none;
`;

export const ValidityContainer = IconContainer.extend`
  right: ${rem(-10)};
  left: auto;
  ${({ valid }) =>
    valid &&
    css`
      ${ValidityContainer} {
        color: ${green};
      }
    `};

  input:not(:focus) {
    ${({ valid }) =>
      valid === false &&
      css`
        border-color: ${red};

        ~ ${ValidityContainer}, ~ ${IconContainer}, ~ ${Label} {
          color: ${red};
        }
      `};
  }
`;

export const Tooltip = styled.div`
  visibility: visible;

  ${({ hide }) =>
    hide &&
    css`
      visibility: hidden;
    `};
`;

export const Label = styled.label`
  background-color: ${white};
  width: calc(100% - ${rem(54)});
  padding: 5px 0;
  position: absolute;
  left: ${rem(52)};
  top: 58.9%;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.3s top, 0.2s color, 0.3s font-size;
  font-family: Lato;
  font-size: ${rem(13)};
  letter-spacing: ${rem(0.1)};
  color: ${black50};
  ${({ tinyLabels, icon }) =>
    tinyLabels &&
    !icon &&
    css`
      padding: 2px 0;
      width: calc(100% - ${rem(12)});
      font-size: ${rem(10)};
      left: ${rem(10)};
      top: 58.9%;
      transform: translateY(-50%);
    `};

  ${({ filterStyle }) =>
    filterStyle &&
    css`
      font-weight: 600;
      line-height: 14.4px;
      color: #4e768f;
      letter-spacing: ${rem(0.48)};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${blue20};
    `};
`;

const revealContent = css`
  padding-top: ${rem(15)};

  ~ ${Label} {
    top: ${rem(10)};
    font-family: Lato Bold;
    font-size: ${rem(11)};
    letter-spacing: ${rem(0.1)};
    text-align: left;
    color: ${darkBlue};
  }

  ~ ${IconContainer} {
    color: ${darkBlue};
  }
`;

const revealContent2 = css`
  padding-top: ${rem(15)};

  ~ ${Label} {
    top: ${rem(10)};
    font-family: Lato Bold;
    font-size: ${rem(9)};
    letter-spacing: ${rem(0.1)};
    text-align: left;
    color: ${darkBlue};
  }
`;

const revealContent3 = css`
  padding-top: ${rem(15)};

  ~ ${Label} {
    top: ${rem(12)};
    color: ${black50};
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: ${rem(48)};
  ${({ heightPx }) =>
    heightPx &&
    css`
      height: ${rem(heightPx)};
    `};

  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `};

  border-radius: ${rem(4)};
  background-color: ${white};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${blue20};
    `};

  border: solid ${rem(1)} ${grey30};
  font-family: Lato;
  font-size: ${rem(13)};
  letter-spacing: ${rem(0.8)};
  color: ${black50};
  padding: 0 ${rem(52)};
  transition: 0.3s padding, 0.3s border;
  box-shadow: none;

  ::-ms-clear {
    display: none !important;
  }

  :focus {
    outline: none;
    border: solid ${rem(1)} ${darkBlue};
  }

  ${({ tinyLabels }) =>
    tinyLabels &&
    css`
      padding: 0 ${rem(9.2)};
    `};

  :focus {
    ${({ tinyLabels }) => (tinyLabels ? revealContent2 : revealContent)};
  }
  ${({ isEmpty }) => !isEmpty && revealContent};
  ${({ isEmpty, tinyLabels }) => !isEmpty && tinyLabels && revealContent2};
  :not(:focus) {
    ${({ tinyLabels, isEmpty }) => tinyLabels && !isEmpty && revealContent3};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  height: ${rem(45)};
  ${({ heightPx }) =>
    heightPx &&
    css`
      height: ${rem(heightPx)};
    `};

  ${({ valid }) =>
    valid &&
    css`
      input {
        padding-right: ${rem(30)};
        text-overflow: ellipsis;
      }
      ${ValidityContainer} {
        color: ${green};
      }
    `};

  ${({ icon }) =>
    icon &&
    css`
      input {
        padding-left: ${rem(52)};
      }
    `};

  input:not(:focus) {
    ${({ valid }) =>
      valid === false &&
      css`
        border-color: ${red};

        ~ ${ValidityContainer}, ~ ${IconContainer}, ~ ${Label} {
          color: ${red};
        }
      `};
  }
  ${({ width }) =>
    width &&
    css`
      max-width: ${width};
    `};
`;
