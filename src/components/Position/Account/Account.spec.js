import React from "react";
import { shallow } from "enzyme";
import Account from "./Account";

const accounts = [
  {
    id: 123,
    accountNumber: "123 123-1",
    date: "12/12",
    blockedBalance: 123123,
    availableBalance: 123123,
    totalBalance: 123123
  }
];

describe("Account component", () => {
  let getAccountsMock;

  beforeEach(() => {
    getAccountsMock = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(<Account getAccounts={getAccountsMock} />);
    expect(component.instance().state).toEqual({
      isEmpty: false
    });
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(<Account getAccounts={getAccountsMock} loading={true} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot without accounts", () => {
    expect(
      shallow(<Account getAccounts={getAccountsMock} loading={false} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with accounts", () => {
    expect(
      shallow(
        <Account
          getAccounts={getAccountsMock}
          loading={false}
          accounts={accounts}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getAccountsMock", () => {
    shallow(
      <Account
        getAccounts={getAccountsMock}
        loading={false}
        accounts={accounts}
      />
    );
    expect(getAccountsMock).toHaveBeenCalledTimes(1);
  });
});
