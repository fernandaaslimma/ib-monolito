import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../../styles/tools";
import { black50, lightgrey, white } from "../../../../styles/settings";

export const Wrapper = styled.div`
  border-radius: ${rem(4)};
  background-color: ${white};
  height: ${rem(212)};
`;

export const Totals = styled.div`
  width: 65%;
  border-right: solid ${rem(1)} ${lightgrey};
  padding: 0 ${rem(20)} 0 ${rem(45)};
  display: inline-block;
  height: ${rem(127)};
  margin-top: ${rem(5)};

  ${media.lg(css`
    padding-right: ${rem(33)};
  `)};
`;

export const ChartWrapper = styled.div`
  width: 35%;
  float: right;
  padding-left: ${rem(5)};
  margin-top: -${rem(20)};

  ${media.lg(css`
    padding-left: ${rem(26)};
  `)};
`;

export const ColoredDot = styled.span`
  width: ${rem(10)};
  height: ${rem(10)};
  border-radius: ${rem(3)};
  border: solid ${rem(1)} ${white};
  margin-right: ${rem(10)};
  float: left;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `};
`;

export const Item = styled.div`
  font-family: "Lato";
  color: ${black50};
  width: 100%;
  height: ${rem(20)};
`;

export const Label = styled.p`
  font-size: ${remFontSize(9)};
  line-height: 1.78;
  text-transform: uppercase;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.p`
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.4)};
  float: right;
`;
