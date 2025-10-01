import React from "react";
import { shallow } from "enzyme";

import WithdrawLca from "./WithdrawLca";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => {},
  isZhCN: () => false,
  isPtBR: () => true,
  getDateFieldPlaceholderByLocale: () => "DD/MM/YYYY"
}));

Object.defineProperty(global.navigator, "onLine", {
  value: jest.fn(),
  configurable: true
});

const props = {
  openModal(config) {
    config.children();
  },
  serverTime: 1558966870000,
  totalLca: "35.000,00",
  totalLcaRaw: 35000,
  responseToWithdrawal: {
    statusCode: 201,
    message: "successful withdrawal",
    payload: {
      type: "Resgate",
      date: "2020-03-27",
      totalGrossValue: 5646608.13,
      totalNetValue: 5646608.13,
      account: {
        bankCode: "107",
        branch: "2",
        id: 6017,
        number: "300202",
        verifyingDigit: "6"
      },
      investmentDetails: [
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3170,
          positionId: "541470",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-09-06",
          maturityDate: "2020-09-04",
          grossValue: 1007324.83,
          netValue: 1007324.83,
          quantity: 1000,
          unitPrice: 1007.32483,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3171,
          positionId: "541473",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 990196.29,
          netValue: 990196.29,
          quantity: 990,
          unitPrice: 1000.19828,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3172,
          positionId: "541474",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 454.63,
          netValue: 454.63,
          quantity: 10,
          unitPrice: 45.46356872,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3173,
          positionId: "541481",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 1000198.28,
          netValue: 1000198.28,
          quantity: 1000,
          unitPrice: 1000.19828,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3174,
          positionId: "541504",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 980194.31,
          netValue: 980194.31,
          quantity: 980,
          unitPrice: 1000.19828,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3175,
          positionId: "541505",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 454.63,
          netValue: 454.63,
          quantity: 10,
          unitPrice: 45.46356872,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3176,
          positionId: "541507",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 454.63,
          netValue: 454.63,
          quantity: 10,
          unitPrice: 45.46356872,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3177,
          positionId: "541509",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 1000198.28,
          netValue: 1000198.28,
          quantity: 1000,
          unitPrice: 1000.19828,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        },
        {
          yieldIndex: "DI",
          yieldPercentual: 95,
          investmentId: 3178,
          positionId: "541705",
          product: "LCA",
          issuer: "CARLINDA Gantois",
          issueDate: "2019-10-25",
          maturityDate: "2020-09-04",
          grossValue: 667132.25,
          netValue: 667132.25,
          quantity: 667,
          unitPrice: 1000.19828,
          yieldType: "PÓS",
          formattedYield: "95.00% DI"
        }
      ]
    }
  },
  accounts: [
    {
      account: 6455,
      accountNumber: "107 2 304020-3",
      totalBalance: 609.01,
      blockedBalance: 0,
      availableBalance: 609.01,
      verifyingDigit: "3",
      bankISPB: "15114366",
      date: "2018-05-04",
      name: "cliente2740",
      document: "53328506110"
    },
    {
      account: 6456,
      accountNumber: "108 2 304021-4",
      totalBalance: 456.01,
      blockedBalance: 0,
      availableBalance: 456.01,
      verifyingDigit: "4",
      bankISPB: "15114367",
      date: "2018-05-04",
      name: "cliente2741",
      document: "53328506111"
    },
    {
      account: 6457,
      accountNumber: "231 2 304020-3",
      totalBalance: 123.01,
      blockedBalance: 0,
      availableBalance: 123.01,
      verifyingDigit: "3",
      bankISPB: "33485541",
      date: "2018-05-04",
      name: "cliente2740",
      document: "53328506110"
    },
    {
      account: 6458,
      accountNumber: "237 2 304020-3",
      totalBalance: 123.01,
      blockedBalance: 0,
      availableBalance: 123.01,
      verifyingDigit: "3",
      bankISPB: "60746948",
      date: "2018-05-04",
      name: "cliente2740",
      document: "53328506110"
    }
  ],
  responseAccounts: [
    {
      id: 6455,
      bankISPB: "15114366",
      bankCode: "107",
      branch: 2,
      number: 304020,
      verifyingDigit: "3",
      holders: [
        {
          id: 20155,
          name: "cliente2740",
          document: "53328506110"
        }
      ],
      type: "CC"
    },
    {
      id: 6456,
      bankISPB: "15114367",
      bankCode: "108",
      branch: 2,
      number: 304021,
      verifyingDigit: "4",
      holders: [
        {
          id: 20156,
          name: "cliente2741",
          document: "53328506111"
        },
        {
          id: 20157,
          name: "cliente2742",
          document: "53328506112"
        }
      ],
      type: "CC"
    },
    {
      id: 6457,
      bankISPB: "33485541",
      bankCode: "231",
      branch: 2,
      number: 304020,
      verifyingDigit: "3",
      holders: [
        {
          id: 20155,
          name: "cliente2740",
          document: "53328506110"
        }
      ],
      type: "CC"
    },
    {
      id: 6458,
      bankISPB: "60746948",
      bankCode: "237",
      branch: 2,
      number: 304020,
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
  totalMax: {
    totalMaxValue: 30700,
    maxPositions: [
      {
        positionId: "541758",
        quantity: 3
      },
      {
        positionId: "541761",
        quantity: 7
      },
      {
        positionId: "541764",
        quantity: 19
      }
    ]
  },
  totalMin: {
    totalMinValue: 29900,
    minPositions: [
      {
        positionId: "541758",
        quantity: 3
      },
      {
        positionId: "541761",
        quantity: 7
      },
      {
        positionId: "541764",
        quantity: 18
      }
    ]
  },
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
  availableDateRanges: [
    {
      date: "2019-05-27",
      service: "FixedIncome",
      periods: [
        {
          startTime: 20190203081617,
          endTime: 20190203081517
        }
      ]
    }
  ],
  resetFields: () => Promise.resolve(),
  getTotalLca: () => Promise.resolve(),
  getAvailableDateRanges: () => Promise.resolve(),
  getPriorityTypes: () => Promise.resolve(),
  getAccounts: () => Promise.resolve(),
  getBanks: () => Promise.resolve(),
  postToWithdrawal: () => Promise.resolve(),
  getMaxAndMinValues: () => Promise.resolve(),
  getSuggestionValues: () => Promise.resolve(),
  postLcaDetails: jest.fn(),
  getAuthFactors: () => Promise.resolve(),
  getAllLcaDetails: jest.fn(),
  postToAproveWithdrawal: () => Promise.resolve(),
  createUuid: () => Promise.resolve(),
  changeCurrentPage: jest.fn(),
  closeModal: jest.fn(),
  openToastr: jest.fn(),
  closeToastr: jest.fn(),
  cancelToastrTimeout: jest.fn(),
  mfaTokenParams: {
    payload: "00000",
    key: "mock"
  },
  methodChanging: false,
  authFactors: [
    {
      id: "847de684-3941-41ec-9eba-a961bc31d10e",
      defaultAuth: false,
      authUri: "totp",
      type: "totp",
      actions: [
        "wiretransfer",
        "passwordreset",
        "approvesuitability",
        "personRegistration.confirmInformation"
      ],
      activated: true,
      plataformIdentifier: null,
      approved: true
    }
  ]
};

describe("WithdrawLca Test", () => {
  it("should match snapshot", () => {
    expect(shallow(<WithdrawLca {...props} />)).toMatchSnapshot();
  });
});

describe("Test especific functons", () => {
  it("should changeAccount", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />);

    const instanceComponent = shallowComponent.instance();
    instanceComponent.setState = jest.fn();

    instanceComponent.changeAccount("107 2 304020-3");

    expect(instanceComponent.setState).toHaveBeenCalledWith({
      currentAccount: {
        account: 6455,
        accountNumber: "107 2 304020-3",
        availableBalance: 609.01,
        bankISPB: "15114366",
        blockedBalance: 0,
        date: "2018-05-04",
        document: "53328506110",
        name: "cliente2740",
        totalBalance: 609.01,
        verifyingDigit: "3"
      }
    });
    expect(instanceComponent).toMatchSnapshot();
  });

  it("should getMaxAndMinValues priorityType = 1", () => {
    const newProps = { ...props, getSuggestionValues: jest.fn() };

    const instanceComponent = shallow(<WithdrawLca {...newProps} />).instance();
    instanceComponent.setState = jest.fn();

    instanceComponent.getMaxAndMinValues(35000, { name: "mock", id: 1 });
    expect(instanceComponent.props.getSuggestionValues).toHaveBeenCalledWith(
      1,
      35000
    );
    expect(instanceComponent.setState).toHaveBeenCalledWith({
      loadingPriorities: true,
      valueToBeRescued: 35000
    });
  });

  it("should getMaxAndMinValues priorityType = 2", () => {
    const newProps = {
      ...props,
      getSuggestionValues: jest.fn()
    };

    const instanceComponent = shallow(<WithdrawLca {...newProps} />).instance();
    instanceComponent.setState = jest.fn();

    instanceComponent.getMaxAndMinValues(30700, { name: "mock", id: 2 });
    expect(instanceComponent.props.getSuggestionValues).toHaveBeenCalledWith(
      2,
      30700
    );
    expect(instanceComponent.setState).toHaveBeenCalledWith({
      loadingPriorities: true,
      valueToBeRescued: 30700
    });
  });

  it("should resetStates", () => {
    const newProps = {
      ...props,
      resetFields: jest.fn(),
      getTotalLca: jest.fn(),
      getPriorityTypes: jest.fn(),
      getAccountsWithoutBalance: jest.fn(),
      getBanks: jest.fn(),
      resetUuid: jest.fn()
    };
    const instanceComponent = shallow(<WithdrawLca {...newProps} />).instance();

    instanceComponent.setState = jest.fn();
    instanceComponent.resetStates();
    expect(instanceComponent.props.resetFields).toHaveBeenCalled();
    expect(instanceComponent.props.getPriorityTypes).toHaveBeenCalled();
    expect(
      instanceComponent.props.getAccountsWithoutBalance
    ).toHaveBeenCalled();
    expect(instanceComponent.props.resetUuid).toHaveBeenCalled();
  });

  it("should finalClickWithdrawal to be successful", async () => {
    const newProps = {
      ...props,
      totalLcaRaw: 30000,
      userInfo: { corpId: 1111 },
      addError: jest.fn(),
      postToWithdrawal: jest.fn(),
      createUuid: jest.fn()
    };

    const shallowComponent = shallow(<WithdrawLca {...newProps} />);
    shallowComponent.setState({
      currentAccount: {
        bankName: "BANCO BOAVISTA INTERATLANTICO S.A.",
        number: 304020,
        branch: 2,
        verifyingDigit: "3",
        bankCode: "231",
        name: "BANCO BOAVISTA INTERATLANTICO S.A. - 304020-3 AG. 2"
      },
      loading: true,
      clickedToWithdraw: true
    });

    Object.defineProperty(global.navigator, "onLine", {
      get: jest.fn().mockImplementation(() => {
        return true;
      })
    });

    const instanceComponent = shallowComponent.instance();
    instanceComponent.setState = jest.fn();
    instanceComponent.finalClickWithdrawal();
    instanceComponent.setState({
      loading: false,
      clickedToWithdraw: false
    });

    expect(instanceComponent.setState).toHaveBeenCalledWith({
      clickedToWithdraw: false,
      loading: false
    });
  });

  it("should finalClickWithdrawal to return 301", () => {
    const newProps = {
      ...props,
      postToWithdrawal: jest.fn(),
      addError: jest.fn(),
      responseToWithdrawal: {
        statusCode: 301,
        message: "failed to withdrawal"
      }
    };
    const shallowComponent = shallow(<WithdrawLca {...newProps} />);
    const instanceComponent = shallowComponent.instance();
    instanceComponent.setState = jest.fn();
    instanceComponent.finalClickWithdrawal();
    instanceComponent.setState({
      loading: false,
      clickedToWithdraw: false
    });
    expect;
    expect(instanceComponent.setState).toHaveBeenCalledWith({
      clickedToWithdraw: false,
      loading: false
    });
  });

  it("Should call ComponentDidUpdate only when current screen = 3", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />);
    shallowComponent.setState({
      currentPriority: {
        id: 1,
        name: "Priority by Earlier Maturity Date"
      }
    });
    const updateSpy = jest.spyOn(WithdrawLca.prototype, "componentDidUpdate");
    shallowComponent.setState({
      current: 3,
      currentPriority: {
        id: 2,
        name: "Priority by Earlier Maturity Date"
      }
    });

    expect(updateSpy).toHaveBeenCalled();
  });

  it("Should verify that checkAvailabilityHour is false", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();

    expect(
      shallowComponent.checkAvailabilityHour(
        props.availableDateRanges[0].periods
      )
    ).toBeFalsy();
  });

  it("Should mountMessageWithAvailabilityTime", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();

    expect(
      shallowComponent.mountMessageWithAvailabilityTime(
        props.availableDateRanges[0].periods
      )
    ).toMatchSnapshot();
  });

  it("Should call tokenModal", () => {
    let goToStep = jest.fn();
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();
    shallowComponent.tokenModal([], "approve", goToStep);
    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should call changeState", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();
    shallowComponent.setState = jest.fn();

    shallowComponent.changeState("approve", true);
    expect(shallowComponent.setState).toHaveBeenCalledWith({ approve: true });
  });

  it("Should call selectExactValue", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();
    shallowComponent.setState = jest.fn();

    shallowComponent.selectExactValue(7000);
    expect(shallowComponent.setState).toHaveBeenCalledWith({
      disabledButton: false,
      valueToBeRescued: 7000
    });
  });

  it("Should call changeAmmount", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();
    shallowComponent.setState = jest.fn();

    shallowComponent.changeAmmount(7000);
    expect(shallowComponent.setState).toHaveBeenCalledWith({
      filledValue: 7000
    });
  });

  it("Should call getWithdrawalDetails with full redemption", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();
    shallowComponent.setState({
      filledValue: 35000
    });

    shallowComponent.setState = jest.fn();

    shallowComponent.getWithdrawalDetails(1, []);
    expect(shallowComponent.setState).toHaveBeenCalledWith({
      loadingLcaDetails: true,
      previous: 1
    });
    expect(props.getAllLcaDetails).toHaveBeenCalledWith(35000);
  });

  it("Should call getWithdrawalDetails without full redemption", () => {
    const shallowComponent = shallow(<WithdrawLca {...props} />).instance();
    shallowComponent.setState({
      filledValue: 3000
    });

    shallowComponent.setState = jest.fn();

    shallowComponent.getWithdrawalDetails(1, []);
    expect(shallowComponent.setState).toHaveBeenCalledWith({
      loadingLcaDetails: true,
      previous: 1
    });
    expect(props.postLcaDetails).toHaveBeenCalledWith({
      selectedPositions: []
    });
  });
});
