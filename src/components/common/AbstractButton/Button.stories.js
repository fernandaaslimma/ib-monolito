import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import Button from "./Button";

storiesOf("common/Button", module)
  .add("with title", withInfo()(() => <Button>Button title</Button>))
  .add(
    "with isCallToAction prop",
    withInfo()(() => (
      <Button isCallToAction>Yes, I want to sign the contract</Button>
    ))
  );
