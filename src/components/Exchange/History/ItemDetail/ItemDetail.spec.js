import { configure, render } from "@testing-library/react";
import React from "react";
import ItemDetail from "./ItemDetail";
import { Context } from "../exchangeHistoryContext";

configure({ testIdAttribute: "data-test" });

const context = {
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
};

describe("Item Detail", () => {
  it("should render all fields", () => {
    const { getByTestId } = render(
      <Context.Provider value={context}>
        <ItemDetail />
      </Context.Provider>
    );

    expect(getByTestId("container")).toBeTruthy();
    expect(getByTestId("exchangeSummary")).toBeTruthy();
    expect(getByTestId("convertedValue")).toBeTruthy();
    expect(getByTestId("currency")).toBeTruthy();
    expect(getByTestId("value")).toBeTruthy();
    expect(getByTestId("beneficiaryLabel")).toBeTruthy();
    expect(getByTestId("beneficiaryName")).toBeTruthy();
    expect(getByTestId("beneficiaryAccount")).toBeTruthy();
    expect(getByTestId("beneficiaryBank")).toBeTruthy();
    expect(getByTestId("beneficiarySwift")).toBeTruthy();
    expect(getByTestId("debitedAccountLabel")).toBeTruthy();
    expect(getByTestId("debitedAccountNumber")).toBeTruthy();
    expect(getByTestId("amountDebited")).toBeTruthy();
    expect(getByTestId("originalCurrency")).toBeTruthy();
    expect(getByTestId("fxNatureLabel")).toBeTruthy();
    expect(getByTestId("fxNature")).toBeTruthy();
    expect(getByTestId("rateLabel")).toBeTruthy();
    expect(getByTestId("rate")).toBeTruthy();
    expect(getByTestId("feesLabel")).toBeTruthy();
    expect(getByTestId("fees")).toBeTruthy();
    expect(getByTestId("iofLabel")).toBeTruthy();
    expect(getByTestId("iof")).toBeTruthy();
    expect(getByTestId("vetLabel")).toBeTruthy();
    expect(getByTestId("vet")).toBeTruthy();
    expect(getByTestId("debitedDateLabel")).toBeTruthy();
    expect(getByTestId("debitedDate")).toBeTruthy();
    expect(getByTestId("creditedDateLabel")).toBeTruthy();
    expect(getByTestId("creditedDate")).toBeTruthy();
    expect(getByTestId("footerButtons")).toBeTruthy();
  });

  it("should not render any field when context is empty", () => {
    const emptyContext = {};

    const { queryByTestId } = render(
      <Context.Provider value={emptyContext}>
        <ItemDetail />
      </Context.Provider>
    );

    expect(queryByTestId("container")).toBeFalsy();
    expect(queryByTestId("exchangeSummary")).toBeFalsy();
    expect(queryByTestId("convertedValue")).toBeFalsy();
    expect(queryByTestId("currency")).toBeFalsy();
    expect(queryByTestId("value")).toBeFalsy();
    expect(queryByTestId("beneficiaryLabel")).toBeFalsy();
    expect(queryByTestId("beneficiaryName")).toBeFalsy();
    expect(queryByTestId("beneficiaryAccount")).toBeFalsy();
    expect(queryByTestId("beneficiaryBank")).toBeFalsy();
    expect(queryByTestId("beneficiarySwift")).toBeFalsy();
    expect(queryByTestId("debitedAccountLabel")).toBeFalsy();
    expect(queryByTestId("debitedAccountNumber")).toBeFalsy();
    expect(queryByTestId("amountDebited")).toBeFalsy();
    expect(queryByTestId("originalCurrency")).toBeFalsy();
    expect(queryByTestId("fxNatureLabel")).toBeFalsy();
    expect(queryByTestId("fxNature")).toBeFalsy();
    expect(queryByTestId("rateLabel")).toBeFalsy();
    expect(queryByTestId("rate")).toBeFalsy();
    expect(queryByTestId("feesLabel")).toBeFalsy();
    expect(queryByTestId("fees")).toBeFalsy();
    expect(queryByTestId("iofLabel")).toBeFalsy();
    expect(queryByTestId("iof")).toBeFalsy();
    expect(queryByTestId("vetLabel")).toBeFalsy();
    expect(queryByTestId("vet")).toBeFalsy();
    expect(queryByTestId("debitedDateLabel")).toBeFalsy();
    expect(queryByTestId("debitedDate")).toBeFalsy();
    expect(queryByTestId("creditedDateLabel")).toBeFalsy();
    expect(queryByTestId("creditedDate")).toBeFalsy();
    expect(queryByTestId("footerButtons")).toBeFalsy();
  });
});
