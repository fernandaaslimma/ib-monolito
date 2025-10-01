import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../../styles/tools";
import {
  white,
  lightgrey,
  black50,
  blue10,
  lighestgrey
} from "../../../../styles/settings";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: ${rem(100)};

  ${media.md(css`
    padding-bottom: 0;
    margin-bottom: ${rem(10)};
  `)};
`;

export const Page = styled.div`
  float: left;
  width: ${rem(33.1)};
  height: ${rem(33.1)};
  background-color: ${white};
  border: solid ${rem(0.5)} ${lightgrey};
  font-family: "Lato";
  font-size: ${remFontSize(13)};
  color: ${black50};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${blue10};
      color: ${white};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${lighestgrey};
      background-color: rgba(246, 249, 251, 0.5);
      cursor: not-allowed;
    `};
`;

export const FirstPage = styled(Page)`
  border-top-left-radius: ${rem(4)};
  border-bottom-left-radius: ${rem(4)};

  svg {
    transform: rotate(180deg);
  }
`;

export const PreviousPage = styled(FirstPage)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  svg {
    transform: none;
  }
`;

export const LastPage = styled(Page)`
  border-top-right-radius: ${rem(4)};
  border-bottom-right-radius: ${rem(4)};

  svg {
    transform: none;
  }
`;

export const NextPage = styled(LastPage)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  svg {
    transform: rotate(180deg);
  }
`;
