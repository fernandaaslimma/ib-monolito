import { configure, render } from "@testing-library/react";
import React from "react";
import ExchangeList from "./ExchangeList";
import { Context } from "../exchangeHistoryContext";

configure({ testIdAttribute: "data-test" });

const context = {
  getExchangeTransactios: jest.fn(),
  exchangeTransactions: [
    {
      currentItem: {
        origin: {
          account: {
            number: "3095385"
          },
          settleDate: "2023-12-10",
          currency: "BRL",
          total: 16328.95
        },
        target: {
          name: "João da Silva",
          account: {
            number: "100033-1",
            bank: {
              name: "BANCO BOCOM BBM S.A. - NASSAU BRANC",
              swift: "BBINBSNS"
            }
          },
          settleDate: "2023-12-12",
          currency: "USD",
          total: 3318.93
        },
        transactionDate: "2023-12-12",
        fxNature: {
          description: "Disponibilidade para o exterior"
        },
        ratesAndFees: {
          currencyConversionRate: 4.85,
          totalSpread: 12.0,
          totalIof: 6.73,
          totalEffectiveRate: 4.92
        }
      }
    }
  ],
  setCurrentItem: jest.fn()
};

describe("Exchange List", () => {
  it("should render all fields", () => {
    const { getByTestId } = render(
      <Context.Provider value={context}>
        <ExchangeList />
      </Context.Provider>
    );

    expect(getByTestId("filterButtonContainer")).toBeTruthy();
    expect(getByTestId("shimmerLoading")).toBeTruthy();
  });
});
