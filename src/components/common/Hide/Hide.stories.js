import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import Hide from "./Hide";

storiesOf("common/Hide", module)
  .add(
    "hide above above sm",
    withInfo()(() => <Hide above="sm">Hide title</Hide>)
  )
  .add(
    "hide above below sm",
    withInfo()(() => <Hide below="sm">Hide title</Hide>)
  )
  .add(
    "hide above above md",
    withInfo()(() => <Hide above="md">Hide title</Hide>)
  )
  .add(
    "hide above below md",
    withInfo()(() => <Hide below="md">Hide title</Hide>)
  )
  .add(
    "hide above above lg",
    withInfo()(() => <Hide above="lg">Hide title</Hide>)
  )
  .add(
    "hide above below lg",
    withInfo()(() => <Hide below="lg">Hide title</Hide>)
  );
