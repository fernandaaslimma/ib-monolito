import React from "react";
import createStore from "redux-zero";
import { Provider } from "redux-zero/react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info";

import VirtualKeyboard from "./VirtualKeyboard";
const store = createStore();

storiesOf("VirtualKeyboard", module).add(
  "with title",
  withInfo()(() => (
    <Provider store={store}>
      <VirtualKeyboard />
    </Provider>
  ))
);
