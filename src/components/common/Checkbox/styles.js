import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { white, darkBlue } from "../../../styles/settings";

export const Check = styled.div`
  border: 1.2px solid #587485;
  border-radius: ${rem(2)};
  min-width: ${rem(16)};
  height: ${rem(16)};
  position: relative;
  overflow: hidden;
  transition: all 0.2s linear;
  letter-spacing: ${rem(0.25)};

  :before {
    content: "✔";
    line-height: 0;
    color: white;
    position: absolute;
    top: 40%;
    font-size: ${remFontSize(16)};
    left: 21%;
    left: 0;

    ${({ beforeTop, beforeLeft }) =>
      beforeTop &&
      beforeLeft &&
      css`
        top: ${beforeTop};
        left: ${beforeLeft};
      `}
  }
`;

export const CheckboxTag = styled.label`
  ${({ type }) =>
    type === "common" &&
    css`
      display: inline-flex;
      border-radius: ${rem(4)};
      cursor: pointer;
      margin: ${rem(10)};
      font-size: ${remFontSize(14)};

      input {
        position: absolute;
        visibility: hidden;
        pointer-events: none;

        :checked ~ ${Check} {
          background: ${darkBlue};
          border: solid ${darkBlue} ${rem(2)};

          :before {
            color: ${white};
          }
        }
      }

      > span {
        flex-grow: 1;
        margin-left: ${rem(10)};
      }

      ${({ disabled }) =>
        disabled &&
        css`
          input ~ ${Check}, input ~ span {
            opacity: 0.5;
            cursor: default;
        `};
    `}

    ${({ margin }) =>
      margin &&
      css`
        margin: ${margin};
      `}

  ${({ type }) =>
    type === "switch" &&
    css`
      position: relative;
      display: inline-block;
      width: ${rem(40)};
      height: ${rem(27)};

      & input {
        box-shadow: 0 0 0 0;
        opacity: 0;
        width: 0;
        height: 0;
      }

      span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: ${rem(-10)};
        right: 0;
        bottom: 0;
        background-color: #D9E0E4;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 16px;
        box-shadow: 1px 2px 7px #d9e0e4;

        &:before {
          position: absolute;
          content: '';
          height: ${rem(30)};
          width: ${rem(30)};
          left: 0;
          bottom: ${rem(-1)};
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 50%;
        }
      }

      input:checked ~ span {
        background-color: #3976CF;
      }

      input:checked ~ span:before {
        -webkit-transform: translateX(21px);
        -ms-transform: translateX(21px);
        transform: translateX(21px);
      }

      ${Check} {
        display: none;
      }

      ${({ disabled }) =>
        disabled &&
        css`
          input ~ ${Check}, input ~ span {
            opacity: 0.5;
            cursor: default;
        `};

    }
  `}
`;

export const CheckboxSpan = styled.span``;
