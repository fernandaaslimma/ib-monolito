import React from "react";
import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { rem, remFontSize, media } from "../../styles/tools";
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Lato Bold", "Lato";
  background: white;
  border-radius: ${rem(4)};
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.2)};
  line-height: ${rem(45)};
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  box-shadow: ${props =>
    props.boxShadow ? `0 5px 19px 1px rgba(${props.boxShadow})` : "none"};
  transition: 0.2s ease-in-out color, 0.2s ease-in-out background,
    0.2s ease-in-out box-shadow, 0.2s ease-in-out border, 0.1s transform;
  white-space: nowrap;
  width: ${props => (props.width ? rem(props.width) : "100%")};
  height: ${props => (props.height ? rem(props.height) : "100%")};
  user-select: none;
  opacity: ${props => (props.opacity && props.disabled ? props.opacity : 1)};

  ${({ style }) =>
    style &&
    css`
      ${style};
    `};

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};

  ${({ color }) =>
    color &&
    css`
      color: ${color} !important;
    `};

  ${({ border }) =>
    border &&
    css`
      border: ${border} !important;
    `};

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${remFontSize(fontSize)};
    `};

  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${rem(borderRadius.leftTop ? borderRadius.leftTop : 4)}
        ${rem(borderRadius.rightTop ? borderRadius.rightTop : 4)}
        ${rem(borderRadius.rightBottom ? borderRadius.rightBottom : 4)}
        ${rem(borderRadius.leftBottom ? borderRadius.leftBottom : 4)};
    `};

  ${({ noBorderRadius }) =>
    noBorderRadius &&
    css`
      border-radius: 0;
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${rem(margin.t ? margin.t : 0)} ${rem(margin.r ? margin.r : 0)}
        ${rem(margin.b ? margin.b : 0)} ${rem(margin.l ? margin.l : 0)};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding.t ? padding.t : 0)}
        ${rem(padding.r ? padding.r : 20)} ${rem(padding.b ? padding.b : 0)}
        ${rem(padding.l ? padding.l : 20)};
    `};

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
    font-size: ${remFontSize(12)};
    width: ${props => (props.width ? `${props.width}px` : "auto")};
  `)};

  ${media.lg(css`
    font-size: ${remFontSize(13)};
    padding: ${props => (props.padding !== undefined ? rem(props.padding) : `0 ${rem(28)}`)};
    line-height: ${rem(48)};
    padding: ${props => props.paddingSize && rem(props.paddingSize)};
  `)};

  ${({ approveButton }) =>
    approveButton &&
    css`
      font-size: ${remFontSize(10)} !important;
      line-height: ${rem(15)} !important;
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
  ${({ isCallToAction, isPending }) =>
    isCallToAction &&
    isPending &&
    css`
      height: ${rem(50)};
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

  ${({ isCallToAction, isWarning, noHoverBackground }) =>
    !isCallToAction &&
    !isWarning &&
    !noHoverBackground &&
    css`
      border: solid ${rem(1)} ${blue};
      color: ${blue};

      :hover:not([disabled]) {
        background-color: ${blue};
        border-color: ${blue};
        color: ${white};
      }
    `};

  ${({ noHoverBackground, border }) =>
    noHoverBackground &&
    css`
      border: ${border};
    `};

  ${({ small }) =>
    small &&
    css`
      font-size: ${remFontSize(11)} !important;
      height: ${rem(40)} !important;
      line-height: ${rem(40)} !important;
    `};

  ${({ smallBlue }) =>
    smallBlue &&
    css`
      font-size: ${remFontSize(13)} !important;
      height: ${rem(37)} !important;
      line-height: ${rem(37)} !important;
      background-color: ${darkBlue};
      border-color: ${darkBlue};
      color: ${white};

      :hover:not([disabled]) {
        background-color: ${blue};
        border-color: ${blue};
        color: ${white};
      }
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
  ${({ actionSecondary }) =>
    actionSecondary &&
    css`
      background-color: ${darkBlue};
      color: ${white};
      border: none;
      box-shadow: 0 4px 7px 0 rgba(49, 117, 189, 0.2);
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

    ${({ isModalType, width }) => 
    isModalType &&
    width &&
    css`
      @media (max-width: 991px) {
        width: 100%;
      }
      
      width: ${rem(width)};
    `}  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const WrapperChildren = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: ${rem(13)};
  letter-spacing: ${rem(0.2)};
`;

export const LinkTag = ButtonTag.withComponent("a");

export const AnchorTag = styled.a`
  display: flex;
  font-family: "Lato";
  font-size: ${props =>
    props.fontSize ? remFontSize(props.fontSize) : remFontSize(11)};
  font-weight: bold;
  letter-spacing: ${rem(0.3)};
  color: ${blue};
  text-decoration: ${props => (props.withUnderline ? "default" : "none")};

  ${({ width, isPending }) =>
    width &&
    isPending &&
    css`
      font-family: Lato !important;
      margin-right: 0 !important;
      min-width: ${rem(width)} !important;
      text-align: center;
      padding: 0 ${rem(10)} !important;
      color: #000;
      ${media.lg(css`
        margin-right: ${rem(20)} !important;
      `)};
    `};
  ${({ noSpan }) =>
    noSpan &&
    css`
      font-family: "Lato Bold";
      letter-spacing: ${rem(0.4)};
      font-size: ${remFontSize(11)};
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
      font-size: ${remFontSize(11)};
      font-weight: 600;
    `};
`;

export const RouterLinkTag = ButtonTag.withComponent(
  ({ isCallToAction, small, ...props }) => <RouterLink {...props} /> // eslint-disable-line
);

export const AnchorLinkTag = AnchorTag.withComponent(({ ...props }) => (
  <RouterLink {...props} />
));
