import styled, { css } from "styled-components";
import { gray200, gray80, gray90 } from "../../../styles/settings";
import { rem, remFontSize } from "../../../styles/tools";



export const WrapperChart = styled.div`
  margin-bottom: 24px;
  border: 1px solid ${gray80};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
`;

export const WrapperSubChart = styled.div`
  margin-bottom: 24px;
  border: 1px solid ${gray90};
`;

export const WrapperCard = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
`;

export const ChartInfo = styled.div`
  margin-left: 16px;
  display: grid;
  align-items: center;
`;

export const ChartTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  color: ${gray200};

  ${({ ellipsis, widthTagEllipsis }) =>
    ellipsis &&
    css`
      max-width: ${widthTagEllipsis};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    transform: rotate(-90deg);
  }
`;

export const WrapperSubCard = styled.div`
  margin: ${rem(28)} 0 0 0;
`;

export const WrapperButton = styled.div``;

export const Title = styled.div`
  color: #27445f;
  font-family: Lato;
  font-weight: 700;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16, 8)};
  margin: 0 0 ${rem(16)} 0;
`;

export const ExpandCollapseArrow = styled.div`
  float: right;

  ${({ collapse }) =>
    collapse &&
    css`
      transform: rotate(90deg);
    `};
`;
