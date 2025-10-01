import styled, { css } from "styled-components";

import { rem } from "../../../styles/tools";
import { darkBlue, grey30, black50, blue20 } from "../../../styles/settings";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${rem(4)};
  border: ${rem(1)} solid ${grey30};
  border-color: ${props => props.focus && darkBlue};
  transition: border-color 0.3s, background 0.3s;
  padding-right: ${rem(6)};

  select {
    -webkit-appearance: none !important;
  }

  ${props =>
    props.disabled &&
    css`
      background: ${blue20};
    `}

  ${props =>
    props.width &&
    css`
      max-width: ${props.width};
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}

  svg {
    position: absolute;
    right: ${rem(12)};
    top: ${rem(19)};
  }
`;

export const DropdownWrapper = styled.select`
  cursor: pointer;
  width: 100%;
  background: transparent;
  font-size: ${rem(16)};
  // line-height: 1;
  border: 0;
  border-radius: 0;
  height: ${rem(45)};
  color: ${black50};
  padding-left: ${rem(6)};
  padding-top: ${rem(16)};
  outline: none;
  font-size: ${rem(13)};
`;

export const Label = styled.label`
  font-family: 'Lato';
  font-size: ${rem(12)};
  pointer-events: none;
  color: ${black50};
  position: absolute;
  transform: translateY(${rem(18)});
  left: ${rem(10)};
  transition: color 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
  ${props =>
    props.selected &&
    css`
      font-family: "Lato Bold";
      transform: translateY(${rem(6)});
      font-size: ${rem(11)};
    `}

  ${props =>
    props.selected &&
    props.focus &&
    css`
      color: ${darkBlue};
    `}

  ${({ filterStyle }) =>
    filterStyle &&
    css`
      font-weight: 600;
      // line-height: 14.4px;
      color: #4e768f;
      letter-spacing: ${rem(0.48)};
    `}
`;
