import { mount, shallow } from "enzyme";
import React from "react";
import { Button } from "react-bocombbm-components";
import { act } from "react-test-renderer";
import { INDIVIDUAL } from "../../../../utils/constants";
import deepClone from "../../../../utils/deepClone";
import store from "../../../../utils/store";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import Radio from "../../../common/Radio";
import RadioButton from "../../../common/RadioButton";
import { BorderedWrapper } from "../styles";
import PriorityStep from "./PriorityStep";

jest.mock("../../../../utils/store", () => ({
  getState: jest.fn()
}));

const thisProps = {
  currentStep: 2,
  stepForward: jest.fn(),
  stepBack: jest.fn(),
  goToStep: jest.fn()
};

const props = {
  availableDateRanges: [{ startTime: 1629446684000, endTime: 1629500684000 }],
  totalMax: {
    totalMaxValue: 30700,
    maxPositions: [
      { positionId: "541758", quantity: 3 },
      { positionId: "541761", quantity: 7 },
      { positionId: "541764", quantity: 19 }
    ]
  },
  totalMin: {
    totalMinValue: 29900,
    minPositions: [
      { positionId: "541758", quantity: 3 },
      { positionId: "541761", quantity: 7 },
      { positionId: "541764", quantity: 18 }
    ]
  },
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
      bankCode: "107",
      accountNumber: "12345678"
    },
    {
      verifyingDigit: "8",
      number: "305236",
      bankISPB: "15114366",
      bankCode: "107",
      accountNumber: "12345679"
    },
    {
      verifyingDigit: "0",
      number: "305445",
      bankISPB: "15114366",
      bankCode: "107",
      accountNumber: "12345674"
    }
  ]
};

const context = {
  props,
  state: {
    filledValue: "30,000.00",
    currentAccount: props.accounts[0],
    loadingLcaDetails: false,
    openPriorityBottomSheet: false,
    previous: 1,
    openAccountSelectionBottomSheet: false,
    openSecondPriorityBottomSheet: false,
    loadingPriorities: false,
    currentPriority: props.priorities[0]
  },
  changeAccount: jest.fn(),
  getMaxAndMinValues: jest.fn(),
  checkAvailabilityHour: jest.fn(),
  mountMessageWithAvailabilityTime: jest.fn(),
  getWithdrawalDetails: jest.fn(),
  changeState: jest.fn()
};

describe("PriorityStep", () => {
  let setState, useStateSpy, useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    React.useContext = jest.fn(() => context);
    store.getState.mockImplementation(() => ({
      userInfo: {
        tenants: [INDIVIDUAL]
      }
    }));
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it("Should match snapshpt", () => {
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should match snapshpt with loading lca details", () => {
    const newContext = deepClone(context);
    newContext.state.loadingLcaDetails = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should match snapshpt with loading priorities", () => {
    const newContext = deepClone(context);
    newContext.state.loadingPriorities = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should go back to the previous page", () => {
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");

    expect(thisProps.goToStep).toHaveBeenCalledWith(1);
  });

  it("should open acocunt modal", () => {
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");

    expect(context.changeState).toHaveBeenCalledWith(
      "openAccountSelectionBottomSheet",
      true
    );
  });

  it("should select an aproximate value", () => {
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    act(() => {
      wrapper
        .find(RadioButton)
        .at(0)
        .simulate("click");
    });

    expect(useStateSpy).toHaveBeenCalledWith(0);
  });

  it("should open modal to change priority", () => {
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    act(() => {
      wrapper
        .find(BorderedWrapper)
        .at(0)
        .simulate("click");
    });

    expect(context.changeState).toHaveBeenCalledWith(
      "openSecondPriorityBottomSheet",
      true
    );
  });

  it("context of priority modal open / close modal", () => {
    const newContext = deepClone(context);
    newContext.state.openSecondPriorityBottomSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    act(() => {
      wrapper.find(AnimatedBottonSheet).prop("onClickInBack")();
    });

    expect(context.changeState).toHaveBeenCalledWith(
      "openSecondPriorityBottomSheet",
      false
    );
  });

  it("context of priority modal open / change priorit", () => {
    const newContext = deepClone(context);
    newContext.state.openSecondPriorityBottomSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    act(() => {
      wrapper
        .find(Radio)
        .at(1)
        .prop("onChange")({ target: { value: "Yield" } });
      wrapper
        .find(Button)
        .at(0)
        .simulate("click");
    });
    expect(context.getMaxAndMinValues).toHaveBeenCalledWith(30000, {
      id: 1,
      name: "Priority by Earlier Maturity Date"
    });
    expect(context.changeState).toHaveBeenCalledWith(
      "openSecondPriorityBottomSheet",
      false
    );
    expect(context.changeState).toHaveBeenCalledWith("currentPriority", {
      id: 1,
      name: "Priority by Earlier Maturity Date"
    });
  });

  it("context of account modal open / close modal", () => {
    const newContext = deepClone(context);
    newContext.state.openAccountSelectionBottomSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<PriorityStep {...thisProps} />);
    act(() => {
      wrapper.find(AnimatedBottonSheet).prop("onClickInBack")();
    });

    expect(context.changeState).toHaveBeenCalledWith(
      "openAccountSelectionBottomSheet",
      false
    );
  });

  it("context of account modal open / change account", () => {
    const wrapper1 = mount(<PriorityStep {...thisProps} />);

    act(() => {
      wrapper1
        .find(RadioButton)
        .at(1)
        .prop("onChange")();
      wrapper1
        .find(RadioButton)
        .at(0)
        .prop("onChange")();
    });
    const newContext = deepClone(context);
    newContext.state.openAccountSelectionBottomSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = mount(<PriorityStep {...thisProps} />);
    act(() => {
      wrapper
        .find(Radio)
        .at(2)
        .prop("onChange")({ target: { value: props.accounts[2] } });
    });
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(context.changeAccount).toHaveBeenCalledWith("12345678");
    expect(context.getWithdrawalDetails).toHaveBeenCalledWith(2, [
      { positionId: "541758", quantity: 3 },
      { positionId: "541761", quantity: 7 },
      { positionId: "541764", quantity: 18 }
    ]);
    expect(context.changeState).toHaveBeenCalledWith(
      "openSecondPriorityBottomSheet",
      false
    );
    expect(context.changeState).toHaveBeenCalledWith("valueToBeRescued", 0);
    expect(context.changeState).toHaveBeenCalledWith("previous", 2);
    expect(thisProps.stepForward).toHaveBeenCalled();
  });
});
