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

export const RedemptionErrorMessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${rem(16)};
  background: #f6f8fa;
`;

export const RedemptionErrorMessage = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: 160%;
  /* or 22px */

  letter-spacing: ${rem(0.452308)};

  color: #587485;

  & + .RedemptionErrorMessage {
    margin-top: ${rem(20)};
  }
`;

export const FixedButtonArea = styled.div`
  display: grid;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding: ${rem(16)};
  box-shadow: inset 0 ${rem(1)} 0 0 ${lighestgrey};
  background-color: ${white};
`;
