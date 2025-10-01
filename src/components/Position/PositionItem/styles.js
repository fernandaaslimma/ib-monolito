import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import {
  conclusive200,
  coolgrey,
  darkGreen,
  gray80,
  grey70,
  white
} from "../../../styles/settings";

export const Container = styled.div`
  padding-inline: ${rem(16)};
  border-radius: ${rem(4)};
  background-color: ${white};
  padding: ${rem(16)};
  margin-top: ${rem(32)};
`;

export const Title = styled.span`
  font-family: "Lato";
  font-weight: 900;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  letter-spacing: ${rem(0.45)};
  color: ${darkGreen};
`;

export const ValuesContainer = styled.div``;

export const Subtitle = styled.span`
  font-family: "Lato";
  font-weight: 700;
  font-size: ${remFontSize(9)};
  line-height: ${rem(16)};
  letter-spacing: ${rem(0.5)};
  color: ${darkGreen};
`;

export const ValueItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${rem(8)};
  padding-bottom: ${rem(8)};
`;
export const Item = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: ${remFontSize(11)};
  line-height: ${rem(13.2)};
  letter-spacing: ${rem(0.36)};
  color: ${grey70};
`;
export const Value = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14.4)};
  letter-spacing: ${rem(0.39)};
  color: ${conclusive200};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: ${rem(4)};
`;

export const InfoItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: ${rem(8)};
`;
export const Info = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: ${remFontSize(8)};
  line-height: ${rem(16)};
  color: ${coolgrey};
`;
export const InfoValue = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  letter-spacing: ${rem(0.45)};
  color: ${grey70};
  margin-top: ${rem(4)};
`;

export const Divider = styled.div`
  height: ${rem(1)};
  background-color: ${gray80};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};
`;
