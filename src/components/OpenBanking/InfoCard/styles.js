import styled, { css } from "styled-components";
import { gray200, white, gray300 } from "../../../styles/settings";
import { rem, remFontSize } from "../../../styles/tools";

export const CardInfo = styled.div`
  padding: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};
  margin-bottom: ${rem(16)};
  background: ${white};
  overflow: auto;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray200};
  line-height: ${remFontSize(22)};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

export const Title = styled.div`
  font-size: ${remFontSize(16)};
  margin: 0 0 ${rem(24)} 0;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.452308px;
  color: ${gray300};

  ${({ colorTitle }) =>
    colorTitle &&
    css`
      color: ${colorTitle};
    `}
  ${({ subTitle }) =>
    !subTitle &&
    css`
      margin: 0 0 0 0;
    `}
`;

export const BigTitle = styled.h2`
  font-size: ${remFontSize(18)};
  margin: 0 0 ${rem(16)} 0;
  color: ${gray300};
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.452308px;

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const SubTitle = styled.div`
  font-size: ${remFontSize(12)};
  margin: ${rem(16)} 0 ${rem(24)} ${rem(3)};
  font-weight: 500;
  font-style: normal;
  line-height: ${rem(14.4)};
`;
