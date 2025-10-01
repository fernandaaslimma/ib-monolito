import styled, { css } from "styled-components";
import { gray200, gray300, white } from "../../../../styles/settings";
import { media, rem } from "../../../../styles/tools";

export const VoucherTitle = styled.span`
  margin-top: ${rem(69)};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(20)};
  line-height: 125%;
  letter-spacing: ${rem(0.45)};
  color: ${gray300};

  ${media.md(css`
    display: grid;
    max-width: ${rem(600)};
    word-wrap: break-word;
    text-align: left;
    margin-top: ${rem(0)};
  `)};
`;

export const VoucherDate = styled.span`
  margin-top: ${rem(7)};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: 125%;
  color: ${gray200};

  ${media.md(css`
    grid-area: bellow;
    display: grid;
    word-wrap: break-word;
    text-align: left;
  `)};
`;

export const VoucherAmountDisclaimer = styled.span`
  margin-top: ${rem(32)};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  letter-spacing: ${rem(0.39)};
  color: ${gray200};

  ${media.md(css`
    margin-top: ${rem(0)};

    display: flex;
    justify-content: flex-end;
  `)};
`;

export const VoucherAmount = styled.span`
  margin-top: ${rem(8)};

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(20)};
  line-height: 125%;

  letter-spacing: ${rem(0.666666)};

  color: ${gray300};
  ${media.md(css`
    display: flex;
    justify-content: flex-end;
  `)};
`;

export const VoucherLine = styled.hr`
  width: 100%;
  border: none;
  height: ${rem(1)};
  background: #d9e0e4;
  margin-top: ${rem(24)};
`;

export const VoucherContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${rem(16)} 0 ${rem(16)};
  background: ${white};

  ${media.md(css`
    padding: ${rem(25)} ${rem(24)} 0;
  `)};
`;

export const AuthCode = styled.span`
  display: inline-block;
  margin-top: ${rem(15)};
  margin-bottom: ${rem(18)};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 150%;
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow: hidden;

  ${media.md(css`
    display: flex;
  `)};
`;

export const Wrapper = styled.section`
  padding-top: ${rem(53)};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridWrapper = styled.section`
  ${media.md(css`
    margin-bottom: ${rem(16)};
    display: grid;
    grid-column-gap: ${rem(64)};
    grid-template-columns: 2fr 1fr;
    grid-row-gap: ${rem(16)};
    border-radius: ${rem(4)};
  `)};
`;
