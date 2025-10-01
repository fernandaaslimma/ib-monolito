import styled from "styled-components";
import { rem } from "../../../../styles/tools";
import { default as ButtonRaw } from "../../Button";
import { white } from "../../../../styles/settings";

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
  margin-top: ${rem(40)};
`;

export const Button = styled(ButtonRaw)`
  background-color: #4a90e2;
  color: ${white};
  height: ${rem(48)};
  line-height: ${rem(48)};
  box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(74, 144, 226, 0.39);
  font-family: "Lato Bold", Lato;
  :hover:not([disabled]) {
    background-color: #4ebaf5;
    border-color: #4ebaf5;
    box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(78, 186, 245, 0.39);
  }

  :not(:last-child) {
    margin-right: ${rem(12)};
  }
`;
