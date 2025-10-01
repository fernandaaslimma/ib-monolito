import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";

export const InvestmentConsolidatedInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(50% - 34%);
  margin: 0 auto;

  z-index: 100000;
`;

export const InvestmentConsolidatedInfoSpan = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  text-align: center;
  letter-spacing: 0.45px;

  margin: ${rem(15)} 0 ${rem(4)} 0;
  color: #587485;
`;

export const ClickableItem = styled.span`
  cursor: pointer;
`;

export const HideValueWrapper = styled.div`
  padding-bottom: ${rem(13)};
  border-bottom: ${rem(1)} solid #d9e0e4;
`;

export const WrapperCommomIcon = styled.div`
  margin-top: ${rem(16)};
`
