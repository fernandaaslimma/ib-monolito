import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import {
  gray300,
  gray200,
  lighestgrey,
  white,
  blue20
} from "../../../styles/settings";

export const Wrapper = styled.div`
  background: ${white};
  ${media.md(css`
    max-width: ${rem(981)};
    margin: 0 auto;
  `)};
`;

export const AccTitle = styled.p`
  color: ${gray300};
  font-family: Lato Bold;
  font-size: ${remFontSize(16)};
  padding: ${rem(24)} ${rem(10)} ${rem(15)} ${rem(10)};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  flex-grow: 1;
  position: relative;
  flex-basis: 0;
`;

export const Separator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const Upper = styled.span`
  font-size: ${remFontSize(14)};
  text-transform: capitalize;
`;

export const Space = styled.span`
  display: block;
  margin: 0 ${rem(8)};
  position: relative;
`;

export const AlertMessage = styled.p`
  color: ${gray200};
  padding: 0 ${rem(8)} ${rem(16)} ${rem(8)};
  font-family: Lato;
  font-size: ${remFontSize(14)};
  line-height: 125%;
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  display: flex;
`;

export const FormWrapper = styled.div`
  background: white;
  overflow: auto;
  background: ${blue20};
`;

export const AmmountWrapper = styled.div`
  padding: 0 ${rem(16)} ${rem(32)} ${rem(16)};
`;

export const StepVisibility = styled.span`
  display: inline-block;
  position: absolute;
`;

export const TransferToNewAccountWrapper = styled.section`
  margin: 0 ${rem(8)} 0 ${rem(8)};
`;

export const EmptyMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  letter-spacing: ${remFontSize(0.45)};
  color: ${gray200};
`;

export const EmptyMessageBold = styled(EmptyMessage)`
  font-weight: 700;
  color: ${gray300};
`;
