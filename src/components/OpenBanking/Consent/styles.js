import styled from "styled-components";
import { lighestgrey, white } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

export const Separator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const StepVisibility = styled.span`
  height: 0px;
`;

export const BtnWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  flex-basis: 0;
  display: flex;

  > div {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  border-top: solid ${rem(1)} #d3dde4;
`;

export const FixedWrapper = styled.div`
  overflow: auto;
  position: absolute;
  bottom: 0;
  background: ${white};
  border-top: solid ${rem(1)} #d3dde4;
  width: 100%;
`;
