import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  white,
  gray200,
  gray300,
  conclusive200
} from "../../../../styles/settings";

export const ListWrapper = styled.ul`
  margin: none;
  padding: ${rem(24)} 0 ${rem(16)} 0;
  @media (max-width: ${rem(600)}) {
    padding: ${rem(10)} ${rem(16)} ${rem(32)} ${rem(16)};
  }
`;

export const Item = styled.div`
  padding: ${rem(8)} ${rem(16)};
`;

export const ItemWrapper = styled.li`
  background: ${white};
  box-shadow: 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.16);
  border-radius: ${rem(4)};
  margin-bottom: ${rem(16)};
  cursor: pointer;
  ${({ clickableItem }) =>
    !clickableItem &&
    css`
      box-shadow: 0 0 0 0;
    `};
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  font-family: Lato;
  margin: ${rem(8)} 0;
`;

export const Label = styled.span`
  font-size: ${remFontSize(14)};
  display: block;
  color: ${gray200};
`;

export const Value = styled.span`
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.44999998807907104px;
  display: inline-flex;
  font-size: ${remFontSize(14)};
  color: ${gray300};
  font-weight: bold;
  ${({ value }) =>
    value > 0 &&
    css`
      color: ${conclusive200};
    `};
`;

export const GrossValue = styled.span`
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.44999998807907104px;
  display: inline-flex;
  font-size: ${remFontSize(14)};
  color: ${gray300};
  font-weight: bold;
  ${({ value }) =>
    value > 0 &&
    css`
      color: ${conclusive200};
    `};
`;

export const Info = styled.span`
  flex-grow: 1;
`;

export const Percentage = styled.span`
  font-weight: bold;

  ${({ positive }) =>
    positive &&
    css`
      color: ${conclusive200};
    `}
`;

export const Title = styled.h2`
  font-size: ${remFontSize(16)};
  margin: 0 0 ${rem(4)} 0;
  color: ${gray300};
  font-weight: 400;
`;

export const TotalValue = styled.h2`
  font-size: ${remFontSize(24)};
  margin: 0 0 ${rem(8)} 0;
  color: ${gray300};
  font-weight: 700;
`;

export const Overview = styled.div`
  flex-grow: 1;
  font-size: ${remFontSize(14)};
  padding: ${rem(24)} ${rem(16)};
  font-family: Lato;
  color: ${gray200};
  line-height: ${remFontSize(24)};
  white-space: pre-line;
`;

export const OverviewTextBold = styled.span`
  font-weight: bold;

  color: ${gray300};
`;

export const MainInfo = styled.div`
  padding: ${rem(8)} ${rem(16)} 0 ${rem(16)};
  background: ${white};
  overflow: auto;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray200};
  line-height: ${remFontSize(22)};
  ${({ bottomSpace }) =>
    bottomSpace &&
    css`
      padding-bottom: ${rem(24)};
    `}
`;
export const MainInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${rem(16)} 0 0 0;
`;

export const ClickableTextArea = styled.div`
  padding: ${rem(16)} 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ClickableText = styled.p`
  font-size: ${remFontSize(16)};
  color: ${gray200};
  font-weight: 500;
`;

export const Modality = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.452308)};
  color: ${gray200};
  margin-bottom: ${rem(4)};
`;

export const MiniLabel = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.452308)};
  color: ${gray200};
  margin-bottom: ${rem(4)};
`;

export const FundsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.span`
  display: inline-block;
  font-family: Lato;
  text-align: center;

  font-size: ${remFontSize(12)};
  padding: ${rem(0)} ${rem(16)} ${rem(0)} ${rem(16)};
  border-radius: ${rem(100)};
  font-weight: bold;
  letter-spacing: 0.05em;
  height: ${rem(23)};

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `};
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  display: flex;
  flex-direction: column;
  border-top: solid ${rem(1)} #d3dde4;
`;
