import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  gray300,
  white,
  gray200,
  blue20,
  gray80
} from "../../../../styles/settings";

export const Card = styled.div`
  margin: 0px 0px ${rem(32)} 0px;
  background: ${blue20};
`;

export const CardTitle = styled.p`
  color: ${gray300};
  font-family: Lato Bold;
  padding: 0px 0px ${rem(16)} 0px;
`;

export const CardContent = styled.div`
  background: ${white};
  border: 1px solid ${gray80};
  padding: ${rem(8)} ${rem(16)};
`;

export const Section = styled.div`
  display: flex;
  font-family: Lato;
  margin: ${rem(8)} 0;
`;

export const Info = styled.span`
  flex-grow: 1;
`;
export const Label = styled.p`
  font-size: ${remFontSize(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.452308)};
  color: ${gray200};
  margin-bottom: ${rem(4)};
`;

export const Value = styled.span`
  font-weight: bold;
  line-height: 18px;
  letter-spacing: ${rem(0.44999998807907104)};
  font-size: ${remFontSize(14)};
  color: ${gray300};
`;
