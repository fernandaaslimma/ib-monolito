import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../styles/tools";
import {
  darkestBlue,
  blue20,
  grey90,
  darkBlue,
  white
} from "../../styles/settings";
import Icon from "../../components/common/Icon";

export const Title = styled.h1`
  color: ${darkestBlue};
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  font-size: ${remFontSize(17)};
  margin-bottom: ${rem(15)};
  line-height: ${remFontSize(20)};

  ${media.md(css`
    letter-spacing: ${rem(0.3)};
    font-size: ${remFontSize(21)};
    margin-bottom: ${rem(35)};
  `)};

  ${media.lg(css`
    letter-spacing: ${rem(0.4)};
    font-size: ${remFontSize(25)};
  `)};
`;

export const TermsWrapper = styled.div`
  font-family: Lato;
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(35)} 0;
  `)};
`;

export const ListOfDocuments = styled.ul`
  background: ${blue20};
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

export const IconButton = styled(Icon)`
  padding: ${rem(5)} ${rem(5)};
  border-radius: ${rem(5)};
  margin-right: ${rem(15)};
  background: ${darkBlue};
  color: ${white};
  cursor: pointer;
`;
