import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import GroupCard from "./GroupCard";
import { defaultTheme } from "../../../styles/settings/themes";

storiesOf("common/GroupdCard", module)
  .add(
    "with title",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <GroupCard title="Operation sumary" />
      </ThemeProvider>
    ))
  )
  .add(
    "with icon",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <GroupCard icon="Cash" />
      </ThemeProvider>
    ))
  )
  .add(
    "with title and icon",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <GroupCard icon="Cash" title="Operation sumary" />
      </ThemeProvider>
    ))
  )
  .add(
    "with content",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <GroupCard icon="Cash" title="Operation sumary">
          <p>some content</p>
        </GroupCard>
      </ThemeProvider>
    ))
  );
