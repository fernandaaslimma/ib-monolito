import React from "react";
import { shallow } from "enzyme";

import DonutChart, { parseData } from "./DonutChart";

const consolidatedAssets = [
  {
    name: "Fixed Income",
    netBalance: 50,
    grossBalance: 50,
    portfolioShare: 80
  },
  {
    name: "Equities",
    netBalance: 50,
    grossBalance: 50,
    portfolioShare: 20
  },
  {
    name: "Cash Account",
    netBalance: 50,
    grossBalance: 50
  }
];

describe("AssetsChart mobile component", () => {
  it("should match snapshot loaded", () => {
    expect(
      shallow(
        <DonutChart
          assets={consolidatedAssets}
          title="Title"
          dataTest="Test"
          loading={false}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot loading", () => {
    expect(
      shallow(
        <DonutChart
          assets={consolidatedAssets}
          title="Title"
          dataTest="Test"
          loading={true}
        />
      )
    ).toMatchSnapshot();
  });
});

describe("parseData", () => {
  it("should parse the data", () => {
    const assets = [
      {
        grossBalance: 123,
        portfolioShare: 15
      },
      {
        grossBalance: 2,
        portfolioShare: 50
      }
    ];
    expect(parseData(assets)).toEqual([
      { angle: 123, color: "#5b4a8a", label: "15 %", portfolioShare: 15 },
      { angle: 2, color: "#af5761", label: "50 %", portfolioShare: 50 }
    ]);
  });
});
 
