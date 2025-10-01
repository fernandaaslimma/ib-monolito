import React from "react";
import { render, screen, fireEvent, configure } from "@testing-library/react";
import OriginCompanySelection from "./OriginCompanySelection";
import { InstanceContext } from "../portabilityRequestContext";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false
}));

describe("OriginCompanySelection Component", () => {
    const mockStepBack = jest.fn();
    const mockStepForward = jest.fn();
    const mockSetIsOriginBocom = jest.fn();
    const mockGetPositions = jest.fn();
    const mockSetCompany = jest.fn();

    const mockContextValue = {
        loading: false,
        userInfo: {
            tenantsMembers: [
                { document: "12345678000123" },
                { document: "98765432000198" },
            ],
        },
        isOriginBocom: true,
        setIsOriginBocom: mockSetIsOriginBocom,
        getPositions: mockGetPositions,
        setCompany: mockSetCompany,
    };

    const renderComponent = (props = {}) =>
        render(
            <InstanceContext.Provider value={mockContextValue}>
                <OriginCompanySelection stepBack={mockStepBack} stepForward={mockStepForward} {...props} currentStep={2} />
            </InstanceContext.Provider>
        );

    it("renders shimmer loading when loading is true", () => {
        render(
            <InstanceContext.Provider value={{ ...mockContextValue, loading: true }}>
                <OriginCompanySelection stepBack={mockStepBack} stepForward={mockStepForward} currentStep={2} />
            </InstanceContext.Provider>
        );
        expect(screen.getByTestId("shimmer-loading")).toBeInTheDocument();
    });

    it("renders the component with correct titles and descriptions when isOriginBocom is true", () => {
        renderComponent();

        expect(screen.getByTestId("CompanySelectionTitle")).toHaveTextContent(
            "PORTABILITY_COMPANY_SELECTION_TITLE"
        );
        expect(screen.getByTestId("CompanySelectionDescription")).toHaveTextContent(
            "PORTABILITY_COMPANY_SELECTION_DESCRIPTION"
        );
    });

    it("renders the component with correct titles and descriptions when isOriginBocom is false", () => {
        render(
            <InstanceContext.Provider value={{ ...mockContextValue, isOriginBocom: false }}>
                <OriginCompanySelection stepBack={mockStepBack} stepForward={mockStepForward} currentStep={2} />
            </InstanceContext.Provider>
        );

        expect(screen.getByTestId("CompanySelectionTitle")).toHaveTextContent(
            "PORTABILITY_OTHER_COMPANY_SELECTION_TITLE"
        );
        expect(screen.getByTestId("CompanySelectionDescription")).toHaveTextContent(
            "PORTABILITY_OTHER_COMPANY_SELECTION_DESCRIPTION"
        );
    });

    it("renders the list of tenantsMembers correctly", () => {
        renderComponent();

        const accountTypeTitles = screen.getAllByTestId("AccountTypeTitle");
        expect(accountTypeTitles).toHaveLength(2);
        expect(accountTypeTitles[0]).toHaveTextContent("12.345.678/0001-23");
        expect(accountTypeTitles[1]).toHaveTextContent("98.765.432/0001-98");
    });

    it("calls stepForward when clicking on the next button for a tenant", () => {
        renderComponent();

        const nextButtons = screen.getAllByTestId("nextButton");
        fireEvent.click(nextButtons[0]);

        expect(mockStepForward).toHaveBeenCalled();
    });

    it("calls stepBack when Back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockStepBack).toHaveBeenCalled();
    });
});