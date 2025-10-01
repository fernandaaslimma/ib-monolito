import { shallow } from "enzyme";
import React from "react";
import ConsolidatedInfoChart from "./ConsolidatedInfoChart";
import PositionsOverview from "./PositionsOverview";
import { Icon } from "react-bocombbm-components";

const props = {
  pendingTransactions: [
    {
      id: 2692,
      type: "subscription",
      typeLabel: "Aplicação",
      idempotencyKey: "3E1A83FA-9441-44D8-AD13-4C007E540C71",
      transactionValue: 20000.0,
      transactionDate: "2021-03-11",
      product: {
        id: 5,
        name: "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
        riskProfile: "Conservative",
        riskProfileLabel: "Conservador",
        classType: "Fixed Income",
        classTypeLabel: "Renda Fixa"
      }
    }
  ],
  consolidatedPosition: [
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
      portfolioShare: 26.75
    },
    {
      name: "Renda Fixa",
      assetType: "FixedIncome",
      assetTypeLabel: "Renda Fixa",
      date: "2018-05-04",
      netBalance: 1252738.63,
      grossBalance: 1252739.34,
      incomeTaxBalance: 0.71,
      iofBalance: 0,
      grossResultBalance: 134498.08,
      portfolioShare: 53.07
    },
    {
      name: "Fundos",
      assetType: "Funds",
      assetTypeLabel: "Fundos",
      date: "2018-05-04",
      netBalance: 476773.52,
      grossBalance: 483106.57,
      incomeTaxBalance: 6333.05,
      iofBalance: 0,
      grossResultBalance: 38311.11,
      portfolioShare: 20.2
    }
  ],
  consolidatedAssets: [
    {
      name: "Conta-corrente",
      assetClass: "Conta-corrente",
      netBalance: 63109.01,
      grossBalance: 63109.01,
      grossResultBalance: 63109.01,
      portfolioShare: 3.53
    },
    {
      name: "Renda Fixa",
      assetClass: "Renda Fixa",
      netBalance: 1410094.65,
      grossBalance: 1410791.08,
      incomeTaxBalance: 696.43,
      iofBalance: 0,
      grossResultBalance: 147754.36,
      portfolioShare: 78.67
    },
    {
      name: "Multimercados",
      assetClass: "Multimercados",
      netBalance: 319417.5,
      grossBalance: 325054.83,
      incomeTaxBalance: 5637.33,
      iofBalance: 0,
      grossResultBalance: 25054.83,
      portfolioShare: 17.82
    }
  ],
  loading: false
};
const propsLoading = { ...props, loading: true };
const propsEmptyAssets = {
  ...props,
  consolidatedPosition: [],
  consolidatedAssets: []
};

describe("ConsolidatedInfoChart", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("should match snapshot loaded", () => {
    expect(shallow(<PositionsOverview {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with empty assets", () => {
    expect(
      shallow(<PositionsOverview {...propsEmptyAssets} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot loading", () => {
    expect(shallow(<PositionsOverview {...propsLoading} />)).toMatchSnapshot();
  });

  it("should change hide value in the first chart", () => {
    const component = shallow(<PositionsOverview {...props} />);
    component
      .find(ConsolidatedInfoChart)
      .at(0)
      .prop("callback")();
  });

  it("should change hide value in the second chart", () => {
    const component = shallow(<PositionsOverview {...props} />);
    component
      .find(ConsolidatedInfoChart)
      .at(1)
      .prop("callback")();
  });

  it("should click arrow to change chart", () => {
    const component = shallow(<PositionsOverview {...props} />);
    component
      .find(Icon)
      .at(0)
      .simulate("click");
  });
});
