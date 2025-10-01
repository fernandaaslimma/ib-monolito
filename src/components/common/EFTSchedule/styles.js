import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { lightgrey, black50, orange } from "../../../styles/settings";
import { default as ButtonRaw } from "../../common/Button";
import { LinkTag } from "../../../styles/objects/actionElements";

export const EFTModalWrapper = styled.div`
  ${LinkTag} {
    margin-top: ${rem(20)};
    height: ${rem(40)};
    line-height: ${rem(40)};
    width: ${rem(120)};
  }
`;

export const ContentWrapper = styled.div`
  border-bottom: solid ${rem(1)} ${lightgrey};
`;

export const IconWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-top: ${rem(10)};
`;

export const Title = styled.h1`
  font-size: ${remFontSize(18)};
  font-weight: bold;
  text-align: center;
  font-family: Lato;
  margin-top: ${rem(10)};
  margin-bottom: ${rem(15)};
  color: ${orange};
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

export const Button = styled(ButtonRaw)`
  margin-top: ${rem(20)};
  height: ${rem(40)};
  line-height: ${rem(40)};
  width: ${rem(120)};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }
`;

export const FooterContainer = styled.div`
  display: inline-flex;
`;
