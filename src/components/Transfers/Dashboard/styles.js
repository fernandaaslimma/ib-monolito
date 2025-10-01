import styled, { css, keyframes } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import {
  white,
  white30,
  blue,
  blue20,
  blue30,
  grey180,
  grey90,
  gray300,
  black50,
  darkGreen,
  errorRed
} from "../../../styles/settings";
import { InputWrapper, InputField } from "../../common/Input/styles";
import { default as ButtonRaw } from "../../common/Button";

const animateHeight = keyframes`
  0% {
    max-height: ${rem(0)};
  }
  100% {
    max-height: ${rem(460)};
  }
`;

const reveal = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const DashboardWrapper = styled.div`
  background: ${white30};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(25)} 0;
  `)};
`;

export const Currency = styled.span`
  color: ${grey180};
  margin: ${rem(4.5)} 0 0 0;
  font-size: ${remFontSize(12)};
`;

export const Button = styled(ButtonRaw)`
  height: ${rem(50)};
  line-height: ${rem(40)};

  ${({ isNewTransfer }) =>
    isNewTransfer &&
    css`
      background-color: ${blue};
      border-color: ${blue};
      color: ${white};
      margin: 0 0 0 auto;
    `};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }
`;

export const Title = styled.h1`
  font-size: ${remFontSize(24)};
  display: flex;
  align-items: center;
  padding: ${rem(26)} 0 ${rem(20)} 0;
  font-family: "Lato Bold", Lato;
  color: ${darkGreen};
`;

export const Fieldset = styled.div`
  padding: ${rem(14)};
  margin: 0 ${rem(5)};
  height: ${rem(192)};
  color: ${grey90};
  border: solid ${rem(1)} ${blue30};
  border-radius: ${rem(4)};
  float: left;
  display: flex;
  flex-direction: column;
  ${({ width }) =>
    width &&
    css`
      width: calc(${width}% - ${rem(10)});
    `};

  ${({ loading }) =>
    loading &&
    css`
      justify-content: space-around;
    `};
`;

export const Content = styled.div`
  margin-top: ${rem(20)};

  ${InputField} {
    height: ${rem(48)};
    padding-left: ${rem(9.6)};
  }

  ${InputWrapper} {
    margin: ${rem(9)} ${rem(6)} ${rem(9)} 0;
    height: ${rem(48)};
  }

  form {
    opacity: 0;
    animation: ${reveal} 0.4s linear forwards;
  }
`;

export const FieldsetTitle = styled.span`
  color: ${grey90};
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.2)};
  font-weight: bold;
  text-transform: uppercase;
  font-family: Lato;
  margin-bottom: ${rem(15)};
`;

export const TitleWrapper = styled.div`
  padding: 0;
  width: 100%;
  ${({ withRows }) => withRows && css``};
  ${({ bigMargin }) =>
    bigMargin &&
    css`
      margin-bottom: ${rem(6.2)};
    `};
`;

export const FloatingText = styled.div`
  display: inline-flex;
  color: ${grey90};
  width: 100%;
  margin-top: ${rem(12)};
`;

export const AvailableBalBox = styled.span`
  width: 100%;
  height: ${rem(45)};
  font-size: ${remFontSize(18)};
  font-family: Lato;
`;

export const Row = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${rem(20)};
`;

export const ShowHideWrapper = styled.div`
  overflow: hidden;
  margin-bottom: ${rem(40)};

  ${({ open }) =>
    open &&
    css`
      animation: ${animateHeight} 0.2s linear;
    `};
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  float: right;
  margin: ${rem(-60)} ${rem(-15)};
`;

export const AgencyWrapper = styled.div`
  width: calc(50% - ${rem(12)});
  display: flex;
  flex-direction: column;
  margin: 0 ${rem(6)} 0 0;
`;

export const CnpjWrapper = styled.div`
  width: calc(74% - ${rem(12)});
  display: flex;
  flex-direction: column;
  margin: 0 ${rem(6)} 0 0;
`;

export const AgencyAlert = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.4)};
  color: ${black50};
`;

export const WrapperFavoredData = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
`;

export const TitleFavoredData = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.2)};
  color: ${gray300};
`;

export const WrapperCheckbox = styled.div`
  margin-left: ${rem(12)};
`;

export const InputErrorMessage = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.4)};
  color: ${errorRed};
`;

export const ContainerList = styled.div`
  margin-top: ${rem(24)};
`;

export const CardTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: ${remFontSize(10)};
  color: ${grey90};
`;

export const DropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: ${rem(180)} 1fr;
`;

export const WrapperList = styled.table`
  display: contents;
`;

export const ListHead = styled.tr`
  display: grid;
  grid-template-columns: 18% 15% 33% 10% auto 38px;
  margin: ${rem(14)} 0 0 ${rem(30)};
`;

export const ListHeadTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: ${remFontSize(9)};
  color: ${darkGreen};
`;

export const ListBody = styled.tr`
  background: ${blue20};
  display: grid;
  grid-template-columns: 18% 15% 33% 10% 21% 3%;
  padding-left: ${rem(30)};
  margin-top: ${rem(8)};
  border-radius: ${rem(3)};
`;

export const ListBodyTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: ${remFontSize(11)};
  color: ${grey90};
  padding: ${rem(14)} ${rem(8)} ${rem(14)} 0;
  transition: all 0.5s linear;

  ${({ icon }) =>
    icon &&
    css`
      cursor: pointer;
      display: flex;
      justify-content: center;
    `};
`;

export const TextBold = styled.div`
  font-weight: 700;
`;

export const WrapperDropdown = styled.div`
  padding: ${rem(15)} 0;
`;

export const WrapperDefaultContent = styled.div`
  padding: 0 ${rem(364)} ${rem(100)};
`;

export const InputHelperText = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  font-weight: 700;
  color: #909BA2;
  margin-right: ${rem(8)};
`;

export const InputHelperTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;



