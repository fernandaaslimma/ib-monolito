import React from "react";
import { render } from "enzyme";

import DetailsPositionCharts from "./DetailsPositionCharts";

jest.mock("../../../../utils/redirect");

const props = {
  assets: [
    {
      name: "Conta Corrente",
      assetType: "CashAccount",
      assetTypeLabel: "Conta Corrente",
      date: "2018-05-04",
      netBalance: 631409.01,
      grossBalance: 631409.01,
      incomeTaxBalance: 0.71,
      iofBalance: 0,
      grossResultBalance: 631409.01,
      portfolioShare: 26.75,
      route: "mock"
    },
    {
      name: "Conta Corrente",
      assetType: "CashAccount",
      assetTypeLabel: "Conta Corrente",
      date: "2018-05-04",
      netBalance: 631409.01,
      grossBalance: 631409.01,
      incomeTaxBalance: 0.71,
      iofBalance: 0,
      grossResultBalance: 631409.01,
      route: "mock"
    }
  ],
  colorForAsset: 0,
  loading: false,
  hideValues: false,
  checkStateAsset: jest.fn()
};

describe("DetailsPositionCharts component", () => {
  const newProps = { ...props, loading: true };
  it("should match snapshot with name", () => {
    expect(render(<DetailsPositionCharts {...newProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with name", () => {
    expect(render(<DetailsPositionCharts {...props} />)).toMatchSnapshot();
  });
});
