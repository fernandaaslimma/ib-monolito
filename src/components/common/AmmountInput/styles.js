import styled, { css, keyframes } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { gray300, negative300 } from "../../../styles/settings";

const opacitychange = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Ammount = styled.input`
  background: none;
  font-size: ${rem(30)};
  border: none;
  display: inline;
  font-family: Lato Bold;
  color: ${gray300};
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const IncrementButtons = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Increment = styled.li`
  flex-basis: 0;
  flex-grow: 1;
`;

export const AmmountWrapper = styled.div`
  display: grid;
  grid-template-columns: ${rem(24)} 1fr;
  align-items: center;
  padding: 0 ${rem(10)};
`;

export const Wrapper = styled.div`
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

export const Currency = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray300};
  transition: transform 0.1s linear;
`;

export const Underliner = styled.span`
  height: 1px;
  display: block;
  margin: ${rem(12)} ${rem(10)} ${rem(16)} ${rem(10)};
  background: #99b5c6;

  ${({ valid, pristine }) =>
    !valid &&
    !pristine &&
    css`
      background: ${negative300};
    `};
`;

export const InvalidMessage = styled.p`
  color: ${negative300};
  padding: 0 ${rem(8)} ${rem(16)} ${rem(8)};
  font-family: Lato;
  font-size: ${remFontSize(12)};
  line-height: ${remFontSize(14)};
  text-align: center;
  animation: ${opacitychange} 0.4s ease-in-out forwards;
`;
