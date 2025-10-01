import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { neutral200 } from "../../../styles/settings";

export const WrapperExpand = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(20)} ${rem(3)} 0;
  cursor: pointer;
`;

export const WrapperText = styled.div`
  color: ${neutral200};
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: ${remFontSize(13)};
  line-height: ${rem(16)};
`;

export const WrapperIcon = styled.div`
  margin-left: ${rem(8)};
  span {
    transform: rotate(0deg);
    transition: all 0.5s linear;

    ${({ showMoreLess }) =>
      showMoreLess &&
      css`
        transform: rotate(-180deg);
      `};
  }
`;
