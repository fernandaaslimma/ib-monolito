import styled, { css } from "styled-components";

import { rem, remFontSize, media } from "../../../styles/tools";
import { blue, darkBlue } from "../../../styles/settings";
import { animationFadeIn } from "../../../styles/tools/animation";
import { DayPickerWrapper } from "../../common/Table/Filter/styles";

export const Wrapper = styled.div`
  padding-bottom: ${rem(20)};
  ${animationFadeIn}
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperInputs = styled.div`
  width: 100%;
  height: ${rem(48)};
  display: flex;
  flex-direction: row;
`;

export const WrapperInput = styled.div`
  width: 100%;
  height: ${rem(48)};
  ${({ width }) =>
    width &&
    css`
      max-width: ${width};
    `};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};
`;

export const WrapperIcon = styled.div`
  width: 140px;
  padding-right: 32px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: #eaf1f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Lato;
  font-size: 11px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: ${blue};
  text-transform: uppercase;
  padding-left: 10px;
  cursor: default;
  width: 90px;
`;

export const WrapperElements = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 0 0;
`;

export const WrapperIconDropdown = styled.div``;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 24px;
  height: ${rem(48)};
`;

export const StatementDayPickerWrapper = styled(DayPickerWrapper)`
  margin-right: ${rem(24)}
  height: ${rem(48)};

  .DayPickerInput-OverlayWrapper {
    ${media.md(css`
      left: 0;
    `)};
  }

  .DatePickerRange {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rem(635)};
  }

  .DayPicker-Caption {
    padding-bottom: ${rem(15)};
  }

  .DayPicker-Caption > div {
    font-size: ${remFontSize(15)};
    letter-spacing: ${rem(1)};
  }

  .DayPicker-Weekday {
    font-size: ${remFontSize(13)};
    letter-spacing: ${rem(1)};
    padding-bottom: ${rem(15)};
  }

  .DayPicker-Body {
    font-size: ${remFontSize(12)};
    letter-spacing: ${rem(1)};
  }

  .DayPicker-Day {
    padding-bottom: ${rem(15)};
  }

  input {
    display: flex;
    align-items: center;
    width: ${rem(228)};
    height: ${rem(48)};
    border-radius: ${rem(4)};
    border: 1px solid #D3DDE4;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: ${remFontSize(12)};
    line-height: ${remFontSize(12)};
    letter-spacing: ${remFontSize(0.5)};
    color: #4E768F;

    :focus {
      border-color: ${darkBlue};
      color: ${darkBlue};
    }
  }

  svg {
    right: ${rem(13)};
    top: ${rem(21)};
  }
`;

export const ViewText = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100px;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  background: transparent;
  transition: opacity linear 0.2s;
  outline: none;
  border: 0;
  font-style: normal;
  font-weight: 700;
  line-height: ${remFontSize(16)};
  text-align: center;
  letter-spacing: 0.2px;
  color: #3976cf;
  margin-right: ${rem(30)};
  text-decoration: underline;

  &:hover {
    opacity: 0.7;
  }
`;

// export const FilterLabel = styled.h1`
//   color: ${grey180};
//   line-height: 1.45;
//   padding: 0 ${rem(14)};
// `;
