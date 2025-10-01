import styled from "styled-components";
import { rem, remFontSize } from "../../../styles/tools";
import { gray200, gray300 } from "../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem(176)};
  padding-inline: ${rem(48)};

  @media (max-width: ${rem(1152)}) {
    padding: ${rem(92)};
    padding-inline: ${rem(16)};
  }
`;
export const Title = styled.span`
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(30)};
  line-height: ${rem(37.5)};
  color: ${gray300};
  margin-top: ${rem(24)};
  text-align: center;

  @media (max-width: ${rem(1152)}) {
    font-size: ${remFontSize(16)};
    line-height: ${rem(22)};
  }
`;

export const Text = styled.span`
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(18)};
  line-height: ${rem(28.5)};
  color: ${gray200};
  margin-top: ${rem(24)};
  text-align: center;

  @media (max-width: ${rem(1152)}) {
    font-size: ${remFontSize(16)};
    line-height: ${rem(22)};
  }
`;
