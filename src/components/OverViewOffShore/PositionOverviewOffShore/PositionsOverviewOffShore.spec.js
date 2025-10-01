import { configure, render } from "@testing-library/react";
import React from "react";
import PositionsOverviewOffShore from "./PositionsOverviewOffShore";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

let props = {
    loading: false,
    currentCoin: "USD",
    consolidatedPosition: [
        {
            grossBalance: 230570.67,
            currency: "USD",
            date: "2024-07-04",
            assetType: "TimeDeposit",
            assetTypeLabel: "Time Deposit",
            assets: [
                {
                    name: "TIME DEPOSIT BOCOM BBM 60",
                    notionalBalance: 68984.23,
                    accruedBalance: 77000,
                    accruedInterest: 500000,
                    yieldIndex: "SOFR",
                    yieldFixedRate: 12,
                    yieldLabel: "SOFR +",
                    applicationDate: "2024-08-04",
                    positionDate: "2024-08-10",
                    maturityDate: "2025-07-04",
                    portfolioShare: 21.96
                }
            ],
            name: "Time Deposit",
            route: "/investments/positions",
            portfolioShare: 65.77
        },
        {
            portfolioShare: 34.23,
            assetType: "CashAccount",
            name: "Conta Corrente",
            grossBalance: 120000,
            route: "/cashaccounts/statements",
            assets: [
                {
                    name: "Conta Corrente",
                    portfolioShare: 34.23,
                    accruedBalance: 120000
                }
            ]
        }
    ]
}

describe("PositionsOverviewOffShore", () => {
    it("Should render components", () => {

        var screen = render(<PositionsOverviewOffShore {...props} />)

        expect(screen.getByTestId("donutChatOffShore")).toBeInTheDocument();
        expect(screen.getByTestId("ConsolidatedPositionOffShore_main_card_0")).toBeInTheDocument();
    });

    it("Should not render components", () => {

        props.consolidatedPosition = undefined
        var screen = render(<PositionsOverviewOffShore {...props} />)

        expect(screen.queryByTestId("donutChatOffShore")).not.toBeInTheDocument();
    });
});