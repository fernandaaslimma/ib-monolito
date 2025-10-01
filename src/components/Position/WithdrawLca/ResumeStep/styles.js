import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { white, gray200, gray300 } from "../../../../styles/settings";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  background: ${white};
`;

export const MainMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${rem(34)};
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;
  text-align: center;
  color: ${gray300};
  margin: ${rem(19)} 0 ${rem(8)} 0;
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  text-align: center;
  color: ${gray200};
  margin-bottom: ${rem(16)};
`;

export const StepVisibility = styled.span`
  display: inline-block;
  position: absolute;
`;

export const DetailsWrapper = styled.div`
  padding: 0 ${rem(16)};
`;

export const DetailsTitle = styled.p`
  color: ${gray300};
  font-family: Lato Bold;
  font-size: ${remFontSize(16)};
  margin-top: ${rem(32)};
  color: ${gray300};
`;

export const IssuerInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: ${rem(24)};
`;

export const DetailsSubtitle = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  margin-top: ${rem(8)};
  color: ${gray200};
`;

export const Message = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 150%;
`;

export const MessageBold = styled(Message)`
  font-weight: bold;
`;
