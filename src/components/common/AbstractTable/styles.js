import styled, { css } from "styled-components";

import { animationFadeIn } from "../../../styles/tools/animation";
import { blue20 } from "../../../styles/settings";

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  ${animationFadeIn}

  ${({ simpleList }) =>
    simpleList &&
    css`
      border-collapse: collapse;
    `};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};
`;

export const TrWrapper = styled.tr`
  padding-left: 24px;
  vertical-align: middle !important;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  ${({ simpleList }) =>
    simpleList &&
    css`
      box-shadow: unset !important;

      :nth-child(2n + 1) {
        background-color: ${blue20};
      }
    `};
`;

export const TdWrapper = styled.td`
  padding: 10px 0 10px 24px
  vertical-align: middle;
  font-weight: 400;
  font-family: Lato;
  font-size: 14px;
  color: #4E768F;
  line-height: 16.8px;
  font-style: normal;
  white-space: nowrap;
  padding-left: 24px;
  

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 24px;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    padding-right: 24px;
  }

  ${({ textOverflow }) =>
    textOverflow &&
    css`
      & {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 10px;
      }
    `};

  ${({ bold }) =>
    bold &&
    css`
      & {
        font-weight: bold;
      }
    `};

  ${({ simpleList }) =>
    simpleList &&
    css`
      &:first-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:last-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    `};
`;

export const ThWrapper = styled.th`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #27445f;
`;

export const TheadWrapper = styled.thead`
  & > tr > th {
    font-family: Lato;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.78;
    letter-spacing: 0.4px;
    cursor: default;
    text-align: left;
    padding-left: 24px;
  }
`;

export const TbodyWrapper = styled.tbody`
  & > tr {
    background: white;
    box-shadow: 0 1px 12px 6px rgba(211, 225, 232, 0.13);
    transition: box-shadow 0.3s linear;
    height: 45px;

    &:hover {
      box-shadow: 0 1px 12px 6px rgba(211, 225, 232, 0.4);
    }
  }
`;
