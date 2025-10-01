import styled from "styled-components";
import { darkGreen } from "../../styles/settings";
import { rem, remFontSize } from "../../styles/tools";

export const Title = styled.h1`
  font-size: ${remFontSize(20)};
  padding: ${rem(25)} 0;
  font-family: "Lato Bold", Lato;
  color: ${darkGreen};
`;
