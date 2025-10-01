import styled, { css } from "styled-components";
import { blue } from "../../styles/settings";
import { rem, media } from "../../styles/tools";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: ${rem(10)} 0 ${rem(20)} 0;
`;

export const Message = styled.div`
  margin: 0 auto;
  max-width: ${rem(670)};

  ${media.md(css`
    max-width: ${rem(981)};
  `)};

  ${media.lg(css`
    max-width: ${rem(1182)};
  `)};
`;

export const Slider = styled.div`
  width: 200%;
  transform: translateX(0);
  transition: transform 0.4s ease-out;
  display: flex;

  ${({ position }) =>
    position &&
    css`
      transform: translateX(-${50 * position}%);
    `};
`;

export const SliderWrapper = styled.div`
  width: 50%;
`;

export const Portion = styled.span`
  color: #99b5c6;
`;

export const Value = styled.span``;

export const Back = styled.span`
  display: inline-block;
  margin-right: ${rem(10)};
  cursor: pointer;
  color: ${blue};
  position: relative;
  top: ${rem(2)};
`;

export const Info = styled.p`
  margin: 0 0 ${rem(15)} 0;
`;

export const Separator = styled.span`
  display: inline-block;
  position: relative;
  top: -${rem(6)};
  margin: 0 ${rem(10)};
`;
