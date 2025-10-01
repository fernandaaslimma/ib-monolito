import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import ContractCallToAction from "./ContractCallToAction";

storiesOf("Exchange/ContractCallToAction", module).add(
  "default",
  withInfo()(() => <ContractCallToAction requestAjustmentUrl="/" signUrl="/" />)
);
