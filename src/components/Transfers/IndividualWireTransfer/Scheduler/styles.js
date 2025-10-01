import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { negative300 } from "../../../../styles/settings";
import { RadioTag } from "../../../common/Radio/styles";

export const RadioWrapper = styled.div`
  ${RadioTag} {
    margin-left: ${rem(0)};
  }
  padding-left: ${props => (props.padding ? rem(props.padding) : 0)};
  padding-right: ${props => (props.padding ? rem(props.padding) : 0)};
  margin: 0 ${rem(8)} 0 ${rem(8)};
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin: ${rem(7)} ${rem(0)} ${rem(8)} ${rem(0)};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${rem(margin.t ? margin.t : 7)} ${rem(margin.r ? margin.r : 0)}
        ${rem(margin.b ? margin.b : 8)} ${rem(margin.l ? margin.l : 0)};
    `}
`;

export const AlertMessageWrapper = styled.div`
  margin-top: ${rem(24)};

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin-top: ${rem(0)};
    `}
`;

export const InputErrorMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.45)};

  color: ${negative300};
`;

export const FavoredInfo = styled.div`
  margin: 0 ${rem(8)} 0 ${rem(8)};
`;
