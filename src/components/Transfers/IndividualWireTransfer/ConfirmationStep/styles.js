import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { gray90, gray200, gray300 } from "../../../../styles/settings";

export const AccountBalance = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${rem(1)} solid ${gray90};
  box-sizing: border-box;
  border-radius: ${rem(6)};
  align-items: center;
  align-content: center;
`;

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
export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${rem(12)} ${rem(10)} ${rem(11)} 0;
  padding: 0;
`;

export const Text = styled.span`
  font-family: Lato;
  font-style: normal;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: ${gray200};
  display: inline-block;
  margin: ${rem(0)} ${rem(8)};

  ${({ highlighted }) =>
    highlighted &&
    css`
      font-size: ${rem(24)};
      margin-left: 0;
      font-weight: bold;
      color: ${gray300};
    `}
`;
