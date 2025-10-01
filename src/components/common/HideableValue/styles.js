import styled, { css, keyframes } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { darkGreen, lightGreen, lightRed } from "../../../styles/settings";

const getColors = ({ value }) => {
  return Number(value) >= 0
    ? css`
        color: ${lightGreen};
      `
    : css`
        color: ${lightRed};
      `;
};

const opacitychange = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  font-size: ${remFontSize(13)};
  position: relative;
  font-family: Lato;
  color: ${darkGreen};
  ${({ styles }) =>
    styles &&
    css`
      ${styles};
    `};

  ${({ blocked }) =>
    blocked &&
    css`
      filter: blur(6px);
    `};
`;

export const Pattern = styled.span`
  margin-left: ${rem(5)};
  opacity: 0;
  display: inline-block;
  position: relative;
  transform: translateY(25%);
  animation: ${opacitychange} 0.2s ease-in-out forwards;
`;

export const Value = styled.span`
  margin-left: ${rem(5)};
  opacity: 0;
  animation: ${opacitychange} 0.4s ease-in-out forwards;
  ${props => props.colorized && getColors(props)};

  ${({ styles }) =>
    styles &&
    css`
      ${styles};
    `};

  @media print {
    opacity: 1;
  }
`;

export const Currency = styled.span`
  opacity: 0;
  animation: ${opacitychange} 0.4s ease-in-out forwards;
  ${props => !props.hide && props.colorized && getColors(props)};

  ${({ styles }) =>
    styles &&
    css`
      ${styles};
    `};

  ${({ currencyColor }) =>
    currencyColor &&
    css`
      color: ${currencyColor};
    `};

  ${({ currencySize }) =>
    currencySize &&
    css`
      font-size: ${remFontSize(currencySize)};
    `};

  @media print {
    opacity: 1;
  }
`;
