import React from "react";
import { shallow } from "enzyme";

import AssetsChart, { parseData } from "./AssetsChart";
import { ONE_HUNDRED } from "../../../../utils/constants";

const consolidatedAssets = [
  {
    name: "Fixed Income",
    netBalance: 50,
    grossBalance: 50,
    portfolioShare: ONE_HUNDRED
  }
];

describe("AssetsChart mobile component", () => {
  it("has an initial state", () => {
    const wrapper = shallow(
      <AssetsChart
        assets={consolidatedAssets}
        icon="Wallet"
        title="Title"
        dataTest="Test"
      />
    );
    expect(wrapper.state()).toEqual({ value: null });
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <AssetsChart
          consolidatedAssets={consolidatedAssets}
          icon="Wallet"
          title="Title"
          dataTest="Test"
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without assets", () => {
    expect(
      shallow(<AssetsChart icon="Wallet" title="Title" dataTest="Test" />)
    ).toMatchSnapshot();
  });
});

describe("parseData", () => {
  it("should parse the data", () => {
    const assets = [
      {
        netBalance: 123,
        portfolioShare: 15
      },
      {
        netBalance: 2,
        portfolioShare: 50
      }
    ];
    expect(parseData(assets)).toEqual([
      { angle: 123, color: "#5b4a8a", label: "15 %" },
      { angle: 2, color: "#af5761", label: "50 %" }
    ]);
  });
});
