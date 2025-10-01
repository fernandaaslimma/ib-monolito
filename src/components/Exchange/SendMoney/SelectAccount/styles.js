import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  gray90,
  grey180,
  grey90,
  lighestgrey,
  white,
  blue20,
  gray200
} from "../../../../styles/settings";

export const Container = styled.div`
  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${white};
  margin-top: ${rem(18)};
`;

export const DropDownWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
`;

export const Span = styled.div`
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 0)};
  font-size: ${props =>
    props.fontSize ? remFontSize(props.fontSize) : remFontSize(16)};
  font-family: Lato;
  color: ${props => (props.color ? props.color : gray90)};
  line-height: ${props => (props.lineHeight ? rem(props.lineHeight) : 0)};
  margin-top: ${props => (props.marginTop ? rem(props.marginTop) : 0)};
  margin-bottom: ${props => (props.marginBottom ? rem(props.marginBottom) : 0)};
`;

export const FloatingText = styled.div`
  display: inline-flex;
  color: ${grey90};
  width: 100%;
  margin-top: ${rem(12)};
`;

export const Currency = styled.span`
  color: ${grey180};
  margin: ${rem(4.5)} 0 0 0;
  font-size: ${remFontSize(12)};
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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalMsg = styled.span`
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(14)};
  line-height: ${remFontSize(22.4)};
  color: ${gray200};
  padding-bottom: ${rem(24)};
  padding: ${rem(16)};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: ${`${rem(1)} solid ${gray90}`};
  padding: ${rem(16)};
`;
