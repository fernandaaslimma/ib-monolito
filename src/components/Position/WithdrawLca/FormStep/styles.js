import styled from "styled-components";
import { gray200, gray300 } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const AccountText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;

  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  margin: ${rem(12)} 0 ${rem(11)} ${rem(15)};
  padding: 0;
  color: ${gray200};
`;

export const ValueInfo = styled.div`
  display: flex;
`;

export const Currency = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  /* identical to box height */

  text-align: right;
  letter-spacing: 0.05em;

  color: #99b5c6;
  margin-right: ${rem(5)};
`;

export const Value = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(14)};
  line-height: ${rem(17)};
  /* identical to box height */

  text-align: right;
  letter-spacing: 0.05em;

  color: #2d4758;
  margin-right: ${rem(15)};
`;

export const WithdrawalValueLabel = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: ${rem(19)};
  text-align: center;

  color: ${gray300};
  margin-bottom: ${rem(16)};
`;

export const InfoContentBold = styled.span`
  font-family: Lato;
  font-style: normal;
  font-size: ${remFontSize(14)};
  line-height: 150%;
  letter-spacing: ${rem(0.45)};

  font-weight: 600;
  margin: 0;
  color: ${gray300};
`;

export const ModalWrapper = styled.div`
  background: #f6f9fb;
  font-family: "Lato";
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(22.4)};
  padding: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};
`;

export const ModalMessage = styled.p`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: normal;
  font-style: normal;
  color: ${gray200};

  &:first-child {
    margin-bottom: ${rem(26)};
  }
`;

export const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid #d9e0e4;
`;

export const WrapperButton = styled.div`
  max-height: 80px;
  padding: 6px 0;

  @media (min-width: 981px) {
    display: flex;
    justify-content: center;
  }
`;
