import styled, { css } from "styled-components";
import { media, rem, remFontSize } from "../../../../styles/tools";
import { conclusive200, gray200, gray300 } from "../../../../styles/settings";

const getColors = ({ value }) => {
  return Number(value) >= 0
    ? css`
        color: ${conclusive200};
      `
    : css`
        color: ${gray300};
      `;
};

export const WrapperAnimated = styled.div`
  margin-top: ${rem(24)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding: 0 ${rem(8)};
`;

export const AnimatedName = styled.div`
  color: ${gray300};
  font-family: Lato;
  font-weight: bold;
  font-size: ${remFontSize(20)};
  letter-spacing: ${rem(0.452308)};
  margin: ${rem(22)} 0 ${rem(6)} 0;
  width: 93%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const AnimatedDate = styled.div`
  color: ${gray200};
  font-family: Lato;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  letter-spacing: ${rem(0.452308)};
`;

export const AnimatedAmount = styled.div`
  color: ${gray300};
  font-family: Lato;
  font-weight: normal;
  font-size: ${remFontSize(24)};
  letter-spacing: ${rem(0.452308)};
  margin: ${rem(16)} 0 ${rem(32)} 0;
  ${props => props && getColors(props)};
`;

export const ButtonContent = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: ${rem(32)};
  ${media.md(css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 ${rem(37)} 0;
  `)};
`;
