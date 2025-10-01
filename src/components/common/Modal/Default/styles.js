import styled from "styled-components";
import { rem } from "../../../../styles/tools";
import { default as ButtonRaw } from "../../Button";
import { grey20 } from "../../../../styles/settings";

export const DefaultContainer = styled.div`
  width: calc(100vw - ${rem(30)});
  max-width: ${rem(370)};
  padding: ${rem(30)} ${rem(15)} 0 ${rem(15)};
`;

export const FooterContainer = styled.div`
  height: ${rem(87)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid ${rem(0.7)} ${grey20};
  margin-top: ${rem(40)};
`;

export const Button = styled(ButtonRaw)`
  height: ${rem(40)};
  line-height: ${rem(40)};
  width: ${rem(100)};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }
`;
