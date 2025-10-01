import styled from "styled-components";
import { rem, remFontSize } from "../../../../../styles/tools";
import { white, neutral200 } from "../../../../../styles/settings";

export const TabsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  text-decoration: none;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.span`
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: ${rem(600)};
  background: ${white};
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(16)};
  line-height: ${rem(16)};
  display: flex;
  padding: ${rem(17)} 0 ${rem(17)} 0;
  color: ${neutral200};
  text-align: center;
`;

export const Line = styled.hr`
  width: 100%;
  max-width: ${rem(600)};
  border: none;
  height: ${rem(2)};
  margin: 0 0 0 0;
  background: ${neutral200};
`;
