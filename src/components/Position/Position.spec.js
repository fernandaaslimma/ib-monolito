import { configure, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Position from "./Position";
import { Context } from "../common/OffshoreSelect/offshoreContext";
import { setTranslations } from "../../utils/i18n";
import translations from "../../../i18n/en-US.json";

configure({ testIdAttribute: "data-test" });

const params = {
  userInfo: { roles: ["GlobalVision"] },
  offshorePosition: {
    investments: [
      {
        grossBalance: 100000,
        currency: "USD",
        date: "2024-07-04",
        assetType: "TimeDeposit",
        assetTypeLabel: "Time Deposit",
        assets: [
          {
            name: "TIME DEPOSIT BOCOM BBM 30",
            notionalBalance: 30000,
            accruedBalance: 33333.33,
            accruedInterest: 55000,
            yieldIndex: "SOFR",
            yieldFixedRate: 12,
            yieldLabel: "SOFR + 12.0%",
            applicationDate: "2024-07-04",
            positionDate: "2024-07-04",
            maturityDate: "2024-07-04"
          },
          {
            name: "TIME DEPOSIT BOCOM BBM 60",
            notionalBalance: 30000,
            accruedBalance: 33333.33,
            accruedInterest: 55000,
            yieldIndex: "SOFR",
            yieldFixedRate: 12,
            yieldLabel: "SOFR + 12.0%",
            applicationDate: "2024-07-04",
            positionDate: "2024-07-04",
            maturityDate: "2024-07-04"
          },
          {
            name: "TIME DEPOSIT BOCOM BBM 120",
            notionalBalance: 30000,
            accruedBalance: 33333.33,
            accruedInterest: 55000,
            yieldIndex: "SOFR",
            yieldFixedRate: 12,
            yieldLabel: "SOFR + 12.0%",
            applicationDate: "2024-07-04",
            positionDate: "2024-07-04",
            maturityDate: "2024-07-04"
          }
        ]
      }
    ]
  },
  accountsOffShore: [
    {
      balances: [
        {
          currency: "USD",
          availableBalance: 10000
        },
        {
          currency: "CNY",
          availableBalance: 10000
        }
      ]
    }
  ],
  getOffshorePosition: jest.fn(),
  getAccountsOffShore: jest.fn()
};
const params2 = {
  userInfo: { roles: ["GlobalVision"] },
  accountsOffShore: [
    {
      balances: [
        {
          currency: "USD",
          availableBalance: 10000
        }
      ]
    }
  ],
  getOffshorePosition: jest.fn(),
  getAccountsOffShore: jest.fn()
};

const context = {
  currentCoin: "USD"
};

const context2 = {
  currentCoin: "CNY"
};

describe("Offshore positions", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
    setTranslations(translations);
  });

  it("Should render summaryContainer", () => {
    const { getByTestId } = render(
      <Context.Provider value={context}>
        <Position {...params} />
      </Context.Provider>
    );

    setTimeout(() => {
      expect(getByTestId("summaryContainer")).toBeInTheDocument();
    }, 500);
  });

  it("Should not render summaryContainer if it doen't have any investment with the selected coin", () => {
    const { queryByTestId } = render(
      <Context.Provider value={context2}>
        <Position {...params} />
      </Context.Provider>
    );

    expect(queryByTestId("summaryContainer")).not.toBeInTheDocument();
  });

  it("Should not render summaryContainer without offshorePosition", () => {
    const { queryByTestId } = render(
      <Context.Provider value={context}>
        <Position {...params2} />
      </Context.Provider>
    );

    expect(queryByTestId("summaryContainer")).not.toBeInTheDocument();
  });
});
