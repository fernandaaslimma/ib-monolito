import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import ContractSellAccount from "./ContractSellAccount";

storiesOf("Exchange/ContractSellAccount", module).add(
  "default",
  withInfo()(() => (
    <ContractSellAccount
      bank="BBM"
      owner="Bruce Lee"
      bankId="2312HJ"
      agency="3213"
      account="12321"
      document="102.392.238-22"
    />
  ))
);
