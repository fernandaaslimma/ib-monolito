import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-bocombbm-components";
import { act } from "react-test-renderer";
import deepClone from "../../../../utils/deepClone";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import Radio from "../../../common/Radio";
import FormStep from "./FormStep";
jest.mock("../../../../utils/redirect");

const redirectMock = require("../../../../utils/redirect").redirect;
const thisProps = {
  currentStep: 3,
  stepForward: jest.fn(),
  stepBack: jest.fn(),
  goToStep: jest.fn()
};

const props = {
  limitLca: {
    lcaRedemptionLimit: 300000
  },
  totalLca: "35,000.00",
  availableDateRanges: [
    {
      date: "2019-05-27",
      service: "FixedIncome",
      periods: [
        {
          startTime: 1558930870000,
          endTime: 1558992070000
        }
      ]
    }
  ],
  priorities: [
    {
      id: 1,
      name: "Priority by Earlier Maturity Date"
    },
    {
      id: 2,
      name: "Yield"
    }
  ],
  accounts: [
    {
      verifyingDigit: "2",
      number: "303894",
      bankISPB: "15114366",
      bankCode: "107"
    },
    {
      verifyingDigit: "8",
      number: "305236",
      bankISPB: "15114366",
      bankCode: "107"
    },
    {
      verifyingDigit: "0",
      number: "305445",
      bankISPB: "15114366",
      bankCode: "107"
    }
  ],
  handleUserInputTransferCurrency: jest.fn()
};

const context = {
  props,
  state: {
    filledValue: "15,000.00",
    loading: false,
    openPriorityBottomSheet: false,
    currentPriority: {
      id: 1,
      name: "Priority by Earlier Maturity Date"
    }
  },
  selectAccount: jest.fn(),
  checkFundIsInMoviment: jest.fn(),
  changeAmmount: jest.fn(),
  changeState: jest.fn(),
  getMaxAndMinValues: jest.fn(),
  mountMessageWithAvailabilityTime: jest.fn(),
  checkAvailabilityHour: jest.fn(),
  getWithdrawalDetails: jest.fn()
};

describe("FormStep", () => {
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
  it("Should match snapshpt", () => {
    const wrapper = shallow(<FormStep {...thisProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should match snapshpt with loading", () => {
    const newContext = deepClone(context);
    newContext.state.loading = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<FormStep {...thisProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("redirect to positions fixed income", () => {
    const wrapper = shallow(<FormStep {...thisProps} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(redirectMock).toHaveBeenCalledWith(
      "/investments/positions/fixed-income"
    );
  });

  it("checks checkIfIsFullWithdrawal", () => {
    const newContext = deepClone(context);
    newContext.state.filledValue = "35,000.00";
    React.useContext = jest.fn(() => newContext);

    const wrapper = shallow(<FormStep {...thisProps} />);
    act(() => {
      wrapper
        .find(Button)
        .at(1)
        .simulate("click");
    });

    expect(context.changeState).toHaveBeenCalledWith("valueToBeRescued", 35000);
    expect(context.getWithdrawalDetails).toHaveBeenCalledWith(3);
  });

  it("checks checkIfIsFullWithdrawal", () => {
    const wrapper = shallow(<FormStep {...thisProps} />);
    act(() => {
      wrapper
        .find(Button)
        .at(1)
        .simulate("click");
    });

    expect(context.changeState).toHaveBeenCalledWith(
      "openPriorityBottomSheet",
      true
    );
  });

  it("opens modal and choose priority", () => {
    const newContext = deepClone(context);
    newContext.state.openPriorityBottomSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<FormStep {...thisProps} />);

    wrapper
      .find(AnimatedBottonSheet)
      .find(Button)
      .at(0)
      .simulate("click");

    expect(context.getMaxAndMinValues).toHaveBeenCalledWith(15000, {
      id: 1,
      name: "Priority by Earlier Maturity Date"
    });
    expect(context.changeState).toHaveBeenCalledWith(
      "openPriorityBottomSheet",
      true
    );
  });

  it("should change priority", () => {
    const newContext = deepClone(context);
    newContext.state.openPriorityBottomSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<FormStep {...thisProps} />);

    wrapper
      .find(AnimatedBottonSheet)
      .at(0)
      .prop("onClickInBack")();

    expect(context.changeState).toHaveBeenCalledWith(
      "openPriorityBottomSheet",
      false
    );
  });

  it("should change priority", () => {
    const newContext = deepClone(context);
    newContext.state.openPriorityBottomSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<FormStep {...thisProps} />);

    wrapper
      .find(AnimatedBottonSheet)
      .find(Radio)
      .at(0)
      .prop("onChange")({ target: { value: "Yield" } });
  });
});
