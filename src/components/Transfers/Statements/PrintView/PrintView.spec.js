import React from "react";
import { shallow } from "enzyme";

import PrintView from "./PrintView";
import store from "../../../../utils/store";
import { INDIVIDUAL } from "../../../../utils/constants";

jest.mock("../../../../utils/store", () => ({
  getState: jest.fn()
}));

jest.mock("../../../../utils/i18n", () => ({
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYY",
  getShortDateByLocale: () => "MM/DD/YYY",
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

const futureEventsHistoryMock = [
  {
    availableAmount: 0,
    blockedAmount: 0,
    totalAmount: -3981.89,
    date: "2021-03-25",
    events: [
      {
        absAmount: 12.42,
        amount: -12.42,
        date: "2021-03-25",
        description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: false,
        id: 12435901
      }
    ]
  },
  {
    availableAmount: 0,
    blockedAmount: 0,
    totalAmount: -3957.05,
    date: "2021-03-24",
    events: [
      {
        absAmount: 1912.13,
        amount: -1912.13,
        date: "2021-03-24",
        description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: false,
        id: 12435889
      },
      {
        absAmount: 12.38,
        amount: -12.38,
        date: "2021-03-24",
        description: "TRANSFERENCIA ENTRE CONTAS DE DIFERENTES TITULARIDADES",
        type: "Débito",
        settled: false,
        id: 12435897
      },
      {
        absAmount: 120.41,
        amount: -120.41,
        date: "2021-03-24",
        description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: false,
        id: 12435899
      }
    ]
  }
];

const history = {
  eventsSumAmount: "600",
  blockedBalance: 0,
  availableBalance: "400",
  totalBalance: "600",
  availableAmount: "41111",
  blockedAmount: 2,
  events: [
    {
      type: "type",
      description: "description",
      counterpart: "counterpart",
      value: "value"
    },
    {
      type: "CRÉDITO",
      description: "REPASSE COBRANÇA",
      counterpart: "BOCOM BBM S.A",
      value: "540.00"
    },
    {
      type: "CRÉDITO",
      description: "TRANSFERÊNCIA ENTRE CONTAS DE MESMA TITULARIDADE	",
      counterpart: "BOCOM BBM S.A",
      value: "-350.00"
    },
    {
      type: "CRÉDITO",
      description: "REPASSE COBRANÇA",
      counterpart: "BOCOM BBM S.A",
      value: "-570.00"
    },
    {
      type: "CRÉDITO",
      description: "OP: EMISSÃO DE TIT. CETIP",
      counterpart: "BOCOM BBM S.A",
      value: "-450.00"
    }
  ]
};

const currentAccount = {
  accountNumber: "107 2 304020-1",
  document: "11111111111111",
  name: "name"
};

const props = {
  changeValuesVisibility: jest.fn(),
  getBalanceAndEventsHistory: jest.fn(),
  changeAccount: jest.fn(),
  getPendingOperationsNumber: jest.fn(),
  onFilter: jest.fn(),
  resetStates: jest.fn(),
  originAccount: { accountNumber: "107 2 304020-3", blockedBalance: 0 },
  isEmptyEvents: false,
  accounts: [
    {
      accountNumber: "107 2 304020-3",
      blockedBalance: 0,
      document: "11111111111111"
    },
    {
      accountNumber: "107 2 304020-4",
      blockedBalance: 2000,
      document: "11111111111111"
    },
    { accountNumber: "107 2 304020-5", document: "11111111111111" }
  ],
  balanceHistoryParams: {
    range: {
      from: "12/01/2020",
      to: "12/02/2020"
    },
    activePage: 1,
    limit: 60,
    offset: 0,
    onlyDaysWithTransaction: true
  },
  balanceAndEventsHistory: [history],
  hideValues: false,
  filterButtonFill: { fillType: "period" },
  loading: false,
  futureEventsHistory: futureEventsHistoryMock
};

describe("Statements printview", () => {
  let setState, useStateSpy, useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();

    store.getState.mockImplementation(() => ({
      userInfo: {
        tenants: [INDIVIDUAL]
      }
    }));
  });

  it("should match snapshot", () => {
    expect(
      shallow(<PrintView currentAccount={currentAccount} {...props} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    const newProps = {
      ...props,
      filterButtonFill: {
        fillType: "range",
        fillValue: { from: "24/04/2019", to: "24/04/2019" }
      }
    };
    expect(
      shallow(<PrintView currentAccount={currentAccount} {...newProps} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot without statements", () => {
    props.accounts = [
      {
        accountNumber: "107 2 304020-3",
        blockedBalance: 0,
        document: "11111111111111"
      }
    ];
    props.balanceAndEventsHistory = [];
    props.isEmptyEvents = true;
    expect(
      shallow(<PrintView currentAccount={currentAccount} {...props} />)
    ).toMatchSnapshot();
  });
});
