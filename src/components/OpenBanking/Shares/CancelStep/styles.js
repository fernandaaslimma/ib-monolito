import styled from "styled-components";
import { gray200, gray300 } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`;

export const CancelStepWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: ${rem(8)};

  max-width: ${rem(600)};
  margin: 0 auto;
`;

export const IconWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${rem(50)};
`;

export const CancelTitle = styled.span`
  font-family: Lato;

  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;
  /* identical to box height, or 30px */

  text-align: center;

  color: ${gray300};

  margin-top: ${rem(18)};
`;

export const CancelMessage = styled.span`
  font-family: Lato;

  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: 129%;

  text-align: center;

  color: ${gray200};

  margin: ${rem(24)} 0 ${rem(90)};
`;
