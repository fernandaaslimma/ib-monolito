import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-bocombbm-components";
import { act } from "react-test-renderer";
import deepClone from "../../../../utils/deepClone";
import AccountSelector from "../../../common/AccountSelector";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { BorderedWrapper } from "../styles";
import ConfirmationStep from "./ConfirmationStep";

const thisProps = {
  currentStep: 3,
  stepForward: jest.fn(),
  stepBack: jest.fn(),
  goToStep: jest.fn()
};

const props = {
  responseLcaDetails: [
    {
      positionId: "541758",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 600,
      netValue: 600,
      quantity: 3,
      unitPrice: 200
    },
    {
      positionId: "541761",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 4900,
      netValue: 4900,
      quantity: 7,
      unitPrice: 700
    },
    {
      positionId: "541764",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 3200,
      netValue: 3200,
      quantity: 4,
      unitPrice: 800
    },
    {
      positionId: "541765",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 3200,
      netValue: 3200,
      quantity: 5,
      unitPrice: 800
    },
    {
      positionId: "541761",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 4900,
      netValue: 4900,
      quantity: 7,
      unitPrice: 700
    },
    {
      positionId: "541764",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 3200,
      netValue: 3200,
      quantity: 4,
      unitPrice: 800
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
    valueToBeRescued: "15,000.00",
    currentAccount: props.accounts[0],
    loadingLcaDetails: false,
    openPriorityBottomSheet: false,
    previous: 1,
    loadingCreateWithdrawal: false,
    openMaxWithdrawalSheet: false,
    errorTitle: "",
    errorMessage: ["erro", "aqui"]
  },
  changeAccount: jest.fn(),
  finalClickWithdrawal: jest.fn(),
  changeState: jest.fn()
};

describe("ConfirmationStep", () => {
  let setState, useStateSpy;
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    React.useContext = jest.fn(() => context);
  });
  it("Should match snapshpt", () => {
    const wrapper = shallow(<ConfirmationStep {...thisProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should match snapshpt with loading", () => {
    const newContext = deepClone(context);
    newContext.state.loadingLcaDetails = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<ConfirmationStep {...thisProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("redirect to positions fixed income", () => {
    const wrapper = shallow(<ConfirmationStep {...thisProps} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(thisProps.goToStep).toHaveBeenCalledWith(context.state.previous);
  });

  it("redirect to positions fixed income", () => {
    const wrapper = shallow(<ConfirmationStep {...thisProps} />);
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(context.finalClickWithdrawal).toHaveBeenCalledWith(
      thisProps.goToStep
    );
  });

  it("should open modal to change account and test its change", () => {
    const wrapper = shallow(<ConfirmationStep {...thisProps} />);
    act(() => {
      wrapper
        .find(BorderedWrapper)
        .at(0)
        .simulate("click");
    });

    wrapper.find(AccountSelector).prop("onChange")({
      target: { value: "12345674" }
    });

    expect(context.changeAccount).toHaveBeenCalledWith("12345674");
  });

  it("should close change account sheet", () => {
    const wrapper = shallow(<ConfirmationStep {...thisProps} />);

    act(() => {
      wrapper
        .find(AnimatedBottonSheet)
        .at(0)
        .prop("onClickInBack")();
    });
  });

  it("should close max withdrawal sheet", () => {
    const newContext = deepClone(context);
    newContext.state.openMaxWithdrawalSheet = true;
    React.useContext = jest.fn(() => newContext);
    const wrapper = shallow(<ConfirmationStep {...thisProps} />);

    act(() => {
      wrapper
        .find(AnimatedBottonSheet)
        .at(1)
        .prop("onClickInBack")();
      wrapper
        .find(Button)
        .at(2)
        .simulate("click");
    });

    expect(context.changeState).toHaveBeenCalledWith(
      "openMaxWithdrawalSheet",
      false
    );
  });
});
