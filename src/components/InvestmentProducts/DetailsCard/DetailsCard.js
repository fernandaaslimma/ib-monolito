import React, { Fragment, useContext } from "react";
import { Icon, Button } from "react-bocombbm-components";
import {
  black,
  blue,
  conclusive200,
  brandPrimary
} from "../../../styles/settings";
import { BRL_CURRENCY, DEFAULT_VALUE } from "../../../utils/constants";
import formatDate from "../../../utils/formatDate";

import formatNumber from "../../../utils/formatNumber";
import { translate } from "../../../utils/i18n";
import { ClickbleIcon } from "../Funds/DetailsStep/styles";
import { InstanceContext } from "../Funds/fundsContext";
import { verifyDays } from "../utils";

import {
  CardTitle,
  CardContent,
  Card,
  AvailableAmountHeader,
  AmountsContent,
  AmountsContentBold,
  SecondLevelValue,
  Line,
  ItemDescription,
  ItemValue,
  ProfitabilityPorcentage,
  ProfitabilityPorcentageInfo,
  SecondLevelInfo,
  PercentageLabel,
  RotateComponent,
  ItemValueBreakLine,
  FirstLevelInfo,
  FirstLevelTitle,
  FirstLevelContent,
  FormatColorFeedback,
  ClickableItem,
  FormatColor
} from "./styles";

