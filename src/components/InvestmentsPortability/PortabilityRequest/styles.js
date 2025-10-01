import styled from "styled-components";
import { rem } from "../../../styles/tools";

export const Wrapper = styled.div`
  width: ${rem(600)};
  min-height: ${rem(645)};
  margin: 0 auto;

  @media (max-width: ${rem(600)}) {
    width: 100%;
    margin: 0 auto;
  }
`;
