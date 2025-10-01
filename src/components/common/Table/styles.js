import styled, { css, keyframes } from "styled-components";
import {
  white,
  darkGreen,
  black50,
  blue20,
  lightgrey,
  lighestgrey,
  gray90
} from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools";
import { isMsBrowser } from "../../../utils/getNavigator";

export const ButtonWrapper = styled.div`
  margin: ${rem(0)} ${rem(0)};
`;

const opacitychange = keyframes`
  0% {
    opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

export const Title = styled.h1`
  font-size: ${remFontSize(24)};
  margin: ${rem(25)} 0 ${rem(10)};
  font-family: "Lato Bold", Lato;
  color: ${darkGreen};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 ${rem(6)};
  margin-bottom: ${rem(20)};
  table-layout: fixed;
  position: relative;
  font-size: ${remFontSize(11)};

  ${({ withBackground }) =>
    withBackground &&
    css`
      margin-bottom: 0;
    `};

  ${({ zebra, noBorderSpacing }) =>
    (zebra || noBorderSpacing) &&
    css`
      border-spacing: 0;
    `};
  ${({ increaseHeight }) =>
    increaseHeight &&
    css`
      ${BodyTr} {
        height: ${rem(40)};
      }
    `};

  ${({ borderSpacing }) =>
    borderSpacing &&
    css`
      border-spacing: 0 ${rem(borderSpacing)};
    `};
`;

export const CollapseTable = styled(Table)`
  margin-bottom: 0;
  border-spacing: 0;
  font-size: ${remFontSize(10)};
`;

export const TotalTable = styled(Table)`
  height: ${rem(50)};
  border-collapse: collapse;
  border-radius: ${rem(4)};
  box-shadow: 0 0 0 ${rem(1)} ${darkGreen};
  background-color: transparent;
  position: relative;
  margin-top: -${rem(10)};

  ${isMsBrowser() &&
  media.md(css`
      border: solid ${rem(1)} ${darkGreen};
      background-clip: content-box;
      border-collapse: separate;
      box-shadow: none;
    `)};
`;

export const Tbody = styled.tbody`
  font-family: "Lato Bold", Lato;
  letter-spacing: ${rem(0.4)};
  text-align: left;
  color: ${black50};
`;

export const Background = styled.div`
  ${({ withBackground }) =>
    withBackground &&
    css`
      padding: 0 ${rem(15)};
      position: relative;

      :before {
        content: "";
        position: absolute;
        top: ${rem(22)};
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${white};
        border-radius: ${rem(4)};
        box-shadow: 0 ${rem(1)} ${rem(12)} ${rem(6)} rgba(211, 225, 232, 0.13);
      }

      ${BodyTr} {
        box-shadow: none;
        height: ${rem(31)};
        font-size: ${remFontSize(11)};

        :first-child {
          height: ${rem(41)};

          ${Td} {
            padding-top: ${rem(10)};
          }
        }

        :last-child {
          height: ${rem(41)};

          ${Td} {
            padding-bottom: ${rem(10)};
          }
        }
      }
    `};

  ${({ withCollapse }) =>
    withCollapse &&
    css`
      padding: ${rem(5)} ${rem(25)};

      :before {
        position: absolute;
        top: -${rem(15)};
        border-radius: 0;
        box-shadow: none;
      }

      ${BodyTr} {
        box-shadow: none;
        height: ${rem(31)};
      }
    `};

  ${({ withCollapse, withBackground }) =>
    !withCollapse &&
    withBackground &&
    css`
      margin-top: ${rem(20)};
    `};

  ${({ withCollapse, withBackground }) =>
    withCollapse &&
    withBackground &&
    css`
      padding: 0 ${rem(10)} 0;
    `};
`;

export const BodyTr = styled.tr`
  height: ${rem(36)};
  background-color: ${white};
  box-shadow: 0 ${rem(1)} ${rem(12)} ${rem(6)} rgba(211, 225, 232, 0.13);

  ${({ style }) =>
    style &&
    css`
      ${style};
    `}; 

  ${({ collapse }) =>
    collapse &&
    css`
      cursor: pointer;
      font-size: ${remFontSize(12)};
      font-weight: bold;
    `};

  ${({ zebra }) =>
    zebra &&
    css`
      :nth-child(even) {
        background-color: ${blue20};
      }
    `};

  ${({ selectedLine }) =>
    selectedLine &&
    css`
      background-color: ${blue20};
    `};

  ${({ selectedLines }) =>
    selectedLines &&
    css`
      box-shadow: 0 0 0 ${rem(1)} ${gray90};
      border-radius: ${rem(4)};
    `};   
