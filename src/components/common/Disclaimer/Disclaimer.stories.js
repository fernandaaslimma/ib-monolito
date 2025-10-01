import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import Disclaimer from "./Disclaimer";

storiesOf("Disclaimer", module).add(
  "with text",
  withInfo()(() => <Disclaimer text="Disclaimer text" />)
);
