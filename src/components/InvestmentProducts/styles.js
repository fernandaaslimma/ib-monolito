import styled, { css } from "styled-components";
import { rem } from "../../styles/tools";
import { white, gray90, darkGreen } from "../../styles/settings";

export const Wrapper = styled.ul`
  font-family: Lato;
  padding: ${rem(24)} ${rem(16)} 0 ${rem(16)};
  margin: 0;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${rem(600)};
  margin: auto;
`;

export const Text = styled.span`
  margin: 0 0 0 ${rem(16)};
  display: inline-block;
  flex-grow: 1;
`;

export const Jumper = styled.li`
  background: ${white};
  padding: ${rem(24)} ${rem(16)};
  margin-bottom: ${rem(16)};
  box-shadow: 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.16);
  border-radius: ${rem(4)};
  display: flex;
  align-items: center;
  color: ${darkGreen};
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      box-shadow: none;
      background: transparent;
      pointer-events: none;
      border: ${rem(1)} solid ${gray90};
      cursor: none;
    `}
`;
