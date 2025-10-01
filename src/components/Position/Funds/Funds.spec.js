import React from "react";
import { mount, shallow } from "enzyme";

import {
  INVESTMENT_FUNDS_ROLE,
  INVESTMENT_PRODUCTS_LIST_URL,
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  SUITABILITY_NOTIFICATION_TYPE,
  TYPE_PRODUCT_FUNDS,
  TYPE_PRODUCT_FUNDS_UNSUITABLE
} from "../../../utils/constants";

import Funds from "./Funds";
import { redirect } from "../../../utils/redirect";

jest.mock("../../../utils/redirect", () => ({
  redirect: jest.fn()
}));

jest.mock("moment", () => () => ({
  format: () => "16/04/2021",
  startOf: () => ({ diff: () => 1 })
}));

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => {},
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "DD/MM/YYYY"
}));

jest.mock("../../../utils/formatNumber", () => ({
  unFormatNumber: num => num
}));

const error = {
  error: {
    status: 422,
    showErrorToUser: true,
    errors: [
      {
        title: "mock",
        message: "mock"
      }
    ]
  }
};

const errorNotShownToUser = {
  error: {
    status: 422,
    showErrorToUser: false,
    errors: [
      {
        title: "mock",
        message: "mock"
      }
    ]
  }
};

const state = {
  canInvest: false,
  chosenOperation: null,
  errorMessage: "",
  errorTitle: "",
  filledValue: "0.00",
  hasAccess: true,
  hasTerms: null,
  hasUnsuitableTerm: [],
  isEmpty: false,
  loading: true,
  openMaxWithdrawalSheet: false,
  route: "",
  selectedAccount: {},
  selectedFund: null,
  signed: false,
  typeOfFundPendencie: "",
  usedSteps: []
};

const accounts = [
  {
    id: 6455,
    bankISPB: "15114366",
    bankCode: "107",
    branch: 2,
    number: 304020,
    accountNumber: 304020,
    verifyingDigit: "3",
    holders: [
      {
        id: 20155,
        name: "cliente2740",
        document: "53328506110"
      }
    ],
    type: "CC"
  }
];
const funds = [
  {
    name: "name",
    date: "12/12",
    investmentDate: "12/12",
    iofBalance: 0,
    grossResultBalance: 123,
    grossBalance: 123,
    incomeTaxBalance: 1,
    portfolioShare: 123
  }
];

const handleUserInputTranferDataDateMock = jest.fn();
const getPendingTransactionsMock = jest.fn();
const getTotalFundsMock = jest.fn();
const getFundsMock = jest.fn();
const getInvestmentFundsMock = jest.fn();
const getAvailableDateRangesMock = jest.fn();
const getAccountsMock = jest.fn();
const getFundsPendenciesMock = jest.fn();

const props = {
  subscriptionsPendencies: [],
  userInfo: { corpId: "9090", roles: [INVESTMENT_FUNDS_ROLE] },
  fundsPendencies: [],
  funds: funds,
  accounts: accounts,
  handleUserInputTranferDataDate: handleUserInputTranferDataDateMock,
  getPendingTransactionsFunds: getPendingTransactionsMock,
  getTotalFunds: getTotalFundsMock,
  getFunds: getFundsMock,
  getInvestmentFunds: getInvestmentFundsMock,
  getAvailableDateRanges: getAvailableDateRangesMock,
  getAccounts: getAccountsMock,
  getSubscriptionsPendencies: getFundsPendenciesMock,
  openToastr: jest.fn(),
  closeToastr: jest.fn(),
  createAuthFactor: jest.fn(),
  aproveAuthFactor: jest.fn(),
  activateAuthFactor: jest.fn(),
  setNotificationStatus: jest.fn(),
  clearAuthFactorResponse: jest.fn(),
  changeFactorTogle: jest.fn(),
  authFactorResponse: {
    authFactorID: "ID",
    activationURL: "URL"
  }
};

