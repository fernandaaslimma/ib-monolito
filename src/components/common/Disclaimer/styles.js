import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { darkBlue } from "../../../styles/settings";

export const Wrapper = styled.p`
  align-items: center;
  color: ${darkBlue};
  display: flex;
  font-family: Lato;
  font-size: ${remFontSize(16)};
  letter-spacing: ${rem(0.4)};
  line-height: 1;

  svg {
    margin-right: ${rem(15)};
    margin-top: ${rem(2)};
  }
`;
