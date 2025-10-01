import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import DefaultContent from "./DefaultContent";
import { black30 } from "../../../styles/settings";
import Icon from "../Icon";

const props = {
  Icon: () => <Icon type="Attention" color={black30} />, // eslint-disable-line
  primaryText: "primary text",
  secondaryTexts: ["text", "more text"]
};

storiesOf("common/DefaultContent", module).add(
  "default",
  withInfo()(() => <DefaultContent {...props} />)
);
