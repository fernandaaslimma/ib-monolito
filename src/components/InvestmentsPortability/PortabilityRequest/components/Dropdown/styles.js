import styled, { css } from "styled-components";
import { remFontSize, rem } from "../../../../../styles/tools";
import { gray80, white } from "../../../../../styles/settings";

export const DropdownContainer = styled.div`
  position: relative;
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
  height: ${rem(48)};
  border: 1px solid ${gray80};
  border-radius: ${rem(4)};
  cursor: pointer;
  padding-left: ${rem(15)};
  padding-right: ${rem(15)};

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: ${rem(1)} solid #549ae6;
    `};
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  border-radius: 0 0 ${rem(4)} ${rem(4)};
  overflow: hidden;
  width: 100%;
  max-height: 0px;
  transition: max-height 0.2s ease;
  background: ${white};
  margin-top: 0px;
  z-index: 1000; 

  ${({ isSelected }) =>
    isSelected &&
    css`
      max-height: ${rem(240)}; 
      overflow-y: auto; 
      border: ${rem(1)} solid ${gray80};
      border-top: none;
    `};

  &::-webkit-scrollbar {
    width: ${rem(8)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: ${rem(4)};
  }

  &::-webkit-scrollbar-track {
    background-color: ${white};
  }
`;

export const Title = styled.div`
  text-align: center;
  color: #4e768f;
  font-family: Lato;
  font-weight: 400;
  font-style: normal;
  font-size: ${remFontSize(12)};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #549ae6;
    `};
`;

export const Options = styled.div`
  width: 100%;
  height: ${rem(48)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${rem(16)};
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #3976CF; 
    ${Title} {
      color: ${white}; 
    }
  }

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
  margin-right: ${props => (props.marginRight ? props.marginRight : rem(10))};
`;