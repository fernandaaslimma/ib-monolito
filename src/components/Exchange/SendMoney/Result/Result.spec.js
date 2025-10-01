import React from "react";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import Result from "./Result";
import "@testing-library/jest-dom";
import { InstanceContext } from "../sendMoneyContext";

configure({ testIdAttribute: "data-test" });

const cleanExchangeTransaction = jest.fn();
const cleanConfirmExchangeError = jest.fn();

describe("Result", () => {
  it("Should render result screen with success component", () => {
    const context = {
      exchangeData: {},
      exchangeError: null,
      cleanExchangeTransaction
    };
    React.useContext = jest.fn(() => context);

    expect(
      render(
        <InstanceContext.Provider value={context}>
          <Result />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should render result screen with error component", () => {
    const context = {
      exchangeData: {},
      exchangeError: true,
      cleanExchangeTransaction
    };

    expect(
      render(
        <InstanceContext.Provider value={context}>
          <Result />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should render Close button and call cleanExchangeTransaction function when Close button got tapped", () => {
    const context = {
      exchangeData: {},
      exchangeError: null,
      cleanExchangeTransaction,
      cleanConfirmExchangeError
    };

    render(
      <InstanceContext.Provider value={context}>
        <Result />
      </InstanceContext.Provider>
    );

    const closeBtn = screen.getByTestId("CloseBtn");

    expect(closeBtn).toBeInTheDocument();
    expect(closeBtn).toBeEnabled();

    fireEvent.click(closeBtn);
  });
});
