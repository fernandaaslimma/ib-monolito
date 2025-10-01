import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray200, gray300 } from "../../../../styles/settings";

export const MainMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding-top: ${rem(34)};
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;
  text-align: center;
  color: ${gray300};
  margin: ${rem(19)} 0 ${rem(8)} 0;
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  text-align: center;
  color: ${gray200};
  margin-bottom: ${rem(16)};
`;
