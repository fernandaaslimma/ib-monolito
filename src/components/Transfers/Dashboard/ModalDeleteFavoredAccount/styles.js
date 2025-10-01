import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { lightgrey, grey90 } from "../../../../styles/settings";

export const FooterContainer = styled.div`
  display: inline-flex;
`;

export const UpperDiv = styled.div`
  height: ${rem(65)};
`;

export const LowerDiv = styled.div`
  height: ${rem(55)};
`;

export const CenterContainer = styled.div`
  border: solid ${rem(1)} ${lightgrey};
  border-radius: ${rem(5)};
  padding: ${rem(20)} ${rem(25)} ${rem(20)};
  margin: ${rem(30)} ${rem(10)};
  width: 86%;
  display: inline-block;
`;

export const SubDiv = styled.div`
  width: ${({ width = false }) => (!width ? "33%" : width)};
  height: 100%;
  float: left;
`;

export const Title = styled.h1`
  color: ${grey90};
  font-family: Lato;
  font-size: ${remFontSize(10)};
  font-weight: bold;
  letter-spacing: ${rem(0.4)};
  text-transform: uppercase;
  text-align: left;
`;

export const SubTitle = styled.h1`
  color: ${grey90};
  font-family: Lato;
  font-size: ${remFontSize(13.3)};
  letter-spacing: ${rem(0.4)};
  margin-top: ${rem(8)};
  text-align: left;
`;

export const LargeSubTitle = styled.h1`
  color: ${grey90};
  font-family: Lato;
  font-size: ${remFontSize(13.3)};
  letter-spacing: ${rem(0.4)};
  margin-top: ${rem(8)};
  text-align: left;
  width: 180%;
`;

export const Line = styled.hr`
  border: solid ${rem(1)} ${lightgrey};
`;
