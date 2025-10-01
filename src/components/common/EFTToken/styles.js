import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import { blue70, lightRed, darkBlue, gray200 } from "../../../styles/settings";
import { InputWrapper } from "../../common/Input/styles";
import { LinkTag } from "../../../styles/objects/actionElements";
import LocalLoading from "../LocalLoading";
import { Bar } from "../LocalLoading/styles";

export const EFTModalWrapper = styled.div`
  width: calc(100% - ${rem(32)});
  ${InputWrapper} {
    margin-top: ${rem(20)};
    height: ${rem(48)};
  }

  ${LinkTag} {
    margin-top: ${rem(20)};
    height: ${rem(40)};
    line-height: ${rem(40)};
    width: ${rem(120)};
  }
  margin: auto ${rem(16)} auto ${rem(16)};

  ${media.md(css`
    width: ${rem(382)};
    margin: auto;
  `)};
`;

export const Loader = styled(LocalLoading)`
  height: ${rem(175)};
  position: relative;
  ${Bar} {
    background-color: ${blue70};
  }
`;
export const IconWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin: ${rem(20)} 0 ${rem(12)} 0;
`;

export const Title = styled.h1`
  font-family: Lato Bold;
  font-weight: bolder;
  font-size: ${remFontSize(20)};
  text-align: center;
  letter-spacing: ${rem(0.49)};
  margin: ${rem(23)} ${rem(0)} ${rem(0)};
  color: ${blue70};

  ${media.md(css`
    margin: ${rem(40)} auto ${rem(10)} auto;
    font-size: ${remFontSize(24)};
  `)};
`;

export const Message = styled.div`
  font-size: ${remFontSize(16)};
  font-family: Lato;
  margin: ${rem(12)} auto 0 auto;
  color: ${gray200};
  line-height: ${remFontSize(22)};

  ${media.md(css`
    letter-spacing: ${rem(0.42)};
    font-size: ${remFontSize(18)};
    max-width: ${rem(382)};
    margin: ${rem(12)} auto 0 auto;
  `)};
`;

export const Disclaimer = styled(Message)`
  letter-spacing: ${rem(0.39)};
  width: 100%;
  margin: ${rem(0)};
  font-size: ${remFontSize(14)};
  ${media.md(css`
    font-size: ${remFontSize(13)};
    width: ${rem(345)};
  `)};
  vertical-align: baseline;
`;

export const Identificator = styled.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Lato Bold;
  color: ${blue70};
  vertical-align: baseline;
`;

export const Padding = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 0;
`;

export const ErrorMessage = styled.h1`
  display: none;

  ${({ visible }) =>
    visible &&
    css`
      display: block;
      font-size: ${remFontSize(13)};
      font-style: italic;
      font-family: Lato;
      text-align: center;
      margin: 0 auto;
      margin: ${rem(5)};
      color: ${lightRed};
    `};
`;

export const Link = styled.a`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  text-decoration: none;
  text-align: center;
  letter-spacing: ${rem(0.42)};
  color: ${darkBlue};
  :focus,
  :hover {
    text-decoration: none;
  }
  :only-child {
    margin-right: 0;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.md(css`
    margin: auto;
    margin-bottom: ${rem(10)};
    max-width: ${rem(350)};
  `)};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MfaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.md(css`
    margin: auto;
  `)};
`;

export const ButtonWrapper = styled.div`
  ${media.md(css`
    margin: auto;
    width: ${rem(275)};
  `)};
`;
