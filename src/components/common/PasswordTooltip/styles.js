import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { grey40, grey70 } from "../../../styles/settings";

export const List = styled.ul`
  text-align: left;
  padding: 0 0 ${rem(8)} ${rem(5)};
`;

export const IconWrapper = styled.div`
  float: left;
  padding-right: ${rem(5)};
  padding-top: ${rem(4)};
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
