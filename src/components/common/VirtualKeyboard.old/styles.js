import styled, { css } from "styled-components";
import {
  white,
  black50,
  blue,
  black70,
  lightRed,
  grey130
} from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools";

const keySize = 44;

export const Key = styled.span`
  width: ${rem(keySize)};
  height: ${rem(keySize)};
  border-radius: ${rem(4)};
  background-color: ${white};
  border: solid ${rem(1)} ${grey130};
  text-align: center;
  margin: ${rem(5)};
  cursor: pointer;
  font-family: Lato Bold;
  font-size: ${remFontSize(16)};
  letter-spacing: ${rem(0.1)};
  color: ${black70};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${white};
  outline: none;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  :active {
    transform: translateY(${rem(1)});
    color: ${white};
    background: ${blue};
  }

  @media (hover: hover) {
    :hover {
      background: ${blue};
      color: ${white};
    }
  }
`;

export const Erase = styled(Key)`
  width: ${rem(138)};
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.2)};
  font-family: "Roboto Bold", "Roboto Medium", Roboto;

  svg {
    margin-right: ${rem(11)};
  }

  :active {
    background: ${lightRed};
  }

  @media (hover: hover) {
    :hover {
      background: ${lightRed};
    }
  }
`;

export const KeyBoard = styled.div`
  width: 100%;
  max-width: ${rem(keySize * 5 + 50)};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  font-size: ${remFontSize(10)};
  line-height: 1.6;
  letter-spacing: ${rem(0.3)};
  color: ${black50};
  text-transform: uppercase;
  margin-bottom: ${rem(8)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    margin-left: ${rem(8)};
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  padding: ${rem(3)} 0 ${rem(15)};
  user-select: none;
  position: relative;
  pointer-events: none;

  ${KeyBoard} {
    opacity: 0.4;
    transition: 0.2s 0.2s;
  }

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      pointer-events: all;

      ${KeyBoard} {
        opacity: 1;
      }
    `};

  ${({ hideBelow }) =>
    hideBelow &&
    css`
      display: none;

      @media (min-width: ${rem(hideBelow)}) {
        display: block;
      }
    `};

  ${media.md(css`
    display: block;
  `)};
`;
