import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import StatementsOffShoreView from "./StatementsOffShoreView";
import { Context } from "../../../common/OffshoreSelect/offshoreContext";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false,
    getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

describe("StatementsOffShoreView Test", () => {

    let props = {
        changeAccountOffShore: jest.fn(),
        changeValuesVisibility: jest.fn(),
        hideValues: false,
        onFilter: jest.fn(),
        filterButtonFill: undefined,
        resetStates: jest.fn(),
        loading: false,
        printContext: false,
        isGlobalMode: true,
        isEmptyEventsOffShore: false,
        userInfo: null,
        balanceAndEventsHistoryOffShore: [
            {
                date: "2024-09-02",
                initialTotalAmount: 7300,
                finalTotalAmount: 50,
                transactions: [
                    {
                        amount: 7800,
                        description: "TRANSFERENCIA",
                        currency: "USD",
                        counterparty: {
                            name: "Mattera Prates"
                        }
                    },
                    {
                        amount: -500,
                        description: "REGISTRO DE CAPTACAO  EM PRE EXPORT",
                        currency: "USD",
                        counterparty: {}
                    }
                ]
            },
            {
                date: "2024-08-07",
                initialTotalAmount: 7300,
                finalTotalAmount: 20000,
                transactions: [
                    {
                        amount: 7800,
                        description: "TRANSFERENCIA",
                        currency: "USD",
                        counterparty: {
                            name: "Mattera Prates"
                        }
                    },
                    {
                        amount: -500,
                        description: "REGISTRO DE CAPTACAO  EM PRE EXPORT",
                        currency: "USD",
                        counterparty: {}
                    }
                ]
            }
        ],
        selectedAccountOffShore: {
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
                    availableBalance: 120000,
                    date: "",
                    currency: "USD"
                },
                {
                    availableBalance: 120000,
                    date: "",
                    currency: "CNY"
                }
            ]
        },
        accountsOffShore: [
            {
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
                        availableBalance: 120000,
                        date: "",
                        currency: "USD"
                    },
                    {
                        availableBalance: 120000,
                        date: "",
                        currency: "CNY"
                    }
                ]
            },
            {
                accountNumber: "100021-6",
                currency: [
                    {
                        code: "EUR"
                    },
                    {
                        code: "USD"
                    }
                ],
                balances: [
                    {
                        availableBalance: 90000,
                        date: "",
                        currency: "EUR"
                    },
                    {
                        availableBalance: 90000,
                        date: "",
                        currency: "USD"
                    }
                ]
            },
            {
                accountNumber: "100888-9",
                currency: [
                    {
                        code: "USD"
                    }
                ],
                balances: [
                    {
                        availableBalance: 40000,
                        date: "",
                        currency: "USD"
                    }
                ]
            }
        ],
        printScreen: jest.fn()
    }

    const context = { currentCoin: "USD" }

    it("Should render components when Load Is False", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...props} />
            </Context.Provider>
        );

        expect(screen.getByTestId("accountNumberTest")).toBeInTheDocument();
        expect(screen.getByTestId("accountBalanceTest")).toBeInTheDocument();
        expect(screen.getByTestId("filterButtonOffShore")).toBeInTheDocument();
        expect(screen.getByTestId("downloadPdfButton")).toBeInTheDocument();
        expect(screen.queryByTestId("hideView")).toBeInTheDocument();
        expect(screen.queryByTestId("emptyStatementsMobile")).not.toBeInTheDocument();
        expect(screen.queryByTestId("emptyResultsMobile")).not.toBeInTheDocument();
        expect(screen.queryByTestId("bottonSheetOffShore")).not.toBeInTheDocument();
        expect(screen.queryByTestId("iconView")).not.toBeInTheDocument();
    });

    it("Should render components when statements is empity", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...{ ...props, balanceAndEventsHistoryOffShore: [], isEmptyEventsOffShore: true }} />
            </Context.Provider>
        );

        expect(screen.getByTestId("accountNumberTest")).toBeInTheDocument();
        expect(screen.getByTestId("accountBalanceTest")).toBeInTheDocument();
        expect(screen.getByTestId("filterButtonOffShore")).toBeInTheDocument();
        expect(screen.getByTestId("downloadPdfButton")).toBeInTheDocument();
        expect(screen.queryByTestId("emptyStatementsMobile")).toBeInTheDocument();
        expect(screen.queryByTestId("hideView")).toBeInTheDocument();
        expect(screen.queryByTestId("emptyResultsMobile")).not.toBeInTheDocument();
        expect(screen.queryByTestId("bottonSheetOffShore")).not.toBeInTheDocument();
        expect(screen.queryByTestId("iconView")).not.toBeInTheDocument();
    });

    it("Should render components When Results Filter is Empity", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...{
                    ...props,
                    filterButtonFill: { fillType: "period" },
                    isEmptyEventsOffShore: true
                }} />
            </Context.Provider>
        );

        expect(screen.getByTestId("accountNumberTest")).toBeInTheDocument();
        expect(screen.getByTestId("accountBalanceTest")).toBeInTheDocument();
        expect(screen.getByTestId("filterButtonOffShore")).toBeInTheDocument();
        expect(screen.getByTestId("downloadPdfButton")).toBeInTheDocument();
        expect(screen.queryByTestId("emptyResultsMobile")).toBeInTheDocument();
        expect(screen.queryByTestId("emptyStatementsMobile")).not.toBeInTheDocument();
        expect(screen.queryByTestId("bottonSheetOffShore")).not.toBeInTheDocument();
        expect(screen.queryByTestId("hideView")).toBeInTheDocument();
        expect(screen.queryByTestId("iconView")).not.toBeInTheDocument();
    });

    it("Should disable download PDF button", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...{ ...props, isEmptyEventsOffShore: true, balanceAndEventsHistoryOffShore: [] }} />
            </Context.Provider>
        );

        var buttonDownloadPDF = screen.getByTestId("downloadPdfButton");

        expect(buttonDownloadPDF).toBeInTheDocument();
        expect(buttonDownloadPDF).toHaveAttribute("disabled");
    });

    it("Should call the print method when PDF button is cliked", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...props} />
            </Context.Provider>
        );

        var buttonDownloadPDF = screen.getByTestId("downloadPdfButton");

        expect(buttonDownloadPDF).toBeInTheDocument();
        fireEvent.click(buttonDownloadPDF);
        expect(props.printScreen).toHaveBeenCalled();
    });

    it("Should change view when hideValues is false", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...props} />
            </Context.Provider>
        );

        var buttonIconView = screen.getByTestId("hideView");

        expect(buttonIconView).toBeInTheDocument();
        expect(screen.queryByTestId("iconView")).not.toBeInTheDocument();
        fireEvent.click(buttonIconView);
        expect(props.changeValuesVisibility).toHaveBeenCalled();
    });

    it("Should change view when hideValues is true", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...{ ...props, hideValues: true }} />
            </Context.Provider>
        );

        var buttonIconView = screen.getByTestId("iconView");

        expect(buttonIconView).toBeInTheDocument();
        expect(screen.queryByTestId("hideView")).not.toBeInTheDocument();
        fireEvent.click(buttonIconView);
        expect(props.changeValuesVisibility).toHaveBeenCalled();
    });

    it("Should open modal select account when click on iconArrowClick", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...props} />
            </Context.Provider>
        );

        var arrowClick = screen.getByTestId("iconArrowClick");

        expect(arrowClick).toBeInTheDocument();
        fireEvent.click(arrowClick);

        expect(screen.getByTestId("RadioWrapperTest")).toBeInTheDocument();
        expect(screen.getByTestId("Account_modal_0")).toBeInTheDocument();
        expect(screen.getByTestId("SaveAccountButton")).toBeInTheDocument();
    });

    it("Should open modal select account when click on filter button", () => {

        var screen = render(
            <Context.Provider value={context}>
                <StatementsOffShoreView {...props} />
            </Context.Provider>
        );

        var filterButton = screen.getByTestId("filterButtonOffShore");

        expect(filterButton).toBeInTheDocument();
        fireEvent.click(filterButton);

        expect(screen.getByTestId("labelSelectPeriodTest")).toBeInTheDocument();
        expect(screen.getByTestId("filterDateFrom")).toBeInTheDocument();
        expect(screen.getByTestId("filterDateTo")).toBeInTheDocument();
    });
});