import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import {
  white,
  lightBlue,
  blue30,
  blue15,
  lighestgrey,
  blueGreen
} from "../../../styles/settings";

const infBorder = rem(5);
const separatorWidth = rem(10);

export const Navigation = styled.div`
  display: flex;
  position: relative;
  margin: ${rem(30)} 0;

  ${({ length }) => {
    const itemWidth = `calc((100% - (${separatorWidth} * (${length} - 1))) / ${length})`;

    return (
      length &&
      css`
        ${Item} {
          min-width: ${itemWidth};
        }

        ${Marker} {
          width: ${itemWidth};
        }
      `
    );
  }};

  ${({ active, length }) => {
    const step = active - 1;
    const margin = `calc((100% / ${length}) * ${step} + (${separatorWidth} * ${step}/ ${length}))`;
    return (
      active &&
      length &&
      css`
        ${Marker} {
          margin-left: ${margin};
        }
      `
    );
  }};
`;

export const Separator = styled.div`
  width: ${separatorWidth};
  position: relative;
  margin: 0 ${rem(1)};
  background: ${white};
  z-index: 2;
`;

export const Marker = styled.div`
  height: ${infBorder};
  background: ${lightBlue};
  z-index: 1;
  position: absolute;
  bottom: 0;
  border-radius: ${rem(2)};
  transition: margin-left 0.3s linear;
`;

export const Item = styled.span`
  background: ${white};
  position: relative;
  flex-grow: 1;
  text-align: center;
  color: transparent;
  padding-bottom: ${infBorder};
  line-height: ${rem(30)};
  font-weight: bold;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    background: ${blue30};
    left: 0;
    width: 100%;
    height: ${infBorder};
    border-radius: ${rem(4)};

    ${({ isPrevious }) =>
      isPrevious &&
      css`
        background: ${blue15};
      `};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${lightBlue};
    `};

  ${({ navigable }) =>
    navigable &&
    css`
      cursor: pointer;
    `};
`;

export const Progress = styled.div`
  height: ${rem(8)};
  margin: ${rem(50)} 0 ${rem(30)} 0;
  background: ${lighestgrey};
  border-radius: ${rem(3)};
`;

export const Bar = styled.div`
  position: relative;
  height: 100%;
  background: ${blueGreen};
  transition: width 0.2s linear;
  border-radius: ${rem(3)};

  ${({ active, length }) => {
    const factor = 100 / length;
    const width = factor * active;
    return css`
      width: ${width}%;
    `;
  }};
`;

export const StepInfo = styled.div`
  position: absolute;
  right: 0;
  color: ${blueGreen};
  left: 0;
  line-height: ${rem(50)};
  top: -${rem(50)};
  text-align: right;
  white-space: nowrap;
`;

export const ProgressContainer = styled.div`
  padding: 0 ${rem(15)} 0 ${rem(15)};
`;
