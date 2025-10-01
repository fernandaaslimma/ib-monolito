import React from "react";
import StatementsCardsOffShore from "./StatementsCardsOffShore";
import { configure, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false
}));

jest.mock("../../../../../utils/formatDate", () => ({
    getShortDateStringFromEpoch: () => "Wed, 2nd Dec"
}));

const formatTitle = jest.fn(() => "INITIAL DATE");
const maskValues = jest.fn(e => e);

jest.mock("moment", () => () => ({
    diff: (value, parameter) => {
        if (parameter === "years" && value === "2020-12-02T12:33:54.271Z") {
            return 0;
        }
        if (parameter === "days" && value === "2020-12-02T12:33:54.271Z") {
            return 0;
        }
        if (parameter === "days" && value === "2020-12-03T12:33:54.271Z") {
            return 1;
        }
        return 2;
    },
    format: () => "2019"
}));

const props = {
    maskValues,
    defaultCurrency: "USD",
    formatTitle,
    isFuture: false,
    item: {
        date: "2024-07-29",
        finalTotalAmount: 1000000,
        initialTotalAmount: 1200000,
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
};

describe("Statements Cards OffShore", () => {
    it("should match snapshot", () => {
        expect(render(<StatementsCardsOffShore {...props} />)).toMatchSnapshot();
    });
});

describe("Testing buttons click", () => {
    it("should components initial load", () => {
        const screen = render(<StatementsCardsOffShore {...props} />);

        expect(screen.getByTestId("cardDateOffShore")).toBeInTheDocument();
        expect(screen.getByTestId("amountValueOffShore")).toBeInTheDocument();
        expect(screen.getByTestId("cardStatementOffShore0")).toBeInTheDocument();
        expect(screen.getByTestId("cardTransactionTypeOffShore0")).toBeInTheDocument();
        expect(screen.getByTestId("cardValueOffShore0")).toBeInTheDocument();
        expect(screen.queryByTestId("BottomSheetTitleOffShore")).not.toBeInTheDocument();
    });

    it("should open modal AnimatedBottonSheet", () => {
        const screen = render(<StatementsCardsOffShore {...props} />);

        fireEvent.click(screen.getByTestId("cardStatementOffShore0"));
        expect(screen.getByTestId("BottomSheetTitleOffShore")).toBeInTheDocument();
    });

    it("should open and close modal AnimatedBottonSheet", () => {
        const screen = render(<StatementsCardsOffShore {...props} />);

        // Open Modal
        fireEvent.click(screen.getByTestId("cardStatementOffShore0"));
        expect(screen.getByTestId("BottomSheetTitleOffShore")).toBeInTheDocument();

        //Close Modal
        fireEvent.click(screen.getByTestId("closeVoucherButton"));
        expect(screen.queryByTestId("BottomSheetTitleOffShore")).not.toBeInTheDocument();
    });
});
