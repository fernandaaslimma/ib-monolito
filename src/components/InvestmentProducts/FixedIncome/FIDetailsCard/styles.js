import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  gray200,
  gray300,
  blue20,
  conclusive200,
  white
} from "../../../../styles/settings";

export const CardTitle = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  padding: 0 0 ${rem(16)} 0;
  letter-spacing: ${rem(0.452308)};
  color: ${gray300};
`;

export const AmountsContent = styled.span`
  font-family: Lato;
  font-size: ${remFontSize(12)};
  letter-spacing: ${rem(0.452308)};
  color: ${gray200};

  text-align: center;
`;

export const AmountsContentBold = styled(AmountsContent)`
  margin: 0;
  font-weight: 600;
`;

export const AvailableAmountHeader = styled.div`
  display: flex;
  margin: 0 ${rem(8)} ${rem(24)} ${rem(8)};
  padding: 0;
  justify-content: center;
  align-items: center;
  height: ${rem(38)};
  width: calc(100% - ${rem(16)});
  background: ${blue20};
  border-radius: ${rem(4)};
`;

export const BlockedAmountFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${rem(8)} ${rem(8)} 0 ${rem(8)};
  padding: 0;
  justify-content: center;
  align-items: center;
  height: ${rem(38)};
  width: calc (100% - ${rem(16)});
  background: ${blue20};
  border-radius: ${rem(4)};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${rem(16)} ${rem(0)} ${rem(16)};

  ${({ bottomSpace }) =>
    bottomSpace &&
    css`
      margin-bottom: ${bottomSpace};
    `}

  & + .DetailsCard {
    margin-top: ${rem(32)};
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${rem(16)} 0 0 0;

  background: ${white};
  box-shadow: ${rem(0)} ${rem(1)} ${rem(12)} rgba(211, 225, 232, 0.12);
  border-radius: ${rem(4)};
`;
export const Line = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${rem(12)} 0 ${rem(12)};
  background: none;
`;

export const ItemDescription = styled.div`
  display: flex;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  flex-grow: 1;
  letter-spacing: ${rem(0.452308)};
  padding-right: ${rem(10)};
  max-width: 195px;
  color: ${gray200};
  margin-right: ${rem(24)};
`;

export const ItemValue = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  display: flex;
  text-align: right;
  letter-spacing: ${rem(0.45)};
  color: ${gray300};
  white-space: nowrap;

  ${({ conclusive }) =>
    conclusive &&
    css`
      color: ${conclusive200};
    `}
`;

export const ItemValueBreakLine = styled(ItemValue)`
  white-space: normal;
`;

export const FirstLevelInfo = styled.div``;

export const FirstLevelTitle = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(16)};
  line-height: 125%;
  margin: 0 0 ${rem(4)} ${rem(12)};
  letter-spacing: ${rem(0.452308)};
  padding-top: ${rem(8)};

  color: ${gray200};
`;
export const FirstLevelContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 0;
  ${({ bottomExtraSpace }) =>
    bottomExtraSpace &&
    css`
      margin-bottom: ${bottomExtraSpace};
    `}
`;
export const ProfitabilityPorcentageInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 ${rem(14)} ${rem(22)};
`;

export const ProfitabilityPorcentage = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;
  margin: 0 ${rem(12)} 0 ${rem(10)};

  letter-spacing: ${rem(0.452308)};
  color: ${gray300};

  ${({ positive }) =>
    positive &&
    css`
      color: ${conclusive200};
    `}
`;

export const FormatColorFeedback = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${remFontSize(24)};
  line-height: 125%;
  margin: 0 0 0 ${rem(12)};

  letter-spacing: ${rem(0.452308)};
  color: ${gray300};

  ${({ value }) =>
    value > 0 &&
    css`
      color: ${conclusive200};
    `}
`;

export const FormatColor = styled.span`
  ${({ value }) =>
    value > 0 &&
    css`
      color: ${conclusive200};
    `}
`;

export const SecondLevelInfo = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${remFontSize(14)};
  line-height: 125%;
  margin: ${rem(6)} ${rem(12)} ${rem(16)} ${rem(12)};

  letter-spacing: ${rem(0.452308)};

  color: ${gray200};
`;

export const SecondLevelValue = styled(SecondLevelInfo)`
  margin: 0;
  font-weight: 700;
`;

export const PercentageLabel = styled(ItemValue)`
  margin-left: ${rem(2)};

  ${({ positive }) =>
    positive &&
    css`
      color: ${conclusive200};
    `}
`;

export const RotateComponent = styled.div`
  margin-right: ${rem(4)};
  ${({ isRotate }) =>
    isRotate &&
    css`
      transform: rotate(180deg);
    `}

  ${({ angle }) =>
    angle &&
    css`
      transform: rotate(${angle}deg);
    `}
`;

export const ClickableItem = styled.span`
  display: flex;
  cursor: pointer;
  margin-left: ${rem(5)};
`;

export const FundsInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.span`
  flex-grow: 1;
  font-family: Lato;
  margin-bottom: ${rem(24)};
`;

export const Label = styled.span`
  font-size: ${remFontSize(14)};
  display: block;
  color: ${gray200};
  margin-bottom: ${rem(6)};
`;
