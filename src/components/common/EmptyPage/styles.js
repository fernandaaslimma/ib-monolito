import styled from "styled-components";

import { black30, grey90 } from "../../../styles/settings";
import { rem } from "../../../styles/tools";
import Button from "../Button";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${rem(40)} 0 ${rem(40)} 0;
`;

export const Title = styled.h1`
  color: ${black30};
  font-size: ${rem(28)};
  font-family: Lato;
  padding-top: ${({ hideIcon }) => (!hideIcon ? rem(25) : 0)};
`;

export const Text = styled.h2`
  color: ${grey90};
  font-size: ${rem(22)};
  font-family: Lato;
  padding-top: ${rem(20)};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
`;

export const ActionButton = styled(Button)`
  margin-top: ${rem(40)};
  width: ${rem(204)};
`;
