import React from "react";
import { shallow } from "enzyme";
import FormStep from "./FormStep";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { Button } from "react-bocombbm-components";
import AccountSelector from "../../../common/AccountSelector";
const API = [
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
    cnpj: "34.792.778/0001-00",
    description: null,
    manager: "Kapitalo Investimentos",
    administrator: null,
    minimumBalance: 10000,
    minimumTransaction: 10000,
    initialInvestment: 10000,
    riskProfile: "Aggressive",
    riskProfileLabel: "Agressivo",
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

const API2 = [
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
  }
];

const thisProps = {
  currentStep: 3,
  stepForward: jest.fn(),
  stepBack: jest.fn()
};

const props = {
  investmentFunds: API,
  funds: API2,
  accounts: [
    {
      verifyingDigit: "2",
      accountNumber: "303894",
      bankISPB: "15114366",
      bankCode: "107"
    },
    {
      verifyingDigit: "8",
      accountNumber: "305236",
      bankISPB: "15114366",
      bankCode: "107"
    },
    {
      verifyingDigit: "0",
      accountNumber: "305445",
      bankISPB: "15114366",
      bankCode: "107"
    }
  ],
  handleUserInputTransferCurrency: jest.fn()
};

const context = {
  props,
  state: {
    investmentValue: 10000,
    selectedAccount: { accountNumber: "123456", availableBalance: 20000 },
    selectedFund: API[0]
  },
  selectAccount: jest.fn(),
  checkFundIsInMoviment: jest.fn()
};

describe("ListStep component", () => {
  let setState, useStateSpy, useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    React.useContext = jest.fn(() => context);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it.skip("Should match snapshpt", () => {
    const component = shallow(<FormStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should hide account selection when it´s visible", () => {
    const component = shallow(<FormStep {...thisProps} />);
    component.find(AnimatedBottonSheet).prop("onClickInBack")();

    expect(setState).toHaveBeenCalledWith(false);
  });

  it.skip("Should change account", () => {
    const component = shallow(<FormStep {...thisProps} />);
    component.find(AccountSelector).prop("onChange")({ target: "bla" });

    expect(context.selectAccount).toHaveBeenCalledWith({ target: "bla" });
  });

  it.skip("Should go to next screen", () => {
    const component = shallow(<FormStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(thisProps.stepForward).toHaveBeenCalled();
  });
});
