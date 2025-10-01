import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { blue20, gray500, lighestgrey } from "../../../styles/settings";

export const Wrapper = styled.div`
  width: ${rem(600)};
  margin: 0 auto;

  @media (max-width: ${rem(600)}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const SpanSubtitle = styled.span`
  font-weight: 700;
  font-size: ${remFontSize(16)};
  font-family: Lato;
  color: ${gray500};
  line-height: ${rem(20)};
  padding-bottom: ${rem(8)};
  margin-top: ${rem(24)};
`;

export const SpanValue = styled.span`
  font-weight: 400;
  font-family: Lato;
  color: ${gray500};
  font-size: ${remFontSize(14)};
  padding-bottom: ${rem(8)};
`;

export const FooterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: ${rem(16)} 0 ${rem(16)} 0;
  box-shadow: ${`0px ${rem(1)} 0px ${lighestgrey} inset`};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const ContainerBlue20 = styled.div`
  background: ${blue20};
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
    min-height: ${rem(500)};
  }
`;

export const SpanContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: ${rem(8)};
  margin-top: ${rem(24)};
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: ${remFontSize(16)};
  font-family: Lato;
  color: ${gray500};
  line-height: ${rem(20)};
`;
