import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import {
  black50,
  blue10,
  gray200,
  gray300,
  gray90,
  white
} from "../../../styles/settings";

export const LoaderArea = styled.div`
  background-color: ${white};
  height: ${rem(6)};
`;

export const DesktopContent = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: ${rem(60)};
`;

export const Title = styled.h2`
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  font-size: ${remFontSize(12)};
  line-height: 0.83;
  letter-spacing: ${rem(0.2)};
  text-align: left;
  color: ${white};
  text-transform: uppercase;
`;

export const ChangeLanguageContainer = styled.div`
  position: absolute;
  top: ${rem(20)};
  right: ${rem(7)};

  ${media.md(css`
    position: static;
    margin-right: ${rem(10)};
  `)};

  @media print {
    display: none;
  }
`;

export const NavigationMenuWrapper = styled.div`
  @media print {
    display: none;
  }
`;

export const HeadWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;

  ${media.md(css`
    position: static;
  `)};

  @media print {
    display: none;
  }
`;

export const PagenameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: ${rem(50)};
`;

export const PageMenu = styled.h2`
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14.4)};
  letter-spacing: ${rem(0.36)};
  color: ${black50};

  ${({ currentSubMenuLabel }) =>
    !currentSubMenuLabel &&
    css`
      font-size: ${remFontSize(16)};
      line-height: ${rem(16)};
      color: ${blue10};
    `};
`;

export const PageSubMenu = styled.h2`
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(16)};
  line-height: ${rem(16)};
  color: ${blue10};
  letter-spacing: ${rem(0.36)};
  margin-top: ${rem(4)};
  margin-bottom: ${rem(8)};
`;

export const ModalTitle = styled.span`
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(16)};
  line-height: ${rem(19.2)};
  letter-spacing: ${rem(0.45)};
  color: ${gray300};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(24)};
`;

export const ModalText = styled.span`
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${rem(21)};
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
  margin-inline: ${rem(16)};
  margin-top: ${rem(24)};
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${rem(16)} ${rem(24)};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: 100%;
  height: ${rem(2)};
  background-color: ${gray90};
`;
