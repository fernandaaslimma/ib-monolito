import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import {
  grey190,
  lighestgrey,
  grey110,
  darkBlue,
  white,
  darkGreen,
  grey,
  grey90,
  grey70,
  gray200,
  gray300
} from "../../../styles/settings";
import { default as ButtonRaw } from "../../common/Button";
import Icon from "../../common/Icon";
import { Header, Section, IconContainer } from "../../common/Card/styles";
import { Wrapper, SecondaryText } from "../../common/DefaultContent/styles";
import {
  isInternetExplorer,
  isMsEdge,
  isMsBrowser
} from "../../../utils/getNavigator";

export const WrapperOffShore = styled.div`
  width: 100%;
`;

export const CardWrapper = styled.div`
  ${Header} {
    margin-left: ${rem(8)};
  }

  ${IconContainer} {
    margin-right: ${rem(8)};
  }

  ${Section} {
    margin-bottom: ${rem(20)};
    padding-bottom: ${rem(10)};
  }

  ${({ breakPageBefore }) =>
    breakPageBefore &&
    css`
      @media print {
        page-break-before: always;
      }
    `};

  ${({ index }) =>
    index === 0 &&
    css`
      margin-top: ${rem(16)};
    `};
`;

export const DefaultWrapper = styled.div`
  ${Wrapper}, ${SecondaryText} {
    display: block;
    max-width: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  font-family: "Lato";
  font-size: ${remFontSize(13)};
  font-weight: bold;
  line-height: 1.45;
  text-transform: none;
  color: ${darkGreen};
  letter-spacing: ${rem(0.4)};
  margin-bottom: ${rem(24)};

  ${media.md(css`
    font-size: ${remFontSize(24)};
    margin: ${rem(17)} ${rem(5)} ${rem(24)} ${rem(5)};
    text-transform: none;
  `)};
`;

export const ContentCard = styled.div`
  position: relative;
  top: -${rem(30)};
  margin-bottom: -${rem(35)};

  @media print {
    top: 0;
  }
`;

export const Balance = styled.div`
  padding: ${rem(11)} ${rem(24)} ${rem(11)} ${rem(24)};
  margin: 0 0 ${rem(10)} 0;
  color: ${grey190};
  border: solid ${rem(1)} ${lighestgrey};
  display: flex;

  ${({ external }) =>
    external &&
    css`
      margin: ${rem(12)} 0 ${rem(24)} 0;
      align-items: center;

      ${Status} {
        :nth-child(2) {
          margin-right: 0;
          margin-left: auto;
        }
      }
    `};

  ${({ external }) => !external && css``};

  ${({ external }) =>
    !external &&
    css`
      @media print {
        padding: ${rem(4)} ${rem(20)} ${rem(4)} ${rem(10)};
        margin-bottom: ${rem(36)};

        ${(isInternetExplorer() || isMsEdge() || isMsBrowser()) &&
          css`
            margin-bottom: ${rem(20)};
          `};
      }
    `};
`;

export const StyledButton = styled(ButtonRaw)`
  margin-top: ${rem(12)};
  max-width: ${rem(168)};
  height: ${rem(46)};
  padding: 0 ${rem(18)};
  float: right;
  background-color: ${darkBlue};
  border-color: ${darkBlue};
  color: ${white};
  cursor: pointer;

  ${({ smallBlue }) =>
    smallBlue &&
    css`
      padding: 0 ${rem(24)};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${grey};
      border-color: ${grey};
    `}

  @media print {
    display: none;
  }
`;

export const IconView = styled.div`
  @media print {
    display: none;
  }
`;

export const ButtonContent = styled.div`
  height: ${rem(46)};
  display: flex;
  align-items: center;
`;

export const IconButton = styled(Icon)`
  margin-right: ${rem(18)};
  margin-left: 0;
  margin-bottom: ${rem(2)};
  color: ${white};
`;

export const ButtonName = styled.text`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  font-weight: bold;
`;

export const Status = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  :nth-child(2) {
    margin-right: auto;
  }

  :last-child {
    margin-left: ${rem(40)};
  }

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `};

  ${({ initial }) =>
    initial &&
    css`
      margin-left: 0;
    `};
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Events = styled.ul`
  font-family: Lato;
  margin: ${rem(10)} 0 ${rem(10)} 0;
