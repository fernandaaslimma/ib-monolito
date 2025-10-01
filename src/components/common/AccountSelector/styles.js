import styled from "styled-components";
import { lighestgrey } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const Space = styled.span`
  display: block;
  margin: 0 ${rem(8)};
  position: relative;
`;

export const BtnWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  flex-basis: 0;
`;
