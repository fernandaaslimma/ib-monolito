import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import { blue70, lightBlack } from "../../../styles/settings";

export const Wrapper = styled.div`
  padding: ${rem(32)} 0 0 0;
  font-family: "Lato";
  text-align: center;
`;

export const Title = styled.h2`
  font-size: ${remFontSize(28)};
  font-family: "Lato Bold";
  letter-spacing: ${rem(0.47)};
  color: ${blue70};
  margin-top: ${rem(16)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
`;

export const Message = styled.p`
  font-family: "Lato";
  font-size: ${remFontSize(18)};
  color: ${lightBlack};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: ${rem(0.48)};
  ${media.md(css`
    width: ${rem(620)};
  `)};
  margin: 16px auto 0;
`;

export const Buttons = styled.div`
  margin-top: ${rem(40)};
  display: flex;
  justify-content: center;

  > * {
    margin: ${rem(10)};
    height: auto;
    line-height: ${rem(50)};
  }

  ${media.md(css`
    margin-top: ${rem(50)};
  `)};
`;
