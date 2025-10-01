import styled from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  darkGreen,
  gray300,
  gray80,
  neutral200
} from "../../../../styles/settings";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: ${rem(32)};
  padding-bottom: ${rem(32)};
`;

export const Title = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(24)};
  line-height: ${rem(28.8)};
  font-weight: 700;
  letter-spacing: ${rem(0.4)};
  color: ${darkGreen};
`;

export const Message = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  line-height: ${rem(16.8)};
  font-weight: 400;
  letter-spacing: ${rem(0.4)};
  color: ${darkGreen};
  margin-top: ${rem(8)};
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: ${rem(16)};
  margin-top: ${rem(32)};
`;

export const ListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const FileName = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  line-height: ${rem(16)};
  font-weight: 700;
  letter-spacing: ${rem(0.5)};
  color: ${darkGreen};
`;

export const DateField = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  line-height: ${rem(16)};
  font-weight: 700;
  letter-spacing: ${rem(0.5)};
  color: ${darkGreen};
  margin-left: auto;
  margin-right: ${rem(184)};

  @media (max-width: ${rem(1152)}) {
    margin-right: ${rem(92)};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${gray80};
  border-radius: ${rem(4)};
`;

export const Info = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  line-height: ${rem(21)};
  font-weight: 400;
  color: ${gray300};
`;

export const LinkPortal = styled.a`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  line-height: ${rem(21)};
  font-weight: 600;
  color: ${neutral200};
  margin-left: ${rem(4)};
  cursor: pointer;
`;

export const NoContentEmail = styled.span`
  font-weight: 500;
  color: ${neutral200};
  cursor: pointer;
  margin-left: ${rem(4)};
`;
