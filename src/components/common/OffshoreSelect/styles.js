import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import { gray95, grey70, neutral200, white } from "../../../styles/settings";

export const Container = styled.div`
  margin: auto;
  max-width: ${rem(600)};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: none;
    `};
`;

export const AccountContainer = styled.div`
  display: flex;
  margin: ${rem(12)} ${rem(16)};
  
  @media (min-width: 600px) {
      margin-left: 0;
      margin-right: 0;
    }
`;

export const OptionContainer = styled.div`
  background-color: transparent;
  padding: ${rem(12)};
  border: solid ${rem(1)} ${neutral200};
  border-radius: ${rem(4)};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ current }) =>
    current &&
    css`
      background-color: ${neutral200};
    `};
`;

export const Option = styled.span`
  font-family: Lato;
  font-weight: 700;
  font-size: ${rem(12)};
  line-height: ${rem(12)};
  letter-spacing: ${rem(0.25)};
  color: ${neutral200};
  align-self: center;
  margin-left: ${rem(8)};

  ${({ current }) =>
    current &&
    css`
      color: ${white};
    `};
`;

export const CoinContainer = styled.div`
  display: flex;
  padding: ${rem(16)};
  padding-top: ${rem(8)};
  overflow-x: auto;

  @media (min-width: 600px) {
      padding-left: 0;
      padding-right: 0;
    }
`;

export const CoinOptionContainer = styled.div`
  background-color: transparent;
  padding: ${rem(24)} ${rem(40)};
  border: solid ${rem(2)} ${gray95};
  border-radius: ${rem(4)};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ current }) =>
    current &&
    css`
      background-color: ${white};
      border: solid ${rem(2)} ${neutral200};
    `};
`;

export const CoinOption = styled.span`
  font-family: Lato;
  font-weight: 700;
  font-size: ${rem(20)};
  line-height: ${rem(25)};
  letter-spacing: ${rem(0.45)};
  color: ${gray95};
  align-self: center;
  margin-left: ${rem(8)};

  ${({ current }) =>
    current &&
    css`
      color: ${grey70};
    `};
`;
