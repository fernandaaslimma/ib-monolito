import React from "react";
import { shallow } from "enzyme";
import Account from "./Account";

const cashAccounts = [
  {
    cashAccountTransactions: [
      {
        amount: 78351.22,
        date: "2018-01-03",
        type: "CRÉDITO"
      },
      {
        amount: 4923.16,
        date: "2018-01-08",
        type: "CRÉDITO"
      },
      {
        amount: -87879.5,
        date: "2018-01-09",
        type: "DÉBITO"
      },
      {
        amount: 88038.51,
        date: "2018-01-22",
        type: "CRÉDITO"
      },
      {
        amount: -91651.78,
        date: "2018-01-22",
        type: "DÉBITO"
      }
    ],
    userCashAccount: "308642-4",
    accountOpenBalance: {
      date: "2018-04-01",
      openBalance: 6903.2,
      closeBalance: 6903.2
    },
    accountCloseBalance: {
      date: "2018-05-04",
      openBalance: 52.6,
      closeBalance: 52.6
    }
  }
];

describe("Account Transactions component", () => {
  let getUserCashAccountTransactions;

  beforeEach(() => {
    getUserCashAccountTransactions = jest.fn();
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Account
          getUserCashAccountTransactions={getUserCashAccountTransactions}
          cashAccounts={cashAccounts}
          loading
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <Account
          getUserCashAccountTransactions={getUserCashAccountTransactions}
          cashAccounts={cashAccounts}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getUserCashAccountTransactions", () => {
    shallow(
      <Account
        getUserCashAccountTransactions={getUserCashAccountTransactions}
        cashAccounts={cashAccounts}
      />
    );
    expect(getUserCashAccountTransactions).toHaveBeenCalledTimes(1);
  });

  it("should change loading state after update with new account list", () => {
    const shallowComponent = shallow(
      <Account
        getUserCashAccountTransactions={getUserCashAccountTransactions}
        isLoading
      />
    );

    shallowComponent.setProps({ cashAccounts });
    shallowComponent.update();

    expect(shallowComponent.state().isLoading).toBe(false);
  });
});
