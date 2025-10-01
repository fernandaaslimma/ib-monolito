import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { black50, negative200 } from "../../../styles/settings";
import { LinkTag } from "../../../styles/objects/actionElements";

export const EFTModalWrapper = styled.div`
  padding: ${rem(30)} ${rem(15)} 0 ${rem(15)};

  ${LinkTag} {
    margin-top: ${rem(20)};
    height: ${rem(40)};
    line-height: ${rem(40)};
    width: ${rem(120)};
  }
`;

export const IconWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-top: ${rem(10)};
`;

export const Title = styled.h1`
  font-size: ${remFontSize(18)};
  font-family: Lato;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(12)};
  color: ${negative200};
  font-weight: bold;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const Message = styled.h1`
  font-size: ${remFontSize(13)};
  font-family: Lato;
  width: 76%;
  margin: 0 auto;
  margin-top: ${rem(20)};
  margin-bottom: ${rem(30)};
  color: ${black50};
  line-height: 1.62;
`;

export const Description = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  line-height: 1.46;
  letter-spacing: ${rem(0.3)};
  color: ${black50};
  margin: 0 ${rem(30)} ${rem(40)} ${rem(30)};
  margin-bottom: ;
`;
