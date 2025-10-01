import React from "react";
import { shallow } from "enzyme";
import ListStep from "./ListStep";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { ItemWrapper } from "./styles";
import { Button } from "react-bocombbm-components";
import { InstanceContext } from "../../../InvestmentProducts/Funds/fundsContext";

const fundsList = [
  {
    id: 1,
    name: "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
    cnpj: "29.733.842/0001-34",
    description: null,
    manager: "Bahia Asset Management",
    administrator: null,
    minimumBalance: 20000,
    minimumTransaction: 10000,
    initialInvestment: 20000,
    riskProfile: "Moderate",
    riskProfileLabel: "Moderado",
    qualifiedInvestor: "false",
    returns: {
      twelveMonths: 0,
      year: null,
      thirtySixMonths: null,
      fortyEightMonths: null,
      sinceInception: 2000
    },
    class: "Hedge Funds",
    classLabel: "Multimercado",
    subscription: {
      type: "Corrido",
      conversionDays: 0,
      settlementDays: 0
    },
    redemption: {
      type: "Corrido",
      conversionDays: 30,
      settlementDays: 1
    },
    benchmark: "CDI",
    quotaDate: "2020-12-21",
    administrationFee: null,
    performanceFee: null,
    inceptionDate: null,
    monthActivity: 5
  },
  {
    id: 2,
    name: "KAPITALO KAPPA FEEDER I FIC MULTIMERCADO",
    cnpj: "09.528.698/0001-97",
    description: null,
    manager: "Kapitalo Investimentos",
    administrator: null,
    minimumBalance: 10000,
    minimumTransaction: 10000,
    initialInvestment: 10000,
    riskProfile: "Aggressive",
    riskProfileLabel: "Agressivo",
    qualifiedInvestor: "true",
    returns: {
      twelveMonths: 0,
      year: null,
      thirtySixMonths: null,
      fortyEightMonths: null,
      sinceInception: null
    },
    class: "Hedge Funds",
    classLabel: "Multimercado",
    subscription: {
      type: "Corrido",
      conversionDays: 0,
      settlementDays: 0
    },
    redemption: {
      type: "Corrido",
      conversionDays: 30,
      settlementDays: null
    },
    benchmark: "CDI",
    quotaDate: "2020-12-21",
    administrationFee: null,
    performanceFee: null,
    inceptionDate: null,
    monthActivity: 14
  }
];

const investedFunds = [
  {
    investmentDate: "2020-11-20",
    quantity: 249981.89575,
    fundCnpj: "39.281.341/0001-18",
    assetType: "Funds",
    assetTypeLabel: "Fundos",
    assetClass: "Multimercados",
    name: "A1 HEDGE FEEDER I FIC MULTIMERCADO",
    date: "2021-03-01",
    netBalance: 242922.91,
    grossBalance: 242922.91,
    incomeTaxBalance: 0.0,
    iofBalance: 0.0,
    grossResultBalance: -7058.99,
    portfolioShare: 10.3
  },
  {
    quantity: 6962.113302,
    fundCnpj: "09.528.698/0001-97",
    assetType: "Funds",
    assetTypeLabel: "Fundos",
    assetClass: "Renda Variável",
    name: "BAHIA AM FIC MULTIMERCAD",
    date: "2021-03-01",
    netBalance: 16215.36,
    grossBalance: 16830.43,
    incomeTaxBalance: 615.07,
    iofBalance: 0.0,
    grossResultBalance: 4100.51,
    portfolioShare: 0.69
  },
  {
    investmentDate: "2019-07-10",
    quantity: 33283.916226999994,
    fundCnpj: "23.732.231/0001-95",
    assetType: "Funds",
    assetTypeLabel: "Fundos",
    assetClass: "Renda Variável",
    name: "BAHIA AM LONG BIASED FIC MULTIMERCADO",
    date: "2021-03-01",
    netBalance: 78892.34,
    grossBalance: 80461.57,
    incomeTaxBalance: 1569.23,
    iofBalance: 0.0,
    grossResultBalance: 10461.57,
    portfolioShare: 3.34
  },
  {
    investmentDate: "2018-11-29",
    quantity: 44280.497158,
    fundCnpj: "29.733.842/0001-34",
    assetType: "Funds",
    assetTypeLabel: "Fundos",
    assetClass: "Multimercados",
    name: "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
    date: "2021-03-01",
    netBalance: 50410.95,
    grossBalance: 50618.83,
    incomeTaxBalance: 207.88,
    iofBalance: 0.0,
    grossResultBalance: 5646.27,
    portfolioShare: 2.14
  },
  {
    investmentDate: "2019-07-10",
    quantity: 92014.589914,
    fundCnpj: "29.733.842/0001-34",
    assetType: "Funds",
    assetTypeLabel: "Fundos",
    assetClass: "Multimercados",
    name: "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
    date: "2021-03-01",
    netBalance: 104641.02,
    grossBalance: 105185.61,
    incomeTaxBalance: 544.59,
    iofBalance: 0.0,
    grossResultBalance: 4500.42,
    portfolioShare: 4.44
  }
];

const fundsTotal = [
  {
    assetType: "Funds",
    assetTypeLabel: "Fundos",
    date: "2021-03-01",
    netBalance: 2288502.89,
    grossBalance: 2304254.39,
    incomeTaxBalance: 15751.5,
    iofBalance: 0.0,
    grossResultBalance: 86405.99,
    portfolioShare: 97.02
  }
];

const thisProps = {
  stepForward: jest.fn(),
  currentStep: 5
};

const props = {
  investmentFunds: fundsList,
  funds: investedFunds,
  totalFunds: fundsTotal,
  handleUserInputTransferCurrency: jest.fn()
};

const state = {
  hasAccess: true
};

const context = {
  props,
  state,
  selectFund: jest.fn(),
  goToOriginalFundsList: jest.fn(),
  isUsedStep: jest.fn(),
  usesStep: jest.fn()
};

describe("Position funds listStep component", () => {
  let setState, useStateSpy, useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("Should match snapshpt", () => {
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <ListStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it.skip("Should view funds description", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component
      .find(ItemWrapper)
      .at(0)
      .simulate("click");

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close funds description", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component.find(AnimatedBottonSheet).prop("onClickInBack")();

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close funds description two", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should select one fund", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component
      .find(ItemWrapper)
      .at(1)
      .simulate("click");

    expect(context.selectFund).toHaveBeenCalled();
  });

  it.skip("Should go to original funds list", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");

    expect(context.goToOriginalFundsList).toHaveBeenCalled();
  });
});
