import styled, { css } from "styled-components";
import {
  white,
  black400,
  gray300,
  gray90,
  blue20
} from "../../../styles/settings";
import { rem, remFontSize } from "../../../styles/tools";

const velocity = ({ velocity }) => velocity;

export const WrapperBottomSheet = styled.div`
  display: block;
`;

export const BottomSheet = styled.div`
  flex-direction: column;
  display: flex;
  background: ${white};
  transform: translateY(100%);
  overflow-y: auto;
  z-index: 2000;
  width: 100%;
  max-height: 100vh;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: transform ${velocity || 0.5}s linear;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(0%);
    `}

  ${({ zIndex }) =>
    zIndex &&
    css`
      z-index: ${zIndex};
    `}

    ${({ bottomsheetBlue }) =>
      bottomsheetBlue &&
      css`
        background: #f6f9fb;
      `}
`;

export const BottomSheetBack = styled.div`
  position: fixed;
  z-index: 1999;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: ${black400};
  opacity: 60%;

  ${({ zIndex }) =>
    zIndex &&
    css`
      z-index: ${zIndex - 1};
    `}
`;

export const Head = styled.section`
  position: sticky;
  top: 0;
  padding: ${rem(16)};
  background: ${white};
  display: flex;
  border-bottom: solid ${rem(2)} ${gray90};
  color: ${gray300};
  z-index: 1;

  @media (min-width: 981px) {
    border-radius: ${rem(8)} ${rem(8)} 0 0;
  }
`;

export const Footer = styled.section`
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      background: ${blue20};
    `};
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  z-index: 1;

  @media (min-width: 981px) {
    border-radius: 0 0 ${rem(8)} ${rem(8)};
  }
`;

export const FooterAdapt = styled.section`
  width: 100%;
  @media (min-width: 981px) {
    width: 70%;
  }
`;

export const Title = styled.h3`
  ${({ ellipsis, widthTagEllipsis }) =>
    ellipsis &&
    css`
      max-width: ${widthTagEllipsis};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};

  font-family: Lato;
  flex-grow: 1;
  font-size: ${remFontSize(18)};
  margin: 0;
  text-align: center;
  font-weight: 500;
`;

export const StyledContent = styled.div`
  background: ${blue20};
`;

export const FullHeightWrapper = styled.div`
  height: calc(100vh - ${rem(52)});
  background: ${blue20};

  @media (min-width: 981px) {
    max-height: 68vh;
    overflow: auto;
    height: auto;
  }
  overflow-y: scroll;
`;

export const ClickableItem = styled.span`
  cursor: pointer;
`;

export const WrapperDesktop = styled.div`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  top: 0px;
  left: 0px;
  padding: 0 20%;
`;

export const DesktopContainer = styled.div`
  z-index: 9999;
  border-radius: ${rem(8)};
  background-color: ${white};
  box-shadow: 0 ${rem(4)} ${rem(40)} ${rem(10)} rgba(0, 0, 0, 0.2);
  width: 100%;
  overflow: hidden;
`;
