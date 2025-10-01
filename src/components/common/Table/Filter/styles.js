import styled, { css } from "styled-components";
import {
  white,
  black50,
  blue,
  blue20,
  white40,
  darkGreen,
  lightBlack,
  darkBlue,
  grey90,
  lightPurple,
  purple,
  strongGreen
} from "../../../../styles/settings";
import { rem, remFontSize, media } from "../../../../styles/tools";

export const FilterWrapper = styled.form`
  font-family: "Lato Bold", "Lato";
  margin-top: ${rem(30)};
  width: 100%;
  background-color: ${darkBlue};
  box-shadow: 0 ${rem(1)} ${rem(12)} ${rem(6)} rgba(211, 225, 232, 0.13);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  font-size: ${remFontSize(11)};
  font-weight: 500;
  line-height: 1.45;
  text-transform: uppercase;

  ${media.md(css`
    background-color: ${white};
    position: static;
    height: ${rem(72)};
    align-items: center;
    justify-content: space-around;
    display: flex;
    border-radius: ${rem(4)};
    padding: 0 ${rem(15)};
  `)};

  ${({ isShown }) =>
    isShown &&
    css`
      z-index: 14;
    `};
`;

export const FilterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(26)};
  height: ${rem(26)};
  margin: ${rem(26)};
  margin-right: 0;
  border-radius: ${rem(4)};
  color: ${white};
  background: ${strongGreen};

  ${({ hasFilter }) =>
    !hasFilter &&
    css`
      background: #427fc4;
    `};

  ${media.md(css`
    color: ${blue};
    background: ${white40};
    margin: 0;
  `)};
`;

export const FilterLabel = styled.h4`
  color: ${white};
  line-height: 1.45;
  padding-left: ${rem(14)};

  ${media.md(css`
    color: ${blue};
  `)};
`;

export const FilterDescription = styled.span`
  text-transform: none;
  margin-left: ${rem(8)};

  ${media.md(css`
    display: none;
  `)};
`;

export const FilterShowHide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: ${rem(26)};
  height: ${rem(26)};
  margin-right: ${rem(26)};
  color: ${white};
  transform: rotate(180deg);

  ${media.md(css`
    display: none;
  `)};

  ${({ isShown }) =>
    isShown &&
    css`
      transform: rotate(0deg);
    `};
`;

export const RadioLabel = styled.h4`
  letter-spacing: 0.5;
  color: ${black50};
  padding-right: ${rem(18)};
  text-align: left;
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;

  ${media.md(css`
    margin: ${rem(20)};
  `)};
`;

export const FilterContentMobileWrapper = styled.div`
  align-items: center;
  overflow: hidden;
  height: 0;
  transition: height 0.2s linear;
  background: ${blue20};

  ${({ isShown }) =>
    isShown &&
    css`
      height: calc(100vh - ${rem(78)});
      padding: 0 ${rem(15)};
      text-align: center;

      ${FilterGroup} {
        background: ${white};
        padding: ${rem(15)};
        margin: ${rem(15)} 0;
      }

      ${RadioLabel} {
        width: ${rem(60)};
        padding: 0;
      }
    `};

  ${media.md(css`
    display: flex;
    overflow: visible;
    height: 0px;
    background: ${white};

    ${({ isShown }) =>
      isShown &&
      css`
        padding: 0;

        ${FilterGroup} {
          padding: 0;
          margin: 0;
        }

        ${RadioLabel} {
          width: auto;
          padding-right: ${rem(18)};
        }
      `};
  `)};
`;

export const FilterGroupCombos = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
`;

export const RadioButtion = styled.input`
  border: solid ${rem(1)} ${lightBlack};
  margin-right: ${rem(7)};
  margin-bottom: ${rem(2.5)};
  width: ${rem(12)};
  height: ${rem(12)};
`;

export const DayPickerWrapper = styled.div`
  position: relative;
  margin-right: ${rem(10)};
  cursor: pointer;

  .DayPickerInput-OverlayWrapper {
    left: -${rem(45)};

    ${({ isRange }) =>
      isRange &&
      css`
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
      `};

    ${media.md(css`
      left: -${rem(55)};
      position: absolute;
      top: auto;
    `)};
  }

  .DayPicker-NavButton--prev,
  .DayPicker-NavButton--next {
    top: ${rem(4)};

    ${media.md(css`
      top: ${rem(10)};
    `)};
  }

  .DatePickerRange {
    width: ${rem(250)};

    ${media.md(css`
      width: ${rem(550)};
    `)};
  }

  .DayPicker-Caption > div {
    font-family: "Lato";
    font-size: ${remFontSize(11)};
    font-weight: 600;
    letter-spacing: ${rem(0.4)};
    text-align: left;
    color: ${grey90};
  }

  .DayPicker-Weekday {
    font-family: "Lato";
    font-size: ${remFontSize(9)};
    padding: ${rem(1)} ${rem(10)};
    letter-spacing: ${rem(0.3)};
    color: ${lightPurple};
  }

  .DayPicker-Body {
    font-family: "Lato";
    font-size: ${remFontSize(10)};
    letter-spacing: ${rem(0.3)};
    color: ${purple};
  }

  .DayPicker-Month {
    margin: ${rem(5)};

    ${media.md(css`
      margin: ${rem(15)};
    `)};
  }

  input {
    cursor: pointer;
    color: ${darkGreen};
    width: calc(100vw - ${rem(150)});
    height: ${rem(34)};
    border-radius: ${rem(17)};
    border: solid ${rem(1)} ${lightBlack};
    font-size: ${remFontSize(12)};
    letter-spacing: ${rem(0.4)};
    padding: 0 ${rem(30)} 0 ${rem(15)};

    ${media.md(css`
      width: ${rem(200)};
    `)};

    ${({ isRange }) =>
      isRange &&
      css`
        text-overflow: ellipsis;

        ${media.md(css`
          width: ${rem(170)};
        `)};
      `};

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.4;
      `};
  }

  input:focus {
    outline: none;
  }

  input:disabled {
    background-color: ${white};
  }

  svg {
    position: absolute;
    right: ${rem(20)};
    top: ${rem(12)};

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.4;
      `};
  }
`;
