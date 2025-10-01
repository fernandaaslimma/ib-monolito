import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import SignAccount from "./SignAccount";

const props = {
  groups: [
    {
      id: "321312",
      name: "Name",
      recipients: [
        {
          email: "email@email.com",
          embedded: true,
          name: "Josemildo 1 ",
          status: "Complete",
          type: "String"
        }
      ],
      signOrder: 2,
      status: "Pending"
    },
    {
      id: "672347",
      name: "Name 2",
      recipients: [
        {
          email: "myemail@email.com",
          embedded: true,
          name: "Mariazinha",
          status: "Pending",
          type: "String"
        }
      ],
      signOrder: 2,
      status: "Complete"
    }
  ],
  contractId: "2312"
};
storiesOf("Exchange/SignAccount", module).add(
  "with 2 groups and no Pending or sign Groups",
  withInfo()(() => <SignAccount {...props} />)
);
