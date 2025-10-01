import styled, { css, keyframes } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import {
  lightBlue,
  metallicBlue30,
  white,
  orange,
  red,
  blue70
} from "../../../styles/settings";

const defaultMargin = rem(30);
const defaultNegativeMargin = `-${rem(100)}`;

let animationName = ({ alignment }) =>
  alignment && alignment[1] === "left"
    ? lefttOpacitySlideShow
    : rightOpacitySlideShow;

const rightOpacitySlideShow = keyframes`
  0%  {
      opacity: 0;
      margin-right: ${defaultNegativeMargin};
  }
  50% {
      opacity: 1;
      margin-right: ${defaultMargin};
  }
`;

const lefttOpacitySlideShow = keyframes` //
  0%  {
      opacity: 0;
      margin-left: ${defaultNegativeMargin};
  }
  50% {
      opacity: 1;
      margin-left: ${defaultMargin};
  }
`;

const bottomOpacitySlideShow = keyframes` //
  0%  {
      opacity: 0;
      margin-bottom: ${defaultNegativeMargin};
  }
  50% {
      opacity: 1;
      margin-bottom: ${defaultMargin};
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${white};
  font-family: Lato;
  z-index: 100001;
  margin: ${defaultMargin};
  padding: ${defaultMargin};
  border-radius: ${rem(10)};
  box-shadow: 0 ${rem(5)} ${rem(40)} 0 ${metallicBlue30};
  bottom: 0;
  animation: ${bottomOpacitySlideShow} 1.5s ease-in-out;

  ${media.md(css`
    flex-direction: row;
    animation: ${animationName} 1.5s ease-in-out;

    ${({ alignment }) =>
      alignment
        ? css`
            bottom: auto;
            ${alignment[0]}: 0;
            ${alignment[1]}: 0;
          `
        : css`
            top: 0;
            right: 0;
          `};
  `)};
`;

export const Message = styled.span`
  display: inline-block;
  margin-bottom: ${rem(20)};
  text-align: center;

  ${media.md(css`
    margin: 0 ${defaultMargin} ${rem(20)} 0;
    text-align: left;
  `)};
`;

export const Counter = styled.div`
  background: ${lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(80)};
  height: ${rem(80)};
  padding-bottom: ${rem(1)};
  margin: 0 0 ${defaultMargin};
  border-radius: 100%;
  transition: background 0.8s ease-in-out;

  ${media.md(css`
    margin: 0 ${defaultMargin} 0 0;
  `)};

  ${({ remaining, threshold }) => {
    if (remaining <= (threshold * 1) / 3) {
      return css`
        background: ${red};
      `;
    } else if (remaining <= (threshold * 2) / 3) {
      return css`
        background: ${orange};
      `;
    }
  }};
`;

export const Count = styled.span`
  color: ${white};
  font-size: ${remFontSize(45)};
`;

export const Action = styled.div`
  width: calc(100% - ${defaultMargin * 2});
  font-size: ${remFontSize(18)};
  line-height: ${rem(22)};
  font-weight: bold;
  color: ${blue70};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${media.md(css`
    padding-right: ${defaultMargin};
    width: ${rem(230)};
  `)};
`;
