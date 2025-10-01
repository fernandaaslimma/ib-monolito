import { configure, fireEvent, getByText, render } from "@testing-library/react";
import React from "react";
import DetailsPositionChartsOffShore from "./DetailsPositionChartsOffShore";
import "@testing-library/jest-dom";
import { Route, Router, Switch } from "react-router-dom";
import { INVESTMENT_POSITIONS, STATEMENTS_URL } from "../../../utils/constants";
import history from "../../../services/history";

configure({ testIdAttribute: "data-test" });

let props = {
    loading: true,
    assets: [
        {
            grossBalance: 225000,
            currency: "USD",
            date: "2024-07-04",
            assetType: "TimeDeposit",
            assetTypeLabel: "Time Deposit",
            assets: [
                {
                    name: "TIME DEPOSIT BOCOM BBM 60",
                    notionalBalance: 68984.23,
                    accruedBalance: 30000,
                    accruedInterest: 500000,
                    yieldIndex: "SOFR",
                    yieldFixedRate: 12,
                    yieldLabel: "SOFR + 12.0%",
                    applicationDate: "2024-08-04",
                    positionDate: "2024-08-10",
                    maturityDate: "2025-07-04",
                    portfolioShare: 8.7
                }
            ],
            name: "Time Deposit",
            route: "/investments/positions",
            portfolioShare: 65.22
        },
        {
            portfolioShare: 34.78,
            assetType: "CashAccount",
            name: "Conta Corrente",
            grossBalance: 120000,
            route: "/cashaccounts/statements",
            assets: [
                {
                    name: "Conta Corrente",
                    portfolioShare: 34.78,
                    accruedBalance: 120000
                }
            ]
        }
    ],
    hideValues: false
}

describe("DetailsPositionChartsOffShore Tests", () => {
    it("Should render components when load is true", () => {
        var screen = render(<DetailsPositionChartsOffShore {...props} />);

        expect(screen.getByTestId("ConsolidatedPositionOffShore_loading_0")).toBeInTheDocument();
        expect(screen.queryByTestId("ConsolidatedPositionOffShore_subCard_0")).not.toBeInTheDocument();
        expect(screen.queryByTestId("ConsolidatedPositionOffShore_subCard_default_loading")).not.toBeInTheDocument();
        expect(screen.queryByTestId("ConsolidatedPositionOffShore_main_card_0")).not.toBeInTheDocument();
        expect(screen.queryByTestId("chart_0")).not.toBeInTheDocument();
        expect(screen.queryByTestId("productName")).not.toBeInTheDocument();
        expect(screen.queryByTestId("showButtonDetailedOffShore")).not.toBeInTheDocument();
    });

    it("Should render components when load is false", () => {
        props.loading = false;
        var screen = render(<DetailsPositionChartsOffShore {...props} />);

        expect(screen.getByTestId("ConsolidatedPositionOffShore_main_card_0")).toBeInTheDocument();
        expect(screen.getByTestId("chart_0")).toBeInTheDocument();
        expect(screen.getByTestId("productName_0")).toBeInTheDocument();
        expect(screen.queryByTestId("ConsolidatedPositionOffShore_loading_0")).not.toBeInTheDocument();
        expect(screen.queryByTestId("ConsolidatedPositionOffShore_subCard_0")).not.toBeInTheDocument();
        expect(screen.queryByTestId("ConsolidatedPositionOffShore_subCard_default_loading")).not.toBeInTheDocument();
        expect(screen.queryByTestId("showButtonDetailedOffShore")).not.toBeInTheDocument();
    });

    it("Should open subcard when click main card", () => {
        props.loading = false;
        var screen = render(<DetailsPositionChartsOffShore {...props} />);

        const button = screen.getByTestId("buttonIcon_0");
        fireEvent.click(button);
        const subCard = screen.getByTestId("ConsolidatedPositionOffShore_subCard_0");

        expect(subCard).toBeInTheDocument();
        expect(getByText(subCard, "TIME DEPOSIT BOCOM BBM 60")).toBeInTheDocument();
    });

    it("Should close subcard when click main card", () => {
        props.loading = false;
        var screen = render(<DetailsPositionChartsOffShore {...props} />);

        const button = screen.getByTestId("buttonIcon_0");
        fireEvent.click(button);

        const subCard = screen.getByTestId("ConsolidatedPositionOffShore_subCard_0");
        expect(getByText(subCard, "TIME DEPOSIT BOCOM BBM 60")).toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.queryByTestId("ConsolidatedPositionOffShore_subCard_0")).not.toBeInTheDocument();
    });

    it("Should redirect to /investments/positions when click on the detail button", () => {
        props.loading = false;
        history.push('/');

        var screen = render(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={() => <DetailsPositionChartsOffShore {...props} />} />
                    <Route path={INVESTMENT_POSITIONS} component={() => <div data-test="redirectPage" />} />
                </Switch>
            </Router>
        );

        const buttonTimeDeposit = screen.getByTestId("buttonIcon_0");
        fireEvent.click(buttonTimeDeposit);

        const buttonRedirect = screen.getByTestId("showButtonDetailedOffShore");
        expect(buttonRedirect).toBeInTheDocument();
        fireEvent.click(buttonRedirect);

        expect(history.location.pathname).toBe(INVESTMENT_POSITIONS);
        expect(screen.getByTestId("redirectPage")).toBeInTheDocument();
    });

    it("Should redirect to /cashaccounts/statements when click on the detail button", () => {
        props.loading = false;
        history.push('/');

        var screen = render(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={() => <DetailsPositionChartsOffShore {...props} />} />
                    <Route path={STATEMENTS_URL} component={() => <div data-test="redirectPage" />} />
                </Switch>
            </Router>
        );

        const buttonTimeDeposit = screen.getByTestId("buttonIcon_1");
        fireEvent.click(buttonTimeDeposit);

        const buttonRedirect = screen.getByTestId("showButtonDetailedOffShore");
        expect(buttonRedirect).toBeInTheDocument();
        fireEvent.click(buttonRedirect);

        expect(history.location.pathname).toBe(STATEMENTS_URL);
        expect(screen.getByTestId("redirectPage")).toBeInTheDocument();
    });
});