`;

export const Line = styled.li`
  display: flex;
  padding: ${rem(10)} ${rem(20)} ${rem(12)} ${rem(10)};
  background: none;

  :nth-child(2n) {
    background: #f6f9fb;
  }

  ${({ clickable }) =>
    clickable &&
    css`
      :hover {
        cursor: pointer;
      }
    `};
`;

export const EmptyItem = styled.span`
  min-width: ${rem(244)};

  @media print {
    min-width: ${rem(20)};
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  letter-spacing: ${rem(0.36)};
  font-size: ${remFontSize(11)};
  text-transform: uppercase;
  color: ${grey90};
  flex-grow: 1;
  flex-direction: column;
`;

export const CounterPart = styled.span`
  margin-top: ${rem(4)};
  letter-spacing: ${rem(0.36)};
  font-size: ${remFontSize(11)};
  text-transform: uppercase;
  color: ${grey90};
  font-weight: bold;
  flex-grow: 1;
`;

export const DescriptionTextItem = styled.span`
  line-height: ${rem(1.78)};
  letter-spacing: ${rem(0.5)};
  text-transform: uppercase;
  font-size: ${remFontSize(9)};
  font-weight: bold;
  color: ${darkGreen};
  flex-grow: 1;
`;

export const AmountTextItem = styled.span`
  text-transform: uppercase;
  font-size: ${remFontSize(9)};
  font-weight: bold;
  color: ${darkGreen};
`;

export const Label = styled.label`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  padding-right: ${rem(40)};
  text-align: right;
  min-width: 100%;
  display: block;
  margin-bottom: ${rem(5)};
`;

export const EyeLabel = styled(Label)`
  padding-right: ${rem(0)};
  text-align: center;
  font-size: ${remFontSize(13)};
`;

export const InnerLabel = styled(Label)`
  margin-bottom: 0;
  text-transform: uppercase;
  min-width: 0;
  color: ${grey110};
  font-size: ${remFontSize(10)};

  ${({ expanded }) =>
    expanded &&
    css`
      color: ${darkGreen};
      font-size: ${remFontSize(13)};
      font-family: Lato Bold;
    `};

  ${({ expanded }) =>
    !expanded &&
    css`
      padding: 0;
      font-size: ${remFontSize(10)};
      font-family: Lato;
      margin: 0;
      line-height: 1.6;

      @media print {
        margin: ${rem(5)};
      }
    `};
`;

export const PaginaTionWrapper = styled.div`
  padding: ${rem(30)} 0 ${rem(60)};

  @media print {
    display: none !important;
  }
`;

export const WrapperPendingOperations = styled.div`
  cursor: pointer;
  padding: ${rem(15)} ${rem(16)} ${rem(16)} ${rem(16)};
  align-items: center;

  @media print {
    display: none !important;
  }
`;

export const AccountInfoWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;

  @media print {
    justify-content: right;
    flex-direction: row;
  }
`;

export const AccountInformation = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const AccountInfoItem = styled.section`
  display: flex;
  flex-direction: column;

  & + .AccountInfoItem {
    margin-left: ${rem(80)};
  }

  @media print {
    justify-content: right;
    flex-direction: row;
    margin-left: 0;

    & + .AccountInfoItem {
      margin-left: 0;
      margin-top: ${rem(20)};
    }
  }
`;

export const AccountInfoItemValue = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(80)};

  @media print {
    margin-left: auto;
    justify-content: center;
  }
`;

export const AccountInfoLabel = styled.section`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14)};
  letter-spacing: ${rem(0.4)};

  color: ${grey70};

  margin-bottom: ${rem(4)};

  @media print {
    font-weight: 400;

    color: ${grey70};
  }
`;

export const AccountInfoContent = styled.section`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(14)};
  line-height: ${rem(14)};
  /* identical to box height */

  letter-spacing: ${rem(0.4)};
  text-transform: uppercase;

  color: ${gray200};

  @media print {
    font-weight: 400;

    color: ${grey70};
  }
`;

export const StyledLine = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;

  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  display: flex;
  align-items: center;
  letter-spacing: ${rem(0.4)};
  text-transform: uppercase;

  color: ${gray300};

  ${({ checked }) =>
    checked &&
    css`
      font-weight: 600;
    `};
`;

export const ButtonsWrapperLib = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${rem(56)};
  background-color: ${white};
`;

export const ChangeAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
`;

export const ChangeModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${rem(24)};

  @media print {
    display: none;
  }
`;

export const HideValueWrapper = styled.div`
  display: flex;
`;
