import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import PermissionDenied from "./PermissionDenied";

storiesOf("common/PermissionDenied", module).add(
  "default",
  withInfo()(() => <PermissionDenied />)
);
