import React from "react";
import { shallow } from "enzyme";
import ListStep from "./ListStep";
import { ItemWrapper } from "../../FixedIncome/ListStep/styles";
import { Button } from "react-bocombbm-components";
import { redirect } from "../../../../utils/redirect";
import { InstanceContext } from "../fixedIncomeContext";

jest.mock("../../../../utils/redirect", () => ({
  redirect: jest.fn()
}));

const thisProps = {
  stepForward: jest.fn(),
  currentStep: 1
};

let context = {
  changeState: jest.fn(),
  selectProduct: jest.fn(),
  state: { filledValue: "0,00" },
  props: {
    investmentFI: [
      {
        id: 1,
        issuer: "Banco BOCOM BBM",
        issuerCnpj: "15.114.366/0002-40",
        riskProfile: "Conservative",
        riskProfileLabel: "Conservative",
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
        incomeTaxLabel: "Isento de IR"
      },
      {
        id: 2,
        issuer: "Banco BOCOM BBM",
        issuerCnpj: "15.114.366/0002-40",
        riskProfile: "Conservative",
        riskProfileLabel: "Conservative",
        minimumSubscription: 1000,
        maximumSubscription: 500000,
        product: "LCA",
        productLabel: "LCA",
        yieldLabel: "105% DI",
        yieldIndex: "DI",
        yieldPercentual: 105,
        fixedRate: 0,
        liquidityDate: "2023-12-01",
        maturityDate: "2023-12-01",
        monthsToMaturity: 896,
        liquidityLabel: "No vencimento",
        IncomeTaxLabel: "Isento de IR"
      }
    ]
  },
  colors: {
    moderate: "#E3F1D4",
    aggressive: "#E2DCF5",
    conservative: "#DAE6F2"
  }
};

describe("ListStep component", () => {
  it("Should match snapshpt", () => {
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <ListStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });
  it("Should match snapshot with empty products", () => {
    context.props.investmentFI = [];
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <ListStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });
  it.skip("Should call changeState when the value is not initial in list step", () => {
    context.state.filledValue = "0,10";
    shallow(
      <InstanceContext.Provider value={context}>
        <ListStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(context.changeState).toHaveBeenCalledWith("filledValue", "0,00");
  });
  it.skip("Should redirect to home after empty screen", () => {
    context.props.investmentFI = [];
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <ListStep {...thisProps} />
      </InstanceContext.Provider>
    );
    component.find(Button).simulate("click");
    expect(redirect).toHaveBeenCalledWith("/home");
  });
  it.skip("Should select product", () => {
    context.props.investmentFI = [
      {
        id: 1,
        issuer: "Banco BOCOM BBM",
        issuerCnpj: "15.114.366/0002-40",
        riskProfile: "Conservative",
        riskProfileLabel: "Conservative",
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
        incomeTaxLabel: "Isento de IR"
      }
    ];
    React.useContext = jest.fn(() => context);

    const component = shallow(<ListStep {...thisProps} />);
    component.find(ItemWrapper).simulate("click");

    expect(context.selectProduct).toHaveBeenCalledWith(
      {
        incomeTaxLabel: "Isento de IR",
        fixedRate: 0,
        id: 1,
        issuer: "Banco BOCOM BBM",
        issuerCnpj: "15.114.366/0002-40",
        liquidityDate: "2021-12-20",
        liquidityLabel: "Diária após 90 dias",
        maturityDate: "2023-12-01",
        maximumSubscription: 500000,
        minimumSubscription: 1000,
        monthsToMaturity: 12,
        product: "LCA",
        productLabel: "LCA",
        riskProfile: "Conservative",
        riskProfileLabel: "Conservative",
        yieldIndex: "DI",
        yieldLabel: "102% DI",
        yieldPercentual: 102
      },
      thisProps.stepForward
    );
  });
});
