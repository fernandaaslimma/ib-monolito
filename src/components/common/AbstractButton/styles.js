import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import {
  lightBlue,
  darkBlue,
  green,
  white,
  grey,
  lightRed,
  lighterRed,
  grey70
} from "../../../styles/settings";

export const ButtonTag = styled.button`
  display: flex;
  justify-content: center;
  font-family: 'Lato Bold', 'Lato';
  background: none;
  /* border-radius: ${rem(4)}; */
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${rem(12)};
  letter-spacing: ${rem(0.2)};
  line-height: ${rem(45)};
  padding: ${props => (props.noPadding ? "0 rem(20)" : 0)};
  position: relative;
  text-align: center;
  text-decoration: none;
  /* box-shadow: 0 4px 7px 0 rgba(74, 144, 226, 0.3); */
  transition: 0.2s ease-in-out color, 0.2s ease-in-out background,
    0.2s ease-in-out box-shadow, 0.2s ease-in-out border, 0.1s transform;
  white-space: nowrap;
  width: ${props => (props.width ? rem(props.width) : "100%")};
  user-select: none;
  /* opacity: ${props =>
    props.opacity && props.disabled ? props.opacity : 1}; */

  ${({ width, isPending }) =>
    width &&
    isPending &&
    css`
      min-width: ${rem(width)} !important;
      margin-right: 0 !important;
      text-align: center;
      padding: 0 ${rem(10)} !important;

      ${media.lg(css`
        margin-right: ${rem(20)} !important;
      `)};
    `};

  ${media.md(css`
    width: ${props => (props.width ? rem(props.width) : "100%")};
  `)};

  ${media.lg(css`
    font-size: ${rem(13)};
    padding: 0 ${rem(28)};
    line-height: ${rem(42)};
  `)};

  ${({ noPadding }) =>
    noPadding &&
    media.lg(css`
      padding: 0;
    `)}

  :active {
    transform: translateY(${rem(1)});
  }

  ${({ isCallToAction }) =>
    isCallToAction &&
    css`
      background-color: ${green};
      border: solid ${rem(1)} ${green};
      box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(117, 214, 184, 0.39);
      color: ${white};
      font-family: "Lato Bold", Lato;

      :hover:not([disabled]) {
        background-color: ${lightBlue};
        border-color: ${lightBlue};
        box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(51, 204, 208, 0.39);
      }
    `};

  ${({ isWarning }) =>
    isWarning &&
    css`
      background-color: ${lightRed};
      border: solid ${rem(1)} ${lightRed};
      box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(233, 103, 103, 0.3);
      color: ${white};

      :hover:not([disabled]) {
        background-color: ${lighterRed};
        border-color: ${lighterRed};
      }
    `};

  ${({ isCallToAction, isWarning }) =>
    !isCallToAction &&
    !isWarning &&
    css`
      /* border: solid ${rem(1)} ${darkBlue};
      color: ${white}; */

      :hover:not([disabled]) {
        opacity: 0.7;
      }
    `};

  ${({ small }) =>
    small &&
    css`
      font-size: ${rem(11)} !important;
      height: ${rem(40)} !important;
      line-height: ${rem(40)} !important;
    `};

  ${({ disabled, loading, opacity }) =>
    disabled &&
    !loading &&
    opacity &&
    css`
      background-color: ${!opacity && grey};
      opacity: ${opacity};
      box-shadow: none;
      border: solid ${rem(1)} ${grey};
      color: ${white};
      cursor: not-allowed;
      pointer-events: none;
    `};

  ${({ disabled, loading }) =>
    disabled &&
    loading &&
    css`
      box-shadow: none;
      cursor: not-allowed;
      pointer-events: none;
    `};
  ${({ disabled, loading }) =>
    disabled &&
    !loading &&
    css`
      background-color: ${grey};
      box-shadow: none;
      border: solid ${rem(1)} ${grey};
      color: ${white};
      cursor: not-allowed;
      pointer-events: none;
    `};

  ${({ disabled, loading }) =>
    disabled &&
    loading &&
    css`
      box-shadow: none;
      cursor: not-allowed;
      pointer-events: none;
    `};

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      background-color: ${white};
      border-color: ${darkBlue};
      color: ${darkBlue};
      :hover:not([disabled]) {
        background-color: ${darkBlue};
        border-color: ${darkBlue};
        color: ${white};
      }
    `}

  ${({ isSpanButton }) =>
    isSpanButton &&
    css`
      background-color: transparent;
      border: unset;
      color: ${grey70};
      box-shadow: unset;

      &:hover {
        background-color: unset !important;
        color: unset !important;
        cursor: text;
      }

      &:focus {
        outline: unset !important;
      }

      &:active {
        transform: unset !important;
      }
    `};

  ${({ heightPx }) =>
    heightPx &&
    css`
      line-height: ${rem(heightPx)};
      height: ${rem(heightPx)};
    `}
`;
