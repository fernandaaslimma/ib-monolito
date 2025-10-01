import styled from "styled-components";
import { darkGreen, gray300, white } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";
import { RadioButtonTag } from "../../../common/RadioButton/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${RadioButtonTag} {
    margin: ${rem(8)};
  }
`;

export const SuggestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  color: ${darkGreen};
`;

export const Suggestion = styled.span`
  margin-top: ${rem(10)};
  font-family: Lato;
  font-size: ${remFontSize(20)};
  line-height: 1.3;
  letter-spacing: ${rem(0.45)};
  color: ${darkGreen};
`;

export const SelectValues = styled(Suggestion)`
  text-align: center;

  margin: ${rem(0)} ${rem(0)} ${rem(32)} ${rem(0)};
`;

export const SuggestionValue = styled(Suggestion)`
  font-weight: bold;
  margin-top: 0;
`;

export const PrioritizeInfo = styled.span`
  display: flex;
  flex-direction: column;
  margin: ${rem(8)} ${rem(12)};
`;
export const PrioritizeLabel = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14)};
  letter-spacing: ${rem(0.39)};

  color: #587485;
`;
export const PrioritizeValue = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  /* identical to box height, or 20px */

  letter-spacing: ${rem(0.667)};

  color: ${gray300};
  margin-top: ${rem(4)};
`;

export const SegmentLoading = styled.div`
  background-color: ${white};
  border-radius: ${rem(2)};
  padding: ${rem(16)};
  box-shadow: 0 ${rem(1)} ${rem(14)} ${rem(7)} rgba(211, 225, 232, 0.13);
  ${RadioButtonTag} {
    margin: ${rem(8)} 0 ${rem(8)} 0;
    input {
      :checked ~ p {
        box-shadow: none;
      }
    }
  }
  margin: ${rem(16)} ${rem(16)} ${rem(8)} ${rem(16)};
`;
