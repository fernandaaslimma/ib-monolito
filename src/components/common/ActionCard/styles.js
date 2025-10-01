import styled, { css } from "styled-components";
import { gray80 } from "../../../styles/settings";
import { rem, remFontSize } from "../../../styles/tools";

export const CardWrapper = styled.div`
  margin-top: ${rem(16)};
  border: ${rem(1)} solid ${gray80};
  box-shadow: 0px ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.16);
  border-radius: ${rem(4)};
`;

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(4)} 0 ${rem(16)} 0;

  ${({ actionClick }) =>
    actionClick !== null &&
    css`
      cursor: pointer;
    `}
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: ${remFontSize(16)};
  line-height: ${rem(20)};
  letter-spacing: ${rem(0.45)};

  ${({ titleStyle }) =>
    titleStyle &&
    css`
      ${titleStyle};
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
  ${({ ellipsis, widthTagEllipsis }) =>
    ellipsis &&
    css`
      max-width: ${widthTagEllipsis};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};

  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(19.2)};
  letter-spacing: ${rem(0.45)};
`;

export const ExpandCollapseArrow = styled.div`
  display: flex;
  align-items: center;
  float: right;

  ${({ collapse }) =>
    collapse &&
    css`
      transform: rotate(-90deg);
    `};
`;
