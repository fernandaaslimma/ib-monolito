import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools/index";
import { gray200, gray300 } from "../../../styles/settings";

export const WrapperInput = styled.div`
  position: relative;
  margin: ${rem(24)} 0 ${rem(16)} 0;

  input {
    padding: 0 ${rem(40)};
  }
`;

export const IconSearch = styled.div`
  position: absolute;
  top: ${rem(16)};
  left: ${rem(16)};
`;

export const IconClose = styled.div`
  position: absolute;
  top: ${rem(16)};
  right: ${rem(16)};
  cursor: pointer;
`;

export const WarningMessage = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  line-height: ${rem(16)};
  color: ${gray200};
  margin-bottom: ${rem(80)};
  display: block;
`;

export const Bold = styled.span`
  font-weight: bold;
  color: ${gray300};
`;
