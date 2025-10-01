import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { lightgrey, grey90, gray300 } from "../../../styles/settings";
import { LinkTag } from "../../../styles/objects/actionElements";

export const EFTModalWrapper = styled.div`
  border-top: solid ${rem(1)} ${lightgrey};

  ${LinkTag} {
    margin-top: ${rem(20)};
    height: ${rem(40)};
    line-height: ${rem(40)};
    width: ${rem(120)};
  }
`;

export const MainContainer = styled.div`
  padding: ${rem(30)} ${rem(20)} ${rem(30)};
  display: flex;
`;

export const LeftContainer = styled.div`
  border: solid ${rem(1)} ${lightgrey};
  border-radius: ${rem(5)};
  padding: ${rem(20)} ${rem(25)} ${rem(20)};
  margin-left: ${rem(10)};
  margin-right: ${rem(10)};
  width: 18%;
  display: inline-block;
`;

export const CenterContainer = styled.div`
  border: solid ${rem(1)} ${lightgrey};
  border-radius: ${rem(5)};
  padding: ${rem(20)} ${rem(25)} ${rem(20)};
  margin-left: ${rem(10)};
  margin-right: ${rem(10)};
  width: 51%;
  display: inline-block;
`;

export const RightContainer = styled.div`
  border: solid ${rem(1)} ${lightgrey};
  border-radius: ${rem(5)};
  padding: ${rem(20)} ${rem(25)} ${rem(20)};
  margin-left: ${rem(10)};
  margin-right: ${rem(10)};
  width: 26%;
  display: inline-block;
`;

export const FooterContainer = styled.div`
  display: inline-flex;
`;

export const UpperDiv = styled.div`
  height: ${rem(65)};
`;

export const LowerDiv = styled.div`
  height: ${rem(55)};
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

export const WrapperSave = styled.div`
  display: grid;
  grid-template-columns: 56% auto;
  text-align: end;
  margin-bottom: 20px;
`;

export const WrapperCheckbox = styled.div`
  margin: 3px 0 0 23px;
`;

export const WrapperAlert = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(32)};
`;

export const TitleSave = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: ${gray300};
  display: flex;
  justify-content: flex-end;

  span {
    margin-left: ${rem(8)};
  }
`;
