import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import {
  lightBlue,
  grey160,
  white,
  orange,
  red,
  blue70
} from "../../../styles/settings";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  background: ${white};
  font-family: Lato;
  z-index: 100001;
  margin: ${rem(60)};
  padding: ${rem(30)};
  border-radius: ${rem(10)};
  box-shadow: 0 ${rem(5)} ${rem(40)} 0 ${grey160};

  ${({ alignment }) =>
    alignment
      ? css`
          ${alignment[0]}: 0;
          ${alignment[1]}: 0;
        `
      : css`
          top: 0;
          left: 0;
        `};
`;

export const Message = styled.span`
  display: inline-block;
  margin-bottom: ${rem(20)};
`;

export const Counter = styled.div`
  background: ${lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  width: ${rem(80)};
  height: ${rem(80)};
  padding-bottom: ${rem(1)};
  font-size: ${remFontSize(45)};
  border-radius: 100%;
  margin: 0 ${rem(30)} 0 0;
  transition: background 0.8s ease-in-out;

  ${({ left, threshold }) => {
    if (left <= (threshold * 1) / 3) {
      return css`
        background: ${red};
      `;
    } else if (left <= (threshold * 2) / 3) {
      return css`
        background: ${orange};
      `;
    }
  }};
`;

export const Action = styled.div`
  width: ${rem(230)};
  font-size: ${remFontSize(18)};
  padding-right: ${rem(30)};
  line-height: ${rem(22)};
  font-weight: bold;
  color: ${blue70};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
