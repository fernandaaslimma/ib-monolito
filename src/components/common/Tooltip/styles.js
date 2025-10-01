import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { white, gray100, black } from "../../../styles/settings";
import { RIGHT, DOWN } from "../../../utils/constants";

export const ToolTipWrapper = styled.div`
  position: relative;
  cursor: pointer;
  text-align: left;

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }

  ${({ disabled }) =>
    disabled === true &&
    css`
      &:hover {
        span {
          visibility: hidden;
          opacity: 0;
        }
      }
    `};
`;

export const ToolTip = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: 150%;
  letter-spacing: ${rem(0.2)};
  text-align: left;

  z-index: 10000;
  padding: ${rem(8)} ${rem(12)};
  position: absolute;
  width: ${rem(240)};
  height: max-content;

  background: ${black};
  color: ${white};
  border-radius: ${rem(4)};
  box-shadow: 0 ${rem(4)} ${rem(10)} 0 ${gray100};

  visibility: hidden;
  transition: opacity 0.5s;
  opacity: 0;
  left: -16px;
  ${({ disabled }) =>
    disabled === true &&
    css`
      visibility: hidden;
      opacity: 0;
    `};
  top: -71px;

  &:before {
    content: " ";
    display: block;
    height: 14px;
    width: 14px;
    position: absolute;
    background: ${black};
    transform: rotate(45deg);
    left: 8%;
    bottom: -7px;
  }

  ${({ width }) =>
    width &&
    css`
      width: ${rem(width)};
    `};

  ${({ position }) =>
    position === RIGHT &&
    css`
      top: -9px;
      left: 38px;

      &:before {
        top: 11px;
        left: -6px;
      }
    `};

  ${({ position }) =>
    position === DOWN &&
    css`
      left: -16px;
      bottom: -69px;
      top: auto;

      &:before {
        top: -6px;
        left: 20px;
      }
    `};
`;
