import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools/index";

export const TabsWrapper = styled.ul`
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background: ${backgroundColor};
    `}
  ${({ widthTabs }) =>
    widthTabs &&
    css`
      width: ${widthTabs}px;
    `}
  display: flex;
  flex-grow: 1;
  text-decoration: none;
`;

export const Tab = styled.li`
  text-decoration: none;
  width: 100%;
`;

export const Title = styled.span`
  cursor: pointer;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(16)};
  line-height: ${rem(16)};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rem(17)} 0 ${rem(17)} 0;

  color: #587485;

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: #3976CF;
      border-bottom: solid ${rem(2)} #3976CF;
    }
    `}
`;

export const Line = styled.hr`
  border: none;
  height: ${rem(1)};
  margin: 0 0 0 0;
  background: #d9e0e4;
`;
