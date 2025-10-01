import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import { blue70, lightBlack } from "../../../styles/settings";

export const ExitConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${rem(38)};
  margin-bottom: ${rem(16)};
  width: 100%;

  ${({ padding }) =>
    padding &&
    media.md(
      css`
        padding: 0 ${rem(padding)} 0 ${rem(padding)};
      `
    )};
`;

export const Title = styled.h1`
  font-family: Lato Bold;
  font-weight: bolder;
  color: ${blue70};
  font-size: ${remFontSize(20)};

  text-align: center;
  letter-spacing: ${rem(0.78)};

  ${media.md(css`
    font-size: ${remFontSize(24)};
  `)};
`;

export const Message = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  text-align: center;
  letter-spacing: ${rem(0.48)};
  color: ${lightBlack};
  margin: ${rem(10)} ${rem(14)} 0 ${rem(14)};

  ${media.md(css`
    font-size: ${remFontSize(18)};
    margin: ${rem(10)} ${rem(16)} 0 ${rem(16)};
  `)};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${rem(40)};

  ${media.md(css`
    justify-content: center;
    flex-direction: row;
  `)};
`;
