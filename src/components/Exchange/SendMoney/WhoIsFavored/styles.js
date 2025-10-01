import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  darkBlue,
  exchangeGrey,
  exchangeRadio,
  gray90,
  lighestgrey,
  white,
  blue20
} from "../../../../styles/settings";

export const Separator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: column;
`;

export const Card = styled.div`
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${exchangeGrey};
  border-radius: ${rem(4)};
  margin-bottom: ${rem(10)};
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  background-color: ${props =>
    props.background ? props.background : { white }};
`;

export const Span = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 0)};
  font-size: ${props =>
    props.fontSize ? remFontSize(props.fontSize) : remFontSize(16)};
  font-family: Lato;
  color: ${props => (props.color ? props.color : gray90)};
  line-height: ${props => (props.lineHeight ? rem(props.lineHeight) : 0)};
  padding-left: ${props => (props.paddingLeft ? rem(props.paddingLeft) : 0)};
  padding-right: ${props => (props.paddingRight ? rem(props.paddingRight) : 0)};
  padding-top: ${rem(8)};
  padding-bottom: ${rem(2)};
`;

export const SpanCotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const RadioLabel = styled.label`
  padding-left: ${rem(15)};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const StyledRadio = styled.span`
  display: inline-block;
  position: relative;
  width: ${rem(18)};
  height: ${rem(18)};
  border: 1px solid ${exchangeRadio};
  border-radius: 50%; /* Faça o radio input circular */
  margin-right: 10px; /* Espaçamento entre o radio input e o rótulo */

  /* Estilize o radio input quando estiver marcado (selecionado) */
  ${RadioInput}:checked + &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${rem(9)}; /* Largura da bolinha interior */
    height: ${rem(9)}; /* Altura da bolinha interior */
    background-color: ${darkBlue}; /* Cor da bolinha interior quando selecionada */
    border-radius: 50%; /* Faça a bolinha interior circular */
  }
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  padding-bottom: ${rem(8)};
  background: ${white};
  margin-top: ${rem(16)};
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const WrapperDefaultContent = styled.div`
  padding: 0 ${rem(0)} ${rem(0)};
  min-height: ${rem(400)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShimmerContainer = styled.div`
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

export const FlagIconContainer = styled.span`
  margin-right: 10px;
`;
