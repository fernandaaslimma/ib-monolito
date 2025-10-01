import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import {
  grey30,
  black50,
  darkBlue,
  green,
  red,
  lighestgrey,
  blue20,
  grey180,
  errorRed,
  gray100
} from "../../../styles/settings";

export const ErrorMessage = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.4)};
  color: ${black50};
  color: ${errorRed};
  margin: ${rem(4)} 0 0 ${rem(8)};
`;

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

  ${({ msgFocusInput }) =>
    msgFocusInput &&
    css`
      top: ${rem(32)};
    `};
`;

export const Prefix = styled.span`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 ${rem(10)};
  pointer-events: none;
  font-family: Lato;
  font-size: ${remFontSize(13)};
  color: ${grey180};

  ${({ label }) =>
    label &&
    css`
      padding: ${rem(10)} 0 0 ${rem(10)};
    `};
`;

export const ValidityContainer = IconContainer.extend`
  height: ${rem(-10)};
  left: auto;
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
  position: absolute;
  left: ${rem(10)};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.3s top, 0.2s color, 0.3s font-size;
  font-family: Lato;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.1)};
  color: ${black50};
  ${({ tinyLabels }) =>
    tinyLabels &&
    css`
      font-size: ${remFontSize(10)};
      transform: translateY(-50%);
    `};
  ${({ labelStyles }) =>
    labelStyles &&
    css`
      ${labelStyles};
    `};
`;

const revealContent = css`
  ~ ${Label} {
    top: ${rem(10)};
    font-family: Lato Bold;
    font-size: ${remFontSize(10)};
    letter-spacing: ${rem(0.1)};
    text-align: left;
    color: ${darkBlue};
  }

  ~ ${IconContainer} {
    color: ${darkBlue};
  }
`;

const revealContent2 = css`
  ~ ${Label} {
    top: ${rem(10)};
    font-family: Lato Bold;
    font-size: ${remFontSize(10)};
    letter-spacing: ${rem(0.1)};
    text-align: left;
    color: ${darkBlue};
  }
`;

const revealContent3 = css`
  ~ ${Label} {
    top: ${rem(10)};
    color: ${black50};
  }
`;

export const InputField = styled.input`
  width: 100%;
  min-height: ${rem(49)};
  border-radius: ${rem(4)};
  background: none;
  border: solid ${rem(1)} ${grey30};
  font-family: Lato;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.1)};
  color: ${black50};
  padding: ${rem(13)} ${rem(10)} ${rem(13)} ${rem(10)};
  transition: 0.3s padding, 0.3s border;
  box-shadow: none;
  text-align: ${props => props.textAlign};

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};

  ${({ label }) =>
    label &&
    css`
      padding: ${rem(18)} ${rem(10)} ${rem(8)} ${rem(10)};
    `};

  ${({ icon, label }) =>
    icon &&
    css`
      padding: ${rem(18)} ${rem(10)} ${rem(8)} ${rem(50)};

      ${label &&
        css`
          padding: ${rem(18)} ${rem(10)} ${rem(8)} ${rem(50)};

          ~ ${Label} {
            left: ${rem(52)};
          }
        `};
    `};

  ::-ms-clear {
    display: none !important;
  }

  ${({ prefix }) =>
    prefix &&
    css`
      padding-left: ${rem(32)};
    `};

  :focus {
    outline: none;
    border: solid ${rem(1)} ${darkBlue};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${lighestgrey};
      background: ${blue20};
      color: #939598;
      cursor: not-allowed;

      ~ ${Label} {
        color: ${black50};
      }
    `};

  :focus {
    ${({ tinyLabels }) => (tinyLabels ? revealContent2 : revealContent)};
  }
  ${({ isEmpty }) => !isEmpty && revealContent};
  ${({ isEmpty, tinyLabels }) => !isEmpty && tinyLabels && revealContent2};
  :not(:focus) {
    ${({ tinyLabels, isEmpty }) => tinyLabels && !isEmpty && revealContent3};
  }

  ${({ EnableFixedInput }) =>
    EnableFixedInput &&
    css`
      padding-left: ${EnableFixedInput} !important;
    `};
`;

export const FixedInitialIput = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  position: absolute;
  top: ${rem(23)};
  left: ${rem(10)};
  color: ${gray100};
`;

const invalidInput = css`
  border-color: ${red};

  ~ ${ValidityContainer}, ~ ${IconContainer}, ~ ${Label} {
    color: ${red};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;

  ${({ valid }) =>
    valid &&
    css`
      ${ValidityContainer} {
        color: ${green};
      }
    `};

  input {
    ${({ valid }) => valid === false && invalidInput};
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `};

  ${({ errorMessage }) =>
    errorMessage &&
    css`
      height: auto !important;
      margin-bottom: 0 !important;
    `};
`;
