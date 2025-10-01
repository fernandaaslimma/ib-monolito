import React from "react";
import { shallow } from "enzyme";
import ConfirmationStep from "./ConfirmationStep";
import { Button } from "react-bocombbm-components";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { act } from "react-test-renderer";
import { ClickableItem } from "./styles";

const thisProps = {
  goToStep: jest.fn(),
  currentStep: 4,
  stepBack: jest.fn()
};

let context = {
  changeState: jest.fn(),
  verifyPendencies: jest.fn(),
  resetSubscriptionPendencie: jest.fn(),
  verifyOnGoingTransactions: jest.fn(),
  resetStateOnGoingTransaction: jest.fn(),
  createOperationFunction: jest.fn(),
  props: {
    availableDateRanges: [
      { maxEndTime: 1610060400000, minStartTime: 1610024400000 }
    ],
    getAuthFactors: jest.fn(),
    authFactors: [
      {
        id: "e80857d6-8f81-408d-84b8-90f49b302da7",
        defaultAuth: true,
        authUri: "pj_franciscogoncalez@bocombbm.com.br",
        type: "mail",
        actions: [],
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
    ],
    serverTime: 1625220000000
  },
  state: {
    selectedAccount: [
      {
        account: 1,
        accountNumber: "107 2 4-3",
        blockedBalance: 7,
        availableBalance: 6,
        totalBalance: 5,
        date: "12/12",
        document: "",
        name: "",
        bankISPB: "2312321",
        verifyingDigit: 3,
        number: 4,
        branch: 2,
        bankCode: 107
      }
    ],
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
    onGoingBottomSheet: false,
    loadingButtonInvestRequest: false
  },
  colors: {
    moderado: "#E3F1D4",
    adressivo: "#E2DCF5",
    conservador: "#DAE6F2"
  }
};

describe("ConfirmationStep component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it("Should match snapshot", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });
  it("Should call stepBack", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(thisProps.stepBack).toHaveBeenCalled();
  });
  it("Should call stepForward", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(context.verifyOnGoingTransactions).toHaveBeenCalledWith(
      1,
      1625220000000,
      thisProps.goToStep
    );
  });

  it("Should trigger Button and return null", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    act(() => {
      component
        .find(AnimatedBottonSheet)
        .at(0)
        .prop("onClickInBack")();
    });
    expect(context.resetStateOnGoingTransaction).toHaveBeenCalled();
    expect(context.changeState).toHaveBeenCalledWith(
      "onGoingBottomSheet",
      false
    );
  });

  it("shoud close bottomsheet and reset pendencies when click button", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(2)
      .simulate("click");
    expect(context.resetStateOnGoingTransaction).toHaveBeenCalled();
    expect(context.changeState).toHaveBeenCalledWith(
      "onGoingBottomSheet",
      false
    );
  });
  it("shoud close bottomsheet and create subscription", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(3)
      .simulate("click");
    expect(context.resetStateOnGoingTransaction).toHaveBeenCalled();
    expect(context.changeState).toHaveBeenCalledWith(
      "onGoingBottomSheet",
      false
    );
    expect(context.createOperationFunction).toHaveBeenCalled();
  });

  it("Should trigger Button and return null", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    act(() => {
      component
        .find(ClickableItem)
        .at(0)
        .simulate("click");
    });
  });
});
