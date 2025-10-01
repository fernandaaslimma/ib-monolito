import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import {
  white,
  darkGreen,
  blue20,
  darkBlue,
  grey90
} from "../../../styles/settings";
import Icon from "../Icon";

export const ListWrapper = styled.ul`
  min-height: calc(100vh - ${rem(155)});
  font-family: Lato;
`;

export const ListItem = styled.li`
  cursor: pointer;
  background: ${white};
  margin-bottom: ${rem(15)};
  border-radius: ${rem(5)};
`;

export const Name = styled.span`
  color: ${darkGreen};
  font-weight: bold;
  padding-left: ${rem(10)};
`;

export const ListIcon = styled(Icon)`
  transition: transform 0.2s linear;
  transform: rotate(0deg);
  margin-right: ${rem(10)};

  ${({ isShown }) =>
    isShown &&
    css`
      transform: rotate(180deg);
    `};
`;

export const IconButton = styled(Icon)`
  padding: ${rem(5)} ${rem(5)};
  border-radius: ${rem(5)};
  margin-right: ${rem(15)};
  background: ${darkBlue};
  color: ${white};
  cursor: pointer;
`;

export const ListShowHide = styled.p`
  display: flex;
  align-items: center;
  padding: ${rem(25)} ${rem(15)};
  position: sticky;
  top: 0;
  background: ${white};
  border-radius: ${rem(5)};
`;

export const InnerList = styled.ul`
  padding: 0 ${rem(5)} 0 ${rem(5)};
  cursor: default;
  overflow: hidden;
  height: 0;
  transition: height 0.2s linear;

  ${media.md(css`
    padding: 0 ${rem(35)} 0 ${rem(35)};
  `)};

  ${({ isShown, size }) => {
    if (isShown && size) {
      return css`
        height: calc(
          ${size} * ${rem(40)} + ${rem(25)}
        ); /*number of rows * each row height + list bottom padding*/
        padding: 0 ${rem(5)} ${rem(25)} ${rem(5)};

        ${media.md(css`
          padding: 0 ${rem(35)} ${rem(25)} ${rem(35)};
        `)};
      `;
    }

    if (isShown && !size) {
      return css`
        height: ${rem(50)};
        padding: 0 ${rem(5)} ${rem(25)} ${rem(5)};
      `;
    }
  }};
`;

export const InnerShimmerList = styled.ul`
  padding: ${rem(5)};
  cursor: default;

  ${media.md(css`
    padding: ${rem(15)} ${rem(35)} ${rem(15)} ${rem(35)};
  `)};
`;

export const InnerListItem = styled.li`
  padding-left: ${rem(10)};
  height: ${rem(40)};
  display: flex;
  align-items: center;

  :nth-child(2n + 1) {
    background: ${blue20};
  }
`;

export const InnerListItemName = styled.span`
  color: ${grey90};
  font-size: ${remFontSize(13)};
`;
