import React from "react";
import { render, screen, fireEvent, configure } from "@testing-library/react";
import AssetsSelectionDestination from "./AssetsSelectionDestination";
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

describe("AssetsSelectionDestination Component", () => {
    beforeAll(() => {
        if (!Array.prototype.at) {
            Array.prototype.at = function (index) {
                index = Math.trunc(index) || 0;
                if (index < 0) index += this.length;
                if (index < 0 || index >= this.length) return undefined;
                return this[index];
            };
        }
    });

    afterAll(() => {
        delete Array.prototype.at;
    });

    const mockRequestPortability = jest.fn();
    const mockGoToStep = jest.fn();
    const mockCleanCustodianAccounts = jest.fn();

    const mockContextValue = {
        loading: false,
        selectedInstitutions: {
            originInstitution: { name: "Origin Institution", id: "1" },
            destinationInstitution: { name: "Destination Institution", id: "2" },
        },
        assetCategory: "Listados",
        custodianAccounts: {
            originAccount: "123456789",
            destinationAccount: "987654321",
        },
        requestPortability: mockRequestPortability,
        cleanCustodianAccounts: mockCleanCustodianAccounts,
        company: {
            document: "72533865000710",
            corpId: 77870
        },
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
        goToStep: mockGoToStep,
        currentStep: 6,
    };

    const renderComponent = (customContext = {}, customProps = {}) =>
        render(
            <InstanceContext.Provider value={{ ...mockContextValue, ...customContext }}>
                <AssetsSelectionDestination {...defaultProps} {...customProps} />
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

    it("handles adding a new asset when the Add Line button is clicked", () => {
        renderComponent();

        const assetInput = screen.getByTestId("assetCode");
        fireEvent.change(assetInput, { target: { value: "CRA001" } });

        const quantityInput = screen.getByTestId("quantityToTransfer");
        fireEvent.change(quantityInput, { target: { value: "50" } });

        const addLineButton = screen.getByTestId("addLineButton");
        fireEvent.click(addLineButton);

        const quantityInputs = screen.getAllByTestId("quantityToTransfer");

        expect(quantityInputs.length).toBe(2);
    });

    it("handles deleting an asset when the trash icon is clicked", () => {
        renderComponent();

        const assetInput = screen.getByTestId("assetCode");
        fireEvent.change(assetInput, { target: { value: "CRA001" } });

        const quantityInput = screen.getByTestId("quantityToTransfer");
        fireEvent.change(quantityInput, { target: { value: "50" } });

        const trashIcons = screen.getAllByTestId("trashcan");
        fireEvent.click(trashIcons[0]);

        const quantityInputs = screen.getAllByTestId("quantityToTransfer");

        expect(quantityInputs.length).toBe(1);
    });

    it("handles updating the quantity to transfer for an asset", () => {
        renderComponent();

        const quantityInputs = screen.getAllByTestId("quantityToTransfer");

        fireEvent.change(quantityInputs[0], { target: { value: "50" } });
        expect(quantityInputs[0].value).toBe("50");

        fireEvent.change(quantityInputs[0], { target: { value: "100" } });
        expect(quantityInputs[0].value).toBe("100");
    });

    it("handles updating the asset code for an asset", () => {
        renderComponent();

        const assetInputs = screen.getAllByTestId("assetCode");

        fireEvent.change(assetInputs[0], { target: { value: "CRA001" } });
        expect(assetInputs[0].value).toBe("CRA001");
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

        const quantityInputs = screen.getAllByTestId("quantityToTransfer");
        fireEvent.change(quantityInputs[0], { target: { value: "50" } });

        const assetInputs = screen.getAllByTestId("assetCode");
        fireEvent.change(assetInputs[0], { target: { value: "CRA001" } });

        const continueButton = screen.getByTestId("TransferButton");
        expect(continueButton).not.toBeDisabled();
    });

    it("calls goToStep with the correct step when Back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockGoToStep).toHaveBeenCalledWith(4);
    });

    it("submits the form when Transfer button is clicked", () => {
        renderComponent();

        const quantityInputs = screen.getAllByTestId("quantityToTransfer");
        fireEvent.change(quantityInputs[0], { target: { value: "50" } });

        const assetInputs = screen.getAllByTestId("assetCode");
        fireEvent.change(assetInputs[0], { target: { value: "CRA001" } });

        const continueButton = screen.getByTestId("TransferButton");
        fireEvent.click(continueButton);

        expect(mockRequestPortability).toHaveBeenCalledWith({
            id: null,
            investor: {
                documentNumber: "93676313089",
                documentType: "CPF",
                name: "Teste Renda Fixa Resgate",
            },
            channel: { id: 3 },
            originInstitution: { id: "1" },
            destinationInstitution: { id: "2" },
            totalPortabilityIndicator: false,
            portabilityItems: [
                {
                    assetCategory: "Listados",
                    assetCode: "CRA001",
                    assetType: null,
                    totalTransferAssetIndicator: false,
                    transferQuantity: 50,
                    originAccount: "123456789",
                    destinationAccount: "987654321",
                },
            ],
        });
    });

    it("resets the state when Back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockGoToStep).toHaveBeenCalledWith(4);
    });
});