import styled, { css } from "styled-components";

import { white } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

export const CardDefault = styled.div`
  border-radius: ${rem(4)};
  background: ${white};
  padding: ${rem(16)} ${rem(30)};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  box-shadow: 0px 2px 22px 2px rgba(225, 237, 246, 0.5);
  max-width: 100%;
  position: relative;
  vertical-align: middle
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

export const FilenameWrapper = styled.div`
  font-weight: 700;
`;
