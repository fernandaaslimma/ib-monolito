import styled from "styled-components";
import { gray200 } from "../../../styles/settings";
import { rem, remFontSize } from "../../../styles/tools";

export const BottomSheetWrapper = styled.div`
  max-width: ${rem(600)};
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f6f9fb;
  padding: ${rem(16)} ${rem(16)};
`;

export const SheetContent = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 150%;
  letter-spacing: ${rem(0.45)};
  color: ${gray200};
`;

export const SheetContentContact = styled(SheetContent)`
  margin-top: ${rem(25)};
  padding: 0;
  color: ${gray200};
`;
