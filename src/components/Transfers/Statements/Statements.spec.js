import React from "react";
import { shallow } from "enzyme";
import Statements from "./Statements";
import HideableValue from "../../common/HideableValue";
import { Line, StyledButton } from "./styles";
import { CNAB_ROLE, CORPORATION, INDIVIDUAL } from "../../../utils/constants";
import store from "../../../utils/store";

jest.mock("html-to-image", () => ({
  toJpeg: () => Promise.resolve()
}));

jest.mock("../../../utils/store", () => ({
  getState: jest.fn()
}));

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

jest.mock("../../../utils/roles", () => ({
  isCorporationUser: () => true,
  isIndividualUser: () => false
}));

jest.mock("../../../utils/downloadFile", () => ({
  downloadFromBase64: jest.fn()
}));

const history = {
  eventsSumAmount: "600",
  blockedBalance: 0,
  availableBalance: "400",
  totalBalance: "600",
  availableAmount: "41111",
  blockedAmount: 2,
  events: [
    {
      absAmount: 1912.13,
      amount: -1912.13,
      date: "2021-03-24",
      description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
      type: "Débito",
      settled: true,
      eventClass: "TransferenciaEnviada",
      id: 12435889,
      counterParty: {
        accountId: 0,
        accountVerifyingDigit: "string",
        accountNumber: "string",
        accountBranch: "string",
        accountType: "string",
        bankISPB: "string",
        bankCode: "string",
        partyName: "Jane Lucia",
        partyDocument: "string"
      }
    },
    {
      absAmount: 12.38,
      amount: -12.38,
      date: "2021-03-24",
      description: "TRANSFERENCIA ENTRE CONTAS DE DIFERENTES TITULARIDADES",
      type: "Débito",
      settled: true,
      eventClass: "TransferenciaEnviada",
      id: 12435889,
      counterParty: {
        accountId: 0,
        accountVerifyingDigit: "string",
        accountNumber: "string",
        accountBranch: "string",
        accountType: "string",
        bankISPB: "string",
        bankCode: "string",
        partyName: "Jane Lucia",
        partyDocument: "string"
      }
    },
    {
      absAmount: 120.41,
      amount: -120.41,
      date: "2021-03-24",
      description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
      type: "Débito",
      settled: true,
      eventClass: "TransferenciaEnviada",
      id: 12435889,
      counterParty: {
        accountId: 0,
        accountVerifyingDigit: "string",
        accountNumber: "string",
        accountBranch: "string",
        accountType: "string",
        bankISPB: "string",
        bankCode: "string",
        partyName: "Jane Lucia",
        partyDocument: "string"
      }
    }
  ]
};

const historyWithBlockedBalance = {
  eventsSumAmount: "600",
  blockedBalance: 0,
  availableBalance: "400",
  totalBalance: "600",
  events: []
};

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

const props = {
  getBalanceAndEventsHistory: jest.fn(),
  getAccounts: jest.fn(),
  getFutureEventsHistory: jest.fn(),
  openModal: jest.fn(),
  closeModal: jest.fn(),
  getTransfers: jest.fn(),
  openChangeAccountModal: jest.fn(),
  accounts: [
    {
      accountNumber: "107 2 304020-3",
      blockedBalance: 0,
      document: "11111111111111",
      name: "John Smith"
    },
    {
      accountNumber: "107 2 304020-4",
      blockedBalance: 2000,
      document: "11111111111111",
      name: "John Smith"
    },
    {
      accountNumber: "107 2 304020-5",
      document: "11111111111111",
      name: "John Smith"
    }
  ],
  userInfo: { corpId: 1111111, tenants: [CORPORATION], roles: [CNAB_ROLE] },
  balanceHistoryParams: {
    range: {
      from: "",
      to: ""
    },
    activePage: 1,
    limit: 60,
    offset: 0,
    onlyDaysWithTransaction: true
  },
  balanceAndEventsHistory: [history],
  futureEventsHistory: futureEventsHistoryMock,
  banksList: [
    {
      code: "231",
      name: "231 BANCO BOAVISTA INTERATLANTICO S.A.",
      ispb: "33485541",
      value: "BANCO BOAVISTA INTERATLANTICO S.A."
    },
    {
      code: "237",
      name: "237 BANCO BRADESCO S.A.",
      ispb: "60746948",
      value: "BANCO BRADESCO S.A."
    },
    {
      code: "291",
      name: "291 BANCO DE CREDITO NACIONAL S.A.",
      ispb: "60898723",
      value: "BANCO DE CREDITO NACIONAL S.A."
    },
    {
      code: "48",
      name: "48 Banco Bemge",
      ispb: "60811723",
      value: "Banco Bemge"
    },
    {
      code: "47",
      name: "47 BANCO DO ESTADO DE SERGIPE S.A.",
      ispb: "13009717",
      value: "BANCO DO ESTADO DE SERGIPE S.A."
    },
    {
      code: "392",
      name: "392 BANCO MERCANTIL FINASA S.A.",
      ispb: "61065421",
      value: "BANCO MERCANTIL FINASA S.A."
    }
  ]
};

