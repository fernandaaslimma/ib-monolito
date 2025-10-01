import styled, { keyframes, css } from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { gray300, negative300, white } from "../../../styles/settings";

export const ContentWrapper = styled.div`
  background: #f6f9fb;
`;

export const FormHeader = styled.div`
  background: white;
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  padding: ${rem(16)} ${rem(12)} ${rem(33)} ${rem(12)};

  @media (min-width: ${rem(348)}) {
    label + label {
      margin-left: ${rem(12)};
      padding-bottom: ${rem(32)};
    }
  }

  @media (max-width: ${rem(348)}) {
    flex-direction: column;
    label {
      margin-bottom: ${rem(23)};
    }
  }
`;

export const CalendarButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 ${rem(16)} ${rem(23)} ${rem(16)};

  div:only-child {
    padding: 0 ${rem(24)} 0 ${rem(24)};
  }
`;

export const FormContent = styled.div`
  margin: ${rem(24)} 0px 0px 0px;
  @media (max-width: ${rem(600)}) {
    margin: ${rem(24)} ${rem(16)} 0px ${rem(16)};
  }
`;

export const ViewMoreWrapper = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  text-decoration: underline;
  color: #3976cf;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rem(23)};
`;

const loading = keyframes`
  \ 0%{
    transform: scale(1);
  }
  \ 20%{
    transform: scale(1, 1.8);
  }
  \ 40%{
    transform: scale(1);
  }
`;

export const Bar = styled.div`
  display: inline-block;
  width: ${rem(3)};
  height: ${rem(18)};
  margin: 0 ${rem(2)};
  border-radius: ${rem(4)};
  animation: ${loading} 1s ease-in-out infinite;
  background-color: #4a90e2;

  :nth-child(1) {
    animation-delay: 0;
  }

  :nth-child(2) {
    animation-delay: 0.09s;
  }

  :nth-child(3) {
    animation-delay: 0.18s;
  }

  :nth-child(4) {
    animation-delay: 0.27s;
  }
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  display: flex;
  flex-direction: column;
  border-top: solid ${rem(1)} #d3dde4;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(24)} 0 ${rem(32)} 0;
`;

export const FilterLabels = styled.div`
  font-family: Lato;
  font-weight: bold;
  line-height: ${rem(19)};
  padding: 0 ${rem(16)} 0 ${rem(16)};
  color: ${gray300};
`;

export const InputsWrapper = styled.div`
  display: flex;
  padding: ${rem(16)} ${rem(16)} 0 ${rem(16)};
  div + div {
    margin-left: ${rem(12)};
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  padding: ${rem(8)} ${rem(16)} 0 ${rem(16)};
  font-family: Lato;
  font-size: ${rem(12)};
  line-height: 125%;
  letter-spacing: ${rem(0.45)};
  color: ${negative300};
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  padding: ${rem(24)} ${rem(16)} 0 ${rem(16)};
  div + div {
    margin-left: ${rem(12)};
  }
  div {
    flex-grow: 1;
  }
`;

export const FlotateButton = styled.div`
  cursor: pointer;
  overflow: auto;
  position: absolute;
  top: 0px;
  right: ${rem(24)};
  display: flex;
  background: #3976cf;
  width: ${rem(48)};
  height: ${rem(48)};
  border-radius: ${rem(4)};
  align-items: center;
  justify-content: center;
`;

const fadein = keyframes`
  0%{ opacity: 0 }
  100% { opacity: 1 }
`;

export const StickyFlotateWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: ${rem(24)};
  margin-bottom: ${rem(24)};
  height: ${rem(48)};
  display: flex;
  flex-direction: column;
  opacity: 1
  ${({ showBackToTop }) =>
    showBackToTop &&
    css`
      animation: ${fadein} 0.2s linear;
    `};
`;
