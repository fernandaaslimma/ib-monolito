import React from "react";
import { render, screen, fireEvent, configure } from "@testing-library/react";
import AssetsSelectionOrigin from "./AssetsSelectionOrigin";
import { InstanceContext } from "../portabilityRequestContext";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false,
    isPtBR: jest.fn()
}));

jest.mock("../../../../utils/redirect", () => ({
    redirect: jest.fn(),
}));

describe("AssetsSelectionOrigin Component", () => {
    const mockStepBack = jest.fn();
    const mockGoToStep = jest.fn();
    const mockRequestPortability = jest.fn();
    const mockCleanCustodianAccounts = jest.fn();

    const mockContextValue = {
        positions: [
            {
                assetCategory: "Listados",
                assetCode: "CRA0022003JT",
                assetType: "CRA",
                quantity: 200
            },
            {
                assetCategory: "Listados",
                assetCode: "CRE3322100FF",
                assetType: "CRI",
                quantity: 125
            },
            {
                assetCategory: "Outros",
                assetCode: "CRA0022003JT",
                assetType: "CRA",
                quantity: 200
            },
            {
                assetCategory: "Outros",
                assetCode: "CRE3322100FF",
                assetType: "CRI",
                quantity: 125
            }
        ],
        loading: false,
        selectedInstitutions: {
            originInstitution: { name: "Origin Institution" },
            destinationInstitution: { name: "Destination Institution" },
        },
        assetCategory: "Listados",
        custodianAccounts: {
            originAccount: "123456789",
            destinationAccount: "987654321",
        },
        company: {
            document: "72533865000710",
            corpId: 77870
        },
        isOriginBocom: true,
        requestPortability: mockRequestPortability,
        cleanCustodianAccounts: mockCleanCustodianAccounts,
        userInfo: {
            givenName: "Teste Renda Fixa",
            surname: "Resgate",
            tenantsMembers: [
                {
                    document: "93676313089",
                    corpId: 91
                }
            ],
            tenants: [
                "Individual"
            ],
            email: "teste_renda_fixa_resgate@bocombbm.com.br",
            tenantsCode: "93676313089",
            roles: [
                "GetInvestmentFunds",
                "GetCashAccount",
                "GetForm",
                "CreateAuthCode",
                "GetNotifications",
                "GetPersonRegistration",
                "GetPosition",
                "AcceptAgreementTerms",
                "GetIndexes",
                "ApproveAuthCode",
                "CreateFundTransaction",
                "GetStatement",
                "GetTransactions",
                "GetUserAuthFactors",
                "UpdatePersonRegistration",
                "GetFixedIncomeTransactions",
                "CreateFixedIncomeTransaction",
                "GetFixedIncomeProducts",
                "ApproveTransaction",
                "CreateTransaction",
                "RevokeConsents",
                "GetClientTermsNotifications",
                "GetConsents",
                "CreateConsents",
                "GetDocuments",
                "InsertRecipientForAccount",
                "ApproveConsents",
                "GetClientProfile",
                "CreateAuth",
                "ActivateAuthFactor",
                "GetContract",
                "GetOffshoreAccounts",
                "GetAllRecipientsForAccount",
                "SignContract",
                "ApproveAuthFactor",
                "GetTerms",
                "CreateRegistrato",
                "CreatePortability",
                "CreateAuthFactor",
                "SaveAnswer",
                "GetPortabilities",
                "GetInvestmentsOffshorePositions",
                "GetStatus",
                "CreateApproveEFT",
                "GlobalVision",
                "GetPortfolioPositionCashUpdated1",
                "CreateApproveThirdPartyEFT",
                "GetEFT",
                "GetPortfolioPositionCashUpdated",
                "ConfirmPersonRegistration",
                "DeclineConsents"
            ],
            portfolioCode: "93676313089",
            preferredLanguage: "pt-BR",
            impersonate: null,
            document: "93676313089",
            corpId: 91,
            id: "a5413600-0f7d-4af0-845d-b8a33b8ea724",
            employee: false,
            qualifiedInvestor: false,
            personId: "cdf15420-f77b-4683-9d40-cfe8a69134ba"
        },
    };

    const defaultProps = {
        stepBack: mockStepBack,
        goToStep: mockGoToStep,
        currentStep: 5
    };

    const renderComponent = (customContextValue = {}) =>
        render(
            <InstanceContext.Provider value={{ ...mockContextValue, ...customContextValue }}>
                <AssetsSelectionOrigin {...defaultProps} />
            </InstanceContext.Provider>
        );

    it("renders shimmer loading when loading is true", () => {
        renderComponent({ loading: true });

        expect(screen.getByTestId("shimmer-loading")).toBeInTheDocument();
    });

    it("renders the component with correct titles and descriptions", () => {
        renderComponent();

        expect(screen.getByTestId("OriginInstitutionName")).toHaveTextContent("Origin Institution");
        expect(screen.getByTestId("DestinationInstutionName")).toHaveTextContent("Destination Institution");
        expect(screen.getByTestId("PortabilitySelectAssetsTitle")).toHaveTextContent(
            "PORTABILITY_SELECT_ASSETS_TITLE"
        );
    });

    it("handles selecting and deselecting all assets", () => {
        renderComponent();

        const selectAllCheckbox = screen.getByTestId("checkboxAllAssets");
        fireEvent.click(selectAllCheckbox);

        const assetCheckboxes = screen.getAllByTestId("checkboxAssets");
        assetCheckboxes.forEach((checkbox) => {
            expect(checkbox.checked).toBe(true);
        });

        fireEvent.click(selectAllCheckbox);
        assetCheckboxes.forEach((checkbox) => {
            expect(checkbox.checked).toBe(false);
        });
    });

    it("handles selecting and deselecting individual assets", () => {
        renderComponent();

        const assetCheckboxes = screen.getAllByTestId("checkboxAssets");

        fireEvent.click(assetCheckboxes[0]);
        expect(assetCheckboxes[0].checked).toBe(true);

        fireEvent.click(assetCheckboxes[0]);
        expect(assetCheckboxes[0].checked).toBe(false);
    });

    it("handles updating the quantity to transfer for an asset", () => {
        renderComponent();

        const quantityInputs = screen.getAllByTestId("quantityToTransfer");

        fireEvent.change(quantityInputs[0], { target: { value: "50" } });
        expect(quantityInputs[0].value).toBe("50");

        fireEvent.change(quantityInputs[1], { target: { value: "100" } });
        expect(quantityInputs[1].value).toBe("100");
    });

    it("disables the Transfer button when no assets are selected or terms are not accepted", () => {
        renderComponent();

        const continueButton = screen.getByTestId("TransferButton");
        expect(continueButton).toBeDisabled();

        const acceptTermsCheckbox = screen.getByTestId("acceptPortCheckbox");
        fireEvent.click(acceptTermsCheckbox);

        expect(continueButton).toBeDisabled();
    });

    it("enables the Transfer button when assets are selected and terms are accepted", () => {
        renderComponent();

        const assetCheckboxes = screen.getAllByTestId("checkboxAssets");
        const continueButton = screen.getByTestId("TransferButton");

        fireEvent.click(assetCheckboxes[0]);

        expect(continueButton).not.toBeDisabled();
    });

    it("calls stepBack when Back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockStepBack).toHaveBeenCalled();
    });

    it("calls requestPortability and redirects when Transfer button is clicked", () => {
        const { redirect } = require("../../../../utils/redirect");

        renderComponent();

        const assetCheckboxes = screen.getAllByTestId("checkboxAssets");
        const continueButton = screen.getByTestId("TransferButton");

        fireEvent.click(assetCheckboxes[0]);
        fireEvent.click(continueButton);

        expect(mockRequestPortability).toHaveBeenCalledWith({
            id: null,
            investor: {
                documentNumber: "93676313089",
                documentType: "CPF",
                name: "Teste Renda Fixa Resgate",
            },
            channel: { id: 4 },
            originInstitution: { id: null },
            destinationInstitution: { id: null },
            totalPortabilityIndicator: false,
            portabilityItems: [
                {
                    assetCategory: "Listados",
                    assetCode: "CRA0022003JT",
                    assetType: "CRA",
                    totalTransferAssetIndicator: false,
                    transferQuantity: 200,
                    originAccount: "123456789",
                    destinationAccount: "987654321",
                },
            ],
        });

        expect(redirect).toHaveBeenCalledWith("/investments-portability");
    });

    it("handles resetting state when Back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockStepBack).toHaveBeenCalled();
    });

    it("handles resetting state when Transfer button is clicked", () => {
        renderComponent();

        const assetCheckboxes = screen.getAllByTestId("checkboxAssets");
        const continueButton = screen.getByTestId("TransferButton");

        fireEvent.click(assetCheckboxes[0]);
        fireEvent.click(continueButton);

        expect(mockRequestPortability).toHaveBeenCalled();
    });
});