import styled from "styled-components";
import { rem } from "../../../../styles/tools";
import { grey180 } from "../../../../styles/settings";
import { DayPickerWrapper } from "../../../common/Table/Filter/styles";

export const Wrapper = styled.div`
  padding: 0 0 ${rem(10)} 0;

  @media print {
    display: none;
  }
`;

export const FilterLabel = styled.h1`
  color: ${grey180};
  line-height: 1.45;
  padding: 0 ${rem(14)};
`;

export const StatementDayPickerWrapper = styled(DayPickerWrapper)`
  input {
    font-size: 170;
    width: ${rem(250)};
  }
`;