const newProps = JSON.parse(JSON.stringify(props));
newProps.balanceAndEventsHistory = [historyWithBlockedBalance];

global.scrollTo = jest.fn();

afterEach(() => {
  global.innerWidth = 1024;
  global.dispatchEvent(new Event("resize"));
});

describe("Statements", () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules(); // clears the cache
    process.env = { ...OLD_ENV }; // make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  store.getState.mockImplementation(() => ({
    userInfo: {
      tenants: [CORPORATION],
      roles: [CNAB_ROLE]
    }
  }));

  it("should match snapshot", () => {
    store.getState.mockImplementationOnce(() => ({
      userInfo: {
        tenants: [INDIVIDUAL],
        roles: [CNAB_ROLE]
      }
    }));
    expect(shallow(<Statements {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with mobile env true", () => {
    process.env.__SHOW_STATEMENTS_CONTENT_MOBILE__ = true;
    global.innerWidth = 320;
    global.dispatchEvent(new Event("resize"));
    expect(shallow(<Statements {...props} />)).toMatchSnapshot();
  });

  it("Should match snapshot with empty state", async () => {
    const shallowComponent = shallow(<Statements {...props} />);
    shallowComponent.setState({ isEmpty: true });

    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should match snapshot with future events", async () => {
    const shallowComponent = shallow(<Statements {...props} />);
    shallowComponent.setState({ isEmptyFutureEvents: false });

    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should resetStates", async () => {
    const shallowComponent = shallow(<Statements {...props} />).instance();

    shallowComponent.resetStates();

    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should Change Value Visibility", () => {
    const wrapper = shallow(
      <Statements {...props}>
        <HideableValue hide={true} value={25} />
      </Statements>
    ).instance();

    wrapper.changeValuesVisibility({ hideValues: false });

    expect(wrapper.state.hideValues).toBe(false);
  });

  it("Should call openModal to change account", () => {
    global.__SHOW_STATEMENTS_CONTENT_MOBILE__ = false;
    global.innerWidth = 300;

    store.getState.mockImplementationOnce(() => ({
      userInfo: {
        tenants: [CORPORATION],
        roles: [CNAB_ROLE]
      }
    }));

    const wrapper = shallow(<Statements {...props} />);

    wrapper.setState({
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      hideValues: true
    });

    wrapper.setState({
      filteredAccounts: props.accounts,
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      hideValues: true
    });

    wrapper
      .find(StyledButton)
      .at(0)
      .simulate("click");

    expect(props.openModal).toHaveBeenCalled;
  });

  it("Should call handleClose and let the status of current selected account without saving", () => {
    const wrapper = shallow(<Statements {...props} />).instance();
    const spy = jest.spyOn(wrapper, "setState");

    wrapper.setState({
      filteredAccounts: props.accounts,
      printContext: false,
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      }
    });

    wrapper.handleClose();

    expect(spy).toHaveBeenCalledWith({
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      filteredAccounts: [
        {
          accountNumber: "107 2 304020-3",
          blockedBalance: 0,
          document: "11111111111111",
          name: "John Smith"
        },
        {
          accountNumber: "107 2 304020-4",
          blockedBalance: 2000,
          document: "11111111111111",
          name: "John Smith"
        },
        {
          accountNumber: "107 2 304020-5",
          document: "11111111111111",
          name: "John Smith"
        }
      ],
      loading: false,
      printContext: false
    });
  });

  it("Should call changeAccountAndCloseModal and change the current selected account to be currentAccount", () => {
    const wrapper = shallow(<Statements {...props} />).instance();
    const spy = jest.spyOn(wrapper, "setState");

    wrapper.setState({
      filteredAccounts: props.accounts,
      printContext: false,
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      }
    });

    wrapper.changeAccountAndCloseModal();

    expect(spy).toHaveBeenCalledWith({
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      filteredAccounts: [
        {
          accountNumber: "107 2 304020-3",
          blockedBalance: 0,
          document: "11111111111111",
          name: "John Smith"
        },
        {
          accountNumber: "107 2 304020-4",
          blockedBalance: 2000,
          document: "11111111111111",
          name: "John Smith"
        },
        {
          accountNumber: "107 2 304020-5",
          document: "11111111111111",
          name: "John Smith"
        }
      ],
      loading: false,
      printContext: false
    });
  });

  it("Should call buildRows", () => {
    const wrapper = shallow(<Statements {...props} />);

    wrapper.setState({
      printContext: false,
      loading: false
    });

    wrapper.instance().buildRows(props.accounts);
  });

  it("Should getPendingOperationsNumber", () => {
    const wrapper = shallow(
      <Statements {...props}>
        <HideableValue hide={true} value={25} />
      </Statements>
    ).instance();

    expect(wrapper.getPendingOperationsNumber(futureEventsHistoryMock)).toEqual(
      4
    );
  });

  it("Should call onFilterMobile", () => {
    const wrapper = shallow(
      <Statements {...props}>
        <HideableValue hide={true} value={25} />
      </Statements>
    );
    wrapper.instance().onFilterMobile({ range: "", filterButtonFill: true });
    expect(wrapper.state()).toEqual({
      balanceHistoryParams: {
        activePage: 1,
        limit: 90,
        offset: 0,
        onlyDaysWithTransaction: true,
        range: ""
      },
      closingModalContext: false,
      currentAccount: null,
      filterButtonFill: true,
      filteredAccounts: [],
      futureTransactions: [],
      hideValues: true,
      isBottomSheet: false,
      isEmptyEvents: false,
      isEmptyFutureEvents: true,
      loading: true,
      loadingCnab: false,
      loadingVoucher: false,
      printContext: false,
      selectedAccount: {},
      selectedAccountIndex: 0,
      transferContent: { receiverInfo: {}, transferInfo: {}, transferType: "" }
    });
  });
  it("Should reserStates", () => {
    const wrapper = shallow(<Statements {...props} />);

    wrapper.instance().resetStates();
  });
  it("Should change Account", () => {
    const wrapper = shallow(<Statements {...props} />);

    wrapper.instance().changeAccount({ target: { value: "107 2 304020-4" } });
    expect(props.getAccounts).toHaveBeenCalled;
  });

  it("Should call onFilter method", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.onFilter({ loading: true });
    expect(wrapper.state.loading).toBe(true);
  });

  it("Should invoke fetchStatementsData", async () => {
    shallow(<Statements {...props} />);

    await props.getBalanceAndEventsHistory();
    expect(props.getBalanceAndEventsHistory).toHaveBeenCalled();
  });

  it("Should change page and scroll to top", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.changePage(3);
    expect(global.scrollTo).toHaveBeenCalled();
  });

  it("Should unmount", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.componentWillUnmount();
    expect(wrapper._isMounted).toBeFalsy();
  });
});

