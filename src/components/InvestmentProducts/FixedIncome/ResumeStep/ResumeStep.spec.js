import React from "react";
import { shallow } from "enzyme";
import ResumeStep from "./ResumeStep";
import { Button } from "react-bocombbm-components";

const thisProps = {
  currentStep: 5
};

const context = {
  props: { serverTime: 1625220000000 },
  state: {
    selectedProduct: {
      id: 1,
      issuer: "Banco BOCOM BBM",
      issuerCnpj: "15.114.366/0002-40",
      riskProfile: "Conservative",
      riskProfileLabel: "Conservador",
      minimumSubscription: 1000,
      maximumSubscription: 500000,
      product: "LCA",
      productLabel: "LCA",
      yieldLabel: "102% DI",
      yieldIndex: "DI",
      yieldPercentual: 102,
      fixedRate: 0,
      liquidityDate: "2021-12-20",
      maturityDate: "2023-12-01",
      monthsToMaturity: 12,
      liquidityLabel: "Diária após 90 dias",
      incomeTaxLabel: "Isento de IR",
      monthsToMaturityLabel: "3 meses"
    },
    filledValue: 10000
  }
};

describe("ResumeStep component", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });
  it("Should match snapshot", () => {
    const component = shallow(<ResumeStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });
  it("Should trigger Button", () => {
    const component = shallow(<ResumeStep {...thisProps} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
  });
});
