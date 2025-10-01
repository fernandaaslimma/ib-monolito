import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { lightgrey, blue60, black50 } from "../../../styles/settings";
import { InputWrapper, InputField } from "../../common/Input/styles";

export const EFTModalWrapper = styled.div`
  border-bottom: solid ${rem(1)} ${lightgrey};
  ${InputField} {
    height: ${rem(45)};
    padding-left: ${rem(9.6)};
  }
  ${InputWrapper} {
    margin-top: ${rem(20)};
    height: ${rem(45)};
    margin-bottom: ${rem(40)};
  }
`;

export const IconWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-top: ${rem(30)};
`;

export const Title = styled.h1`
  font-size: ${remFontSize(18)};
  font-weight: bold;
  text-align: center;
  font-family: Lato;
  margin-left: -${rem(8)};
  margin-bottom: ${rem(15)};
  color: ${blue60};
`;

export const Message = styled.h1`
  font-size: ${remFontSize(13)};
  font-family: Lato;
  width: 76%;
  margin: 0 auto;
  margin-top: ${rem(20)};
  color: ${black50};
`;
