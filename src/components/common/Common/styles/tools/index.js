import { css } from "styled-components";
import {
  SCREEN_LG,
  SCREEN_MD,
  SCREEN_SM,
  SCREEN_XS,
  SCREEN_XXS,
  ZH_CN
} from "../../utils/constants";

export const rem = value => `${value / 16}rem`;

export const remFontSize = (value, locale) =>
  locale === ZH_CN ? `${(value * 1.15) / 16}rem` : `${value / 16}rem`;

export const media = {
  lg: content => css`
    @media (min-width: ${rem(SCREEN_LG)}) {
      ${content};
    }
  `,
  md: content => css`
    @media (min-width: ${rem(SCREEN_MD)}) {
      ${content};
    }
  `,
  sm: content => css`
    @media (min-width: ${rem(SCREEN_SM)}) {
      ${content};
    }
  `,
  xs: content => css`
    @media (min-width: ${rem(SCREEN_XS)}) {
      ${content};
    }
  `,
  xxs: content => css`
    @media (min-width: ${rem(SCREEN_XXS)}) {
      ${content};
    }
  `
};
