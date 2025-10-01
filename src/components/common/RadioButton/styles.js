import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import {
  grey40,
  grey70,
  lightestBlue20,
  white
} from "../../../styles/settings";

export const List = styled.ul`
  text-align: left;
  padding-left: ${rem(5)};
`;

export const RadioButtonTag = styled.label`
  display: inline-block;
  cursor: pointer;

  :hover {
    p {
      box-shadow: 0 ${rem(2)} ${rem(20)} ${lightestBlue20};
    }
  }

  input {
    position: absolute;
    visibility: hidden;
    pointer-events: none;

    :checked ~ p {
      background: ${lightestBlue20};
      color: ${white};
      box-shadow: 0 ${rem(2)} ${rem(20)} ${lightestBlue20};
    }
  }

  p {
    min-height: ${rem(42)};
    border-radius: ${rem(4)};
    border: solid ${lightestBlue20} ${rem(2)};
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 5px;
    padding: ${rem(5)};
    color: ${lightestBlue20};
    transition: all 0.2s linear;
    ${media.md(css`
      min-height: ${rem(50)};
      padding: ${rem(5)};
    `)};
  }

  span {
    flex-grow: 1;
  }

  :active {
    position: relative;
    top: ${rem(2)};
  }

  ${media.md(css`
    margin-right: ${rem(8)};
    margin-left: ${rem(8)};
  `)};
`;

export const Item = styled.li`
  font-family: "Lato Semibold", "Lato";
  font-size: ${remFontSize(13)};
  font-style: italic;
  letter-spacing: ${rem(0.4)};
  color: ${grey70};
  padding: ${rem(6)} 0 ${rem(6)} ${rem(15)};
`;

export const Example = styled.span`
  font-family: "Lato";
  display: block;
  font-size: ${remFontSize(12)};
  font-weight: normal;
  letter-spacing: ${rem(0.3)};
  padding-top: ${rem(4)};
  color: ${grey40};
`;
