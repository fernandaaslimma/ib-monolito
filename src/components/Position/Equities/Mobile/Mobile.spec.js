import React from "react";
import { shallow } from "enzyme";

import Mobile from "./Mobile";

const equities = [
  {
    name: "name",
    date: "12/12",
    grossBalance: 123,
    portfolioShare: 123
  }
];

const totalEquities = [
  {
    assetType: "Equity",
    assetTypeLabel: "Equity",
    date: "2018-05-04",
    grossBalance: 147547.4,
    netBalance: 147547.4,
    portfolioShare: 4.67
  }
];

describe("Mobile component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<Mobile equities={equities} totalEquities={totalEquities} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Mobile equities={equities} totalEquities={totalEquities} loading />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with isEmpty", () => {
    expect(
      shallow(
        <Mobile equities={equities} totalEquities={totalEquities} isEmpty />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with loading and isEmpty", () => {
    expect(
      shallow(
        <Mobile
          equities={equities}
          totalEquities={totalEquities}
          loading
          isEmpty
        />
      )
    ).toMatchSnapshot();
  });
});
