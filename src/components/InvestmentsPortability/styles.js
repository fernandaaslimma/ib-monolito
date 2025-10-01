import styled, { css } from "styled-components";
import {
  blue,
  conclusive100,
  conclusive300,
  gray100,
  gray200,
  gray300,
  gray400,
  gray80,
  grey70,
  neutral100,
  neutral300,
  refused100,
  refused300,
  warning100,
  warning300
} from "../../styles/settings";
import { rem, media, remFontSize } from "../../styles/tools";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: ${rem(10)} 0 ${rem(20)} 0;
`;

export const SliderWrapper = styled.div`
  max-width: ${rem(1152)};
  margin-inline: auto;
`;

export const DefaultCell = styled.div`
  font-family: Lato;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: ${remFontSize(12)};
  display: inline-block;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
`;

export const StatusCell = styled.div`
  border-radius: 50px;
  padding: ${rem(4)} ${rem(8)};
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(12)};
  line-height: ${remFontSize(18)};
  text-align: center;
  display: inline-block;
  white-space: normal;
  word-wrap: break-word;

  ${({ statusId }) => {
    switch (statusId) {
      case 1:
        return css`
          color: ${neutral300};
          background-color: ${neutral100};
        `;
      case 2:
        return css`
          color: ${warning300};
          background-color: ${warning100};
        `;
      case 3:
        return css`
          color: ${conclusive300};
          background-color: ${conclusive100};
        `;
      case 4:
        return css`
          color: ${gray300};
          background-color: ${gray80};
        `;
      case 5:
        return css`
          color: ${refused300};
          background-color: ${refused100};
        `;
      case 6:
        return css`
          color: ${gray400};
          background-color: ${gray100};
        `;
    }
  }}
`;

export const RequestButton = styled.button`
  background-color: ${blue};
  color: white;
  border: none;
  padding: ${rem(10)} ${rem(20)};
  font-size: ${remFontSize(13)};
  font-family: Lato;
  cursor: pointer;
  border-radius: ${rem(5)};

  ${media.md(css`
    font-size: ${remFontSize(13)};
    padding: ${rem(8)} ${rem(16)};
  `)};

  ${media.lg(css`
    font-size: ${remFontSize(13)};
    padding: ${rem(10)} ${rem(20)};
  `)};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${rem(20)};
  padding: 0 0.01rem;

  ${media.md(css`
    padding: 0 0.01rem;
  `)};

  ${media.lg(css`
    padding: 0 0.01rem;
  `)};
`;

export const HeaderTitle = styled.h2`
  font-family: Lato;
  color: ${gray300};
  margin-bottom: ${rem(20)};
  text-align: left;

  ${media.md(css`
    font-size: ${rem(24)};
  `)};

  ${media.lg(css`
    font-size: ${rem(28)};
  `)};
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${rem(20)};
  max-width: ${rem(670)};

  ${media.md(css`
    padding: 0 ${rem(40)};
    max-width: ${rem(981)};
  `)}

  ${media.lg(css`
    padding: 0 ${rem(60)};
    max-width: ${rem(1182)};
  `)}
`;

export const DateTimeCell = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const DateText = styled.span`
  font-weight: normal;
`;

export const TimeText = styled.span`
  font-size: 10px;
  color: #666;
`;

export const BackButton = styled.button`
  background-color: white;
  color: ${blue};
  border: 1px solid ${blue};
  padding: ${rem(10)} ${rem(20)};
  font-size: ${remFontSize(13)};
  font-family: Lato;
  cursor: pointer;
  border-radius: ${rem(5)};
  text-align: center;
`;

export const DetailsHeader = styled.div`
  margin-bottom: ${rem(24)};
  padding: ${rem(24)};
  border: 1px solid #e0e0e0;
  border-radius: ${rem(8)};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  color: #d9e0e4;
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -2.75rem;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${rem(24)};
`;

export const IconContainer = styled.div`
  display: flex;
  margin-inline: ${rem(36)};
`;

export const InfoTitle = styled.span`
  font-weight: 500;
  font-family: Lato;
  color: ${gray200};
  font-size: ${remFontSize(16)};
  line-height: 125%;
  letter-spacing: 0.45px;
`;

export const InfoContent = styled.span`
  color: ${gray300};
  font-size: ${remFontSize(24)};
  font-weight: 900;
  line-height: 125%;
  letter-spacing: 0.45px;
  font-family: Lato;
  margin-top: ${rem(4)};
`;

export const InfoTitleRequest = styled.span`
  font-weight: 500;
  font-family: Lato;
  color: ${grey70};
  font-size: ${remFontSize(12)};
  line-height: 100%;
  letter-spacing: 0.4px;
`;

export const InfoContentResponse = styled.span`
  color: ${gray300};
  font-size: ${remFontSize(14)};
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.4px;
  font-family: Lato;
  case: Uppercase;
  margin-top: ${rem(4)};
`;

export const InstitutionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${rem(8)};
`;
