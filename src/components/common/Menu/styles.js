import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import {
  blue20,
  darkGreen,
  gray80,
  neutral200,
  white
} from "../../../styles/settings";

export const Container = styled.div`
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${blue20};
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
  margin-top: ${rem(50)};

  ${({ menuShown }) =>
    menuShown &&
    css`
      transform: translateX(0);
    `};
`;

export const SubMenuContainer = styled.div`
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${blue20};
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
  top: ${rem(50)};

  ${({ subOpen }) =>
    subOpen &&
    css`
      transform: translateX(0);
    `};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${rem(8)};
  border: ${rem(1)} solid ${gray80};
  box-shadow: 0px ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.08);
  padding: ${rem(24)} ${rem(16)};
  margin-top: ${rem(4)};
  margin-inline: ${rem(16)};
  background-color: white;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  height: ${rem(30)};
  margin-top: ${rem(12)};
  margin-left: ${rem(8)};
  width: min-content;

  @keyframes rotateIcon {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes rotateIconReverse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }

  ${({ isNavigationMenuShown }) =>
    isNavigationMenuShown
      ? css`
          animation: rotateIcon 0.5s;
        `
      : css`
          animation: rotateIconReverse 0.5s;
        `};
`;

export const RotateContainer = styled.div``;

export const LeftIconContainer = styled.div`
  width: ${rem(24)};
  height: auto;
`;

export const MenuIconContainer = styled.div`
  position: fixed;
  background-color: ${white};
  padding-inline: ${rem(8)};
  z-index: 13;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${rem(8)};
`;

export const Title = styled.span`
  margin-left: ${rem(12)};
  font-family: Lato;
  font-size: ${remFontSize(16)};
  line-height: ${rem(19.2)};
  font-weight: 600;
  color: ${darkGreen};
`;

export const Value = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  font-weight: 700;
  color: ${darkGreen};
`;

export const Subtitle = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.58)};
  line-height: ${rem(12)};
  font-weight: 400;
  color: ${darkGreen};
  display: flex;
  align-items: center;
  margin-top: ${rem(4)};
`;

export const ProfileLabel = styled.span`
  font-weight: 700;
  color: ${neutral200};
  margin-left: ${rem(4)};
`;

export const Label = styled.span`
  font-family: Lato;
  font-weight: 400;
  color: ${neutral200};
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  text-transform: capitalize;
`;
