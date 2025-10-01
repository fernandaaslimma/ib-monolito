import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import CardPrint from "./CardPrint";
import { defaultTheme } from "../../../styles/settings/themes";

storiesOf("common/Card", module)
  .add(
    "with title",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <CardPrint title="Operation sumary" />
      </ThemeProvider>
    ))
  )
  .add(
    "with icon",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <CardPrint icon="Cash" />
      </ThemeProvider>
    ))
  )
  .add(
    "with title and icon",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <CardPrint icon="Cash" title="Operation sumary" />
      </ThemeProvider>
    ))
  )
  .add(
    "with content",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <CardPrint icon="Cash" title="Operation sumary">
          <p>some content</p>
        </CardPrint>
      </ThemeProvider>
    ))
  );
