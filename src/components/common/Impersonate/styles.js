import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { darkestRed, white } from "../../../styles/settings";

export const Wrapper = styled.div`
  justify-content: center;
  background-color: ${darkestRed};
  padding: ${rem(5)} ${rem(5)} ${rem(3)} ${rem(3)};
  text-align: center;

  @media print {
    display: none;
  }
`;

export const Description = styled.span`
  display: inline-block;
  font-size: ${remFontSize(12)};
  font-family: "Lato";
  letter-spacing: ${rem(0.6)};
  color: ${white};
  white-space: nowrap;
  margin-left: 50%;
  transform: translate(-50%, 0);
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: ${remFontSize(12)};
  font-family: "Lato";
  letter-spacing: ${rem(0.6)};
  color: ${white};
  white-space: nowrap;
`;

export const Return = styled.button`
  float: right;
  min-width: 150px;
  text-align: left;
  margin-right: ${rem(110)};
  font-size: ${remFontSize(12)};
  font-family: "Lato";
  letter-spacing: ${rem(0.6)};
  color: ${white};
  white-space: nowrap;
  border: 0px;
  padding: 0px;
  background: transparent;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;
