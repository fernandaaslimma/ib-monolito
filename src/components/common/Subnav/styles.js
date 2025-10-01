import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { isMsBrowser } from "../../../utils/getNavigator";
import {
  white,
  lightestBlue,
  darkerBlue,
  darkestBlue
} from "../../../styles/settings";

export const TabContainer = styled.ul`
  display: flex;
  position: relative;
  background-color: ${darkestBlue};
  height: ${rem(50)};
  max-width: 100%;
`;

export const ArrowUp = styled.div`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-left: ${rem(4)} solid transparent;
  border-right: ${rem(4)} solid transparent;
  border-bottom: ${rem(4)} solid ${darkestBlue};
  z-index: 1;
  bottom: 47%;
  left: 50%;

  ${media.md(css`
    display: none;
  `)};

  @media print {
    display: none;
  }
`;

export const ContextTitle = styled.h1`
  font-family: "Roboto Bold", "Roboto";
  font-size: ${remFontSize(20)};
  letter-spacing: ${rem(1.2)};
  color: ${darkerBlue};
  text-align: center;
  white-space: nowrap;
  padding: ${rem(16)} 0;
  margin-top: -${rem(8)};
  line-height: 1.1;
  text-transform: capitalize;

  ${media.md(css`
    margin-top: 0;
    display: none;
    padding: ${rem(12)} 0;
  `)};

  @media print {
    display: none;
  }
`;

export const Text = styled.span`
  font-family: Roboto;
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(1.3)};
  color: ${lightestBlue};
  transition: 0.2s color;
  text-transform: uppercase;

  ${media.md(css`
    letter-spacing: ${rem(0.2)};
    font-size: ${remFontSize(13)};
  `)};

  @media print {
    display: none;
  }
`;

export const Tab = styled.li`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  width: ${rem(250)};
  height: ${rem(38)};
  justify-content: center;
  padding-bottom: ${rem(8)};
  position: relative;
  transition: 0.2s background;
  user-select: none;
  flex: 1;

  ${isMsBrowser() &&
    media.md(css`
      flex-basis: ${rem(240)};
    `)};

  :after {
    background-color: ${white};
    bottom: -${rem(12)};
    content: "";
    height: ${rem(3)};
    left: 50%;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: 0.3s;
    width: 0;
  }

  ${media.md(css`
    height: ${rem(41)};
    padding-bottom: ${rem(10)};

    :after {
      bottom: -${rem(9)};
    }
  `)};

  ${({ active }) =>
    active &&
    css`
      cursor: none;
      pointer-events: none;

      :after {
        width: 100%;
        opacity: 1;
      }

      ${Text} {
        color: ${white};
      }
    `};

  ${({ active }) =>
    !active &&
    css`
      :hover {
        ${Text} {
          color: ${white};
        }
      }
    `};
`;

export const Wrapper = styled.nav`
  background-color: ${white};
  position: relative;

  ${media.md(css`
    background-color: ${darkestBlue};
    display: flex;
    justify-content: center;
    padding-top: ${rem(7)};
  `)};
`;
