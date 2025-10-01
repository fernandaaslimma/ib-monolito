import styled, { css } from "styled-components";
import { remFontSize, rem, media } from "../../../styles/tools";
import { blue70, lightBlack } from "../../../styles/settings";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${rem(860)};
  margin-bottom: ${rem(6)};
  margin: auto ${rem(16)} auto ${rem(16)};
  ${media.md(css`
    margin: auto;
  `)};
`;

export const WrapperTitle = styled.div`
  margin-top: ${rem(31)};
`;

export const Title = styled.p`
  color: ${blue70};
  font-family: Lato;
  font-size: ${props => remFontSize(props.fontSize)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: ${rem(0.78)};
  margin-bottom: ${props => rem(props.marginBottom)};
`;

export const SubTitle = styled.p`
  color: ${lightBlack};
  font-family: Lato;
  font-size: ${props => remFontSize(props.fontSize)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: ${rem(0.48)};
`;

export const WrapperSelectionType = styled.div`
  max-width: ${rem(478)};
  margin-top: ${rem(48)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectionType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${rem(104)};
  padding: ${rem(20)} ${rem(16)} ${rem(24)} ${rem(24)};
  border: solid 1px rgba(211, 221, 228, 0.5);
  border-radius: ${rem(4)};
  margin-bottom: ${props => (props.hasMarginBottom === true ? rem(24) : 0)};
  cursor: pointer;

  &:hover {
    border: solid 1px rgba(84, 154, 230, 0.5);
    background-color: rgba(74, 144, 226, 0.02);
  }
`;

export const SelectionTypeText = styled.div`
  max-width: ${rem(314)};
  text-align: start;
  margin-left: ${rem(28)};
  margin-right: ${rem(24)};
`;
