import styled, { css, keyframes } from "styled-components";
import { rem, remFontSize } from "../../../../../styles/tools";
import { gray300, negative300 } from "../../../../../styles/settings";

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
  font-size: ${rem(22)};
  border: none;
  display: inline;
  font-family: Lato Bold;
  width: 100%;

  color: #2d4758;
  margin-left: 10px;

  ${({ valid }) =>
    !valid &&
    css`
      color: ${negative300};
    `}

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
  grid-template-columns: ${rem(24)} 1fr;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Wrapper = styled.div``;

export const Currency = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  color: ${gray300};
  transition: transform 0.1s linear;
`;

export const Underliner = styled.span`
  min-height: 1px;
  display: block;
  background: #99b5c6;
  margin: 5px 0 0 0;
  padding: 0;

  ${({ valid }) =>
    !valid &&
    css`
      background: ${negative300};
    `};
`;

export const InvalidMessage = styled.p`
  color: ${negative300};
  font-family: Lato;
  font-size: ${remFontSize(12)};
  line-height: ${remFontSize(14)};
  animation: ${opacitychange} 0.4s ease-in-out forwards;
  padding: 0;
  margin-top: 6px;
  text-align: flex-start;
`;

export const FlagIconContainer = styled.span`
    margin-right 0px;
`;
