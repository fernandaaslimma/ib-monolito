import styled from "styled-components";
import { rem } from "../../../styles/tools";
import { gray300, negative300 } from "../../../styles/settings";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(24)} 0 ${rem(32)} 0;
`;

export const FilterLabels = styled.div`
  font-family: Lato;
  font-weight: bold;
  line-height: ${rem(19)};
  padding: ${rem(16)} ${rem(16)} 0;
  color: ${gray300};
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rem(16)} 0 ${rem(16)} ${rem(16)};
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
