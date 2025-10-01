import styled, { css } from "styled-components";
import { gray300, gray200 } from "../../../../styles/settings";
import { rem } from "../../../../styles/tools";
import { AccTitle } from "../styles";

export const TransferDetailsWrapper = styled.div`
  ${({ spaced }) =>
    spaced &&
    css`
      margin-bottom: ${rem(15)};
    `}
`;

export const TransferDetailsTitle = styled(AccTitle)`
  padding: ${rem(32)} ${rem(8)} 0 ${rem(8)};
  color: ${gray300};
`;
export const TransferDetailsList = styled.ul`
  padding: 0 ${rem(8)};
`;

export const TransferDetailsItem = styled.li`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  margin: ${rem(8)} ${rem(0)};
  color: ${gray200};
`;
