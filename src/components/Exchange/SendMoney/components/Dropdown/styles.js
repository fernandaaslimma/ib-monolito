import styled, { css } from "styled-components";
import { remFontSize, rem } from "../../../../../styles/tools";
import { gray80, white } from "../../../../../styles/settings";

export const DropdownContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownButton = styled.div`
  display: flex;
  background: ${white};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid ${gray80};
  border-radius: 4px;
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid #549ae6;
    `};
`;

export const OptionsContainer = styled.div`
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  width: 100%;
  max-height: 0px;
  transition: max-height 0.2s ease;
  background: ${white};
  margin-top: 0px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      max-height: 100%;
      border: 1px solid ${gray80};
      border-top: none;
    `};
`;

export const Options = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 16px;
  cursor: pointer;
  border: none;

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const ArrowIconContainer = styled.span`
  transition: transform 0.3s;
  ${({ isSelected }) =>
    isSelected &&
    css`
      transform: rotate(180deg);
    `};
`;

export const WrapperIconRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const FlagIconContainer = styled.span`
  margin-right: ${props => (props.marginRight ? props.marginRight : "10px")};
`;

export const Title = styled.div`
  text-align: center;
  color: #4e768f;
  font-family: Lato;
  font-weight: 400;
  font-style: normal;
  font-size: ${remFontSize(16)};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #549ae6;
    `};
`;
