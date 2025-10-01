import React from "react";
import { shallow } from "enzyme";
import Dashboard, { isDisabled } from "./Dashboard";
import { stub } from "sinon";
import * as login from "../../../services/login";
import * as getNavigator from "../../../utils/getNavigator";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => true
}));

global.__SHOW_WIRETRANSFER_CONTENT_MOBILE__ = "";

const props = {
  openModal: jest.fn(),
  openToastr: jest.fn(),
  createEFT: jest.fn(),
  getAccounts: jest.fn(),
  getApprovers: jest.fn(),
  getTransfers: jest.fn(),
  resetFields: jest.fn(),
  resetSignLoading: jest.fn(),
  handleUserInputOriginAccount: jest.fn(),
  handleUserInputTranferDataDate: jest.fn(),
  getAvailableDateRanges: jest.fn(),
  getAuthFactors: jest.fn(),
  sendAuthFactors: jest.fn(),
  createAuthCode: jest.fn(),
  pendencies: {
    content: []
  },
  userInfo: {
    roles: ["role"]
  },
  transferData: {
    date: "",
    value: ""
  },
  favoredData: {
    favored: "",
    CNPJ: "",
    bank: "",
    agency: "",
    account: ""
  },
  originAccount: {
    number: "123456789",
    availableBalance: ""
  },
  availableDateRanges: [{}],
  accounts: [
    {
      account: 1,
      accountNumber: "123456789",
      blockedBalance: 7,
      availableBalance: 6,
      totalBalance: 5,
      date: "12/12",
      document: "",
      name: ""
    }
  ]
};

describe("Dashboard", () => {
  it("should match snapshot", () => {
    expect(shallow(<Dashboard {...props} />)).toMatchSnapshot();
  });

  it("should call resetSignLoading", () => {
    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper).toBeDefined();

    expect(props.resetSignLoading).toHaveBeenCalled();
  });

  it("should call componentDidMount", () => {
    const componentDidMountSpy = jest.spyOn(
      Dashboard.prototype,
      "componentDidMount"
    );

    shallow(<Dashboard {...props} />);
    expect(componentDidMountSpy.calledOnce);
  });

  it("should call componentDidMount with single account", () => {
    const componentDidMountSpy = jest.spyOn(
      Dashboard.prototype,
      "componentDidMount"
    );

    const newProps = {
      accounts: [
        {
          accountNumber: "123456789"
        }
      ]
    };

    const allProps = { ...props, ...newProps };

    shallow(<Dashboard {...allProps} />);
    expect(componentDidMountSpy.calledOnce);
  });

  it("should call componentDidUpdate and checkAvailableDate when props are changed", () => {
    jest.spyOn(Dashboard.prototype, "componentDidUpdate");
    jest.spyOn(Dashboard.prototype, "checkAvailableDate");

    const wrapper = shallow(<Dashboard {...props} />);

    wrapper.instance().toggleEftCreation();
    wrapper.setProps({
      availableDateRanges: [
        {
          startTime: 1558951200000,
          endTime: 1558972800000
        }
      ]
    });

    expect(Dashboard.prototype.componentDidUpdate.calledOnce);
    expect(Dashboard.prototype.checkAvailableDate.calledOnce);
  });

  it("should disable the create button as long as the form is incomplete", () => {
    expect(
      isDisabled(false, false, false, false, false, false, false, false, false)
    ).toBe(true);
    expect(
      isDisabled(false, true, false, true, false, true, false, false, false)
    ).toBe(true);
    expect(
      isDisabled(true, true, true, true, true, true, true, false, true)
    ).toBe(false);
  });

  it("should call resetFields on component unmount", () => {
    jest.spyOn(Dashboard.prototype, "componentWillUnmount");
    const wrapper = shallow(<Dashboard {...props} />);
    wrapper.unmount();

    expect(Dashboard.prototype.componentWillUnmount.calledOnce);
    expect(props.resetFields).toHaveBeenCalled();
  });

  it("should use preflight if the browser is InternetExplorer", () => {
    stub(login, "preflightForInternetExplorer");
    stub(getNavigator, "isMsBrowser").callsFake(() => {
      return true;
    });

    jest.spyOn(Dashboard.prototype, "componentWillMount");

    shallow(<Dashboard {...props} />);

    expect(Dashboard.prototype.componentWillMount.calledOnce);
    expect(getNavigator.isMsBrowser.calledOnce);
    expect(login.preflightForInternetExplorer.calledOnce);
    expect(props.resetSignLoading).toHaveBeenCalled();

    login.preflightForInternetExplorer.restore();
    getNavigator.isMsBrowser.restore();
  });

  it("should properly display confirmation modal on displayConfirmModal function", () => {
    const wrapper = shallow(<Dashboard {...props} />);

    wrapper.setProps({
      transferData: {
        date: "12/12/2020",
        value: "R$ 2.000,00"
      },
      favoredData: {
        favored: "teste favored",
        CNPJ: "1111111111111",
        bank: "teste bank",
        agency: "teste agency",
        account: "teste account"
      },
      originAccount: {
        number: "123456789",
        availableBalance: "R$ 1.482,00"
      },
      userInfo: {
        givenName: "Yuri",
        surname: "Ramos",
        document: "11111111111"
      }
    });

    wrapper.instance().displayConfirmModal();

    expect(props.openModal.calledOnce);
  });

  it("should toggle isNewAccount state when calling handleNewAccount", () => {
    const wrapper = shallow(<Dashboard {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.state("isNewAccount")).toBe(true);
    instance.handleNewAccount();
    expect(wrapper.state("isNewAccount")).toBe(false);

    instance.handleNewAccount();
    expect(wrapper.state("isNewAccount")).toBe(true);
  });

  it("should set state appropriately when favoredAccounts is empty", async () => {
    const accountId = "12345";
    const props = {
      getFavoredAccounts: jest.fn()
    };
    const wrapper = shallow(<Dashboard {...props} />);
    const instance = wrapper.instance();
    await instance.getListFavoredAccounts(accountId);
    expect(props.getFavoredAccounts).toHaveBeenCalledWith(accountId);
    expect(wrapper.state("isEmptyListFavored")).toBe(true);
  });
});
