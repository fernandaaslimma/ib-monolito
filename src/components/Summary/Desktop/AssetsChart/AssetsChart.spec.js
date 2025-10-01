import React from "react";
import { shallow } from "enzyme";

import AssetsChart, { parseData } from "./AssetsChart";

import { Hint } from "react-vis";

const consolidatedAssets = [
  {
    name: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

describe("AssetsChart desktop component", () => {
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
          assets={consolidatedAssets}
          icon="Wallet"
          title="Title"
          dataTest="Test"
        />
      )
    ).toMatchSnapshot();
  });

  it("should have a Hint tag when state has value", () => {
    const wrapper = shallow(
      <AssetsChart
        assets={consolidatedAssets}
        icon="Wallet"
        title="Title"
        dataTest="Test"
      />
    );

    expect(wrapper.find(Hint).length).toBe(0);

    wrapper.setState({ value: 123 });

    expect(wrapper.find(Hint).length).toBe(1);
  });

  it("should match snapshot without assets", () => {
    expect(
      shallow(<AssetsChart icon="Wallet" title="Title" dataTest="Test" />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with assets", () => {
    const props = {
      assets: [
        {
          netBalance: 123,
          portfolioShare: 15
        },
        {
          netBalance: 2,
          portfolioShare: 50
        }
      ]
    };

    const wrapper = shallow(
      <AssetsChart icon="Wallet" title="Title" dataTest="Test" {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should display Hint when there is a value on state", () => {
    const props = {
      assets: [
        {
          netBalance: 123,
          portfolioShare: 15
        },
        {
          netBalance: 2,
          portfolioShare: 50
        }
      ]
    };

    const wrapper = shallow(
      <AssetsChart icon="Wallet" title="Title" dataTest="Test" {...props} />
    );
    wrapper.setState({ value: "abc" });
    wrapper.update();

    expect(wrapper.find("Hint").length).toBe(1);
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
