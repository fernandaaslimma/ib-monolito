import React from "react";
import { func, string, object } from "prop-types";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";

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
  dataTest,
  dataX,
  currency
}) {
  const firstLabelText = 'Time Deposit';

  return (
    <Card data-test={dataTest} data-x={dataX}>
      <CardTitle data-test="dateCard" key={key}>
        {item.transactionDate && formatTitle(item.transactionDate)}
      </CardTitle>
      <CardContent>
        <Section>
          <Info>
            <Label data-test={firstLabelText}>{firstLabelText}</Label>
            <Value>{item.name}</Value>
          </Info>
        </Section>
        <br />
        <Section>
          <Info>
            <Label>{translate("GROSS_VALUE")}</Label>
            <Value>
              {`${currency} ${formatNumber(Math.abs(item.transactionValue), {
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
