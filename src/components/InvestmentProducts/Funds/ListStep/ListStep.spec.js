import React from "react";
import { shallow } from "enzyme";
import ListStep from "./ListStep";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { ItemWrapper, ClickbleTextArea } from "./styles";
import { configure, fireEvent, render } from "@testing-library/react";
import { InstanceContext } from "../fundsContext";

configure({ testIdAttribute: "data-test" });

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
    cnpj: "34.792.778/0001-00",
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

const thisProps = {
  stepForward: jest.fn()
};

const props = {
  investmentFunds: API,
  handleUserInputTransferCurrency: jest.fn()
};

const context = {
  props,
  selectFund: jest.fn()
};

describe("ListStep component", () => {
  let setState, useStateSpy;
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    React.useContext = jest.fn(() => context);
  });

  it.skip("Should match snapshpt", () => {
    const component = shallow(<ListStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should view funds description", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component.find(ClickbleTextArea).simulate("click");

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close funds description", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component.find(AnimatedBottonSheet).prop("onClickInBack")();

    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should select one fund", () => {
    const component = shallow(<ListStep {...thisProps} />);
    component
      .find(ItemWrapper)
      .at(0)
      .simulate("click");

    expect(context.selectFund).toHaveBeenCalled();
  });

  it("Should render MenuClose Icon and close AnimatedBottomSheet", () => {
    const { queryByTestId, getByTestId } = render(
      <InstanceContext.Provider value={context}>
        <ListStep {...thisProps} />
      </InstanceContext.Provider>
    );
    const knowMore = getByTestId("knowMoreButton");
    expect(knowMore).toBeTruthy();
    
    expect(queryByTestId("Test-onClickInBack")).toBeFalsy();
    fireEvent.click(knowMore)
    
    const iconClose = getByTestId("Test-onClickInBack");
    expect(iconClose).toBeTruthy();
    
    fireEvent.click(iconClose)
    expect(queryByTestId("Test-onClickInBack")).toBeFalsy();
  });
});
