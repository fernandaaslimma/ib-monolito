import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray200, gray300, white } from "../../../../styles/settings";

export const ListItemContainer = styled.div`
  margin-inline: ${rem(16)};
  margin-top: ${rem(16)};
  margin-bottom: ${rem(4)};
`;

export const Title = styled.span`
  font-size: ${remFontSize(18)};
  font-family: Lato;
  font-weight: 700;
  line-height: ${rem(22.5)};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};
  background-color: ${white};
  color: ${gray300};
`;

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: ${white};
  display: flex;
  flex-direction: column;
  margin-top: ${rem(16)};
`;

export const Subtitle = styled.span`
  font-size: ${remFontSize(16)};
  font-family: Lato;
  font-weight: 700;
  line-height: ${rem(19.2)};
  margin-top: ${rem(24)};
  color: ${gray300};
`;

export const ValueContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${rem(8)};
`;

export const Currency = styled.span`
  font-size: ${remFontSize(12)};
  font-family: Lato;
  font-weight: 400;
  line-height: ${rem(14.4)};
  color: ${gray300};
`;

export const Value = styled.span`
  font-size: ${remFontSize(24)};
  font-family: Lato;
  font-weight: 400;
  line-height: ${rem(28.8)};
  color: ${gray300};
  margin-left: ${rem(2)};
`;

export const Span = styled.span`
  font-size: ${remFontSize(14)};
  font-family: Lato;
  font-weight: 400;
  line-height: ${rem(16.8)};
  margin-top: ${rem(8)};
  color: ${gray200};
`;
