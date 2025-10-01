import React from "react";
import { shallow } from "enzyme";
import deepClone from "../../../../utils/deepClone";
import { Button, Icon } from "react-bocombbm-components";
import ConfirmationStep from "./ConfirmationStep";
import { act } from "react-test-renderer";

const thisProps = {
  stepForward: jest.fn(),
  stepBack: jest.fn(),
  currentStep: 2
};

const props = {
  favoredData: {
    bank: "bla",
    agency: "001",
    account: "1111",
    verifyDigit: "0"
  },
  accounts: [],
  transferData: { value: "5000,00", date: "" },
  availableDateRanges: [
    { maxEndTime: 1605124811000, minStartTime: 1605103211 }
  ],
  handleUserInputTransferCurrency: jest.fn()
};

const state = {
  selectedAccount: {
    name: "Yuari",
    document: "11111111111",
    availableBalance: 1000.0
  },
  isScheduled: false,
  commonValidToMoveOn: { date: true, amount: true }
};

const context = {
  props,
  state,
  setStateValue: jest.fn(),
  tokenModal: jest.fn(),
  changeAmmount: jest.fn()
};

const newContext = deepClone(context);

newContext.props.favoredData = undefined;
newContext.props.transferData = {};
newContext.state.isScheduled = true;

describe("ConfirmationStep component", () => {
  let setState, useStateSpy;
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    React.useContext = jest.fn(() => context);
  });

  it.skip("Should match snapshpt", () => {
    const component = shallow(
      <ConfirmationStep {...thisProps} currentStep={2} />
    );

    expect(component).toMatchSnapshot();
  });

  it.skip("Should match snapshot without info", () => {
    React.useContext = jest.fn(() => newContext);

    const component = shallow(<ConfirmationStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("should click on new tranfer button", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(context.tokenModal).toHaveBeenCalled();
  });

  it.skip("should click on back button", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(thisProps.stepBack).toHaveBeenCalled();
  });

  it.skip("should change Icon state", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    act(() => {
      component.find(Icon).simulate("click");
    });

    expect(setState).toHaveBeenCalledWith(true);
  });
});
