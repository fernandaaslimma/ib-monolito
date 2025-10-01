import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info";

import BankLogo from "./BankLogo";

storiesOf("BankLogo", module)
  .add("default", withInfo()(() => <BankLogo />))
  .add(
    "with primaryColor",
    withInfo()(() => <BankLogo primaryColor="orange" />)
  )
  .add(
    "with secondaryColor",
    withInfo()(() => <BankLogo secondaryColor="orange" />)
  );
