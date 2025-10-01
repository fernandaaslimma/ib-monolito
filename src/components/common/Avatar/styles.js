import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools/index";

export const WrapperAvatar = styled.div`
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};

  ${({ size }) =>
    size &&
    css`
      width: ${rem(size)};
      height: ${rem(size)};
    `};

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px ${borderColor} solid;
    `};

  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.div`
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${rem(fontSize)};
    `};
  font-family: "Lato";
  font-weight: bold;
  line-height: 1.45;
`;