describe("Funds component", () => {
  it("should have an initial state", () => {
    const component = shallow(<Funds {...props} />);
    expect(component.instance().state).toEqual(state);
  });

  it("should match snapshot with loading", () => {
    expect(shallow(<Funds {...props} loading={true} />)).toMatchSnapshot();
  });

  it("should match snapshot without accounts", () => {
    expect(
      shallow(<Funds {...props} accounts={[]} loading={false} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with accounts", () => {
    expect(shallow(<Funds {...props} loading={false} />)).toMatchSnapshot();
  });

  it("should invoke getFunds", () => {
    shallow(<Funds {...props} loading={false} />);
    expect(getFundsMock).toHaveBeenCalledTimes(4);
  });

  it("should invoke getTotalFunds", () => {
    shallow(<Funds {...props} loading={false} />);
    expect(getTotalFundsMock).toHaveBeenCalledTimes(5);
  });
});

describe("Funds functions", () => {
  it("should test step control functions", () => {
    const componentInstance = shallow(<Funds {...props} />).instance();
    componentInstance.setState({ usedSteps: [] });

    let isStepUsed = componentInstance.isUsedStep(1);
    expect(isStepUsed).toEqual(false);

    const spy = jest.spyOn(componentInstance, "setState");

    componentInstance.usesStep(1);
    expect(spy).toHaveBeenCalledWith({ usedSteps: [1] });

    componentInstance.usesStep(2);

    expect(spy).toHaveBeenCalledWith({ usedSteps: [1, 2] });
    isStepUsed = componentInstance.isUsedStep(1);
    expect(isStepUsed).toEqual(true);

    componentInstance.clearUsedSteps();
    expect(spy).toHaveBeenCalledWith({ usedSteps: [] });

    isStepUsed = componentInstance.isUsedStep(1);
    expect(isStepUsed).toEqual(false);
  });

  it("should test setChosenOperation function", () => {
    const componentInstance = shallow(<Funds {...props} />).instance();
    componentInstance.setState({ chosenOperation: null });

    const spy = jest.spyOn(componentInstance, "setState");

    componentInstance.setChosenOperation("operation");
    expect(spy).toHaveBeenCalledWith({ chosenOperation: "operation" });
  });

  it("should test selectAccount function", () => {
    const componentInstance = shallow(<Funds {...props} />).instance();
    componentInstance.setState({ chosenOperation: null });

    const spy = jest.spyOn(componentInstance, "setState");

    const event = { target: { value: 304020 } };

    componentInstance.selectAccount(event);
    expect(spy).toHaveBeenCalledWith({ selectedAccount: accounts[0] });
  });

  it("should test changeAmmount function", () => {
    const componentInstance = shallow(<Funds {...props} />).instance();
    componentInstance.setState({ filledValue: null });

    const spy = jest.spyOn(componentInstance, "setState");

    componentInstance.changeAmmount("value");
    expect(spy).toHaveBeenCalledWith({ filledValue: "value" });
  });

  it("should test resetFundPendencie function", () => {
    const componentInstance = shallow(<Funds {...props} />).instance();
    componentInstance.setState({ typeOfFundPendencie: "test" });

    const spy = jest.spyOn(componentInstance, "setState");

    componentInstance.resetFundPendencie("value");
    expect(spy).toHaveBeenCalledWith({ typeOfFundPendencie: "" });
  });

  it("should test goToOriginalFundsList function", () => {
    const componentInstance = shallow(<Funds {...props} />).instance();

    componentInstance.goToOriginalFundsList(INVESTMENT_PRODUCTS_LIST_URL);
    expect(redirect).toHaveBeenCalledWith("/investments/products/list");
  });

  it("should test showFooterModal function", () => {
    const componentInstance = shallow(<Funds {...props} />).instance();
    componentInstance.setState({ filledValue: null });

    const spy = jest.spyOn(componentInstance, "setState");

    componentInstance.showFooterModal("value1", "value2");
    expect(spy).toHaveBeenCalledWith({
      route: "value1",
      typeOfFundPendencie: "value2"
    });
  });

  it("should call verifyPendencies with empty fundsPendencies", () => {
    const newProps = { ...props, fundsPendencies: [] };
    const component = shallow(<Funds {...newProps} />);
    component.instance().verifyPendencies();
    expect(component).toMatchSnapshot();
  });

  it("should call verifyPendencies with empty fundsPendencies", () => {
    const newProps = { ...props, fundsPendencies: [{ code: "" }] };
    const component = shallow(<Funds {...newProps} />);
    component.instance().verifyPendencies();
    expect(component).toMatchSnapshot();
  });

  it("should call verifyPendencies with fundsPendencies with code as REGISTRATION_DATA_NOTIFICATION_TYPE", () => {
    const newProps = {
      ...props,
      fundsPendencies: [{ code: REGISTRATION_DATA_NOTIFICATION_TYPE }]
    };
    const component = shallow(<Funds {...newProps} />);
    component.instance().verifyPendencies();
    expect(component).toMatchSnapshot();
  });

  it("should call verifyPendencies with fundsPendencies with code as SUITABILITY_NOTIFICATION_TYPE", () => {
    const newProps = {
      ...props,
      fundsPendencies: [{ code: SUITABILITY_NOTIFICATION_TYPE }]
    };
    const component = shallow(<Funds {...newProps} />);
    component.instance().verifyPendencies();
    expect(component).toMatchSnapshot();
  });

  it("should call checkFundIsInMoviment", () => {
    const newProps = {
      ...props,
      pendingTransactionsFunds: [
        { product: { name: "mock" }, transactionDate: "01-01-2020" }
      ]
    };
    const component = shallow(<Funds {...newProps} />);
    component.instance().checkFundIsInMoviment("mock");
    expect(component).toMatchSnapshot();
  });

  it("should call checkFundIsInMoviment with different fund name", () => {
    const newProps = {
      ...props,
      pendingTransactionsFunds: [
        { product: { name: "mockmock" }, transactionDate: "01-01-2020" }
      ]
    };
    const component = shallow(<Funds {...newProps} />);
    component.instance().checkFundIsInMoviment("mock");
    expect(component).toMatchSnapshot();
    expect(component.state("fundsInMoviment")).toEqual("");
  });

  it("should call checkFundIsInMoviment with different fund name", () => {
    const component = shallow(<Funds {...props} />);
    component.instance().resetInvestability("mock");
    expect(component).toMatchSnapshot();
    expect(component.state("canInvest")).toEqual(false);
    expect(component.state("signed")).toEqual(false);
    expect(component.state("filledValue")).toEqual("0.00");
  });

  it("should call selectFund", () => {
    const component = shallow(<Funds {...props} />);
    component.instance().selectFund(props.funds[0], jest.fn());
    expect(component).toMatchSnapshot();
  });

  it("should call approveTerm with type as TYPE_PRODUCT_FUNDS", () => {
    const newProps = {
      ...props,
      approveNewTerms: jest.fn(),
      closeToastr: jest.fn(),
      subscription: {
        terms: [
          {
            type: TYPE_PRODUCT_FUNDS,
            id: 1
          }
        ]
      }
    };
    const component = shallow(<Funds {...newProps} />);
    component.instance().approveTerm(jest.fn());
    expect(component).toMatchSnapshot();
  });

  it("should call approveTerm with type as TYPE_PRODUCT_FUNDS_UNSUITABLE", () => {
    const newProps = {
      ...props,
      approveNewTerms: jest.fn(),
      closeToastr: jest.fn(),
      subscription: {
        terms: [
          {
            type: TYPE_PRODUCT_FUNDS_UNSUITABLE,
            id: 0
          }
        ]
      }
    };
    const component = shallow(<Funds {...newProps} />);
    component.instance().approveTerm(jest.fn());
    expect(component).toMatchSnapshot();
  });

  it("should call downloadFile", () => {
    const component = shallow(<Funds {...props} />);
    component.instance().downloadFile("mock", "filename.png", "mock");
    expect(component).toMatchSnapshot();
  });

  it("should call handleClose", () => {
    const newProps = { ...props, closeModal: jest.fn() };

    const component = shallow(<Funds {...newProps} />);
    const spy = jest.spyOn(component.instance(), "setState");

    component.instance().handleClose();
    expect(component).toMatchSnapshot();
    expect(spy).toHaveBeenCalledWith({ signed: false });
  });

  it("should call createOperationFunction with success", () => {
    const newProps = {
      ...props,
      createRedemption: jest.fn(),
      createSubscription: jest.fn(),
      addError: jest.fn(),
      subscription: {
        terms: [
          {
            type: TYPE_PRODUCT_FUNDS_UNSUITABLE,
            id: 0
          }
        ]
      }
    };

    const component = mount(<Funds {...newProps} />);
    component.setState({
      chosenOperation: "redeem",
      selectedAccount: {
        account: 1111,
        bankCode: 11,
        branch: 111,
        number: 111
      },
      filledValue: 10000,
      selectedFund: {
        cnpj: "11111111111111",
        id: "1",
        investmentDetails: { grossBalance: 1000 }
      }
    });

    component.instance().createOperationFunction();
    expect(component).toMatchSnapshot();
  });

  it("should call createOperationFunction with success and not redeem", () => {
    const newProps = {
      ...props,
      createRedemption: jest.fn(),
      createSubscription: jest.fn(),
      addError: jest.fn(),
      subscription: {
        terms: [
          {
            type: TYPE_PRODUCT_FUNDS_UNSUITABLE,
            id: 0
          }
        ]
      }
    };

    const component = mount(<Funds {...newProps} />);
    component.setState({
      chosenOperation: "mock",
      selectedAccount: {
        account: 1111,
        bankCode: 11,
        branch: 111,
        number: 111
      },
      filledValue: 10000,
      selectedFund: {
        cnpj: "11111111111111",
        id: "1",
        investmentDetails: { grossBalance: 1000 }
      }
    });

    component.instance().createOperationFunction();
    expect(component).toMatchSnapshot();
  });

  it("should call createOperationFunction with error to show to user", () => {
    const newProps = {
      ...props,
      createRedemption: () => {
        throw error;
      },
      createSubscription: jest.fn(),
      addError: jest.fn()
    };

    const component = mount(<Funds {...newProps} />);
    component.setState({
      chosenOperation: "redeem",
      selectedAccount: {
        account: 1111,
        bankCode: 11,
        branch: 111,
        number: 111
      },
      filledValue: 10000,
      selectedFund: {
        cnpj: "11111111111111",
        id: "1",
        investmentDetails: { grossBalance: 1000 }
      }
    });

    component.instance().createOperationFunction();
    expect(component).toMatchSnapshot();
  });

  it("should call createOperationFunction with error not shown to user", () => {
    const newProps = {
      ...props,
      createRedemption: () => {
        throw errorNotShownToUser;
      },
      createSubscription: jest.fn(),
      addError: jest.fn()
    };

    const component = mount(<Funds {...newProps} />);
    component.setState({
      chosenOperation: "redeem",
      selectedAccount: {
        account: 1111,
        bankCode: 11,
        branch: 111,
        number: 111
      },
      filledValue: 10000,
      selectedFund: {
        cnpj: "11111111111111",
        id: "1",
        investmentDetails: { grossBalance: 1000 }
      }
    });

    component.instance().createOperationFunction();
    expect(component).toMatchSnapshot();
  });

  it("should call tokenModal", () => {
    const newProps = {
      ...props,
      openModal: jest.fn(),
      createRedemption: jest.fn(),
      createSubscription: jest.fn(),
      addError: jest.fn(),
      methodChanging: false,
      subscription: {
        terms: [
          {
            type: TYPE_PRODUCT_FUNDS,
            id: 1
          }
        ]
      },
      redemption: {
        id: 1,
        redemptionValue: 1000
      }
    };

    const component = mount(<Funds {...newProps} />);

    component.setState({
      chosenOperation: "redeem",
      selectedAccount: {
        account: 1111,
        bankCode: 11,
        branch: 111,
        number: 111
      },
      filledValue: 10000,
      selectedFund: {
        cnpj: "11111111111111",
        id: "1",
        investmentDetails: { grossBalance: 1000 }
      }
    });

    component.instance().tokenModal(jest.fn());
    expect(component).toMatchSnapshot();
  });
});
