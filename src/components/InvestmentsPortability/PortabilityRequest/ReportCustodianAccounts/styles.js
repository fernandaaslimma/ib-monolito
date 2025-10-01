import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  gray90,
  white
} from "../../../../styles/settings";


export const TitleWrapper = styled.div`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

export const Text = styled.div`
  font-family: Lato;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 0)};
  font-size: ${props =>
    props.fontSize ? remFontSize(props.fontSize) : remFontSize(16)};
  color: ${props => (props.color ? props.color : gray90)};
  line-height: ${props => (props.lineHeight ? rem(props.lineHeight) : 0)};
  margin-top: ${props => (props.marginTop ? rem(props.marginTop) : 0)};
  margin-bottom: ${props => (props.marginBottom ? rem(props.marginBottom) : 0)};
  letter-spacing:  ${props => (props.letterSpacing ? rem(props.letterSpacing) : 0)};
`;

export const FooterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: ${rem(600)};
  padding-bottom: ${rem(60)};
  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: ${rem(600)};
  margin-bottom: ${rem(32)};
  margin-top: ${rem(32)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
    min-height: ${rem(500)};
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 ${rem(24)} 0 ${rem(24)};
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextGroup = styled.div`
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const InputGroup = styled.div`
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: left;
  min-width: ${rem(284)};
`;

export const InputGroupCounter = styled.div`
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  width: ${rem(600)};
`;

export const TransferFlowCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${rem(4)};
  border: ${rem(1)} solid ${gray90};
  width: ${rem(600)};
  height: ${rem(102)};
  padding: ${rem(24)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const CustodiansAccountsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${rem(600)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
    background: ${white}
`;






