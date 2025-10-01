import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import NameItem from "./NameItem";

const props = {
  data: {
    id: "id",
    name: "name",
    recipients: [
      {
        email: "email@email",
        name: "Name 1",
        status: "Pending",
        type: "type"
      },
      {
        email: "email@email",
        name: "Name 2",
        status: "Pending",
        type: "type"
      },
      {
        email: "email@email",
        name: "Name 3",
        status: "Pending",
        type: "type"
      }
    ]
  },
  signOrder: 1,
  status: "Pending"
};

storiesOf("Exchange/NameItem", module).add(
  "with default data",
  withInfo()(() => <NameItem {...props} />)
);
