import React from "react";
import { shallow } from "enzyme";

import Desktop from "./Desktop";

const equities = [
  {
    name: "name",
    date: "12/12",
    grossBalance: 123,
    portfolioShare: 123
  }
];

describe("Mobile component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Desktop equities={equities} />)).toMatchSnapshot();
  });
});
