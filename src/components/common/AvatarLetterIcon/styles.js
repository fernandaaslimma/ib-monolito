import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { neutral200 } from "../../../styles/settings";

export const Container = styled.div`
  border-radius: ${rem(18)};
  width: ${rem(36)};
  height: ${rem(36)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${neutral200};
`;

export const Title = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.4)};
  font-weight: 600;
  color: white;
`;
