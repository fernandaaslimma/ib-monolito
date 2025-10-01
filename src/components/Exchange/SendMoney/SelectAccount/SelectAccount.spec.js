import React from "react";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import SelectAccount from "./SelectAccount";
import { InstanceContext } from "../sendMoneyContext";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

const context = {
  accounts: [
    {
      account: 6455,
      accountNumber: "107 2 304020-3",
      totalBalance: 600000009.01,
      blockedBalance: 0,
      availableBalance: 600000009.01,
      verifyingDigit: "3",
      bankISPB: "15114366",
      date: "2018-05-04",
      bankCode: "107",
      branch: 2,
      number: 304020,
      name: "Masisol Consultoria e vendas LTDA.",
      document: "53328506110111",
      holderId: 20155
    },
    {
      account: 6456,
      accountNumber: "108 2 304021-4",
      totalBalance: 456.01,
      blockedBalance: 0,
      availableBalance: 456.01,
      verifyingDigit: "4",
      bankISPB: "15114366",
      date: "2018-05-04",
      bankCode: "108",
      branch: 2,
      number: 304021,
      name: "cliente2741",
      document: "53328506110112",
      holderId: 20156
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
      bankCode: "231",
      branch: 2,
      number: 304020,
      name: "cliente2740",
      document: "53328506110113",
      holderId: 20155
    }
  ],
  getAccounts: jest.fn(),
  setSelectedAccount: jest.fn(),
  cleanExchangeTransactionsSimulation: jest.fn()
};

const mockStepForWard = jest.fn();

function returnProps(value) {
  return {
    currentStep: value,
    stepForward: mockStepForWard
  };
}

describe("SelectAccount Unit Tests", () => {
  it("Should match Snapshot With Loading is False", () => {
    expect(
      render(
        <InstanceContext.Provider value={context}>
          <SelectAccount {...returnProps(1)} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should match Snapshot With Loading is true", () => {
    expect(
      render(
        <InstanceContext.Provider value={context}>
          <SelectAccount {...returnProps(2)} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Initial Load With Loading is False", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SelectAccount {...returnProps(1)} />
      </InstanceContext.Provider>
    );

    expect(screen.getByTestId("TitleSelectAccount")).toBeInTheDocument();
    expect(screen.getByTestId("SubTitleSelectAccount")).toBeInTheDocument();
    expect(screen.getByTestId("DropDownSelectAccount")).toBeInTheDocument();
    expect(screen.getByTestId("BackButtonSelectAccount")).toBeInTheDocument();
    expect(
      screen.getByTestId("ContinueButtonSelectAccount")
    ).toBeInTheDocument();
  });

  it("Should Be Disabled Button Continue", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SelectAccount />
      </InstanceContext.Provider>
    );

    const buttonContinue = screen.getByTestId("ContinueButtonSelectAccount");

    fireEvent.click(buttonContinue);

    expect(buttonContinue).toBeInTheDocument();
    expect(buttonContinue).toBeDisabled();
    expect(mockStepForWard).toHaveBeenCalledTimes(0);
  });

  it("Should Back To Click Button Back", () => {
    const backMock = jest.spyOn(window.history, "back");

    render(
      <InstanceContext.Provider value={context}>
        <SelectAccount />
      </InstanceContext.Provider>
    );

    const buttonBack = screen.getByTestId("BackButtonSelectAccount");

    fireEvent.click(buttonBack);

    expect(buttonBack).toBeInTheDocument();
    expect(buttonBack).toBeEnabled();
    expect(backMock).toHaveBeenCalled();
  });

  it("Should Enable Button Select Account in DropDown", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SelectAccount />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("DropDownSelectAccount");
    const buttonContinue = screen.getByTestId("ContinueButtonSelectAccount");

    fireEvent.click(DropDown);

    const item = screen.getByText("107 2 304020-3");

    fireEvent.click(item);

    expect(item).toBeInTheDocument();
    expect(buttonContinue).toBeInTheDocument();
    expect(buttonContinue).toBeEnabled();
  });

  it("Should show account money span", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SelectAccount />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("DropDownSelectAccount");

    fireEvent.click(DropDown);

    const item = screen.getByText("107 2 304020-3");

    fireEvent.click(item);

    const spanMoney = screen.getByTestId("AccountMoney");

    expect(item).toBeInTheDocument();
    expect(spanMoney).toBeInTheDocument();
  });

  it("Should To Click Button Continue", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SelectAccount {...returnProps(1)} />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("DropDownSelectAccount");

    fireEvent.click(DropDown);

    const item = screen.getByText("107 2 304020-3");
    const buttonContinue = screen.getByTestId("ContinueButtonSelectAccount");

    fireEvent.click(item);
    fireEvent.click(buttonContinue);

    expect(item).toBeInTheDocument();
    expect(buttonContinue).toBeInTheDocument();
    expect(mockStepForWard).toHaveBeenCalled();
  });
});
