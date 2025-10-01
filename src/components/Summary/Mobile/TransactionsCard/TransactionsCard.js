import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

import Card from "../../../common/Card";

import {
  TransactionWrapper,
  TransactionRow,
  AssetName,
  Info,
  InfoWrapper,
  InfoLabel,
  InfoValue
} from "./styles.js";

import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";

function TransactionsCard({ transactions }) {
  return (
    <Fragment>
      {transactions.map((transaction, i) => (
        <TransactionWrapper key={`mobileTransaction_${i}`}>
          <TransactionRow>
            <Card
              data-test={`CardTransaction-${i}`}
              key={`CardTransaction-${i}`}
            >
              <AssetName>{formatDate(transaction.date)}</AssetName>
              <InfoWrapper>
                <Info>
                  <InfoLabel>{translate("ASSET")}</InfoLabel>
                  <InfoValue>{transaction.assetName}</InfoValue>
                </Info>
                <Info>
                  <InfoLabel>{translate("TYPE")}</InfoLabel>
                  <InfoValue>{transaction.type}</InfoValue>
                </Info>
                <Info alignEnd>
                  <InfoLabel>{`${translate("VALUE")} (R$)`}</InfoLabel>
                  <InfoValue>
                    {formatNumber(transaction.grossValue, { digits: 2 })}
                  </InfoValue>
                </Info>
              </InfoWrapper>
            </Card>
          </TransactionRow>
        </TransactionWrapper>
      ))}
    </Fragment>
  );
}

TransactionsCard.defaultProps = {
  transactions: [],
  loading: false
};

TransactionsCard.propTypes = {
  transactions: arrayOf(
    shape({
      date: string,
      grossValue: number,
      type: string,
      assetName: string
    })
  ),
  loading: bool
};

export default TransactionsCard;
