import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../../styles/tools";
import { Hr } from "../../../../styles/objects";
import { isInternetExplorer } from "../../../../utils/getNavigator";
import {
  blue30,
  orange,
  white,
  lightGreen,
  lighestgrey
} from "../../../../styles/settings";

export const Separator = styled(Hr.withComponent("span"))`
  order: 5;

  ${media.lg(css`
    margin: ${rem(5)} 0;
  `)};
`;

export const IconWrapper = styled.div`
  float: left;
  padding-right: ${rem(10)};

  ${({ highPadding }) =>
    highPadding &&
    css`
      padding-bottom: ${rem(8)};
      ${media.xxs(css`
        transform: translateY(${rem(12)});
      `)};
      ${media.xs(css`
        transform: translateY(${rem(2.5)});
      `)};
      ${media.sm(css`
        transform: translateY(${rem(0)});
      `)};
    `};

  ${media.lg(css`
    width: 100%;
    padding-bottom: ${rem(10)};
    padding-right: 0;
  `)};
`;

export const Paragraph = styled.div`
  padding: ${rem(15)} ${rem(10)};
  width: 100%;
  text-align: left;

  ${media.lg(css`
    padding: ${rem(25)};
    text-align: center;
  `)};
`;

export const Spacer = styled.div`
  margin-top: ${rem(5)};
`;

export const ContainerBox = styled.div`
  font-family: Lato;
  font-size: ${remFontSize(13)};
  color: ${white};
  background: ${orange};
  vertical-align: middle;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${({ blockUser }) =>
    blockUser &&
    css`
      font-family: "Lato Bold";
      background: ${lighestgrey};
      border: none !important;
      border-radius: ${rem(4)};
    `};

  ${media.lg(css`
    height: 101%;
    width: 40%;
    padding-bottom: 0;

    ${({ blockUser }) =>
      blockUser &&
      css`
        font-family: "Lato Bold";
        background: ${lighestgrey};
        width: 100%;
        height: 100%;
        border-color: none;
        border-radius: ${rem(4)};
      `};
  `)};
`;

