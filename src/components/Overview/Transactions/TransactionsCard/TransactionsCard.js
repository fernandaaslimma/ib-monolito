import React from "react";
import { func, string, object } from "prop-types";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import { BRL_CURRENCY } from "../../../../utils/constants";

import {
  CardTitle,
  CardContent,
  Card,
  Section,
  Info,
  Label,
  Value
} from "./styles";

function TransactionsCard({
  key,
  item,
  formatTitle,
  pickedActive,
  dataTest,
  dataX
}) {
  const firstLabelText =
    pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")
      ? translate("INVESTMENT_FUNDS")
      : pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")
      ? translate("FIXED_INCOME")
      : translate("EQUITIES");
  return (
    <Card data-test={dataTest} data-x={dataX}>
      <CardTitle data-test="dateCard" key={key}>
        {item.date && formatTitle(item.date)}
      </CardTitle>
      <CardContent>
        <Section>
          <Info>
            <Label data-test={firstLabelText}>{firstLabelText}</Label>
            <Value>{item.assetName}</Value>
          </Info>
        </Section>
        <br />
        <Section>
          <Info>
            <Label>{translate("GROSS_VALUE")}</Label>
            <Value>
              {`${BRL_CURRENCY} ${formatNumber(Math.abs(item.grossValue), {
                digits: 2
              })}`}
            </Value>
          </Info>
          <Info>
            <Label>{translate("TYPE")}</Label>
            <Value>{item.type}</Value>
          </Info>
        </Section>
      </CardContent>
    </Card>
  );
}

TransactionsCard.propTypes = {
  item: object.isRequired,
  formatTitle: func.isRequired,
  pickedActive: string.isRequired
};

export default TransactionsCard;
