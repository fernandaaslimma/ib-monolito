import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  white,
  gray90,
  gray200,
  gray300,
  conclusive200,
  neutral100,
  brandPrimary
} from "../../../../styles/settings";

export const ListWrapper = styled.ul`
  margin: none;
  padding: ${rem(24)} 0 ${rem(16)} 0;
  @media (max-width: ${rem(600)}) {
  padding: ${rem(24)} ${rem(16)} ${rem(16)} ${rem(16)};
  }
`;

export const Item = styled.li`
  padding: ${rem(8)} ${rem(16)};
`;

export const ItemWrapper = styled.li`
  background: ${white};
  box-shadow: 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.16);
  border-radius: ${rem(4)};
  margin-bottom: ${rem(16)};
  cursor: pointer;
`;

export const ItemFooterDisclaimer = styled.div`
  display: flex;
  padding: 0 ${rem(16)} 0 ${rem(16)};
  align-items: center;
  border-radius: 0 0 ${rem(4)} ${rem(4)};
  height: ${rem(32)};

  background: ${props => (props.closedCard ? gray90 : neutral100)};

  color: ${props => (props.closedCard ? gray300 : brandPrimary)};
`;

export const ItemFooterDisclaimerText = styled.div`
  padding: 0 0 0 ${rem(12)};
  font-family: Lato;
  font-size: ${rem(12)};
  font-style: normal;
  font-weight: 500;
  line-height: ${rem(15)};
  letter-spacing: 0.452307790517807px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  font-family: Lato;
  margin: ${rem(8)} 0;
`;

export const Label = styled.span`
  font-size: ${remFontSize(12)};
  display: block;
  color: ${gray200};
`;

export const Value = styled.span`
  margin: ${rem(8)} ${rem(20)} 0 0;
  display: inline-flex;
  align-items: center;
  font-size: ${remFontSize(14)};
  color: ${gray300};
  font-weight: bold;

  ${({ fundName }) =>
    fundName &&
    css`
      margin-top: 0;
    `}
`;

export const Info = styled.span`
  flex-grow: 1;
`;

export const Percentage = styled.span`
  font-weight: bold;

  ${({ positive }) =>
    positive &&
    css`
      color: ${conclusive200};
    `}
`;

export const Title = styled.h2`
  font-size: ${remFontSize(18)};
  margin: 0 0 ${rem(15)} 0;
  color: ${gray300};
  font-weight: 700;
`;

export const Overview = styled.div`
  flex-grow: 1;
  padding: ${rem(30)} ${rem(15)};
  font-family: Lato;
  color: ${gray200};
  line-height: ${remFontSize(24)};
  white-space: pre-line;
`;

export const MainInfo = styled.div`
  padding: ${rem(20)} ${rem(15)} 0 ${rem(15)};
  background: ${white};
  overflow: auto;
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray200};
  line-height: ${remFontSize(22)};
`;

export const ClickbleTextArea = styled.div`
  padding: ${rem(16)} 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ClickbleText = styled.p`
  font-size: ${remFontSize(16)};
  color: ${gray200};
  font-weight: 500;
`;

export const Modality = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.452308)};
  color: ${gray200};
  margin-bottom: ${rem(4)};
`;

export const FundsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
