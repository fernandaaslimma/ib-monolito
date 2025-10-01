import styled, { css } from "styled-components";
import { media, rem, remFontSize } from "../../../styles/tools";
import {
  white,
  grey30,
  black50,
  darkBlue,
  green,
  red,
  lighestgrey,
  blue20
} from "../../../styles/settings";
import { isMsBrowser, isInternetExplorer } from "../../../utils/getNavigator";
import Arrow from "../../common/Icon/arrow.png";

export const DropdownWrapper = styled.div`
  letter-spacing: ${rem(0.1)};
  display: inline-block;
  position: relative;
  margin: ${rem(9)} ${rem(6)} ${rem(10)} 0;

  ${({ valid }) =>
    valid &&
    css`
      ${PositionedIconContainer} {
        color: ${green};
      }
    `};
  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `};

  select:not(:focus) {
    ${({ valid }) =>
      valid === false &&
      css`
        border-color: ${red};

        ~ ${PositionedIconContainer}, ~ ${IconContainer}, ~ ${Label} {
          color: ${red};
        }
      `};
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `};

  select:focus {
    label {
      color: red !important;
    }
  }
`;

export const DropdownField = styled.select`
  width: 100%;
  min-height: ${rem(46)};
  border-radius: ${rem(4)};
  background-color: ${white};
  border: solid ${rem(1)} ${grey30};
  font-family: Lato;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.8)};
  color: ${black50};
  padding: ${rem(13)} ${rem(10)} ${rem(2)} ${rem(5)};
  transition: 0.3s padding, 0.3s border;
  box-shadow: none;

  ::-ms-clear {
    display: none !important;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${lighestgrey};
      background: ${blue20};
      color: #939598;
      cursor: not-allowed;
    `};

  ${({ height }) =>
    height &&
    css`
      height: ${rem(height)};
    `} :focus {
    outline: none;
    border: solid ${rem(1)} ${darkBlue};
  }

  ${isMsBrowser() &&
    media.md(css`
      -moz-appearance: none; /* Firefox */
      appearance: none;
      -webkit-appearance: none; /* Safari and Chrome */
      background: url(${Arrow}) no-repeat;
      background-position: 95% 50%;
    `)};
  ${isInternetExplorer() &&
    media.md(css`
      ::-ms-expand {
        display: none;
      }
    `)};

  ${({ hasLabel }) =>
    !hasLabel &&
    css`
      height: auto;
      padding: ${rem(8)} 0 ${rem(8)} ${rem(15)};
      border-radius: ${rem(20)};
      appearance: none;
    `};
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
`;

export const PositionedIconContainer = IconContainer.extend`
  right: 0;
  left: auto;
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

  ${({ focusItem }) =>
    focusItem &&
    css`
      color: ${darkBlue};
    `};

  ${({ isValid }) =>
    isValid &&
    css`
      font-size: ${remFontSize(10)};
      transform: translateY(-15%);
      top: 15%;
    `};

  ${({ clearInput }) =>
    clearInput &&
    css`
      top: 50%;
      transform: translateY(-50%);
    `};
`;
