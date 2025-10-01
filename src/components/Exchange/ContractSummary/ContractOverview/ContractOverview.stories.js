import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import ContractOverview from "./ContractOverview";

storiesOf("Exchange/ContractOverview", module)
  .add(
    "buy",
    withInfo()(() => (
      <ContractOverview
        typeOfExchange="buy"
        settlementDate="01/01/2018"
        localCurrency="USD"
        foreignCurrency="BRL"
        valueOfForeignCurrency={12321321321}
        valueOfNationalCurrency={23123312213}
        natureOfExchange="some nature"
        exchangeRate={3.213223}
      />
    ))
  )
  .add(
    "sell",
    withInfo()(() => (
      <ContractOverview
        typeOfExchange="sell"
        settlementDate="01/01/2018"
        localCurrency="USD"
        foreignCurrency="BRL"
        valueOfForeignCurrency={12321321321}
        valueOfNationalCurrency={23123312213}
        natureOfExchange="some nature"
        exchangeRate={3.213223}
      />
    ))
  );
