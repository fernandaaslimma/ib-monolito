import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import { lightBlack } from "../../../styles/settings";

export const Subtitle = styled.h2`
  color: ${lightBlack};
  font-size: ${remFontSize(16)};
  margin-bottom: ${rem(10)};
  line-height: ${remFontSize(20)};

  ${media.md(css`
    font-size: ${remFontSize(18)};
  `)};
`;

export const LinedButtons = styled.div`
  display: flex;
  margin-bottom: ${rem(30)};
  flex-direction: column;

  label {
    flex-grow: 1;
    flex-basis: 33%;
  }

  ${media.md(css`
    flex-direction: row;
  `)};
`;
