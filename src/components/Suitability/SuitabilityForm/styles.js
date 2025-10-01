import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import { white, darkestBlue, lightBlack } from "../../../styles/settings";

export const Wrapper = styled.form`
  background: ${white};
  font-family: Lato;
  overflow: hidden;
`;

export const InnerContent = styled.div`
  ${({ block }) =>
    block &&
    css`
      display: flex;
      flex-direction: column;
    `};

  ${media.md(css`
    width: 70%;
    margin: 0 auto;
  `)};
`;

export const InnerWrapContent = styled.div`
  padding: 0;

  ${media.md(css`
    padding: 0 ${rem(30)};
  `)};
`;

export const Title = styled.h1`
  color: ${darkestBlue};
  margin-bottom: ${rem(20)};
  font-size: ${remFontSize(20)};
  line-height: ${remFontSize(26)};
  font-weight: bold;

  ${media.md(css`
    font-size: ${remFontSize(25)};
    margin-bottom: ${rem(50)};
    line-height: initial;
  `)};
`;

export const ColumnTitles = styled.div`
  display: flex;
  align-items: center;
  margin: 0 ${rem(2)} ${rem(10)} ${rem(2)};

  ${media.md(css`
    margin: 0 ${rem(10)} ${rem(10)} ${rem(10)};
  `)};
`;

export const ColumnTitle = styled.span`
  color: ${lightBlack};
  flex-grow: 1;
  font-size: ${remFontSize(12)};
  line-height: ${remFontSize(15)};
  margin: 0.2rem;

  ${media.md(css`
    font-size: ${remFontSize(16)};
  `)};
`;
