import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import SignConfirmation from "./SignConfirmation";

storiesOf("common/SignConfirmation", module).add(
  "default",
  withInfo()(() => <SignConfirmation />)
);
