import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import DataItem from "./DataItem";

storiesOf("Exchange/DataItem", module)
  .add(
    "with title and data",
    withInfo()(() => <DataItem title="Settlement date" data="10/12/2017" />)
  )
  .add("with no data", withInfo()(() => <DataItem title="Settlement date" />));
