import styled from "styled-components";
import { rem } from "../../../styles/tools";
import { white, neutral200 } from "../../../styles/settings";

export const RoundedButton = styled.label`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    white-space: nowrap;
    letter-spacing: ${rem(0.2)};
    color: ${neutral200};
    border: 1px solid ${neutral200};
    border-radius: ${rem(100)};
    height: ${rem(34)};
    padding: 0 ${rem(16)} 0 ${rem(16)};
  }
  input {
    position: absolute;
    visibility: hidden;
    pointer-events: none;

    :checked ~ div {
      background: ${neutral200};
      color: ${white};
    }
  }
`;
