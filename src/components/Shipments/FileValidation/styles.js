import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import { isInternetExplorer } from "../../../utils/getNavigator";
import { neutral200 } from "../../../styles/settings/index.js";

export const ReturnValidationContainer = styled.div`
  max-height: ${rem(708)};
  background: white;
  padding: ${rem(16)};
`;

export const CenterButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: ${rem(32)} 0 0 0;
`;

export const MessagesContainer = styled.ul`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${remFontSize(18)};
  line-height: ${remFontSize(28.8)};
  letter-spacing: ${remFontSize(1)};
`;

export const TitleMessage = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: ${remFontSize(18)};
  line-height: ${remFontSize(28.8)};
  letter-spacing: ${remFontSize(1)};
`;

export const InfoError = styled.li``;

export const Block = styled.div`
  padding: 0 0 ${rem(32)} 0;
  text-align: left;
  width: ${rem(386)};

  ${({ layered }) =>
    css`
      position: relative;
      z-index: ${layered};
    `}

  ${({ span }) =>
    span &&
    css`
      grid-column-start: 1;
      grid-column-end: 1;
      ${media.md(css`
        grid-column-start: ${span[0]};
        grid-column-end: ${span[1] + 1};
      `)};
    =`};

  ${isInternetExplorer() &&
    css`
      min-width: 33.33%;
      max-width: 33.33%;

      ${({ IEFractionParts }) =>
        IEFractionParts &&
        css`
          min-width: ${100 / IEFractionParts}%;
          max-width: ${100 / IEFractionParts}%;
        `};

      ${({ span, IEFractionParts }) => {
        const percentFraction = `${
          IEFractionParts ? 100 / IEFractionParts : 33.33
        }`;
        return (
          span &&
          css`
            min-width: ${(span[1] - (span[0] - 1)) * percentFraction}%;
            max-width: ${(span[1] - (span[0] - 1)) * percentFraction}%;
          `
        );
      }};
    `};
`;

export const InnerBlock = styled(Block)`
  border: none;
  padding: 0;

  .DropdownFileType__menu {
    cursor: pointer;
    margin-top: ${rem(2)};
  }

  .DropdownFileType__option {
    cursor: pointer;
  }

  .DropdownFileType__control {
    cursor: pointer;
    height: ${rem(45)};
  }

  .DropdownFileType__value-container {
    padding: 0 0 0 ${rem(5)};
  }

  .DropdownFileType__single-value {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: ${remFontSize(13)};
    line-height: ${remFontSize(14)};
    letter-spacing: ${remFontSize(0.54)};
    color: #5b6b75;
  }

  ${isInternetExplorer() &&
    css`
      padding: ${rem(5)};
    `};
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TitleModal = styled.div`
    font-family: Lato;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #003B77;
    font-size: ${remFontSize(24)};
    font-weight: 700;
    line-height: ${remFontSize(24)};
    letter-spacing: ${remFontSize(0.4)};
    width: 100%
    height: ${rem(58)};

    box-shadow: 0px ${rem(0.8)}; ${rem(3)}; #ededed;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${rem(28)} 0 ${rem(12)} 0;
`;
export const Description = styled.div`
  width: ${rem(500)};
  height: ${rem(62)};
  font-family: Lato;
  color: #587485;
  font-size: ${remFontSize(14)};
  font-weight: 400;
  line-height: ${remFontSize(22.4)};
  letter-spacing: ${remFontSize(0.45)};
  margin: 0 0 ${rem(22)} 0;
  text-align: start;
`;
export const FileInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: ${rem(500)};
  height: ${rem(120)};

  background: #f6f9fb;
  border-radius: ${rem(8)};
  margin: 0 0 ${rem(16)} 0;
  padding: ${rem(16)};
`;

export const WrapperInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Lato;
`;

export const Label = styled.div`
  font-family: Lato;
  color: #587485;
  font-size: ${remFontSize(16)};
  font-weight: 700;
  line-height: ${remFontSize(22.4)};
  letter-spacing: ${remFontSize(0.45)};
`;

export const Value = styled.div`
  font-family: Lato;
  color: #587485;
`;

export const WrapperContent = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

export const LinkText = styled.span`
  transition: 0.2s color;
  :focus,
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${neutral200};
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;
