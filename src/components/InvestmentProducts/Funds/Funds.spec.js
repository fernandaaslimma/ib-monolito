import React from "react";
import { shallow } from "enzyme";
import Funds from "./Funds";
import { TYPE_PRODUCT_FUNDS_UNSUITABLE } from "../../../utils/constants";
import { isPtBR } from "../../../utils/i18n";

const fundsData = [
  {
    id: 1,
    name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO", // IP Atlas USD FIC FIA IE
    cnpj: "11111111111",
    description: "descrição do fundo...",
    manager: "BOCOM BBM", // Gestor
    administrator: "Bradesco", // Administrador
    minimumBalance: 20000.0, // Saldo mínimo
    minimumTransaction: 10000.0, // Movimentação mín.
    initialInvestment: 20000.0, // Aplicação inicial de
    riskProfile: "Aggressive",
    riskProfileLabel: "Agressivo", // Agressivo
    returns: {
      twelveMonths: 0.1, // Rentab. Últimos 12 meses de
      year: 0.1, // Ano
      thirtySixMonths: 0.1, // 36 meses
      fortyEightMonths: 0.1 // 48 meses
    },
    class: "HedgeFund",
    classLabel: "Multimercado", // Renda fixa
    subscription: {
      type: "corrido",
      conversionDays: 0, // Prazo para conversão das cotas na aplicação ?
      settlementDays: 0 // Valor na conta (pós conversão das cotas) ?
    },
    redemption: {
      type: "corrido",
      conversionDays: 60, // Prazo para conversão das cotas na aplicação ?
      settlementDays: 1 // Valor na conta (pós conversão das cotas) ?
    },
    benchmark: "CDI", // Benckmark
    quotaDate: "2020-12-31",
    administrationFee: 0.2, // Taxa de administração
    performanceFee: 0.2, // Taxa de perfomance
    inceptionDate: "2020-12-31" // Data de ínicio do fundo
  }
];

