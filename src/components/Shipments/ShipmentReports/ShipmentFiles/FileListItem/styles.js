import styled from "styled-components";
import { rem, remFontSize } from "../../../../../styles/tools";
import { black50, white } from "../../../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: ${rem(16)};
  background-color: ${white};
  margin-top: ${rem(8)};
  border-radius: ${rem(4)};
`;

export const Title = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14.4)};
  font-weight: 500;
  letter-spacing: ${rem(0.36)};
  color: ${black50};
  margin-left: ${rem(8)};
`;

export const Date = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  line-height: ${rem(14.4)};
  font-weight: 500;
  letter-spacing: ${rem(0.36)};
  color: ${black50};
  margin-left: auto;
  margin-right: ${rem(116)};

  @media (max-width: ${rem(1152)}) {
    margin-right: ${rem(24)};
  }
`;

export const DownloadButton = styled.div`
  cursor: pointer;
`;
