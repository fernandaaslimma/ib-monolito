import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";

export const IssuanceDate = styled.div`
  font-size: ${remFontSize(8)};
  margin-bottom: ${rem(2)};
  text-align: right;
`;

export const Issuer = styled.div`
  font-size: ${remFontSize(10)};
  margin-bottom: ${rem(13)};
  min-width: ${rem(200)};
  text-align: right;
`;
