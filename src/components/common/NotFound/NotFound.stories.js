import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import NotFound from "./NotFound";

storiesOf("common/NotFound", module).add(
  "default",
  withInfo()(() => <NotFound />)
);
