import styled, { css } from "styled-components";
import {
  black50,
  blue20,
  darkBlue,
  grey30,
  grey90,
  lighestgrey,
  red,
  white,
  gray200
} from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";
import { Label } from "../../../common/Radio/styles";

export const Input = styled.input`
  width: 100%;
  min-height: ${rem(46)};
  border-radius: ${rem(4)};
  background-color: ${white};
  border: solid ${rem(1)} ${grey30};
  font-family: Lato;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.8)};
  color: ${black50};
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: ${rem(14)} ${rem(35)} ${rem(14)} ${rem(10)};
  transition: 0.3s padding, 0.3s border;
  box-shadow: none;

  :focus {
    outline: none;
    border: solid ${rem(1)} ${darkBlue};
    padding: ${rem(18)} ${rem(35)} ${rem(10)} ${rem(10)};

    ~ ${Label} {
      top: ${rem(10)};
      font-family: Lato Bold;
      color: ${darkBlue};
    }
  }

  ${({ isEmpty }) =>
    !isEmpty &&
    css`
      border: 1px solid ${lighestgrey};
      background: ${white};
      color: ${grey90};
      padding: ${rem(18)} ${rem(35)} ${rem(10)} ${rem(10)};

      ~ ${Label} {
        top: ${rem(10)};
        font-family: Lato Bold;
        color: ${grey90};
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${lighestgrey};
      background: ${blue20};
      color: ${grey90};
      cursor: not-allowed;
    `};

  :not(:focus) {
    ${({ valid }) =>
      !valid &&
      css`
        border-color: ${red};
        color: ${red};

        ~ * {
          color: ${red};
        }
      `};
  }
`;

export const FillStepWrapper = styled.div`
  background-color: ${blue20};
`;

export const ModalWrapper = styled.div`
  background: #f6f9fb;
  font-family: "Lato";
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(22.4)};
  padding: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};
`;

export const ModalMessage = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: normal;
  font-style: normal;
  color: ${gray200};

  &:first-child {
    margin-bottom: ${rem(26)};
  }
`;

export const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid #d9e0e4;
`;

export const WrapperButton = styled.div`
  max-height: 80px;
  padding: 6px 0;

  @media (min-width: 981px) {
    display: flex;
    justify-content: center;
  }
`;
