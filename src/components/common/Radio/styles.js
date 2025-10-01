import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { white, darkBlue, grey70, gray200 } from "../../../styles/settings";

export const Check = styled.div`
  border: solid ${grey70} ${rem(2)};
  border-radius: 100%;
  width: ${rem(14)};
  height: ${rem(14)};
  position: relative;
  overflow: hidden;
  transition: all 0.2s linear;

  :before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 100%;
    background: transparent;
    border: solid ${white} ${rem(2)};
  }
`;

export const RadioTag = styled.label`
  display: inline-flex;
  align-items: center;
  border-radius: ${rem(4)};
  cursor: pointer;
  margin: ${rem(10)};
  font-size: ${remFontSize(14)};

  input {
    position: absolute;
    visibility: hidden;
    pointer-events: none;

    :checked ~ ${Check} {
      border: solid ${darkBlue} ${rem(2)};

      :before {
        background: ${darkBlue};
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

  ${({ hasSub }) =>
    hasSub &&
    css`
      margin: ${rem(16)} ${rem(10)};
    `};
`;

export const Label = styled.span`
  font-size: ${remFontSize(16)};
  font-family: Lato;
`;

export const SubLabel = styled.span`
  font-size: ${remFontSize(14)};
  line-height: ${remFontSize(16)};
  margin-top: ${rem(5)};
  color: ${gray200};
  display: block;
`;

export const UpperLabel = styled.span`
  display: block;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: ${remFontSize(16)};
  color: ${gray200};
  margin-bottom: ${rem(4)};
`;
