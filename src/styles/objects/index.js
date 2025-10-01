import styled, { css } from "styled-components";
import { rem, media } from "../tools";
import { grey20 } from "../settings";

export * from "./actionElements";

export const Hr = styled.hr`
  width: 100%;
  flex: 1 0 100%;
  border: none;
  height: ${rem(1)};
  background: ${grey20};
  margin: ${rem(12)} 0;

  ${media.lg(css`
    margin: ${rem(15)} 0;
  `)};
`;

export const Child = styled.span`
  display: inline-block;
`;

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.78);
`;

export const WrapperIcon = styled.div`
  display: flex;
  @media (min-width: 1199px) {
    padding-right: ${rem(12)};
  }
`;
