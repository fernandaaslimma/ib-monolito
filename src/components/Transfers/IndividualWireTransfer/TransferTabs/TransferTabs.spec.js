import React from "react";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import TransferTabs from "./TransferTabs";
import { InstanceContext } from "../IndividualWireTransfer";

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/validations/EFT", () => ({
  checkAccount: jest.fn(),
  checkAgency: jest.fn(),
  checkVerifyDigit: jest.fn()
}));

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  withI18n: component => component,
  isZhCN: () => false,
  isPtBR: () => false
}));

jest.mock("../../../../utils/getIconBankName", () => ({
  iconBankName: jest.fn(iconName => iconName)
}));

jest.mock("../Scheduler", () => {
  const mock = () => <div data-test="scheduler-mock">schedulerMock</div>;
  return mock;
});

let props = {
  tabs: [
    { title: "title1", dataTest: "tab1-mock" },
    { title: "title2", dataTest: "tab2-mock" }
  ],
  userInfo: {
    document: "33803233062",
    roles: [
      "ActivateAuthFactor",
      "ApproveAuthFactor",
      "CreateAuthCode",
      "ConsumeAuthCode",
      "CreateAuthFactor",
      "CreateAuthFactorActivated",
      "ApproveAuthCode",
      "GetUserAuthFactors",
      "GetCashAccount",
      "GetAllRecipientsForAccount",
      "CreateApproveEFT",
      "GetStatement",
      "GetEFT"
    ]
  },
  favoredData: {
    name: "name",
    bank: "bank",
    agency: "0674",
    account: "2007675",
    verifyDigit: "4"
  },
  bankList: [{ name: "bank1" }, { name: "bank2" }],
  loading: false,
  banksList: [
    {
      code: "231",
      ispb: "33485541",
      name: "231 BANCO BOAVISTA INTERATLANTICO S.A.",
      value: "BANCO BOAVISTA INTERATLANTICO S.A."
    }
  ],
  favoredAccounts: [
    {
      name: "Jusefina Matilde",
      document: "1111111112",
      accounts: [
        {
          cashAccountId: 3,
          number: 54321,
          verifyingDigit: "5",
          branch: 21324,
          type: "CC",
          domain: 0,
          bankIspb: "0",
          bankName: "BANCO DO BRASIL S.A.",
          bankCode: "1",
          maxAmount: 10000.0
        }
      ]
    }
  ],
  checkFavoredAccounts: jest.fn(),
  clearTabsData: jest.fn(),
  setStateValue: jest.fn(),
  handleUserFavoredData: jest.fn(),
  changeSelectedMenu: jest.fn(),
  handleIsFavoredContactList: jest.fn(),
  changeAndCheckBankName: jest.fn(),
  changeAndCheckField: jest.fn(),
  hangeAndCheckThirdFavoredFullname: jest.fn(),
  changeAndCheckThirdFavoredDocument: jest.fn(),
  handleIsThirdFavored: jest.fn()
};

const context = {
  state: {
    accountStatus: false,
    positionSelectedTab: 0,
    selectedPeopleData: {
      name: "leomar dias",
      document: "12345678-90"
    },
    selectedPeople: false,
    selectedAccounts: { number: 1, verifyingDigit: 5, type: "mock" },
    selectedPeopleAccountsData: [
      {
        cashAccountId: 3,
        number: 54321,
        verifyingDigit: "5",
        branch: 21324,
        type: "CC",
        domain: 0,
        bankIspb: "0",
        bankName: "BANCO DO BRASIL S.A.",
        bankCode: "1",
        maxAmount: 10000.0
      },
      {
        cashAccountId: 3,
        number: 54321,
        verifyingDigit: "5",
        branch: 21324,
        type: "CC",
        domain: 0,
        bankIspb: "0",
        bankName: "BANCO DO BRASIL S.A.",
        bankCode: "1",
        maxAmount: 10000.0
      }
    ],
    showFavoredAccounts: true
  },
  changeAccountStatus: jest.fn()
};

describe("TransferTabs component with tab one", () => {
  // beforeEach(() => {
  //   React.useContext = jest.fn(() => context);
  // });
  it("should click on linkChange", () => {
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );

    const linkChange = screen.getByTestId("changeFavored");
    fireEvent.click(linkChange);
    expect(props.setStateValue).toBeCalled();
  });
  it("should click on icon selectedPeople", () => {
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );
    const icon = screen.getByTestId("icon-selectedPeople");
    fireEvent.click(icon);
    expect(props.setStateValue).toBeCalled();
  });
  it("should appear CNPJ title", () => {
    context.state.selectedPeopleData.document = "XX.XXX.XXX/0001-XX";
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );
    const title = screen.getByTestId("CPForCNPJ");
    expect(title.textContent).toBe("CNPJ");
  });
  describe("with no favored accounts", () => {
    beforeEach(() => {
      props.favoredAccounts = [];
      context.state.showFavoredAccounts = false;
    });
    it("should appear default content component", () => {
      render(
        <InstanceContext.Provider value={context}>
          <TransferTabs {...props} />
        </InstanceContext.Provider>
      );
      expect(screen.getByTestId("emptyResultsFavoreds")).toBeTruthy();
    });
  });
});

describe("transferTabs component with tab two", () => {
  beforeEach(() => {
    context.state.positionSelectedTab = 1;
  });
  it("should change the recipientBank field", () => {
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );
    const recipientBank = screen.getByTestId("recipientBank-input");
    expect(fireEvent.change(recipientBank)).toBeTruthy();
  });
  it("should change the bankBranch input field", () => {
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );
    const bankBranch = screen.getByTestId("bankBranch");
    expect(fireEvent.change(bankBranch)).toBeTruthy();
  });

  it("should change the recipientBankAccount input field", async () => {
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );

    const recipientBankAccount = await screen.getByTestId(
      "recipientBankAccount"
    );

    expect(fireEvent.change(recipientBankAccount)).toBeTruthy();
  });

  it("should change the verifyDigit input field", () => {
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );
    const verifyDigit = screen.getByTestId("verifyDigit");
    expect(fireEvent.change(verifyDigit)).toBeTruthy();
  });
  it("should click on listSavedAccounts", () => {
    context.state.selectedPeople = true;
    render(
      <InstanceContext.Provider value={context}>
        <TransferTabs {...props} />
      </InstanceContext.Provider>
    );
    const listSavedAccounts = screen.getAllByTestId("listSavedAccounts")[0];
    fireEvent.click(listSavedAccounts);
    expect(props.setStateValue).toBeCalled();
  });

  describe("with CreateApproveThirdPartyEFT on roles list", () => {
    beforeEach(() => {
      props.userInfo.roles.push("CreateApproveThirdPartyEFT");
    });
    it("should click on ButtonNewAccountAm", () => {
      render(
        <InstanceContext.Provider value={context}>
          <TransferTabs {...props} />
        </InstanceContext.Provider>
      );
      const button = screen.getByTestId("ButtonNewAccountAm");
      fireEvent.click(button);
      expect(props.handleIsThirdFavored).toBeCalledWith(false);
      expect(props.setStateValue).toBeCalled();
    });
    it("should click on ButtonNewAccountOtherRecipient", () => {
      render(
        <InstanceContext.Provider value={context}>
          <TransferTabs {...props} />
        </InstanceContext.Provider>
      );
      const button = screen.getByTestId("ButtonNewAccountOtherRecipient");
      fireEvent.click(button);
      expect(props.handleIsThirdFavored).toBeCalledWith(true);
      expect(props.setStateValue).toBeCalled();
    });
  });
});