function DetailsCard({
  list,
  title,
  periodActive,
  initialInvestment,
  clickInfo,
  profitabilitySoFar,
  dataTest,
  featureType,
  grossResultBalance,
  netIncome,
  grossBalance,
  stepForward,
  bottomExtraSpace,
  bottomSpace,
  showHideIorIofInfo,
  disableRedemption
}) {
  const {
    state: { selectedFund },
    setChosenOperation
  } = useContext(InstanceContext);

  const isPositionFunds =
    selectedFund && selectedFund.investmentDetails ? true : false;
  const formatValues = value => formatNumber(Math.abs(value), { digits: 2 });
  const injectCurrency = value => {
    return `${BRL_CURRENCY} ${formatValues(value)}`;
  };

  const injectCurrencySignalColor = (
    value,
    colorReactValue,
    signalReactValue
  ) => {
    return (
      <FormatColor value={colorReactValue ? value : 0}>
        {value >= 0
          ? value === 0
            ? `${injectCurrency(value)}`
            : `${signalReactValue ? "+" : ""} ${injectCurrency(value)}`
          : `${signalReactValue ? "-" : ""} ${injectCurrency(value)}`}
      </FormatColor>
    );
  };

  const redeemFund = () => {
    setChosenOperation("redeem");
    stepForward();
  };

  const showMessage = () => {
    return periodActive < 6 ? (
      <AvailableAmountHeader data-test="profitabilityBefore6Months">
        <AmountsContent>
          {translate("PROFITABILITY_SHOWN_ONLY_WHEN")}
          <AmountsContentBold>
            {translate("AFTER_SIX_MONTHS")}
          </AmountsContentBold>
        </AmountsContent>
      </AvailableAmountHeader>
    ) : (
      <AvailableAmountHeader data-test="profitabilityWithLessThan12Months">
        <AmountsContent>
          {translate("PRODUCT_WHITH_LESS_THAN")}
          <AmountsContentBold>
            {translate("MONTHS_OF_CONSTITUTION")}
          </AmountsContentBold>
        </AmountsContent>
      </AvailableAmountHeader>
    );
  };

  const formatPercentage = value => {
    return `${formatNumber(Math.abs(value), { digits: 2 })} %`;
  };

  const formatPercentageUpDown = (value, title = false) => {
    if (!value) return DEFAULT_VALUE;
    return (
      <Fragment>
        <RotateComponent isRotate={value < 0}>
          <Icon
            type="PointingArrow"
            height={title ? 35 : 20}
            width={title ? 35 : 20}
            color={value >= 0 ? conclusive200 : black}
          />
        </RotateComponent>
        {title ? (
          <ProfitabilityPorcentage positive={value >= 0}>
            {formatPercentage(value)}
          </ProfitabilityPorcentage>
        ) : (
          <PercentageLabel positive={value >= 0}>
            {formatPercentage(value)}
          </PercentageLabel>
        )}
      </Fragment>
    );
  };

  const itemHandler = key => {
    if (
      key === "initialInvestment" ||
      key === "minimumTransaction" ||
      key === "minimumBalance" ||
      key === "netBalance" ||
      key === "grossResultBalance" ||
      key === "irIof" ||
      key === "investmentValue" ||
      key === "POSITION_FUNDS_GROSS_BALANCE"
    ) {
      return list[key] === null
        ? translate("FUNDS_NONE")
        : injectCurrency(list[key]);
    } else if (key === "subsConversionDays") {
      return list[key] === null
        ? translate("FUNDS_NONE")
        : verifyDays(list[key], selectedFund.subscription.type);
    } else if (key === "redempConversionDays") {
      return list[key] === null
        ? translate("FUNDS_NONE")
        : verifyDays(list[key], selectedFund.redemption.type);
    } else if (key === "redempSettlementDays") {
      return list[key] === null
        ? translate("FUNDS_NONE")
        : verifyDays(list[key], "Útil"); //Forcing working days as BBM requested
    } else if (
      key === "performanceFeeFunds" ||
      key === "administrationFeeFunds" ||
      key === "administrationFeeMaxFunds"
    ) {
      return list[key] === null || list[key] <= 0
        ? translate("FUNDS_NONE")
        : formatPercentage(list[key]);
    } else if (
      key === "maximumDistributionFeeFunds" ||
      key === "managementFeeFunds"
    ) {
      return list[key] === null ? null : list[key] <= 0
        ? translate("FUNDS_NONE")
        : formatPercentage(list[key]);
    } else if (
      key === "yearFunds" ||
      key === "twelveMonths" ||
      key === "thirtySixMonths" ||
      key === "fortyEightMonths" ||
      key === "twentyFourMonths"
    ) {
      return list[key] === null ? null : formatPercentageUpDown(list[key]);
    } else if (key === "inceptionDateFunds") {
      return list[key] === null
        ? translate("FUNDS_NONE")
        : formatDate(list[key]);
    } else {
      return list[key] === null ? translate("FUNDS_NONE") : list[key];
    }
  };

  const listItems = list => {
    return Object.keys(list).map((key, i) => {
      const handledItem = itemHandler(key);
      if (handledItem === null) {
        return null;
      } else {
        return (
          <Line key={i}>
            <ItemDescription>
              {translate(
                `${featureType ? featureType.toUpperCase() : ""
                }${key.toUpperCase()}`
              )}
              {key === "irIof" && (
                <ClickableItem onClick={() => showHideIorIofInfo()}>
                  <Icon
                    type="Interrogation"
                    height={16}
                    width={16}
                    color={brandPrimary}
                  />
                </ClickableItem>
              )}
            </ItemDescription>
            {key === "administratorFunds" || key === "custodianFunds" ? (
              <ItemValueBreakLine data-test={`value_${i}`}>
                {handledItem}
              </ItemValueBreakLine>
            ) : (
              <ItemValue data-test={`value_${i}`}>{handledItem}</ItemValue>
            )}
          </Line>
        );
      }
    });
  };

  const firstLevelInfo = (title, content) => {
    return (
      <FirstLevelInfo>
        <FirstLevelTitle data-test={`title_${title}`}>{title}</FirstLevelTitle>
        <FirstLevelContent bottomExtraSpace={bottomExtraSpace}>
          {content}
        </FirstLevelContent>
      </FirstLevelInfo>
    );
  };

  const secondLevelInfo = (title, value) => {
    return (
      <SecondLevelInfo>
        {translate(title)}
        <SecondLevelValue>{value}</SecondLevelValue>
      </SecondLevelInfo>
    );
  };

  const periodActiveContent = (
    <ProfitabilityPorcentageInfo>
      {formatPercentageUpDown(profitabilitySoFar, true)}
      <ClickbleIcon onClick={clickInfo}>
        <Icon
          data-test="lastUpdatedButton"
          type="Attention"
          width={25}
          height={25}
          color={blue}
        />
      </ClickbleIcon>
    </ProfitabilityPorcentageInfo>
  );

  const formatCurrencyContent = (value, colorReactValue, signalReactValue) => {
    return (
      <FormatColorFeedback value={colorReactValue ? value : 0}>
        {value >= 0
          ? value === 0
            ? `${injectCurrency(value)}`
            : `${signalReactValue ? "+" : ""} ${injectCurrency(value)}`
          : `${signalReactValue ? "-" : ""} ${injectCurrency(value)}`}
      </FormatColorFeedback>
    );
  };
  const redemptionButton = () => {
    return (
      <Button
        type="outline"
        onClick={() => redeemFund()}
        spacing={{ top: "m", bottom: "xxs", right: "xs", left: "xs" }}
        dataTest="fundsRedeemButton"
        disabled={disableRedemption}
      >
        {translate("POSITION_FUNDS_REDEEM")}
      </Button>
    );
  };

  return (
    <Fragment>
      <Card
        className="DetailsCard"
        bottomSpace={bottomSpace}
        data-test={`${dataTest}`}
      >
        {title && <CardTitle>{title}</CardTitle>}
        <CardContent>
          {periodActive !== null && periodActive < 12 && showMessage()}

          {!isPositionFunds &&
            periodActive !== null &&
            periodActive >= 6 &&
            firstLevelInfo(
              `${translate("PROFIT_LAST")}
                ${periodActive >= 12 ? 12 : periodActive}
                ${translate("FUNDS_MONTH")}`,
              periodActiveContent
            )}

          {isPositionFunds &&
            grossBalance &&
            firstLevelInfo(
              translate("POSITION_FUNDS_GROSS_BALANCE"),
              formatCurrencyContent(grossBalance)
            )}

          {isPositionFunds &&
            netIncome &&
            firstLevelInfo(
              translate("POSITION_FUNDS_NET_INCOME"),
              formatCurrencyContent(netIncome, true, true)
            )}

          {!isPositionFunds &&
            initialInvestment &&
            secondLevelInfo(
              "INITIAL_APPLICATION",
              injectCurrency(initialInvestment)
            )}

          {isPositionFunds &&
            grossResultBalance &&
            secondLevelInfo(
              "POSITION_FUNDS_REDEMPTIONS_GROSS_INCOME",
              injectCurrencySignalColor(grossResultBalance, true, true)
            )}

          {periodActive !== null && periodActive >= 12 && listItems(list)}
          {!periodActive && listItems(list)}

          {isPositionFunds && grossBalance && redemptionButton()}
        </CardContent>
      </Card>
    </Fragment>
  );
}

export default DetailsCard;
