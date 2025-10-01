import styled from "styled-components";
import { white } from "../../../../styles/settings";
import { rem } from "../../../../styles/tools";

export const FilterContainer = styled.div`
  display: flex;
  background-color: ${white};
  padding: ${rem(24)} ${rem(16)} ${rem(20)};

  div:only-child {
    padding: 0 ${rem(24)} 0 ${rem(24)};
  }
`;
