import React from "react";
import { StaticRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info";

import Subnav from "./index";

storiesOf("common/Subnav", module).add(
  "with tabs",
  withInfo()(() => (
    <StaticRouter context={{}}>
      <Subnav
        tabs={[
          {
            text: "tab1",
            url: "/tab1"
          },
          {
            text: "tab2",
            url: "/tab2"
          }
        ]}
      />
    </StaticRouter>
  ))
);
