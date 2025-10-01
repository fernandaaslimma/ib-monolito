import styled from "styled-components";
import { rem, remFontSize } from "../../../../../styles/tools";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${rem(44)};
  padding-left: ${rem(18)};
  margin-bottom: ${rem(10)};
`;

export const TimerText = styled.span`
  color: #27445f;
  font-family: Lato;
  font-weight: 400;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(39)};
`;
export const TimerTextContainer = styled.div`
  margin-left: ${rem(16)};
`;
