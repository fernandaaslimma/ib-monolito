import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../../styles/tools";
import Icon from "../../Icon";

import {
  lightGreen,
  white,
  grey50,
  black50,
  rgbaBlack13,
  fadeBlue15,
  blue30
} from "../../../../styles/settings";

export const Wrapper = styled.ul`
  position: fixed;
  top: ${rem(60)};
  left: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  height: auto;
  border-radius: ${rem(4)};
  background-color: ${white};
  box-shadow: 0 10px 10px 0 ${fadeBlue15};
  padding: ${rem(8)} ${rem(5)};

  ${media.md(css`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: ${rem(198)};
    border: solid ${rem(1)} ${grey50};
    box-shadow: 0 ${rem(5)} ${rem(10)} 0 ${rgbaBlack13};
  `)};
`;

export const Text = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.4)};
  color: ${black50};
  text-transform: uppercase;
  display: none;

  ${media.md(css`
    font-size: ${remFontSize(10)};
    display: block;
    flex: 1;
  `)};
`;

export const AcronymText = styled(Text)`
  display: block;

  ${media.md(css`
    display: none;
  `)};
`;

export const FlagIcon = styled(Icon)`
  margin-right: ${rem(17)};

  svg {
    width: ${rem(36)};
    height: 100%;
  }

  ${media.md(css`
    margin-right: ${rem(13)};

    svg {
      width: ${rem(20)};
    }
  `)};
`;

export const CheckIcon = styled(Icon)`
  color: ${lightGreen};
  display: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-grow: 1;
  align-items: center;
  cursor: pointer;
  padding: ${rem(13)} ${rem(15)};
  justify-content: center;

  ${CheckIcon} {
    display: none;
  }

  ${({ active }) =>
    active &&
    css`
      pointer-events: none;
      background: ${blue30};

      ${Text} {
        font-family: Lato Bold;
      }
    `};

  ${media.md(css`
    justify-content: flex-start;
    background: none;
    padding: ${rem(10)} ${rem(15)};

    ${({ active }) =>
      active &&
      css`
        ${CheckIcon} {
          display: block;
        }
      `};
  `)};
`;
