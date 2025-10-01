import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import ContractAccount from "./ContractAccount";

storiesOf("Exchange/ContractAccount", module)
  .add(
    "destination account",
    withInfo()(() => (
      <ContractAccount
        bank="BBM"
        account="12321"
        country="China"
        owner="Bruce Lee"
        swift="21839"
        chips="21839"
        aba="21839"
      />
    ))
  )
  .add(
    "intermediary account",
    withInfo()(() => (
      <ContractAccount
        bank="BBM"
        account="12321"
        swift="21839"
        chips="21839"
        aba="21839"
      />
    ))
  );
