import styled, { css } from "styled-components";

import { rem, remFontSize } from "../../../styles/tools";
import {
  darkGreen,
  blue30,
  grey90,
  red,
  strongGreen,
  grey70,
  lighestgrey,
  lightGreen,
  orange,
  lightRed,
  blue40,
  darkBlue,
  grey160
} from "../../../styles/settings";

export const Title = styled.h1`
  font-family: 'Lato';
  font-style: normal;
  line-height: ${remFontSize(29)};
  letter-spacing: ${remFontSize(0.4)};
  font-family: Lato;
  font-weight: 700;
  font-size: ${rem(24)};
  color: ${darkGreen};
  /*padding-bottom: ${rem(20)};*/
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}
  ${({ error }) =>
    error &&
    css`
      color: ${red};
    `}
  ${({ valid }) =>
    valid &&
    css`
      color: ${strongGreen};
    `}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${rem(90)};
`;

export const FirstTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${rem(40)} 0 ${rem(10)} 0;
  font-size: ${remFontSize(24)};
`;

export const FirstThird = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${rem(30)} 0 ${rem(17)} 0;
  font-size: ${remFontSize(24)};
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  min-height: ${rem(90)};
`;

export const StatusArea = styled.div`
  padding-right: ${rem(16)};
`;

export const Container = styled.div`
  flex-direction: column;
  padding: ${rem(20)};
  display: flex;
  width: ${rem(1150)};
  max-width: 100%;
  box-sizing: content-box;
  ${({ centered }) =>
    centered &&
    css`
      align-self: center;
    `}
`;

export const Box = styled.div`
  border: solid ${rem(1)} ${blue30};
  padding: ${rem(20)};
  border-radius: ${rem(4)};
  margin-top: 20px;
  position: relative;
  background: white;
  outline: none;
  transition: border 0.3s linear, box-shadow 0.3s linear;

  ${({ error }) =>
    error &&
    css`
      border: solid 1px ${lightRed};
      box-shadow: 0 0 15px 0 rgba(255, 106, 106, 0.3);
    `}

  ${({ selected }) =>
    selected &&
    css`
      &:focus-within {
        border: solid 1px ${darkBlue};
        box-shadow: 0 0 15px 0 rgba(74, 144, 226, 0.3);
      }
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding)};
    `}
`;

export const Session = styled.div`
  margin-top: 0px;
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${rem(marginTop)};
    `}
`;

export const BoxTitle = styled.h1`
  font-family: Lato;
  font-size: ${rem(12)};
  font-weight: bold;
  color: ${darkGreen};
  text-transform: uppercase;
`;

export const Fieldset = styled.div`
  padding: ${rem(14)};
  margin: 0 ${rem(5)};
  height: ${rem(120)};
  color: ${grey90};
  border: solid ${rem(1)} ${blue30};
  border-radius: ${rem(4)};
  align-items: center;
  justify-content: space-between;
  display: inline-flex;
  flex-wrap: wrap;

  ${({ withRows }) =>
    withRows &&
    css`
      padding: ${rem(24)} ${rem(30)};
    `};
`;

export const FieldsetTitle = styled.span`
  color: ${grey90};
  font-size: ${rem(10)};
  letter-spacing: ${rem(0.2)};
  font-weight: bold;
  text-transform: uppercase;
  font-family: Lato;
  margin-bottom: ${rem(15)};
`;

export const ErrorMessage = styled.p`
  font-family: Lato;
  font-size: ${rem(11)};
  letter-spacing: ${rem(0.1)};
  color: ${red};
  height: ${rem(16)};
  margin-top: ${rem(7)};
`;

export const TextArea = styled.textarea`
  min-height: 120px;
  width: 100%;
  resize: none;
  padding-left: 15px;
  padding-top: 17px;
  border-radius: 0.25rem;
  border: solid 0.0625rem #e2e2e2;
`;

export const Flex = styled.div`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent && `justify-content:${justifyContent}`}
`;

export const FlexItem = styled.div`
  display: flex;
  ${({ flex }) => flex && `flex:${flex}`}
  ${({ alignItems }) => alignItems && `align-items:${alignItems}`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content:${justifyContent}`}
`;

export const MainContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  ${({ withSearch }) =>
    withSearch &&
    css`
      flex-direction: column;
    `};
`;

export const CompanySearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 64px;
  box-shadow: 0 1px 12px 6px rgba(211, 225, 232, 0.13);

  form {
    max-width: 1150px;
  }
`;

export const GhostArea = styled.div`
  border: dashed 1px ${blue40};
  padding: ${rem(20)};
  border-radius: ${rem(4)};
  color: ${blue40};
  font-size: ${rem(14)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  background: transparent;
  width: 100%;
  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding)};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${rem(width)};
    `}
`;

export const TextColor = styled.div`
  ${({ metallicBlue }) =>
    metallicBlue &&
    css`
      * {
        color: ${grey70};
      }
    `}
`;

export const AddBox = styled.button`
  font-family: Lato Bold;
  font-size: ${rem(14)};
  border: dashed 1px ${lighestgrey};
  padding: ${rem(15)};
  border-radius: ${rem(4)};
  color: ${lighestgrey};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: ${rem(0.64)};
  width: 100%;
  background: white;
  outline: none;
  transition: border-color 0.3s linear, color 0.3s linear;

  &:hover {
    border-color: ${grey160};
    color: ${grey160};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${rem(marginTop)};
    `}
`;

export const Badge = styled.span`
  border-radius: ${rem(12)};
  font-size: ${rem(10)};
  padding: ${rem(2)} ${rem(10)} ${rem(2)} ${rem(10)};
  margin-left: ${rem(-10)};
  background: ${lightGreen};
  color: white;
  text-align: center;
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${rem(minWidth)};
    `}
  ${({ warning }) =>
    warning &&
    css`
      background: ${orange};
    `}
  ${({ danger }) =>
    danger &&
    css`
      background: ${lightRed};
    `}

  * {
    color: white;
  }
`;
