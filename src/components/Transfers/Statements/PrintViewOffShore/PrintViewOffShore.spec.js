import React from "react";
import { configure, render } from "@testing-library/react";
import PrintViewOffShore from "./PrintViewOffShore";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

describe("PrintViewOffShore Test", () => {

    const props = {
        isEmptyEvents: false,
        userName: "UnitTestOffShore",
        currentCurrency: "USD",
        balanceHistoryParams: {
            range: {
                from: "2024-06-03T12:23:56.178Z",
                to: "2024-08-02T12:23:56.179Z"
            },
            activePage: 1,
            limit: 90,
            offset: 0,
            onlyDaysWithTransaction: true
        },
        balanceAndEventsHistory: [
            {
                date: "2024-06-03",
                finalTotalAmount: 1000000,
                initialTotalAmount: 1000000,
                transactions: [
                    {
                        amount: 10000,
                        description: "TRANSFERENCIA",
                        currency: "USD",
                        counterparty: {
                            name: "Mattera Prates"
                        }
                    },
                    {
                        amount: -1000,
                        description: "REGISTRO DE CAPTACAO  EM PRE EXPORT",
                        currency: "USD",
                        counterparty: {}
                    }
                ]
            },
            {
                date: "2024-08-02",
                finalTotalAmount: 110000,
                initialTotalAmount: 1100000,
                transactions: [
                    {
                        amount: 10000,
                        description: "TRANSFERENCIA",
                        currency: "USD",
                        counterparty: {
                            name: "Mattera Prates"
                        }
                    },
                    {
                        amount: -1000,
                        description: "REGISTRO DE CAPTACAO  EM PRE EXPORT",
                        currency: "USD",
                        counterparty: {}
                    }
                ]
            }
        ],
        AccountOffShore: {
            accountNumber: "100014-5",
            currency: [
                {
                    code: "USD"
                },
                {
                    code: "CNY"
                }
            ],
            balances: [
                {
                    availableBalance: 989898,
                    date: "2024-07-22",
                    currency: "USD"
                },
                {
                    availableBalance: 989898,
                    date: "2024-07-22",
                    currency: "CNY"
                }
            ]
        }
    }

    it("Should render all components", () => {
        var screen = render(<PrintViewOffShore {...props} />);

        expect(screen.getByTestId("clientNameLabelTest")).toBeInTheDocument();
        expect(screen.getByTestId("clientNameTest")).toBeInTheDocument();
        expect(screen.getByTestId("accountNumberTest")).toBeInTheDocument();
        expect(screen.getByTestId("titleLabelTest")).toBeInTheDocument();
        expect(screen.getByTestId("rangeDateLabalTest")).toBeInTheDocument();
        expect(screen.queryByTestId("emptyDataTest")).not.toBeInTheDocument();
        expect(screen.getByTestId("footerLabelTest")).toBeInTheDocument();
        expect(screen.getByTestId("initialAmountTest")).toBeInTheDocument();
        expect(screen.getByTestId("lastAmountTest")).toBeInTheDocument();
        expect(screen.getByTestId("titleDateTest0")).toBeInTheDocument();        
    });

    it("Should render allcomponents when no have data", () => {
        var newPros = { ...props };
        newPros.isEmptyEvents = true;
        var screen = render(<PrintViewOffShore {...newPros} />);

        expect(screen.getByTestId("clientNameLabelTest")).toBeInTheDocument();
        expect(screen.getByTestId("clientNameTest")).toBeInTheDocument();
        expect(screen.getByTestId("accountNumberTest")).toBeInTheDocument();
        expect(screen.getByTestId("titleLabelTest")).toBeInTheDocument();
        expect(screen.getByTestId("rangeDateLabalTest")).toBeInTheDocument();
        expect(screen.getByTestId("emptyDataTest")).toBeInTheDocument();
        expect(screen.getByTestId("footerLabelTest")).toBeInTheDocument();
        expect(screen.getByTestId("initialAmountTest")).toBeInTheDocument();
        expect(screen.getByTestId("lastAmountTest")).toBeInTheDocument();
        expect(screen.queryByTestId("titleDateTest0")).not.toBeInTheDocument();
    });
})