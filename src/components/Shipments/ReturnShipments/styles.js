import styled, { css } from "styled-components";

import { white } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardDefault = styled.div`
  border-radius: ${rem(4)};
  background: ${white};
  padding: ${rem(16)} ${rem(30)};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  box-shadow: 0px 2px 22px 2px rgba(225, 237, 246, 0.5);
  max-width: 100%;
  position: relative;

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
`;

export const CenterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0 0 0;
`;

export const ViewText = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-family: Lato;
  font-size: 13px;
  background: transparent;
  transition: opacity linear 0.2s;
  outline: none;
  border: 0;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #3976cf;

  &:hover {
    opacity: 0.7;
  }
`;

export const FilenameWrapper = styled.div`
  font-weight: 700;
`;
