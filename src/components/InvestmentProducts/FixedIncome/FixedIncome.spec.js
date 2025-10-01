import React from "react";
import { shallow } from "enzyme";
import FixedIncome from "./FixedIncome";
import {
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  SUITABILITY_NOTIFICATION_TYPE
} from "../../../utils/constants";

const props = {
  getInvestmentFI: jest.fn(),
  getPendingTransactionsFI: jest.fn(),
  createSubscriptionFI: jest.fn(),
  getAccounts: jest.fn(),
  getAvailableDateRanges: jest.fn(),
  handleUserInputTranferDataDate: jest.fn(),
  getSubscriptionsPendencies: jest.fn(),
  createSubscription: jest.fn(() => Promise.resolve("mock")),
  UserInputTranferDataDate: jest.fn(),
  changeFactorTogle: jest.fn(),
  closeToastr: jest.fn(),
  closeModal: jest.fn(),
  openToastr: jest.fn(),
  methodChanging: true,
  openModal(config) {
    config.children();
  },
  subscriptionsPendencies: [
    {
      code: REGISTRATION_DATA_NOTIFICATION_TYPE
    },
    {
      code: SUITABILITY_NOTIFICATION_TYPE
    }
  ],
  accounts: [
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
  subscription: {
    id: 145,
    productId: 1,
    idempotencyKey: "2b92510a-40e6-4a1e-9857-4741c5852e62",
    investmentValue: 40000.0,
    status: "AWAITING_APPROVAL"
  },
  investmentFI: [
    {
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
      IncomeTaxLabel: "Isento de IR"
    },
    {
      id: 2,
      issuer: "Banco BOCOM BBM",
      issuerCnpj: "15.114.366/0002-40",
      riskProfile: "Conservative",
      riskProfileLabel: "Conservador",
      minimumSubscription: 1000,
      maximunSubscription: 500000,
      product: "LCA",
      productLabel: "LCA",
      rateLabel: "105% DI",
      indexer: "DI",
      indexerRate: 105,
      fixedRate: 0,
      liquidityDate: "2023-12-01",
      maturityDate: "2023-12-01",
      monthsToMaturity: 896,
      liquidityLabel: "No vencimento",
      IncomeTaxLabel: "Isento de IR"
    }
  ],
  pendingTransactionsFI: [
    {
      id: 3122,
      type: "subscription",
      typeLabel: "Subscription",
      idempotencyKey: "06E801C5-39E7-4CA2-B7A9-29E0FF636099",
      transactionValue: 2.0,
      transactionDate: "2021-07-02",
      product: {
        id: 2,
        name: "LCA 105% DI",
        riskProfile: "Aggressive",
        riskProfileLabel: "Agressivo",
        classType: "FixedIncome",
        classTypeLabel: "Renda Fixa"
      }
    }
  ]
};

describe("InvestmentProducts component", () => {
  it("should match snapshot", () => {
    expect(shallow(<FixedIncome {...props} />)).toMatchSnapshot();
  });

  it("should change state after changeAmmount", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.changeAmmount("1000");
    expect(spy).toHaveBeenCalledWith({ filledValue: "1000" });
  });

  it("should change state after changeAmmount", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.resetInvestability();
    expect(spy).toHaveBeenCalledWith({
      canInvest: false,
      filledValue: "0,00",
      signed: false
    });
  });
  it("should change state after selectProduct", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.selectProduct({}, jest.fn());
    expect(spy).toHaveBeenCalledWith({ selectedProduct: {} });
  });
  it("should change state after selectAccount", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.selectAccount({
      target: { value: props.accounts[0].accountNumber }
    });
    expect(spy).toHaveBeenCalledWith({
      selectedAccount: {
        account: 1,
        accountNumber: "107 2 4-3",
        availableBalance: 6,
        bankCode: 107,
        bankISPB: "2312321",
        blockedBalance: 7,
        branch: 2,
        date: "12/12",
        document: "",
        name: "",
        number: 4,
        totalBalance: 5,
        verifyingDigit: 3
      }
    });
  });

  it("should change state after changeAmmount", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.changeAmmount(1000);
    expect(spy).toHaveBeenCalledWith({ filledValue: 1000 });
  });

  it("should change state after resetStateOnGoingTransaction", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.resetStateOnGoingTransaction();
    expect(spy).toHaveBeenCalledWith({ onGoingTransactions: null });
  });
  it("should change state after resetSubscriptionPendencie", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.resetSubscriptionPendencie();
    expect(spy).toHaveBeenCalledWith({
      isBottomSheetUpdate: false,
      typeOfFundPendencie: ""
    });
  });

  it("should change state after showFooterModal", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.showFooterModal("/route", "mock");
    expect(spy).toHaveBeenCalledWith({
      typeOfFundPendencie: "mock",
      route: "/route"
    });
  });

  it("should change any state after changeState", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.changeState("isBottomSheetUpdate", true);
    expect(spy).toHaveBeenCalledWith({ isBottomSheetUpdate: true });
  });

  it("should call showFooterModal with atu cad after verifyPendencies", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();

    instanceComponent.verifyPendencies();
  });

  it("should call showFooterModal with suitability after verifyPendencies", () => {
    const newProps = {
      ...props,
      subscriptionsPendencies: [
        { code: "mock" },
        { code: SUITABILITY_NOTIFICATION_TYPE }
      ]
    };
    const instanceComponent = shallow(<FixedIncome {...newProps} />).instance();

    instanceComponent.verifyPendencies();
  });

  it("should call verifyPendencies without subscriptionsPendencies", () => {
    const newProps = { ...props, subscriptionsPendencies: [] };
    const instanceComponent = shallow(<FixedIncome {...newProps} />).instance();

    instanceComponent.verifyPendencies();
  });

  it("should call verifyOnGoingTransactions and match one pending operation", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();

    instanceComponent.verifyOnGoingTransactions(2, 1625220000000);
  });

  it("should call verifyOnGoingTransactions and do not match any pending operation", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();

    instanceComponent.verifyOnGoingTransactions(1, 1625220000000);
  });

  it("should create subscription and invoke token modal", () => {
    const wrapperComp = shallow(<FixedIncome {...props} />);
    wrapperComp.setState({
      selectedProduct: props.investmentFI[0],
      filledValue: 10000,
      selectedAccount: {
        account: props.accounts[0].accountNumber,
        bankCode: props.accounts[0].bankCode,
        branch: props.accounts[0].branch,
        number: props.accounts[0].number
      }
    });
    wrapperComp.update();

    const wrapperInstance = wrapperComp.instance();
    wrapperInstance.createOperationFunction("mockfunc");
  });

  it("should create subscription and invoke token modal", () => {
    const instanceComponent = shallow(<FixedIncome {...props} />).instance();
    const spy = jest.spyOn(instanceComponent, "setState");

    instanceComponent.handleClose();
    expect(props.closeModal).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({ signed: false });
  });
});