const props = {
  getInvestmentFunds: jest.fn(() => Promise.resolve(fundsData)),
  handleUserInputTranferDataDate: jest.fn(),
  getAvailableDateRanges: jest.fn(),
  getSubscriptionsPendencies: jest.fn(),
  getAccounts: jest.fn(),
  createSubscription: jest.fn(() => Promise.resolve("mock")),
  UserInputTranferDataDate: jest.fn(),
  changeFactorTogle: jest.fn(),
  approveNewTerms: jest.fn(),
  closeToastr: jest.fn(),
  closeModal: jest.fn(),
  openToastr: jest.fn(),
  methodChanging: true,
  openModal(config) {
    config.children();
  },
  subscriptionsPendencies: [
    {
      document: "Ficha Cadastral"
    },
    {
      document: "Questionário de Suitability"
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
    status: "AWAITING_APPROVAL",
    terms: [
      {
        name: "Term of adhesion BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP",
        type: "productTerms",
        url:
          "https://api.bocombbm.com.br/productterms/fundos/adesao_37322143000120.pdf",
        id: 48
      },
      {
        name: "Non Compliance Term - Fixed Income",
        type: TYPE_PRODUCT_FUNDS_UNSUITABLE,
        url:
          "https://api.bocombbm.com.br/noncomplianceterms/fundos/desenquadramento_rf_mod.pdf",
        id: 250
      }
    ]
  }
};

describe("Funds component", () => {
  it("should match snapshot with loading", () => {
    expect(shallow(<Funds />)).toMatchSnapshot();
  });

  it("should match snapshot with data", () => {
    expect(shallow(<Funds {...props} />)).toMatchSnapshot();
  });

  it("should select a fund", () => {
    const spy = jest.fn();
    const wrapperInstance = shallow(<Funds {...props} />).instance();
    const spyState = jest.spyOn(wrapperInstance, "setState");
    wrapperInstance.selectFund("mock", spy);

    expect(spyState).toHaveBeenCalledWith({ selectedFund: "mock" });
    expect(spy).toHaveBeenCalled();
  });

  it("should call verifyPendencies with Ficha Cadastral", () => {
    const wrapperInstance = shallow(<Funds {...props} />).instance();
    wrapperInstance.verifyPendencies();

    expect(props.getSubscriptionsPendencies).toHaveBeenCalled();
  });

  it("should call verifyPendencies with Suitability", () => {
    let newProps = {
      ...props,
      subscriptionsPendencies: [
        {
          document: "Questionário de Suitability"
        }
      ]
    };
    const wrapperInstance = shallow(<Funds {...newProps} />).instance();
    wrapperInstance.verifyPendencies();

    expect(props.getSubscriptionsPendencies).toHaveBeenCalled();
  });

  it("should call verifyPendencies with Ficha Patrimonial", () => {
    let newProps = {
      ...props,
      subscriptionsPendencies: [
        {
          document: "Ficha Patrimonial"
        }
      ]
    };
    const wrapperInstance = shallow(<Funds {...newProps} />).instance();
    wrapperInstance.verifyPendencies();

    expect(props.getSubscriptionsPendencies).toHaveBeenCalled();
  });

  it("should call verifyPendencies withou pendencies", () => {
    let newProps = { ...props, subscriptionsPendencies: [] };
    const wrapperInstance = shallow(<Funds {...newProps} />).instance();

    wrapperInstance.verifyPendencies();

    expect(props.getSubscriptionsPendencies).toHaveBeenCalled();
  });

  it("should call verifyPendencies and show person registration modal", () => {
    let newProps = {
      ...props,
      subscriptionsPendencies: [{ code: "PersonRegistrationForms" }]
    };
    const wrapperInstance = shallow(<Funds {...newProps} />).instance();
    wrapperInstance.verifyPendencies();
  });

  it("should call verifyPendencies and show suitability modal", () => {
    let newProps = {
      ...props,
      subscriptionsPendencies: [{ code: "SuitabilityForms" }]
    };
    const wrapperInstance = shallow(<Funds {...newProps} />).instance();
    wrapperInstance.verifyPendencies();
  });

  it("should call resetInvestability", () => {
    const wrapperInstance = shallow(<Funds {...props} />).instance();

    const spy = jest.spyOn(wrapperInstance, "setState");
    wrapperInstance.resetInvestability();

    expect(spy).toHaveBeenCalledWith({
      canInvest: false,
      signed: false,
      filledValue: isPtBR() ? "0,00" : "0.00"
    });
  });

  it("should call resetFundPendencie", () => {
    const wrapperInstance = shallow(<Funds {...props} />).instance();

    const spy = jest.spyOn(wrapperInstance, "setState");
    wrapperInstance.resetFundPendencie();

    expect(spy).toHaveBeenCalledWith({
      typeOfFundPendencie: ""
    });
  });

  it("should call handleClose", () => {
    const wrapperInstance = shallow(<Funds {...props} />).instance();

    const spy = jest.spyOn(wrapperInstance, "setState");
    wrapperInstance.handleClose();

    expect(props.closeModal).toHaveBeenCalled();

    expect(spy).toHaveBeenCalledWith({
      signed: false
    });
  });

  it("should select an account", () => {
    const wrapperInstance = shallow(<Funds {...props} />).instance();

    const spy = jest.spyOn(wrapperInstance, "setState");
    wrapperInstance.selectAccount({ target: { value: "107 2 4-3" } });

    expect(spy).toHaveBeenCalled();
  });

  it("should change the ammount", () => {
    const wrapperInstance = shallow(<Funds {...props} />).instance();

    const spy = jest.spyOn(wrapperInstance, "setState");
    wrapperInstance.changeAmmount("100.000,00");

    expect(spy).toHaveBeenCalledWith({ filledValue: "100.000,00" });
  });

  it("should show footer modal", () => {
    const wrapperInstance = shallow(<Funds {...props} />).instance();

    const spy = jest.spyOn(wrapperInstance, "setState");
    wrapperInstance.showFooterModal("route", "pendency");

    expect(spy).toHaveBeenCalledWith({
      typeOfFundPendencie: "pendency",
      route: "route"
    });
  });

  it("should create subscription and change the state hasTerms", () => {
    const wrapperComp = shallow(<Funds {...props} />);

    wrapperComp.setState({ selectedFund: { id: "123" } });
    wrapperComp.update();

    const wrapperInstance = wrapperComp.instance();

    wrapperInstance.createOperationFunction("mockfunc");
  });

  it("should create subscription and invoke token modal", () => {
    const newProps = { ...props, subscription: {} };
    const wrapperComp = shallow(<Funds {...newProps} />);
    wrapperComp.setState({ selectedFund: { id: "123" } });
    wrapperComp.update();

    const wrapperInstance = wrapperComp.instance();
    wrapperInstance.createOperationFunction("mockfunc");
  });

  it("should call approveTerms", () => {
    const wrapperComp = shallow(<Funds {...props} />);

    const wrapperInstance = wrapperComp.instance();

    wrapperInstance.approveTerm(jest.fn());
  });
});
