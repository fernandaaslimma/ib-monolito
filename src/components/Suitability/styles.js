import styled from "styled-components";
import { rem, remFontSize } from "../../styles/tools";
import { darkGreen, neutral200 } from "../../styles/settings";

export const Container = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: ${rem(600)};
  margin-left: auto;
  margin-right: auto;
`;

export const ProfilesContainer = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${rem(16)};
`;

export const ProfilesLabel = styled.span`
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14.4)};
  color: ${neutral200};
  margin-top: ${rem(16)};
`;

export const CurrentProfileLabel = styled.span`
  font-family: Lato;
  font-weight: 900;
  font-size: ${remFontSize(24)};
  line-height: ${rem(28.8)};
  color: ${darkGreen};
  margin-top: ${rem(16)};
`;

export const Text = styled.span`
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  color: ${darkGreen};
  margin-top: ${rem(24)};
  justify-content: baseline;
`;
