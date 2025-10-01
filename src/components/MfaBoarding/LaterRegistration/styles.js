import styled, { css } from "styled-components";
import { remFontSize, rem, media } from "../../../styles/tools";
import { blue70, lightBlack } from "../../../styles/settings";

export const Title = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(24)};
  font-weight: bold;
  letter-spacing: 0.78px;
  text-align: center;
  color: ${blue70};

  margin-top: ${rem(32)};
  margin-bottom: ${rem(12)};
`;

export const WrapperUnderStoodButton = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md(css`
    margin: auto;
  `)};
`;
export const LaterRegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto ${rem(16)} auto ${rem(16)};
  ${media.md(css`
    margin: auto;
  `)};
`;

export const SubTitle = styled.p`
  color: ${lightBlack};
  font-family: Lato;
  font-size: ${props => remFontSize(props.fontSize)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: ${rem(0.48)};

  ${media.md(css`
    width: ${rem(472)};
  `)};
`;
