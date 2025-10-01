import React from "react";
import { render, screen, fireEvent, configure } from "@testing-library/react";
import ReportCustodianAccounts from "./ReportCustodianAccounts";
import { InstanceContext } from "../portabilityRequestContext";
import { formatBankAccount } from "../../../../utils/formatNumber";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false
}));

jest.mock("../../../../utils/formatNumber", () => ({
    ...jest.requireActual("../../../../utils/formatNumber"),
    formatBankAccount: jest.fn((value) => value),
    extractNumber: jest.fn((value) => value.replace(/\D/g, "")),
}));

describe("ReportCustodianAccounts Component", () => {
    const mockStepBack = jest.fn();
    const mockStepForward = jest.fn();
    const mockSetCustodianAccounts = jest.fn();
    const mockGoToStep = jest.fn();
    const mockCleanCustodianAccounts = jest.fn();


    const mockContextValue = {
        loading: false,
        setCustodianAccounts: mockSetCustodianAccounts,
        cleanCustodianAccounts: mockCleanCustodianAccounts,
        custodianAccounts: {},
        selectedInstitutions: {
            originInstitution: { name: "Origin Institution" },
            destinationInstitution: { name: "Destination Institution" },
        },
    };

    const defaultProps = {
        goToStep: mockGoToStep,
        stepBack: mockStepBack,
        stepForward: mockStepForward,
        currentStep: 4
    };

    const renderComponent = (props = {}, customMockContext = {}) =>
        render(
            <InstanceContext.Provider value={{ ...mockContextValue, ...customMockContext }}>
                <ReportCustodianAccounts {...defaultProps} {...props} />
            </InstanceContext.Provider>
        );

    it("renders shimmer loading when loading is true", () => {
        renderComponent({}, { loading: true })
        expect(screen.getByTestId("shimmer-loading")).toBeInTheDocument();
    });

    it("renders the component with correct titles and descriptions", () => {
        renderComponent();

        expect(screen.getByTestId("OriginInstitutionTitle")).toHaveTextContent(
            "PORTABILITY_SOURCE_INSTITUTION_TITLE"
        );
        expect(screen.getByTestId("OriginInstitutionName")).toHaveTextContent("Origin Institution");
        expect(screen.getByTestId("DestinationInstutionTitle")).toHaveTextContent(
            "PORTABILITY_TARGET_INSTITUTION_TITLE"
        );
        expect(screen.getByTestId("DestinationInstutionName")).toHaveTextContent("Destination Institution");
        expect(screen.getByTestId("CustodiansAccountsTitle")).toHaveTextContent(
            "PORTABILITY_CUSTODIANS_ACCOUNTS_TITLE"
        );
        expect(screen.getByTestId("CustodiansAccountsDescription")).toHaveTextContent(
            "PORTABILITY_CUSTODIANS_ACCOUNTS_DESCRIPTION"
        );
    });

    it("updates origin account input value", () => {
        renderComponent({}, { assetCategory: "Listados" });

        const originAccountInput = screen.getByTestId("originAccount");
        fireEvent.change(originAccountInput, { target: { value: "123456789" } });

        expect(originAccountInput.value).toBe("123456789");
        expect(formatBankAccount).toHaveBeenCalledWith("123456789");
    });

    it("updates destination account input value", () => {
        renderComponent({}, { assetCategory: "Listados" });

        const destinationAccountInput = screen.getByTestId("destinationAccount");
        fireEvent.change(destinationAccountInput, { target: { value: "987654321" } });

        expect(destinationAccountInput.value).toBe("987654321");
        expect(formatBankAccount).toHaveBeenCalledWith("987654321");
    });

    it("disables the Continue button when inputs are invalid", () => {
        renderComponent({}, { assetCategory: "Listados" });

        const continueButton = screen.getByTestId("ContinueButton");
        expect(continueButton).toBeDisabled();

        const originAccountInput = screen.getByTestId("originAccount");
        const destinationAccountInput = screen.getByTestId("destinationAccount");

        fireEvent.change(originAccountInput, { target: { value: "12345" } });
        fireEvent.change(destinationAccountInput, { target: { value: "98765" } });

        expect(continueButton).toBeDisabled();
    });

    it("enables the Continue button when inputs are valid", () => {
        renderComponent({}, { assetCategory: "Listados" });

        const originAccountInput = screen.getByTestId("originAccount");
        const destinationAccountInput = screen.getByTestId("destinationAccount");
        const continueButton = screen.getByTestId("ContinueButton");

        fireEvent.change(originAccountInput, { target: { value: "123456789" } });
        fireEvent.change(destinationAccountInput, { target: { value: "987654321" } });

        expect(continueButton).not.toBeDisabled();
    });

    it("calls setCustodianAccounts and stepForward when Continue button is clicked", () => {
        renderComponent({}, { assetCategory: "Listados" });

        const originAccountInput = screen.getByTestId("originAccount");
        const destinationAccountInput = screen.getByTestId("destinationAccount");
        const continueButton = screen.getByTestId("ContinueButton");

        fireEvent.change(originAccountInput, { target: { value: "123456789" } });
        fireEvent.change(destinationAccountInput, { target: { value: "987654321" } });
        fireEvent.click(continueButton);

        expect(mockSetCustodianAccounts).toHaveBeenCalledWith({
            originAccount: "123456789",
            destinationAccount: "987654321",
        });
        expect(mockGoToStep).toHaveBeenCalled();
    });

    it("calls stepBack when Back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockStepBack).toHaveBeenCalled();
    });
});