import { css } from "styled-components";
import { rem } from "../tools";

export const spacings = {
  none: 0,
  xxxs: rem(4),
  xxs: rem(8),
  xs: rem(12),
  s: rem(16),
  m: rem(24),
  l: rem(32),
  xl: rem(48),
  xxl: rem(56),
  xxxl: rem(64)
};

export default spacing =>
  spacing &&
  css`
    margin-bottom: ${spacings[spacing.bottom]};
    margin-top: ${spacings[spacing.top]};
    margin-left: ${spacings[spacing.left]};
    margin-right: ${spacings[spacing.right]};
  `;
