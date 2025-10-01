import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import {
  white,
  grey30,
  black50,
  darkBlue,
  lighestgrey,
  blue20,
  blue30,
  grey70,
  white40,
  grey160,
  grey90,
  red,
  green
} from "../../../styles/settings";

const getPosition = ({ position, body }) =>
  position &&
  css`
    top: ${position.top + position.height - body.top}px;
    left: ${position.left}px;
    width: ${position.width}px;
    max-height: ${body.height - (position.top + position.height + 15)}px;
  `;

export const SuggestionsList = styled.ul`
  position: absolute;
  background: ${white};
  overflow: auto;
  border: solid ${rem(1)} ${blue30};
  ${props => getPosition(props)};

  ::-webkit-scrollbar {
    width: ${rem(6)};
    background-color: ${white40};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${rem(4)};
    background-color: ${grey160};
  }
`;

export const Wrapper = styled.div`
  position: relative;

  ${({ styles }) =>
    styles &&
    css`
      ${styles};
    `};
`;

export const Label = styled.label`
  position: absolute;
  left: ${rem(10)};
  top: 50%;
  font-family: Lato;
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.1)};
  transform: translateY(-50%);
  transition: all 0.2s linear;
`;

export const Element = styled.li`
  padding: ${rem(8)} ${rem(15)} ${rem(8)} ${rem(8)};
  color: ${grey70};
  font-size: ${remFontSize(12)};
  font-family: Lato;
  cursor: pointer;

  :hover {
    background: ${darkBlue};
    color: ${white};
  }
`;

export const Empty = styled.em`
  background: ${white};
  font-family: Lato;
  overflow: auto;
  font-size: ${remFontSize(14)};
  color: ${grey70};
  padding: ${rem(5)};
  border: solid ${rem(1)} ${blue30};
  position: absolute;
  ${props => getPosition(props)};
`;

export const Input = styled.input`
  width: 100%;
  min-height: ${rem(46)};
  border-radius: ${rem(4)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : white};
  border: solid ${rem(1)} ${grey30};
  font-family: Lato;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.8)};
  color: ${props => (props.labelColor ? props.labelColor : black50)};
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
      background: ${props =>
        props.backgroundColor ? props.backgroundColor : white};
      color: ${props => (props.labelColor ? props.labelColor : grey90)};
      padding: ${rem(18)} ${rem(35)} ${rem(10)} ${rem(10)};

      ~ ${Label} {
        top: ${rem(10)};
        font-family: Lato Bold;
        color: ${props => (props.labelColor ? props.labelColor : grey90)};
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
    ${({ error }) =>
      error &&
      css`
        border-color: ${red};
        color: ${red};

        ~ * {
          color: ${red};
        }
      `};
  }
`;

export const IconeFeedback = styled.span`
  position: absolute;
  right: ${rem(20)};
  top: 50%;
  transform: translateY(-50%);
  color: ${green};

  ${({ error }) =>
    error &&
    css`
      color: ${red};
    `};
`;
