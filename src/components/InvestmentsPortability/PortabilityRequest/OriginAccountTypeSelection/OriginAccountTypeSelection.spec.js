import React from "react";
import { render, screen, fireEvent, configure } from "@testing-library/react";
import OriginAccountTypeSelection from "./OriginAccountTypeSelection";
import { InstanceContext } from "../portabilityRequestContext";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false
}));

describe("OriginAccountTypeSelection Component", () => {
    const mockStepBack = jest.fn();
    const mockGoToStep = jest.fn();
    const mockSetAssetCategory = jest.fn();
    const mockSetIsOriginBocom = jest.fn();

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
        setAssetCategory: mockSetAssetCategory,
        userInfo: {
            givenName: "givenName",
            surname: "surname",
            tenantsMembers: [
                {
                    document: "1233456789078"
                }
            ],
            tenants: ["Individual"],
            email: "mail@mail.com",
            impersonate: {
                name: "Teste Nome",
                idp: "microsoft",
                user: "testenome@mail.com"
            },
            roles: ["SignContract", "GetStatus"],
            preferredLanguage: "en-US"
        },
        isOriginBocom: true,
        setIsOriginBocom: mockSetIsOriginBocom,
    };

    const renderComponent = (props = {}) =>
        render(
            <InstanceContext.Provider value={mockContextValue}>
                <OriginAccountTypeSelection stepBack={mockStepBack} goToStep={mockGoToStep} {...props} currentStep={3} />
            </InstanceContext.Provider>
        );

    it("renders shimmer loading when loading is true", () => {
        render(
            <InstanceContext.Provider value={{ ...mockContextValue, loading: true }}>
                <OriginAccountTypeSelection stepBack={mockStepBack} goToStep={mockGoToStep} currentStep={3} />
            </InstanceContext.Provider>
        );
        expect(screen.getByTestId("shimmer-loading")).toBeInTheDocument();
    });

    it("renders the component with correct titles and descriptions", () => {
        renderComponent();

        expect(screen.getByTestId("SourceAccountTypeTitle")).toHaveTextContent(
            "PORTABILITY_SOURCE_ACCOUNT_TYPE_TITLE"
        );
        expect(screen.getByTestId("SourceAccountTypeDescription")).toHaveTextContent(
            "PORTABILITY_SOURCE_ACCOUNT_TYPE_DESCRIPTION"
        );
    });

    it("renders account type cards and empty state cards correctly", () => {
        renderComponent();

        const accountTypeTitles = screen.getAllByTestId("AccountTypeTitle");
        const accountTypeDescriptions = screen.getAllByTestId("AccountTypeDescription");
        expect(accountTypeTitles).toHaveLength(3);
        expect(accountTypeDescriptions).toHaveLength(3);

        const emptyStateCards = screen.getAllByTestId("EmptyPositionCard");
        expect(emptyStateCards).toHaveLength(1);
    });

    it("calls goToStep and setAssetCategory when clicking on a card with assets", () => {
        renderComponent();

        const clickableIcons = screen.getAllByTestId("nextButton");
        fireEvent.click(clickableIcons[0]);

        expect(mockGoToStep).toHaveBeenCalledWith(4);
        expect(mockSetAssetCategory).toHaveBeenCalledWith("Listados");
    });

    it("calls stepBack when Back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockGoToStep).toHaveBeenCalled();
    });
});