import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";

export const ContentWrapper = styled.div`
  ${({ width, height, cornerSize }) =>
    css`
      width: ${rem(width + cornerSize + cornerSize)};
      height: ${rem(height + cornerSize + cornerSize)};
    `};

  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ cornerSize }) =>
    cornerSize &&
    css`
      padding: ${rem(cornerSize)};
    `};

  border: none;
  flex-wrap: wrap;
  position: relative;

  :after,
  :before {
    display: block;
    content: "";
    ${({ cornerSize, cornerThickness }) =>
      css`
        width: ${rem(cornerSize - cornerThickness)};
        height: ${rem(cornerSize - cornerThickness)};
      `};
    position: absolute;
  }

  :before {
    top: 0px;
    left: 0px;
    ${({ cornerColor, cornerThickness, cornerOpacity }) =>
      css`
        opacity: ${cornerOpacity};
        border-top: ${rem(cornerThickness)} solid ${cornerColor};
        border-left: ${rem(cornerThickness)} solid ${cornerColor};
      `};
  }
  :after {
    top: 0px;
    right: 0px;
    ${({ cornerColor, cornerThickness, cornerOpacity }) =>
      css`
        opacity: ${cornerOpacity};
        border-top: ${rem(cornerThickness)} solid ${cornerColor};
        border-right: ${rem(cornerThickness)} solid ${cornerColor};
      `};
  }
`;

export const Corner = styled.div`
  :after,
  :before {
    display: block;
    content: "";

    position: absolute;
    ${({ cornerSize, cornerThickness }) =>
      css`
        width: ${rem(cornerSize - cornerThickness)};
        height: ${rem(cornerSize - cornerThickness)};
      `};
  }

  :before {
    bottom: 0px;
    left: 0px;
    ${({ cornerColor, cornerThickness, cornerOpacity }) =>
      css`
        opacity: ${cornerOpacity};
        border-bottom: ${rem(cornerThickness)} solid ${cornerColor};
        border-left: ${rem(cornerThickness)} solid ${cornerColor};
      `};
  }
  :after {
    bottom: 0px;
    right: 0px;

    ${({ cornerColor, cornerThickness, cornerOpacity }) =>
      css`
        opacity: ${cornerOpacity};
        border-bottom: ${rem(cornerThickness)} solid ${cornerColor};
        border-right: ${rem(cornerThickness)} solid ${cornerColor};
      `};
  }
`;
