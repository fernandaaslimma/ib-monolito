import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import ContractSummary from "./ContractSummary";

const ContractSummaryProps = {
  contractId: "21332112XX",
  foreignAmount: 3212312,
  foreignCurrency: "USD",
  fxNature: "0921810923",
  localAmount: 32132232,
  localCurrency: "BRL",
  tradeDate: "20/12/2017",
  type: "buy",
  totalEffectiveRate: 2.333,
  destinationAccount: {
    account: "213223",
    bank: {
      aba: "2312",
      chips: "231",
      name: "BBM",
      swift: "333"
    },
    country: "China",
    name: "Bruce Lee"
  },
  intermediaryAccount: {
    account: "13231",
    bank: {
      aba: "567",
      chips: "657",
      name: "BBM",
      swift: "321"
    }
  },
  signUrl: "/",
  requestAjustmentUrl: "/"
};

storiesOf("Exchange/ContractSummary", module)
  .add(
    "empty",
    withInfo()(() => <ContractSummary requestAjustmentUrl="/" signUrl="/" />)
  )
  .add("buy", withInfo()(() => <ContractSummary {...ContractSummaryProps} />))
  .add(
    "sell",
    withInfo()(() => <ContractSummary {...ContractSummaryProps} type="sell" />)
  );
