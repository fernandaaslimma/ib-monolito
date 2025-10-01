import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { red, black50, white, grey20, black } from "../../../styles/settings";

export const Title = styled.h1`
  color: ${red};
  font-family: "Lato Bold", "Lato Medium", Lato;
  font-size: ${remFontSize(16)};
  letter-spacing: ${rem(0.3)};
  margin-bottom: ${rem(18)};
  ${({ modalType }) =>
    modalType &&
    modalType === "Information" &&
    css`
      color: ${black};
    `}
`;

export const IconContainer = styled.div`
  color: ${red};
  margin-bottom: ${rem(10)};
`;

export const Description = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  line-height: 1.46;
  letter-spacing: ${rem(0.3)};
  color: ${black50};
  margin: 0 ${rem(30)};
`;

export const Close = styled.span`
  font-family: "Lato Bold", "Lato Medium", Lato;
  font-size: ${remFontSize(13)};
  letter-spacing: ${rem(0.2)};
  text-align: left;
  margin-left: ${rem(10)};
`;

export const CloseBtn = styled.a`
  height: ${rem(43)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid ${rem(0.7)} ${grey20};
  color: ${black50};
  cursor: pointer;
  margin-top: ${rem(18)};
`;

export const Content = styled.section`
  position: relative;
  z-index: 1;
  border-radius: ${rem(8)};
  background-color: ${white};
  box-shadow: 0 ${rem(4)} ${rem(40)} ${rem(10)} rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  text-align: center;
  top: 0;
  left: 0;

  ${({ pageAsModal }) =>
    pageAsModal &&
    css`
      position: absolute;
      min-height: 100vh;
      padding-top: ${rem(30)};
      padding-bottom: ${rem(30)};
      right: 0;
      width: auto;
      height: auto;
    `}

  ${({ fixedModal }) =>
    fixedModal &&
    css`
      padding: ${rem(30)} 0 ${rem(30)};
      overflow-y: scroll;
    `}
`;
