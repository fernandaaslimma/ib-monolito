import styled from "styled-components";
import { gray200, gray300, gray80 } from "../../../styles/settings";
import { remFontSize, rem } from "../../../styles/tools";

export const ListItemContainer = styled.div`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(4)};
  @media (max-width: ${rem(600)}) {
    margin-inline: ${rem(16)};
  }
`;

export const ItemDate = styled.span`
  color: ${gray300};
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(16)};
  line-height: ${remFontSize(20)};
`;

export const Card = styled.div`
  margin-top: ${rem(16)};
  background-color: white;
  border-radius: ${rem(4)};
  border: ${rem(1)} solid ${gray80};
  box-shadow: 0px ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.08);
  padding: ${rem(16)};
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  color: ${gray200};
  font-family: Lato;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: ${remFontSize(15)};
`;

export const CardSubTitle = styled.span`
  color: ${gray300};
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(14)};
  line-height: ${remFontSize(17.5)};
  margin-top: ${rem(4)};
`;

export const IconContainer = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: ${rem(32)};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(24)};
`;

export const Label = styled.span`
  color: ${gray200};
  font-family: Lato;
  font-weight: 500;
  font-size: ${remFontSize(12)};
  line-height: ${remFontSize(15)};
`;

export const Info = styled.span`
  color: ${gray300};
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(14)};
  line-height: ${remFontSize(17.5)};
  margin-top: ${rem(4)};
`;
