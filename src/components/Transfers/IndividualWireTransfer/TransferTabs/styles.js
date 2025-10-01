import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  lighestgrey,
  blue20,
  gray90,
  gray200,
  gray300,
  neutral200,
  white
} from "../../../../styles/settings";

export const TabsWrapper = styled.ul`
  display: flex;
  text-decoration: none;
  margin: ${rem(16)} ${rem(16)} 0 ${rem(16)};
`;

export const Tab = styled.li`
  cursor: pointer;
  text-decoration: none;
  & + .Tabs {
    margin-left: ${rem(33)};
  }
`;

export const Title = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  line-height: ${rem(16)};

  display: flex;
  align-items: center;
  padding-bottom: ${rem(17)};

  color: #587485;

  ${({ active }) =>
    active
      ? css`
          font-weight: bold;
          color: #3976cf;
          border-bottom: solid ${rem(2)} #3976cf;
        `
      : css`
          font-weight: normal;
        `}
`;

export const Line = styled.hr`
  border: none;
  height: ${rem(1)};
  margin: 0 ${rem(16)} 0 ${rem(16)};
  background: #d9e0e4;
`;

export const AccountInfo = styled.div`
  display: flex;
  padding: ${rem(8)};
`;

export const BottomAccountInfo = styled.div`
  display: flex;
  padding: ${rem(8)};
  height:  ${rem(75)};
`;

export const Block = styled.div`
  min-width: 100%;
`;

export const Inline = styled.div`
  margin-bottom: ${rem(8)};
  flex-grow: 1;
  flex-basis: 0;

  + div {
    margin-left: ${rem(16)};
  }

  ${({ grow }) => css`
    flex-grow: ${grow};
  `}
`;

export const EmptySavedAccounts = styled.span`
  margin: 24px 0 16px 0;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0.45px;

  color: #2d4758;
`;

export const ChangeAccount = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const LinkChange = styled.a`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-style: normal;
  font-weight: bold;
  color: ${neutral200};
  cursor: pointer;
  padding-top: ${rem(24)};
  text-decoration-line: underline;
  :focus,
  :hover {
    text-decoration: none;
  }
`;

export const TitleSelectAccount = styled.h4`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: ${remFontSize(19)};
  color: ${gray300};
  padding: ${rem(24)} 0 ${rem(16)} 0;
`;

export const WrapperFavored = styled.div`
  padding: 0 ${rem(16)};
`;

export const CardAccounts = styled.div`
  font-family: Lato;
  font-style: normal;
  padding: ${rem(16)};
  margin-bottom: ${rem(16)};
  background: ${white};
  border: 1px solid #eef1f3;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  cursor: pointer;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${rem(padding)} ${rem(16)};
    }
  `}

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    }
  `}
`;

export const WrapperCardAccounts = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
`;

export const WrapperAccounts = styled.div`
  display: grid;
  padding-right: ${rem(10)};
`;

export const TitleAccounts = styled.p`
  font-size: ${remFontSize(14)};
  font-weight: 500;
  color: ${gray300};
  margin-left: ${rem(16)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const SubtitleAccounts = styled.p`
  font-weight: 500;
  font-size: ${remFontSize(12)};
  color: ${gray200};
  margin: ${rem(8)} 0 0 ${rem(16)};
`;

export const WrapperAgency = styled.span`
  display: flex;
`;

export const IconWrapper = styled.span`
  transform: rotate(-90deg);
`;

export const WrapperPeople = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const Underline = styled.div`
  width: 100%;
  border-bottom: ${rem(1)} ${gray90} solid;
  margin-top: ${rem(16)};
`;

export const AlignTitle = styled.span`
  text-align: right;
`;

export const PeopleTitle = styled.p`
  font-family: Lato;
  font-weight: normal;
  font-style: normal;
  font-size: ${remFontSize(14)};
  color: ${gray300};
  margin-top: ${rem(16)};
`;

export const WrapperAnimatedBotton = styled.div`
  background: ${blue20};
  padding: 0 ${rem(16)};
`;

export const TitleAnimatedBotton = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: ${remFontSize(19)};
  color: ${gray300};
  padding: ${rem(24)} 0 ${rem(16)} 0;
`;

export const Disclaimer = styled.div`
  margin: ${rem(32)} 0 ${rem(42)} 0;
`;

export const SaveAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: initial;
  margin: 0 ${rem(8)} ${rem(23)} ${rem(8)};
`;
export const SaveAccountInfo = styled.div`
  margin: ${rem(21)} ${rem(32)} ${rem(16)} 0;
  display: flex;
  align-items: center;
`;

export const FavoredInfoWrapper = styled.div`
  margin: ${rem(32)} 0 0 0;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(14)};
  font-weight: 500;
  font-style: normal;
  color: #2d4758;
  margin-right: ${rem(8)};
`;

export const TextFavored = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(16)};
  font-weight: 700;
  font-style: normal;
  color: #2d4758;
`;

export const Separator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const Space = styled.span`
  display: block;
  margin: 0 ${rem(8)} 0 ${rem(8)};
  position: relative;
`;

export const FavoredInfo = styled.div`
  margin: 0 ${rem(8)} 0 ${rem(8)};
`;

export const WrapperThird = styled.div`
  margin-top: ${rem(16)};
`;

export const InputHelperText = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(10)};
  font-weight: 700;
  color: #909BA2;
  margin-left: ${rem(6)};
  margin-top: ${rem(14)};
`;