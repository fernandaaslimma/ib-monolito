import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { white, blue20 } from "../../../styles/settings";
export const Wrapper = styled.div`
  padding: ${rem(40)} 0;
`;
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
