import React from "react";
import { shallow } from "enzyme";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import DetailsStep from "./DetailsStep";
import DetailsCard from "../../DetailsCard";
import { Button } from "react-bocombbm-components";
jest.mock("../../../../utils/redirect");
const hardRedirectMock = require("../../../../utils/redirect").redirect;

const API = {
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
  allowedSubscriptions: false,
  qualifiedInvestor: true,
  notAllowedSubscriptionsMessage:
    "Fundo só permite aplicações por investidor qualificado.",
  returns: {
    twelveMonths: null,
    year: null,
    thirtySixMonths: null,
    fortyEightMonths: null
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
  monthActivity: 12
};
const thisProps = {
  stepForward: jest.fn(),
  currentStep: 2,
  stepBack: jest.fn()
};

const props = {
  handleUserInputTransferCurrency: jest.fn(),
  availableDateRanges: [
    { maxEndTime: 1610060400000, minStartTime: 1610024400000 }
  ],
  authFactors: [
    {
      id: "e80857d6-8f81-408d-84b8-90f49b302da7",
      defaultAuth: true,
      authUri: "pj_franciscogoncalez@bocombbm.com.br",
      type: "mail",
      actions: ["approveinvestment"],
      activated: true,
      plataformIdentifier: null,
      approved: true,
      isSelf: true
    },
    {
      id: "8c82c0e1-12c4-4ba2-b9b0-b3c012651234",
      defaultAuth: false,
      authUri: "mobile",
      type: "mobile",
      actions: ["wiretransfer", "passwordreset", "approvesuitability"],
      activated: true,
      plataformIdentifier: null,
      approved: true,
      isSelf: false
    }
  ]
};

const props2 = {
  handleUserInputTransferCurrency: jest.fn(),
  availableDateRanges: [
    { maxEndTime: 1610060400000, minStartTime: 1610024400000 }
  ],
  authFactors: [
    {
      actions: []
    },
    {
      actions: ["wiretransfer", "passwordreset", "approvesuitability"]
    }
  ]
};

const colors = {
  moderate: "#E3F1D4",
  aggressive: "#E2DCF5",
  conservative: "#DAE6F2"
};

const context = {
  props,
  state: {
    selectedFund: API,
    typeOfFundPendencie: "Ficha Cadastral",
    route: "/personRegistration",
    canInvest: true,
    monthActivity: 11
  },
  colors,
  selectFund: jest.fn(),
  verifyPendencies: jest.fn(),
  resetInvestability: jest.fn(),
  setChosenOperation: jest.fn()
};

const context2 = {
  props,
  state: { selectedFund: { ...API, monthActivity: 11 } },
  colors,
  selectFund: jest.fn(),
  resetInvestability: jest.fn(),
  setChosenOperation: jest.fn()
};

const context3 = {
  props,
  state: { selectedFund: null },
  colors,
  selectFund: jest.fn(),
  resetInvestability: jest.fn(),
  setChosenOperation: jest.fn()
};

const context4 = {
  props: props2,
  state: {
    selectedFund: API,
    typeOfFundPendencie: "Questionário de Suitability",
    route: "suitability",
    canInvest: true
  },
  colors,
  selectFund: jest.fn(),
  verifyPendencies: jest.fn(),
  resetInvestability: jest.fn(),
  setChosenOperation: jest.fn()
};

describe("DetailsStep component", () => {
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

  it.skip("Should match snapshot", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should match snapshot with monthActivity less than 12", () => {
    React.useContext = jest.fn(() => context2);
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should match snapshot without selectedFund", () => {
    React.useContext = jest.fn(() => context3);
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should match snapshot without authFactor to invest", () => {
    React.useContext = jest.fn(() => context4);
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should open information", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(DetailsCard)
      .at(0)
      .prop("clickInfo")();

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close information", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(AnimatedBottonSheet)
      .at(0)
      .prop("onClickInBack")();

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should open pendencie information", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close pendencie information", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(AnimatedBottonSheet)
      .at(1)
      .prop("onClickInBack")();

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close pendencie information", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(2)
      .simulate("click");

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should redirect", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(5)
      .simulate("click");

    expect(hardRedirectMock).toHaveBeenCalledWith(context.state.route);
  });

  it.skip("Should close IorIof information", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(AnimatedBottonSheet)
      .at(3)
      .prop("onClickInBack")();

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close IorIof information", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(6)
      .simulate("click");

    expect(setState).toHaveBeenCalled();
  });
});
