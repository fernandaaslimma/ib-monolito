import React from "react";
import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { rem, media } from "../../styles/tools";
import {
  lightBlue,
  blue,
  green,
  white,
  grey,
  lightRed,
  lighterRed,
  darkBlue
} from "../../styles/settings";

export const ButtonTag = styled.button`
  font-family: "Lato Bold", "Lato";
  background: white;
  border-radius: ${rem(4)};
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: ${rem(12)};
  letter-spacing: ${rem(0.2)};
  line-height: ${rem(45)};
  outline: none;
  padding: 0 ${rem(20)};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out color, 0.2s ease-in-out background,
    0.2s ease-in-out box-shadow, 0.2s ease-in-out border, 0.1s transform;
  white-space: nowrap;
  width: ${props => (props.width ? rem(props.width) : "100%")};
  user-select: none;
  opacity: ${props => (props.opacity && props.disabled ? props.opacity : 1)};
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
    width: ${props => (props.width ? rem(props.width) : "auto")};
  `)};

  ${media.lg(css`
    font-size: ${rem(13)};
    padding: 0 ${rem(28)};
    line-height: ${rem(48)};
  `)};

  ${({ approveButton }) =>
    approveButton &&
    css`
      font-size: ${rem(10)} !important;
      line-height: ${rem(15)} !important;
      margin: -5px 0px 0px -25px;
    `};

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
      border: solid ${rem(1)} ${blue};
      color: ${blue};

      :hover:not([disabled]) {
        background-color: ${blue};
        border-color: ${blue};
        color: ${white};
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
`;

export const LinkTag = ButtonTag.withComponent("a");

export const AnchorTag = styled.a`
  display: flex;
  font-family: "Lato";
  font-size: ${rem(11)};
  font-weight: bold;
  letter-spacing: ${rem(0.3)};
  color: ${blue};
  text-decoration: none;

  ${({ width, isPending }) =>
    width &&
    isPending &&
    css`
      font-family: Lato !important;
      margin-right: 0 !important;
      min-width: ${rem(width)} !important;
      text-align: center;
      padding: 0 ${rem(10)} !important;
      min-width: ${width} !important;

      ${media.lg(css`
        margin-right: ${rem(20)} !important;
      `)};
    `};
  ${({ noSpan }) =>
    noSpan &&
    css`
      font-family: "Lato Bold";
      letter-spacing: ${rem(0.4)};
      font-size: ${rem(11)};
      font-weight: 600;
      background: red;
    `} :hover {
    opacity: 0.6;
  }
`;

export const AnchorSpan = styled.span`
  padding-right: ${rem(3)};
  ${({ noSpan, opacity }) =>
    noSpan &&
    opacity &&
    css`
      opacity: ${opacity};
      font-family: "Lato Bold";
      color: ${darkBlue};
      letter-spacing: ${rem(0.4)};
      font-size: ${rem(11)};
      font-weight: 600;
    `};
`;

export const RouterLinkTag = ButtonTag.withComponent(
  ({ isCallToAction, small, ...props }) => <RouterLink {...props} /> // eslint-disable-line
);

export const AnchorLinkTag = AnchorTag.withComponent(({ ...props }) => (
  <RouterLink {...props} />
));
