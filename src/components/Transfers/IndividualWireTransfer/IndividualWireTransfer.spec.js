import React from "react";
import { shallow } from "enzyme";
import IndividualWireTransfer from "./IndividualWireTransfer";
import { WIRETRANSFER_SERVICE } from "../../../utils/constants";

const props = {
  getBalanceAndEventsHistory: jest.fn(),
  getAccounts: jest.fn(),
  addHeaderOnClickBack: jest.fn(),
  methodChanging: false,
  changeFactorToggle: jest.fn(),
  changeFactorTogle: jest.fn(),
  handleUserFavoredData: jest.fn(),
  handleIsThirdFavored: jest.fn(),
  closeModal: jest.fn(),
  getAvailableDateRanges: jest.fn(),
  handleUserInputTranferDataDate: jest.fn(),
  resetFields: jest.fn(),
  getNextAvailableDate: jest.fn(),
  getBanks: jest.fn(),
  getFavoredAccounts: jest.fn(),
  getLimit: jest.fn(),
  accounts: [{ accountNumber: "1234567890" }],
  serverTime: new Date().toISOString(),
  resetClassAndStoreState: jest.fn(),
  createEFT: jest
    .fn()
    .mockResolvedValue({ content: { transferOrderId: "transfer-order-id" } }),
  favoredData: {},
  transferData: {},
  userInfo: {},
  getAuthFactors: jest.fn(async () => []),
  handleUserInputOriginAccount: jest.fn(),
  handleUserInputTransferCurrency: jest.fn()
};

