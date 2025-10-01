import styled from "styled-components";
import { Button } from "react-bocombbm-components";
import { remFontSize, rem } from "../../../styles/tools";
import { black50, darkGreen } from "../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${rem(61)} 0 ${rem(77)} 0;
`;

export const ImgSuccess = styled.img`
  width: ${rem(140)};
  height: ${rem(140)};
  object-fit: contain;
  margin-bottom: ${rem(30)};
`;

export const Title = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(28)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: ${rem(0.47)};
  color: ${darkGreen};
  margin-bottom: ${rem(13)};
`;

export const SubTitle = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(22)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: ${rem(0.58)};
  color: ${black50};
  margin-bottom: ${rem(20)};
`;

export const BackHomeButton = styled(Button)``;
