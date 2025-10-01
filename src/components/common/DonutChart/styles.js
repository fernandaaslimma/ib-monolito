import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { black50, white, blue30, gray300 } from "../../../styles/settings";

export const Wrapper = styled.div`
  border-radius: ${rem(4)};
  background-color: ${white};
`;

export const Totals = styled.div`
  padding-top: ${rem(5)};
  padding-right: ${rem(20)};
  padding-bottom: ${rem(5)};
  padding-left: ${rem(10)};
  margin-top: ${rem(5)};
  border-left: ${rem(1)} solid ${blue30};

  ${media.lg(css`
    padding-right: ${rem(33)};
  `)};
`;

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rem(5)};
`;

export const ColoredDot = styled.span`
  width: ${rem(10)};
  height: ${rem(10)};
  border-radius: ${rem(3)};
  border: solid ${rem(1)} ${white};
  margin: auto ${rem(10)} auto 0;

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
  margin-bottom: ${rem(10)};
`;

export const Label = styled.div`
  font-family: "Lato";
  font-size: ${remFontSize(10)};
  text-transform: uppercase;
  display: flex;
`;

export const Value = styled.div`
  font-size: ${remFontSize(13)};
  margin-top: ${rem(3)};
  margin-left: ${rem(20)};
  letter-spacing: ${rem(0.4)};
`;

export const ChartTitle = styled.span`
  font-family: Lato;

  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  display: flex;
  justify-content: center;

  letter-spacing: ${rem(0.452308)};

  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};

  color: ${gray300};
`;