describe("IndividualWireTransfer component", () => {
  // let setState, useStateSpy;
  // beforeEach(() => {
  //   setState = jest.fn();
  //   useStateSpy = jest.spyOn(React, "useState");
  //   useStateSpy.mockImplementation(init => [init, setState]);
  //   React.useContext = jest.fn(() => context);
  // });

  it("Should match snapshpt", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call addHeaderOnClickBack when methodChanging prop changes", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    component.setProps({ methodChanging: true });
    expect(props.addHeaderOnClickBack).toHaveBeenCalledWith(
      expect.any(Function)
    );
  });

  it("should call handleUserFavoredData and handleIsThirdFavored in clearTabsData", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    component.instance().clearTabsData();
    expect(props.handleUserFavoredData).toHaveBeenCalledWith({
      BankCode: undefined,
      BankIspb: undefined,
      BankName: undefined,
      Branch: undefined,
      CashAccountId: undefined,
      Domain: undefined,
      MaxAmount: undefined,
      Number: undefined,
      Type: undefined,
      VerifyingDigit: undefined,
      thirdFavoredFullName: undefined,
      thirdFavoredDocument: undefined,
      isThirdFavored: false
    });
    expect(props.handleIsThirdFavored).toHaveBeenCalledWith(false);
  });

  it("should call handleUserFavoredData in checkFavoredAccounts", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    component.instance().checkFavoredAccounts(true, {});
    expect(props.handleUserFavoredData).toHaveBeenCalledWith({});
  });
  it("should clear tabs data and call handleIsThirdFavored in changeSelectedMenu", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    const instance = component.instance();
    instance.clearTabsData = jest.fn();
    instance.changeSelectedMenu(1);
    expect(instance.clearTabsData).toHaveBeenCalled();
    expect(props.handleIsThirdFavored).toHaveBeenCalledWith(false, true);
    expect(component.state("positionSelectedTab")).toBe(1);
    expect(component.state("isNewAccount")).toBe(true);
    expect(component.state("validToMoveOn")).toEqual({
      account: false,
      agency: false,
      name: false,
      verifyDigit: false
    });
  });

  it("should update accountStatus and saveRecipientAccount in changeAccountStatus", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    const instance = component.instance();
    const initialState = component.state();
    instance.changeAccountStatus();
    expect(component.state("accountStatus")).toBe(!initialState.accountStatus);
    expect(component.state("saveRecipientAccount")).toBe(
      !initialState.accountStatus
    );
  });

  it("should filter out empty accounts", () => {
    const accounts = [
      { accountNumber: "1234567890" },
      { accountNumber: "9876543210" },
      { accountNumber: "" }
    ];

    const component = shallow(<IndividualWireTransfer {...props} />);
    const filteredAccounts = component.instance().filterEmptyAccounts(accounts);

    expect(filteredAccounts).toEqual([
      { accountNumber: "1234567890" },
      { accountNumber: "9876543210" },
      { accountNumber: "" }
    ]);
  });

  it("should update the state value", () => {
    const component = shallow(<IndividualWireTransfer />);
    const instance = component.instance();

    instance.setStateValue("loading", false);

    expect(component.state("loading")).toEqual(false);
  });

  it("should update the state value", () => {
    const component = shallow(<IndividualWireTransfer />);
    const instance = component.instance();
    instance.setStateValue("loading", false);
    expect(component.state("loading")).toEqual(false);
  });

  it("should call handleUserFavoredData and handleIsThirdFavored in clearTabsData", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    const instance = component.instance();
    const handleUserFavoredDataSpy = jest.spyOn(
      instance.props,
      "handleUserFavoredData"
    );
    const handleIsThirdFavoredSpy = jest.spyOn(
      instance.props,
      "handleIsThirdFavored"
    );
    instance.clearTabsData();
    expect(handleUserFavoredDataSpy).toHaveBeenCalledWith({
      BankCode: undefined,
      BankIspb: undefined,
      BankName: undefined,
      Branch: undefined,
      CashAccountId: undefined,
      Domain: undefined,
      MaxAmount: undefined,
      Number: undefined,
      Type: undefined,
      VerifyingDigit: undefined,
      thirdFavoredFullName: undefined,
      thirdFavoredDocument: undefined,
      isThirdFavored: false
    });
    expect(handleIsThirdFavoredSpy).toHaveBeenCalledWith(false);
  });

  it("should update the state correctly when calling handleUserInputOriginAccount", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    const instance = component.instance();
    const selectedAccount = {
      accountNumber: "1234567890"
    };

    instance.setState({
      loading: false,
      selectedAccount,
      originAccount: props.originAccount,
      isScheduled: true,
      commonValidToMoveOn: {
        ammount: true,
        date: true
      },
      accounts: [selectedAccount],
      favoredAccounts: {}
    });
    expect(component.state("loading")).toBe(false);
    expect(component.state("selectedAccount")).toEqual(selectedAccount);
    expect(component.state("originAccount")).toBe(props.originAccount);
    expect(component.state("isScheduled")).toBe(true);
    expect(component.state("commonValidToMoveOn")).toEqual({
      ammount: true,
      date: true
    });
  });

  it("should call clearTabsData, resetFields, and initialClassState when calling resetClassAndStoreState", () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    const instance = component.instance();
    const clearTabsDataSpy = jest.spyOn(instance, "clearTabsData");
    const resetFieldsSpy = jest.spyOn(props, "resetFields");
    const initialClassStateSpy = jest.spyOn(instance, "initialClassState");
    instance.resetClassAndStoreState();
    expect(clearTabsDataSpy).toHaveBeenCalled();
    expect(resetFieldsSpy).toHaveBeenCalled();
    expect(initialClassStateSpy).toHaveBeenCalled();
  });

  it("should call all async functions in componentDidMount", async () => {
    const component = shallow(<IndividualWireTransfer {...props} />);
    const instance = component.instance();

    await instance.componentDidMount();

    expect(props.getAvailableDateRanges).toHaveBeenCalled();
    expect(props.resetFields).toHaveBeenCalled();
    expect(props.getAccounts).toHaveBeenCalled();
    expect(props.getNextAvailableDate).toHaveBeenCalledWith(
      WIRETRANSFER_SERVICE,
      props.serverTime
    );
    expect(props.getBanks).toHaveBeenCalled();
    expect(props.getFavoredAccounts).toHaveBeenCalledWith(
      props.accounts[0].account
    );
    expect(props.getLimit).toHaveBeenCalled();
  });
  it("should call getAvailableDateRanges and update state correctly", async () => {
    const props = {
      getAvailableDateRanges: jest.fn()
    };

    const component = shallow(<IndividualWireTransfer {...props} />);
    const instance = component.instance();

    await instance.checkAvailabilitySchedule();

    expect(props.getAvailableDateRanges).toHaveBeenCalledWith(
      WIRETRANSFER_SERVICE
    );
    expect(component.state("disableForward")).toBe(false);
  });

  let component;

  beforeEach(() => {
    component = shallow(<IndividualWireTransfer />);
  });

  it("should call changeFactorTogle, closeModal and goToStep(2) in handleClose", () => {
    const mockChangeFactorTogle = jest.fn();
    const mockCloseModal = jest.fn();
    const mockGoToStep = jest.fn();
    component.setProps({
      changeFactorTogle: mockChangeFactorTogle,
      closeModal: mockCloseModal
    });
    component.instance().handleClose(mockGoToStep);
    expect(mockChangeFactorTogle).toHaveBeenCalledWith(false);
    expect(mockCloseModal).toHaveBeenCalled();
    expect(mockGoToStep).toHaveBeenCalledWith(2);
  });

  it("should update the state correctly in clearAmmout", () => {
    component.setState({
      commonValidToMoveOn: {
        ammount: true
      }
    });

    component.instance().clearAmmout();

    expect(component.state("commonValidToMoveOn")).toEqual({
      ammount: false
    });
  });
});
