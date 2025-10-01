import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  gray90,
  gray300,
  gray500
} from "../../../../styles/settings";

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

export const TextGroup = styled.div`
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: left;
    max-width: ${rem(600)};
`;

export const InputGroup = styled.div`
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: ${rem(284)};
  margin-bottom: ${rem(5)};
`;

export const TransferFlowCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border-radius: ${rem(4)};
  border: ${rem(1)} solid ${gray90};
  max-width: ${rem(600)};
  height: ${rem(160)};
  padding:  0 ${rem(24)} 0 ${rem(24)};
  margin-bottom: ${rem(24)};

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const WrapperFlow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${rem(30)};
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

export const StyledLine = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  padding-top: ${rem(4)};

  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  display: flex;
  align-items: center;
  letter-spacing: ${rem(0.4)};

  color: ${gray300};

  ${({ style }) =>
    style &&
    css`
      ${style}
    `};

  ${({ checked }) =>
    checked &&
    css`
      font-weight: 600;
    `};
`;

export const TableWrapper = styled.div`
  width: ${rem(630)};
  margin: 0 -${rem(15)} 0 -${rem(15)};
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  accent-color: ${gray500};
  width: ${rem(17)};
  height: ${rem(17)};

  ${({ style }) =>
    style &&
    css`
      ${style}
    `};
`;

export const CheckBoxWrapper = styled.div`
  margin-top: ${rem(10)};
  margin-right: ${rem(6)};
`;