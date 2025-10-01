import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { black30, black50 } from "../../../styles/settings";

export const Wrapper = styled.div`
  text-align: center;
  padding: ${rem(80)} ${rem(16)} ${rem(40)} ${rem(16)};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.md(css`
    padding: ${rem(80)} ${rem(16)} ${rem(40)} ${rem(16)};
    min-height: ${props => (props.minHeight ? rem(props.minHeight) : "auto")};
  `)};
`;

export const IconWrapper = styled.div`
  margin-bottom: ${rem(0)};
  color: ${black30};
`;

export const PrimaryText = styled.h3`
  font-family: Lato;
  font-size: ${remFontSize(20)};
  letter-spacing: ${rem(0.33)};
  text-align: left;
  color: ${black30};
  display: inline-block;
  text-align: center;
  margin-top: ${rem(0)};
  font-weight: bold;
  margin-bottom: ${rem(0)};
  line-height: 125%;
  letter-spacing: ${rem(0.333333)};
  padding: ${rem(24)} 0 ${rem(16)} 0;

  ${media.md(css`
    margin-top: ${rem(0)};
    font-size: ${remFontSize(24)};
    margin-bottom: ${rem(0)};
    letter-spacing: ${rem(0.33)};
    padding: ${rem(24)} 0 ${rem(16)} 0;
  `)};
`;

export const ErrorImg = styled.img`
  width: ${rem(144)};
  height: ${rem(144)};
`;

export const SecondaryText = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  letter-spacing: ${rem(0.6)};
  color: ${black50};
  line-height: 1.45;
  text-align: center;
  letter-spacing: ${rem(0.42)};
  font-weight: normal;

  ${media.md(css`
    font-size: ${remFontSize(16)};
    line-height: 1.32;
    max-width: 700px;
  `)};
`;
