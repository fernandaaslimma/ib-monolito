import styled from "styled-components";
import { rem } from "../../styles/tools";

export const MainWrapper = styled.section`
  background-color: #fff;
  max-width: ${rem(600)};
  margin: auto;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: white;
  display: flex;
  flex-direction: column;
  border-top: solid ${rem(1)} #d3dde4;
`;
