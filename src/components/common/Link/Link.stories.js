import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import Link from "./Link";

storiesOf("common/Link", module)
  .add("with title", withInfo()(() => <Link>Link title</Link>))
  .add(
    "with isCallToAction prop",
    withInfo()(() => (
      <Link isCallToAction>Yes, I want to sign the contract</Link>
    ))
  )
  .add(
    "as Link tag with to",
    withInfo()(() => <Link to="/">Yes, I want to sign the contract</Link>)
  )
  .add(
    "as Link tag with href",
    withInfo()(() => (
      <Link href="http://www.google.com" target="_blank">
        Yes, I want to sign the contract
      </Link>
    ))
  );
