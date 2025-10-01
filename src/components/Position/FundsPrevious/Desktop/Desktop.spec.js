import React from "react";
import { shallow } from "enzyme";

import Desktop from "./Desktop";

const funds = [
  {
    name: "name",
    date: "12/12",
    investmentDate: "12/12",
    iofBalance: 0,
    grossResultBalance: 123,
    grossBalance: 123,
    incomeTaxBalance: 1,
    portfolioShare: 123
  }
];

const totalFunds = [
  {
    assetType: "Funds",
    assetTypeLabel: "Funds",
    date: "2018-05-04",
    grossBalance: 2135703.08,
    grossResultBalance: 457501.11,
    incomeTaxBalance: 32033.33,
    iofBalance: 0,
    netBalance: 2103669.75,
    portfolioShare: 66.52
  }
];

describe("Mobile component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<Desktop funds={funds} totalFunds={totalFunds} />)
    ).toMatchSnapshot();
  });
});
