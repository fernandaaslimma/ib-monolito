import styled, { css } from "styled-components";

import { white, darkBlue, gray90 } from "../../../styles/settings";

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  opacity: 1;

  top: 0;
  left: 0;
  width: 30px;
  height: 16.8px;
  border-radius: 15px;
  background: ${gray90};
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: -3px;
    border: 0.5px solid ${gray90};
    background: ${white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 30px;
  height: 16.8px;
  &:checked + ${CheckBoxLabel} {
    background: ${darkBlue};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 13px;
      transition: 0.2s;
    }
  }
`;

export const CheckboxSpan = styled.span``;
