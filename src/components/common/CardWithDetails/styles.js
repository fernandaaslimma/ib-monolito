import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { gray80 } from "../../../styles/settings";

export const CardWrapper = styled.div`
  margin-top: ${rem(16)};
  border: 1px solid ${gray80};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: ${rem(4)};
  cursor: pointer;
`;

export const WrapperSubCard = styled.div`
  margin: ${rem(12)} 0 0 0;
`;

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${rem(4)};
  cursor: pointer;
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CardTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: ${remFontSize(16)};
  line-height: ${rem(20)};
  letter-spacing: ${rem(0.45)};
  margin: 0 ${rem(16)} 0 0;

  ${({ icon }) =>
    icon &&
    css`
      margin-left: ${rem(16)};
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

export const ExpandCollapseArrow = styled.div`
  display: flex;
  align-items: center;
  float: right;
  transform: rotate(90deg);

  ${({ collapse }) =>
    collapse &&
    css`
      transform: rotate(-90deg);
    `};
`;
