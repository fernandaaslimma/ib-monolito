import styled, { css } from "styled-components";
import { white, gray200, gray300, lighestgrey } from "../../../styles/settings";
import { rem, remFontSize, media } from "../../../styles/tools/index";

export const Card = styled.section`
  background: ${white};
  border: 1px solid #eef1f3;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const RedirectionInfo = styled.div`
  height: 64px;
  background: #eef1f3;
  display: flex;
  align-items: center;
  padding: 0 ${rem(40)} 0 ${rem(40)};
`;

export const RedirectionText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  padding: 0 0 0 ${rem(18)};
  /* or 133% */

  color: #003b78;
`;

export const ReceivingInstitutionInfo = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(16)} ${rem(24)} ${rem(16)} 0;
`;

export const ReceivingInstitutionName = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  color: #2d4758;

  margin-left: ${rem(16)};
`;

export const IconContainer = styled.span`
  align-items: center;
  background: ${white};
  border-radius: ${rem(4)};
  color: ${lighestgrey};
  display: inline-flex;
  height: ${rem(24)};
  justify-content: center;
  margin-right: ${rem(9)};
  width: ${rem(24)};

  ${({ iconContainerBg }) =>
    iconContainerBg &&
    css`
      background: rgba(${iconContainerBg}, 0.2);
    `};

  ${media.md(css`
    height: ${rem(28)};
    width: ${rem(28)};
    margin-right: ${rem(13)};
  `)};
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
`;

export const Section = styled.section`
  background-color: ${white};
  border-radius: ${rem(2)};
  padding: ${rem(12)};
  box-shadow: 0 ${rem(1)} ${rem(12)} ${rem(6)} rgba(211, 225, 232, 0.13);
  transition: height 0.8s linear;
  @media print {
    box-shadow: none;
    border-radius: none;
  }
  ${({ height }) =>
    height &&
    css`
      height: ${rem(height)};
    `};
  ${({ noBg }) =>
    noBg &&
    css`
      background: transparent;
    `};
  ${media.md(css`
    padding: ${rem(20)};
  `)};

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      ${Header} {
        margin-bottom: ${rem(20)};

        ${media.md(css`
          margin-bottom: ${rem(20)};
        `)};

        ${media.lg(css`
          margin-bottom: ${rem(10)};
        `)};
      }
    `};

  ${({ styles }) =>
    styles &&
    css`
      ${styles};
    `};
`;

export const WapperBankImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem(36)};
  width: ${rem(36)};
  border-radius: ${rem(6)};
  border: 1px solid #d9e0e4;
`;

export const InfoCard = styled.div`
  padding: ${rem(16)} ${rem(15)} ${rem(16)} ${rem(15)};
  background: ${white};
  overflow: auto;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray200};
  line-height: ${remFontSize(22)};
  margin-bottom: ${rem(16)};
`;

export const Title = styled.h2`
  font-size: ${remFontSize(18)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 700;
  line-height: 125%;
  /* identical to box height, or 20px */

  letter-spacing: 0.452308px;
`;

export const SubTitle = styled.h2`
  font-size: ${remFontSize(16)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 400;
  line-height: ${rem(24)};
  /* identical to box height, or 20px */

  letter-spacing: 0.452308px;
`;