describe("Functionalities", () => {
  it("Should call printScreen method with false hideValues", () => {
    store.getState.mockImplementation(() => ({
      userInfo: {
        tenants: [CORPORATION],
        roles: [CNAB_ROLE]
      }
    }));
    const wrapper = shallow(<Statements {...props} />);

    const spy = jest.spyOn(wrapper.instance(), "printScreen");

    const number = "number";
    const upper = number.toUpperCase();

    wrapper.setState({
      filteredAccounts: props.accounts,
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      label: { upper },
      hideValues: false
    });
    const downloadButton = wrapper.find('Button[dataTest="downloadPdfButton"]');

    downloadButton.simulate("click");

    expect(spy).toHaveBeenCalled();
  });

  it("Should call printScreen method with true hideValues", () => {
    store.getState.mockImplementation(() => ({
      userInfo: {
        tenants: [CORPORATION]
      }
    }));
    const wrapper = shallow(<Statements {...props} />);

    const spy = jest.spyOn(wrapper.instance(), "printScreen");

    const number = "number";
    const upper = number.toUpperCase();

    wrapper.setState({
      filteredAccounts: props.accounts,
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      label: { upper },
      hideValues: true
    });

    const downloadButton = wrapper.find('Button[dataTest="downloadPdfButton"]');

    downloadButton.simulate("click");

    expect(spy).toHaveBeenCalled();
  });
});

describe("Download Cnab", () => {
  const wrapper = shallow(<Statements {...props} />);
  store.getState.mockImplementationOnce(() => ({
    userInfo: {
      tenants: [CORPORATION]
    }
  }));
  it("Should call downloadCnab method", () => {
    wrapper.setState({
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      hideValues: true
    });

    const spy = jest.spyOn(wrapper.instance(), "downloadCnab");

    const downloadButton = wrapper.find(
      'Button[dataTest="downloadCnabButton"]'
    );

    downloadButton.simulate("click");

    expect(spy).toHaveBeenCalled();
  });
  it("Should call triggerModal to render transfer detail", () => {
    const wrapper = shallow(<Statements {...props} />);

    const spy = jest.spyOn(wrapper.instance(), "triggerModal");
    wrapper.setState({
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      hideValues: true
    });

    wrapper.setState({
      filteredAccounts: props.accounts,
      loading: false,
      currentAccount: {
        accountNumber: "107 2 304020-1",
        document: "11111111111111",
        name: "name"
      },
      hideValues: true
    });

    wrapper
      .find(Line)
      .at(1)
      .simulate("click");

    expect(spy).toHaveBeenCalledWith(
      props.balanceAndEventsHistory[0].events[0]
    );
  });

  it("Should call triggerModal to render transfer detail", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.renderVoucher();
    expect(props.openModal).toHaveBeenCalled();
  });

  it("Should call formatValues", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.formatValues(12345);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call injectCurrency", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.injectCurrency(12345);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call maskValues", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.maskValues("+ R$ 12345");
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call maskValues", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.onFilterMobile("+ R$ 12345");
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call getPendingOperationsNumber", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.getPendingOperationsNumber(props.futureEventsHistory);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call resetStates", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.resetStates();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call resetStates", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.shareAction();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call renderVoucherContent", () => {
    const wrapper = shallow(<Statements {...props} />).instance();

    wrapper.renderVoucherContent();
    expect(wrapper).toMatchSnapshot();
  });
});
