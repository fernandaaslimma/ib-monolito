import React from "react";
import { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import Input from "./Input";
import { defaultTheme } from "../../../styles/settings/themes";

const props = {
  type: "text",
  name: "email",
  label: "E-mail",
  onChange: () => {}
};

storiesOf("common/Input", module)
  .add(
    "default",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <Input {...props} />
      </ThemeProvider>
    ))
  )
  .add(
    "with icon",
    withInfo()(() => (
      <ThemeProvider theme={defaultTheme}>
        <Input {...props} icon="Lock" />
      </ThemeProvider>
    ))
  );