export const SummaryRow = styled.div`
  margin: ${rem(5)} ${rem(5)} ${rem(4)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid ${rem(1)} ${blue30};
  border-radius: ${rem(4)};
  flex-basis: 100%;
  letter-spacing: ${rem(0.4)};

  ${media.lg(css`
    margin: ${rem(10)} ${rem(10)} ${rem(9)};
    flex-basis: 50%;
    order: 0;
    height: ${rem(120)};

    ${({ by3Multiple }) =>
      by3Multiple &&
      css`
        flex-basis: 31.5%;
        :nth-child(3) {
          margin-right: 0;
        }
      `};

    ${({ waitingBox, pendingBox, groupsSize }) =>
      (waitingBox || pendingBox) &&
      groupsSize > 3 &&
      css`
        flex-basis: 45%;
      `};

    ${({ isPendingOrWaiting, groupsSize, waitingBox, pendingBox }) =>
      isPendingOrWaiting &&
      groupsSize > 5 &&
      !waitingBox &&
      !pendingBox &&
      css`
        :nth-child(n + 4) {
          flex-basis: 31.6%;
        }
        :nth-child(6) {
          margin-right: 0;
        }
      `};

    ${({ groupsSize, waitingBox, pendingBox }) =>
      groupsSize === 2 &&
      (waitingBox || pendingBox) &&
      css`
        flex-basis: 48.4% !important;
      `};

    ${({ groupsSize, waitingBox, pendingBox }) =>
      groupsSize === 2 &&
      !pendingBox &&
      !waitingBox &&
      css`
        flex-basis: 48%;
        :nth-child(2) {
          margin-right: 0;
        }
      `};

    ${({ by3Multiple, groupsSize, isThereAnyWaitingGroup }) =>
      by3Multiple &&
      groupsSize === 3 &&
      isThereAnyWaitingGroup &&
      css`
        flex-basis: 30%;
        :nth-child(3) {
          margin-right: 0;
        }
      `};

    ${({ by3Multiple, groupsSize, isPendingOrWaiting }) =>
      by3Multiple &&
      groupsSize === 3 &&
      !isPendingOrWaiting &&
      css`
        flex-basis: 31.6%;
        :nth-child(3) {
          margin-right: 0;
        }
      `};

    ${({ by3Multiple, groupsSize, isThereAnyWaitingGroup }) =>
      !by3Multiple &&
      groupsSize > 3 &&
      isThereAnyWaitingGroup &&
      css`
        flex-basis: 25%;
        :nth-child(3) {
          margin-right: 0;
        }
        :nth-child(5) {
          margin-right: 0;
        }
      `};
    ${({ groupsSize }) =>
      groupsSize === 2 &&
      css`
        :nth-child(2) {
          margin-right: 0;
        }
      `};

    ${({ by3Multiple, groupsSize, isThereAnyWaitingGroup }) =>
      !by3Multiple &&
      groupsSize === 4 &&
      isThereAnyWaitingGroup &&
      css`
        flex-basis: 31.5%;
        :nth-child(4) {
          margin-right: 0;
          flex-basis: 48.4%;
        }
      `};

    ${({ by3Multiple, waitingBox, pendingBox }) =>
      by3Multiple &&
      (waitingBox || pendingBox) &&
      css`
        flex-basis: 45% !important;
        ${isInternetExplorer() &&
          css`
            flex-basis: 44% !important;
          `};
      `};

    ${({ isPendingOrWaiting, by3Multiple, waitingBox, pendingBox }) =>
      isPendingOrWaiting &&
      by3Multiple &&
      !waitingBox &&
      !pendingBox &&
      css`
        flex-basis: 25%;
      `};

    ${({ groupsSize, getLengthSpecialBoxes, blockedBox }) =>
      groupsSize === 3 &&
      getLengthSpecialBoxes === 1 &&
      blockedBox &&
      css`
        :last-child {
          flex-basis: 45%;
        }
      `};

    ${({ waitingBox, pendingBox }) =>
      (waitingBox || pendingBox) &&
      css`
        border-radius: ${rem(4)};
        padding: ${rem(0)};
        flex-basis: 48%;
        display: inline-flex;
        ${isInternetExplorer() &&
          css`
            flex-basis: 46%;
          `};
      `};
    ${({ getLengthSpecialBoxes, groupsSize, isThereAnyWaitingGroup }) =>
      isThereAnyWaitingGroup &&
      groupsSize === 3 &&
      getLengthSpecialBoxes === 2 &&
      css`
        flex-basis: 48.1% !important;
      `};

    ${({
      getLengthSpecialBoxes,
      groupsSize,
      isThereAnyWaitingGroup,
      waitingBox,
      pendingBox
    }) =>
      isThereAnyWaitingGroup &&
      groupsSize === 3 &&
      getLengthSpecialBoxes === 3 &&
      (waitingBox || pendingBox) &&
      css`
        flex-basis: 48.1% !important;
      `};
    ${({
      getLengthSpecialBoxes,
      groupsSize,
      isThereAnyWaitingGroup,
      waitingBox,
      pendingBox
    }) =>
      isThereAnyWaitingGroup &&
      groupsSize === 4 &&
      getLengthSpecialBoxes === 4 &&
      (waitingBox || pendingBox) &&
      css`
        flex-basis: 48.1% !important;
        :nth-child(3) {
          margin-right: ${rem(10)};
        }
      `};

    ${Separator} {
      display: none;
    }
  `)};

  ${({ waitingBox }) =>
    waitingBox &&
    css`
      border: solid ${rem(2)} ${orange};
    `};

  ${({ pendingBox }) =>
    pendingBox &&
    css`
      border: solid ${rem(2)} ${lightGreen};
    `};
  ${({ inProgressBox }) =>
    inProgressBox &&
    css`
      background: ${lighestgrey};
      border: none !important;
      border-radius: ${rem(4)};
    `};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
