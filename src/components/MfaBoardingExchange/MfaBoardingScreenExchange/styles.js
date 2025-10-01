import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  ${media.md(css`
    padding-left: ${props => rem(props.paddingLeft)};
    padding-right: ${props => rem(props.paddingRight)};
  `)};
`;
