import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Context } from "./offshoreContext";
import OffshoreSelect from "./OffshoreSelect";

configure({ testIdAttribute: "data-test" });

const context = {
  isGlobalMode: false,
  setIsGlobalMode: jest.fn(),
  currentCoin: "USD",
  setCurrentCoin: jest.fn(),
  offshoreAccount: [
    {
      account: "100014-5",
      currencies: [
        {
          code: "USD"
        },
        {
          code: "CNY"
        }
      ]
    }
  ]
};

const contextGlobal = {
  isGlobalMode: true,
  setIsGlobalMode: jest.fn(),
  currentCoin: "USD",
  setCurrentCoin: jest.fn(),
  offshoreAccount: [
    {
      account: "100014-5",
      currencies: [
        {
          code: "USD"
        },
        {
          code: "CNY"
        }
      ]
    }
  ]
};

const contextGlobal2 = {
  isGlobalMode: true,
  setIsGlobalMode: jest.fn(),
  currentCoin: "USD",
  setCurrentCoin: jest.fn(),
  offshoreAccount: [
    {
      account: "100014-5",
      currencies: [
        {
          code: "USD"
        },
        {
          code: "CNY"
        },
        {
          code: "EUR"
        }
      ]
    }
  ]
};

const contextGlobal3 = {
  isGlobalMode: true,
  setIsGlobalMode: jest.fn(),
  currentCoin: "USD",
  setCurrentCoin: jest.fn(),
  offshoreAccount: null
};

const contextGlobal4 = {
  isGlobalMode: true,
  setIsGlobalMode: jest.fn(),
  currentCoin: "USD",
  setCurrentCoin: jest.fn(),
  offshoreAccount: []
};

jest.mock('../../../utils/roles', () => ({
  isCorporationUser: jest.fn().mockReturnValue(false)
}));

describe("Select offshore options", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });

  it("Should render offshoreOptions", () => {
    const { getByTestId } = render(
      <Context.Provider value={context}>
        <OffshoreSelect userInfo={{ roles: ["GlobalVision"] }} />
      </Context.Provider>
    );

    expect(getByTestId("offshoreOptions")).toBeInTheDocument();
    expect(getByTestId("BrasilFlagOption")).toBeInTheDocument();
    expect(getByTestId("GlobalFlagOption")).toBeInTheDocument();
  });

  it("Should not render offshoreOptions without userInfo", () => {
    const { queryByTestId } = render(
      <Context.Provider value={context}>
        <OffshoreSelect />
      </Context.Provider>
    );

    expect(queryByTestId("offshoreOptions")).not.toBeInTheDocument();
    expect(queryByTestId("BrasilFlagOption")).not.toBeInTheDocument();
    expect(queryByTestId("GlobalFlagOption")).not.toBeInTheDocument();
  });

  it("Should not render offshoreOptions without offshoreaccount", () => {
    const { queryByTestId } = render(
      <Context.Provider
        value={contextGlobal3}
        userInfo={{ roles: ["GlobalVision"] }}
      >
        <OffshoreSelect />
      </Context.Provider>
    );

    expect(queryByTestId("offshoreOptions")).not.toBeInTheDocument();
    expect(queryByTestId("BrasilFlagOption")).not.toBeInTheDocument();
    expect(queryByTestId("GlobalFlagOption")).not.toBeInTheDocument();
  });

  it("Should not render offshoreOptions without offshoreaccount length > 0", () => {
    const { queryByTestId } = render(
      <Context.Provider
        value={contextGlobal4}
        userInfo={{ roles: ["GlobalVision"] }}
      >
        <OffshoreSelect />
      </Context.Provider>
    );

    expect(queryByTestId("offshoreOptions")).not.toBeInTheDocument();
    expect(queryByTestId("BrasilFlagOption")).not.toBeInTheDocument();
    expect(queryByTestId("GlobalFlagOption")).not.toBeInTheDocument();
  });

  it("Should call setIsGlobalMode with both options", () => {
    const { getByTestId } = render(
      <Context.Provider value={context}>
        <OffshoreSelect userInfo={{ roles: ["GlobalVision"] }} />
      </Context.Provider>
    );

    const globalOption = getByTestId("GlobalFlagOption");

    fireEvent.click(globalOption);
    expect(context.setIsGlobalMode).toHaveBeenCalledWith(true);
    expect(context.setCurrentCoin).toHaveBeenCalledWith(context.offshoreAccount?.[0]?.currencies?.[0]?.code);
  });

  it("Should render offshoreCoins", () => {
    const { getByTestId, queryByTestId } = render(
      <Context.Provider value={contextGlobal}>
        <OffshoreSelect userInfo={{ roles: ["GlobalVision"] }} />
      </Context.Provider>
    );

    expect(getByTestId("offshoreCoins")).toBeInTheDocument();
    expect(getByTestId("USDCoin")).toBeInTheDocument();
    expect(getByTestId("CNYCoin")).toBeInTheDocument();
    expect(queryByTestId("EURCoin")).not.toBeInTheDocument();
  });

  it("Should call setCurrentCoin with ervery option", () => {
    const { getByTestId } = render(
      <Context.Provider value={contextGlobal2}>
        <OffshoreSelect userInfo={{ roles: ["GlobalVision"] }} />
      </Context.Provider>
    );

    const usdCoin = getByTestId("USDCoin");
    const cnyCoin = getByTestId("CNYCoin");
    const eurCoin = getByTestId("EURCoin");

    fireEvent.click(usdCoin);
    expect(contextGlobal2.setCurrentCoin).toHaveBeenCalledWith("USD");

    fireEvent.click(cnyCoin);
    expect(contextGlobal2.setCurrentCoin).toHaveBeenCalledWith("CNY");

    fireEvent.click(eurCoin);
    expect(contextGlobal2.setCurrentCoin).toHaveBeenCalledWith("EUR");
  });
});
