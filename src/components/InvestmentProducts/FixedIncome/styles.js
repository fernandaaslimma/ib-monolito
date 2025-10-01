import styled from "styled-components";
import { darkGreen, white, lighestgrey } from "../../../styles/settings";
import { rem, remFontSize } from "../../../styles/tools";

export const Title = styled.h1`
  font-size: ${remFontSize(20)};
  padding: ${rem(25)} 0;
  font-family: "Lato Bold", Lato;
  color: ${darkGreen};
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  display: flex;
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

export const Separator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const EFTTokenMfaWrapper = styled.div`
  margin: auto auto ${rem(16)} auto;
`;

export const StepVisibility = styled.span`
  height: 0px;
`;

export const ClickableItem = styled.span`
  cursor: pointer;
`;
