import React from "react";
import { shallow } from "enzyme";

import Desktop from "./Desktop";

const props = {
  indexes: [],
  consolidatedPosition: [
    {
      name: "",
      netBalance: 1,
      grossBalance: 1,
      portfolioShare: 1
    }
  ],
  consolidatedAssets: [
    {
      name: "",
      netBalance: 1,
      grossBalance: 2,
      portfolioShare: 3
    }
  ],
  transactions: [
    {
      date: "",
      grossValue: 1,
      type: "",
      assetName: ""
    }
  ]
};

it("should match snapshot", () => {
  expect(shallow(<Desktop {...props} />)).toMatchSnapshot();
});
