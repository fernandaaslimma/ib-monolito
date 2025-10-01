import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { blue, darkBlue, grey, white } from "../../../styles/settings";

export const Button = styled.button`
  border: ${rem(1)} solid;
  border-color: ${props => (props.borderColor ? props.borderColor : blue)};
  margin-top: ${props => (props.margintop ? rem(props.margintop) : 0)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Lato Bold", "Lato";
  border-radius: ${props => (props.borderRadius ? rem(props.borderRadius) : 0)};
  cursor: pointer;
  display: inline-block;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.2)};
  line-height: ${rem(45)};
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  width: ${props => (props.percentWidth ? props.percentWidth : 100)}%;
  height: ${rem(48)};
  user-select: none;
  background-color: ${props => (props.background ? props.background : blue)};
  color: ${props => (props.color ? props.color : white)};

  ${({ onHover }) =>
    onHover &&
    css`
      &:hover {
        background-color: ${darkBlue};
      }
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