`;

export const IconWrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(10)};

  ${({ collapse }) =>
    collapse &&
    css`
      transform: rotate(-180deg);
    `};
`;

export const ActionWrapper = styled.div`
  cursor: pointer;
  display: inline-flex;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      cursor: default;
    `};
`;

export const TotalBodyTr = styled(BodyTr)`
  background-color: inherit;
  box-shadow: none;
  height: ${rem(12)};
`;

export const Td = styled.td`
  font-family: "Lato";
  width: ${rem(95)};
  vertical-align: middle;
  text-align: left;
  padding: 0 ${rem(10)};

  :first-child {
    font-weight: bold;
    padding-left: ${rem(25)};
    border-top-left-radius: ${rem(4)};
    border-bottom-left-radius: ${rem(4)};
  }

  :last-child {
    padding-right: ${rem(25)};
    border-top-right-radius: ${rem(4)};
    border-bottom-right-radius: ${rem(4)};
  }

  ${({ style }) =>
    style &&
    css`
      ${style};
    `};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};

  ${({ shimmerLoading }) =>
    shimmerLoading &&
    shimmerLoading.loading === false &&
    css`
      animation: ${opacitychange} 1s ease-in-out 1;
    `};
`;

export const CollapseTd = styled(Td)`
  padding: 0;

  ${({ shimmerLoading }) =>
    shimmerLoading &&
    shimmerLoading.loading === true &&
    css`
      padding: 0 ${rem(10)};
    `};

  :first-child {
    padding-left: ${rem(50)};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :last-child {
    padding-right: ${rem(50)};
    border-top-right-radius: ${rem(0)};
    border-bottom-right-radius: ${rem(0)};
  }
`;

export const CollapseTotalTd = styled(CollapseTd)`
  font-weight: bold;
  font-size: ${remFontSize(12)};
  border-top: solid ${rem(1)} ${lightgrey};

  :first-child {
    text-transform: uppercase;
  }
`;

export const TotalTd = styled(Td)`
  font-family: "Lato Bold", "Lato";
  font-size: ${remFontSize(12)};
  font-weight: 500;
  color: ${darkGreen};
  padding-bottom: ${rem(6)};
`;

export const TotalTdLabel = styled(TotalTd)`
  font-size: ${remFontSize(13)};
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;
  bottom: ${rem(13)};

  ${isMsBrowser() &&
  media.md(css`
      bottom: ${rem(17)};
    `)};
`;

export const Th = styled(Td.withComponent("th"))`
  font-family: "Lato Bold", Lato;
  font-size: ${remFontSize(10)};
  vertical-align: bottom;
  padding-bottom: ${rem(5)};
  line-height: 1.5;

  ${({ withBackground }) =>
    withBackground &&
    css`
      padding-bottom: ${rem(10)};
    `};

  ${({ style }) =>
    style &&
    css`
      ${style};
    `};
`;
export const TotalTh = styled(Th)`
  font-family: "Lato";
  font-size: ${remFontSize(9)};
  color: ${black50};
  padding-top: ${rem(6)};
`;

export const Thead = styled.thead`
  font-family: "Lato Bold", Lato;
  font-size: ${remFontSize(9)};
  line-height: 1.78;
  letter-spacing: normal;
  text-transform: uppercase;
  text-align: left;
  color: ${darkGreen};
`;

export const Tr = styled.tr`
  ${({ spaceBetweenHeadAndBody }) =>
    spaceBetweenHeadAndBody &&
    css`
      border-spacing: 0;
      line-height: ${rem(spaceBetweenHeadAndBody)};
    `};
`;

export const DenyWhiteImg = styled.img`
  transform: translateY(-14px);
`;

export const CheckWhiteImg = styled.img`
  transform: translateY(-13px);
`;

export const Separator = styled.span`
  width: ${rem(942)};
  display: inline-block;
  height: ${rem(1)};
  background: ${lighestgrey};

  margin-bottom: ${rem(4)};
`;
