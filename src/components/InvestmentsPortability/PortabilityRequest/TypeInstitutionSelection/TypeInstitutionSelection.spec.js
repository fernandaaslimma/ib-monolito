import React from "react";
import { render, screen, fireEvent, configure } from "@testing-library/react";
import TypeInstitutionSelection from "./TypeInstitutionSelection";
import { InstanceContext } from "../portabilityRequestContext";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false
}));

describe("TypeInstitutionSelection Component", () => {
    const mockStepForward = jest.fn();
    const mockSetSelectedInstitutions = jest.fn();
    const mockGetInstitutions = jest.fn();
    const mockGetPositions = jest.fn();
    const mockSetIsOriginBocom = jest.fn();
    const mockIsOriginBocom = jest.fn();
    const mockGoToStep = jest.fn();

    const mockContextValue = {
        loading: false,
        getInstitutions: mockGetInstitutions,
        getPositions: mockGetPositions,
        setSelectedInstitutions: mockSetSelectedInstitutions,
        setIsOriginBocom: mockSetIsOriginBocom,
        isOriginBocom: mockIsOriginBocom,
        institutions: [
            {
                id: 5,
                documentNumber: "40374465000127",
                name: ""
            },
            {
                id: 7,
                documentNumber: "15213150000150",
                name: "Bacor Investimentos"
            },
            {
                id: 6,
                documentNumber: "15114366000169",
                name: "Banco Bocom BBM"
            },
            {
                id: 2,
                documentNumber: "01209668000106",
                name: "Instituição Teste 1"
            },
            {
                id: 3,
                documentNumber: "30027901000138",
                name: "Instituição Teste 2"
            }
        ],
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
        }
    };

    const renderComponent = (props = {}) =>
        render(
            <InstanceContext.Provider value={mockContextValue}>
                <TypeInstitutionSelection goToStep={mockGoToStep} stepForward={mockStepForward} currentStep={1} {...props} />
            </InstanceContext.Provider>
        );

    it("renders shimmer loading when loading is true", () => {
        render(
            <InstanceContext.Provider value={{ ...mockContextValue, loading: true }}>
                <TypeInstitutionSelection stepForward={mockStepForward} currentStep={1} />
            </InstanceContext.Provider>
        );
        expect(screen.getByTestId("shimmer-loading")).toBeInTheDocument();
    });

    it("renders dropdowns and text when loading is false", () => {
        renderComponent();

        expect(screen.getByTestId("PortabilityTypeTitle")).toBeInTheDocument();
        expect(screen.getByTestId("PortabilityTypeDescription")).toBeInTheDocument();
        expect(screen.getByTestId("PortabilityInstitutionTitle")).toBeInTheDocument();
        expect(screen.getByTestId("PortabilityInstitutionDescription")).toBeInTheDocument();
    });

    it("calls getInstitutions when currentStep is 1", () => {
        renderComponent();
        expect(mockGetInstitutions).toHaveBeenCalled();
    });

    it("enables Continue button when conditions are met", () => {
        renderComponent();

        const continueButton = screen.getByTestId("ContinueButton");
        expect(continueButton).toBeDisabled();

        const institutionDropdown = screen.getByTestId("DropDownSelectInstitution");
        fireEvent.click(institutionDropdown);

        const institutionDropdownOption1 = screen.getByText("40.374.465/0001-27");
        fireEvent.click(institutionDropdownOption1);
        expect(continueButton).toBeEnabled();

    });

    it("calls stepForward and setSelectedInstitutions when Continue button is clicked", () => {
        renderComponent();

        const continueButton = screen.getByTestId("ContinueButton");
        expect(continueButton).toBeDisabled();

        const institutionDropdown = screen.getByTestId("DropDownSelectInstitution");
        fireEvent.click(institutionDropdown);

        const institutionDropdownOption1 = screen.getByText("40.374.465/0001-27");
        fireEvent.click(institutionDropdownOption1);

        fireEvent.click(continueButton);

        expect(mockSetSelectedInstitutions).toHaveBeenCalledWith({
            originInstitution: {
                name: "Bocom BBM S.A"
            },
            destinationInstitution: {
                id: 5,
                documentNumber: "40374465000127",
                name: ""
            },
        });

        expect(mockGoToStep).toHaveBeenCalled();
    });

    it("disables Continue button when conditions are not met", () => {
        renderComponent();

        const continueButton = screen.getByTestId("ContinueButton");
        expect(continueButton).toBeDisabled();
    });

    it("calls window.history.back when Back button is clicked", () => {
        const mockBack = jest.spyOn(window.history, "back").mockImplementation(() => { });
        renderComponent();

        const backButton = screen.getByTestId("BackButton");
        fireEvent.click(backButton);

        expect(mockBack).toHaveBeenCalled();
        mockBack.mockRestore();
    });
});