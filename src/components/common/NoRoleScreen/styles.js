import styled, { css } from "styled-components";
import { gray200, gray500 } from "../../../styles/settings";
import { media, rem, remFontSize } from "../../../styles/tools";

export const Image = styled.img`
  max-width: ${rem(250)};
  max-height: ${rem(250)};
  width: ${rem(60)};
  display: block;
  margin: 0 auto;
  margin-top: ${rem(60)};
`;

export const Wrapper = styled.div`
  span {
    width: 100%;

    ${media.md(css`
      width: 100%;
    `)};
  }  
`;

export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 75vh;

@media (min-height : 1150px){
    min-height : 80vh;  
  }
`;

export const Message = styled.p`
    color: ${gray500};
    text-align: center;
    font-family: Lato;
    font-size: ${remFontSize(30)};
    font-style: normal;
    font-weight: 700;
    line-height: ${rem(37.5)};
    margin-top: ${rem(16)};
    margin-bottom: ${rem(24)};
`;

export const SubMessage = styled.p`
    color: ${gray200};
    text-align: center;
    font-family: Lato;
    font-size: ${remFontSize(18)};
    font-style: normal;
    font-weight: 400;
    line-height: ${rem(28.8)};
    letter-spacing: ${rem(0.452)};
    margin: 0;
`;