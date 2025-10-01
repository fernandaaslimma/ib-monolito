import styled, { css, keyframes } from "styled-components";
import {
  darkGreen,
  black60,
  white20,
  rgbaWhite20_60,
  red
} from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools";
import { Icon } from "react-bocombbm-components";
import { isInternetExplorer } from "../../../utils/getNavigator";

const showOverflow = keyframes`
  99% {
    overflow: hidden;
  }

  100% {
    overflow: visible;
  }
`;

export const Wrapper = styled.div`
  font-size: ${remFontSize(20)};
  box-shadow: ${rem(0)} ${rem(4)} ${rem(10)} ${rgbaWhite20_60};
  padding: 0;
  display: flex;
  margin-bottom: ${rem(15)};
  flex-direction: column;
  font-family: "Lato Bold", Lato;
  color: ${darkGreen};
  border: solid 1px ${rgbaWhite20_60};
  border-radius: ${rem(4)};
  background: white;
  position: relative;
`;

export const Content = styled.div`
  padding: 0;
  overflow: hidden;
  max-height: 0;
  transition: all 0.2s linear;

  ${({ heightToCalc }) =>
    heightToCalc &&
    css`
      max-height: ${heightToCalc * 6}px;
      transition: all 0.2s linear;
    `};

  ${({ isShown }) =>
    isShown &&
    css`
      animation: ${showOverflow} 0.2s linear forwards;
      ${isInternetExplorer() &&
        css`
          overflow: visible;
        `};
    `};
`;

export const ShowHideHead = styled.div`
  padding: ${rem(10)} ${rem(15)} ${rem(10)} 0;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${({ isShown }) =>
    isShown &&
    css`
      border-bottom: solid 1px ${white20};
      position: sticky;
      top: 0;
      z-index: 1;
      background: white;

      ${OpenEditIcon} {
        transform: rotate(-180deg);
      }

      ${Description} {
        font-family: "Lato Bold", Lato;
        font-size: ${remFontSize(13)};
      }
    `};

  ${({ valid, isShown }) =>
    !valid &&
    !isShown &&
    css`
      ${Description},
      ${Icon},
      ${OpenEditIcon} {
        color: ${red};
      }
    `};
`;

export const Description = styled.div`
  padding: 0 0 0 ${rem(14)};
  font-size: ${remFontSize(15)};
  color: ${black60};
  text-align: left;
  font-family: "Lato", Lato;
  line-height: ${rem(15)};
  ${media.sm(css`
    line-height: ${rem(28)};
  `)};
  flex-grow: 1;
`;

export const OpenEditIcon = styled(Icon)`
  transition: all 0.2s linear;
  margin-left: ${rem(10)};
`;
