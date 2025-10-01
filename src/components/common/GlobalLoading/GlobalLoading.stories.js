import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info";

import GlobalLoading from "./GlobalLoading";

storiesOf("GlobalLoading", module).add(
  "default",
  withInfo()(() => <GlobalLoading loading={true} />)
);
