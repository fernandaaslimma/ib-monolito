import styled from "styled-components";
import { rem } from "../../../styles/tools";
import { lighestgrey, white } from "../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${white};
  padding: ${rem(16)};
  box-shadow: ${`0px ${rem(1)} 0px ${lighestgrey} inset`};
  overflow: auto;
  position: sticky;
  bottom: 0;
  margin-top: ${rem(24)};
`;
