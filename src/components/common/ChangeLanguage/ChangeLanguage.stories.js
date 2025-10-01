import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info";

import ChangeLanguage from "./ChangeLanguage";
import { PT_BR } from "../../../utils/constants";

const props = {
  setChooseLanguage: () => alert("changed"),
  userInfo: {
    preferredLanguage: PT_BR
  }
};

storiesOf("ChangeLanguage", module).add(
  "with title",
  withInfo()(() => <ChangeLanguage {...props} />)
);
