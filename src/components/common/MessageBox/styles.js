import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { warning100, warning400 } from "../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: ${rem(24)};
  background-color: ${warning100};
  border-radius: ${rem(4)};
  margin-bottom: ${rem(32)};
`;

export const Message = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  font-weight: 400;
  letter-spacing: ${rem(0.4)};
  color: ${warning400};
  margin-left: ${rem(8)};
`;
