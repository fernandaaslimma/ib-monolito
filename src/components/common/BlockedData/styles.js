import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { negative200, negative50 } from "../../../styles/settings";

export const Container = styled.div`
  padding: ${rem(32)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${negative50};
  border-radius: ${rem(4)};
`;

export const Title = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(30)};
  line-height: 125%;
  color: ${negative200};
  margin-top: ${rem(16)};
`;
