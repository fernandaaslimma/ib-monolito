import styled, { css } from "styled-components";
import { rem, media, remFontSize } from "../../../styles/tools";
import Icon from "../Icon";
import { isInternetExplorer } from "../../../utils/getNavigator";
import { grey190, blue, white } from "../../../styles/settings";

// IE and Edge have a bug with calc inside transitions
export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  transition: margin-left 0.3s linear;

  ${({ widthMultiplier }) =>
    widthMultiplier &&
    css`
      width: calc(100% * ${widthMultiplier});

      ${Content} {
        width: calc(100% / ${widthMultiplier});
      }
    `};

  ${({ active }) => {
    const margin = `${-100 * (active - 1)}%`;
    return (
      active &&
      css`
        margin-left: ${margin};
      `
    );
  }};

  :after {
    content: "";
    clear: both;
  }
`;

export const Content = styled.div`
  height: 0;
  overflow: hidden;
  text-align: center;
  padding: 0;

  ${({ active }) =>
    active &&
    css`
      &:nth-child(${active}) {
        height: 100%;
        padding: ${rem(10)};
      }
    `};
`;

export const InnerContent = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const Buttons = styled.div`
  margin-top: ${rem(50)};
  display: flex;
  padding: 0 ${rem(5)};
  justify-content: space-between;

  ${media.md(css`
    width: ${rem(300)};
    margin: ${rem(60)} auto 0 auto;
  `)};

  > * {
    height: auto;
    line-height: ${rem(35)};
    padding-top: ${rem(5)};
    padding-bottom: ${rem(5)};
    width: calc(50% - ${rem(5)});

    :only-child {
      margin: 0 auto;
    }

    &:nth-child(2n):not(:disabled) {
      background: ${blue};
      color: ${white};
    }
  }
`;

export const IconWrapper = styled.div`
  margin: 0 auto;

  ${media.md(css`
    margin: 0;
  `)};

  ${isInternetExplorer() &&
    media.md(css`
      margin-top: ${rem(-50)};
    `)};
`;

export const CustomIcon = styled(Icon)`
  width: auto;

  @media (max-width: ${rem(400)}) {
    width: ${rem(180)};
  }
`;

export const Title = styled.h2`
  font-family: "Roboto Bold", "Roboto Medium", Roboto;
  font-size: ${remFontSize(20)};
  font-weight: 900;
  letter-spacing: ${rem(0.6)};
  color: ${grey190};
  margin-bottom: ${rem(20)};
  margin-top: ${rem(18)};
`;
