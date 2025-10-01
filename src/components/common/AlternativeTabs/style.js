import styled from "styled-components";
import { gray100 } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid ${rem(1)} ${gray100};

  @media (max-width: ${rem(1152)}) {
    width: 100%;
    padding-inline: ${rem(16)};
  }
`;
